require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 5000;
const http = require("http").Server(app);
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET_KEY;
const cors = require("cors");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

const db = require("./dbFunc");

const database = require("./config/database");

if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https")
      res.redirect(`https://${req.header("host")}${req.url}`);
    else next();
  });
}
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const resolveToken = async (req, res, next) => {
  const url = req.originalUrl.split("?")[0];
  if (1 == 2) {
    next();
  } else {
    const token = req.cookies.token;
    const authData = await verifyToken(token);
    if (!authData.result) {
      if (req.method == "GET") {
        res.redirect(`http://${req.header("host")}/login`);
      } else {
        res.status(401).json({ status: false, msg: "unauthorised access" });
      }
      return;
    } else {
      req.usrProf = authData.data;
      next();
    }
  }
};

app.get("/", (req, res) => {
  res.end("Alive");
});

app.post("/add-new-user", async (req, res) => {
  const { email, pass, name, role } = req.body;
  const table = role === 0 ? "wardens" : role === 1 ? "students" : "staffs";
  const emailquery = `
	SELECT * FROM ${table} WHERE email = $1;
	`;
  const emailvalues = [email];
  const dupEmail = await database.query(emailquery, emailvalues);
  if (dupEmail.rows.length != 0) {
    res.send({ status: false, email: true, result: "email exists" });
    return;
  }
  let rows;
  if (role === 0) {
    rows = await db.addWarden({ name, email, pass });
  } else if (role === 1) {
    rows = await db.addStudent(req.body);
  } else if (role === 2) {
    rows = await db.addStaff(req.body);
  }

  const uid = rows[0].uid;
  const token = jwt.sign({ data: uid, role: role }, secret, {
    expiresIn: "7d",
  });
  const expiryDate = new Date(Number(new Date()) + 7 * 24 * 3600000);
  res.setHeader(
    "Set-Cookie",
    `token=${token};expires=${expiryDate}; Path=/;HttpOnly`
  );
  res.status(200).json({ status: true, token: token });
});

/* Login Endpoint */

app.post("/let-me-in", async (req, res) => {
  console.log(req.body);
  const { email, pass, role } = req.body;
  const table = role === 0 ? "wardens" : role === 1 ? "students" : "staffs";
  const query = `
	SELECT * FROM ${table} WHERE email = $1;
	`;
  const values = [email];
  const { rows } = await database.query(query, values);
  if (rows.length == 0) {
    res.send({ status: false, result: "wrong email or password" });
  } else {
    const match = await bcrypt.compare(pass, rows[0].pass);
    if (match) {
      const token = jwt.sign(
        {
          data: rows[0].uid,
          role: role,
        },
        secret,
        { expiresIn: "7d" }
      );
      var expiryDate = new Date(Number(new Date()) + 7 * 24 * 3600000);
      res.setHeader(
        "Set-Cookie",
        `token=${token};expires=${expiryDate}; Path=/;HttpOnly`
      );

      res.status(200).json({ status: true, token: token });
    } else {
      res.send({ status: false, result: "wrong email or password" });
    }
  }
});

app.get("/checkAuth", async (req, res) => {
  const token = req.cookies.token;
  const role = req.query.role;
  console.log(token);
  const authData = await verifyToken(token, role);
  res.status(200).json({
    result: authData.result,
    data: authData.result
      ? {
          name: authData.data.name,
          email: authData.data.email,
        }
      : {},
  });
});

app.use(resolveToken);

app.get("/getWardenData", (req, res) => {
  const uid = req.usrProf.uid;
});

app.post("/add-building", async (req, res) => {
  const { name, floors } = req.body;
  const { rows } = await db.addBuilding({
    name,
    floors,
    warden: req.usrProf.uid,
  });
  res.status(200).json(rows);
});

app.post("/add-floor", async (req, res) => {
  const { building, number, rooms } = req.body;
  const { rows } = await db.addFloor({ building, number, rooms });
  res.status(200).json(rows);
});

app.get("/get-buildings", async (req, res) => {
  const warden = req.usrProf.uid;
  console.log(req.usrProf);
  const rows = await db.getallBuildings(warden);
  res.json(rows);
});

app.get("/get-floors", async (req, res) => {
  const bid = req.query.bid;
  const rows = await db.getallFloors(bid);
  res.json(rows);
});

app.post("/add-building", async (req, res) => {
  const { name, floors } = req.body;
  const uid = req.usrProf.uid;
  const rows = await db.addBuilding({ name, floors, warden: uid });
  res.status(200).json(rows);
});

app.post("/add-floor", async (req, res) => {
  const { number, rooms } = req.body;
  const bid = req.query.bid;
  const rows = await db.addFloor({ building: bid, number, rooms });
  res.status(200).json(rows);
});

const server = http.listen(port, () => {
  console.log(`running on port ${port}`);
});

async function verifyToken(authToken, role = 0) {
  try {
    const payload = jwt.verify(authToken, secret);
    role = payload.role;
    const table = role == 0 ? "wardens" : role == 1 ? "students" : "staffs";
    const query = `SELECT * FROM ${table} WHERE uid = $1;`;
    const values = [payload.data];
    const { rows } = await database.query(query, values);
    if (rows.length == 0) {
      return { result: false };
    } else {
      return { result: true, data: rows[0], uid: payload.data };
    }
  } catch (e) {
    return { result: false };
  }
}
