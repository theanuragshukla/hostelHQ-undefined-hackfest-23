const db = require("./config/database");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET_KEY;
const generateUid = () => {
  var pass = "";
  var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (i = 1; i <= 16; i++) {
    var char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  return pass;
};

const addWarden = async ({ name, email, pass }) => {
  const query = `
	INSERT INTO wardens (name,email,pass, uid) 
	VALUES($1,$2,$3,$4)
	RETURNING *;
	`;
  var passhash;
  await bcrypt.hash(pass, saltRounds).then(function (hash) {
    passhash = hash;
  });
  const uid = generateUid();
  const values = [name, email, passhash, uid];

  const { rows } = await db.query(query, values);

  return rows;
};

const addStudent = async ({ name, email, pass, institute, phone }) => {
  const query = `
	INSERT INTO students (name,email,pass, uid, phone , institute) 
	VALUES($1,$2,$3,$4, $5, $6)
	RETURNING *;
	`;
  var passhash;
  await bcrypt.hash(pass, saltRounds).then(function (hash) {
    passhash = hash;
  });
  const uid = generateUid();
  const values = [name, email, passhash, uid, phone, institute];

  const { rows } = await db.query(query, values);

  return rows;
};

const addStaff = async ({ name, email, pass, phone }) => {
  const query = `
	INSERT INTO staffs (name,email,pass, uid, phone) 
	VALUES($1,$2,$3,$4, $5)
	RETURNING *;
	`;
  var passhash;
  await bcrypt.hash(pass, saltRounds).then(function (hash) {
    passhash = hash;
  });
  const uid = generateUid();
  const values = [name, email, passhash, uid, phone];

  const { rows } = await db.query(query, values);

  return rows;
};

const addBuilding = async ({ name, floors, warden }) => {
  const query = `
	INSERT INTO buildings (name, floors, warden, uid) 
	VALUES($1,$2,$3,$4)
	RETURNING *;
	`;
  const uid = generateUid();
  const values = [name, floors, warden, uid];

  const { rows } = await db.query(query, values);
  console.log(rows);
  return rows;
};

const addFloor = async ({ building, rooms, number }) => {
  const query = `
	INSERT INTO floors (building, rooms, number,  uid) 
	VALUES($1,$2,$3,$4)
	RETURNING *;
	`;
  const uid = generateUid();
  const values = [building, rooms, number, uid];

  const { rows } = await db.query(query, values);

  return rows;
};

const addRoom = async ({ number, floor, building }) => {
  const query = `
	INSERT INTO rooms (number, floor, uid, building) 
	VALUES($1,$2,$3, $4)
	RETURNING *;
	`;
  const uid = generateUid();
  const values = [number, floor, uid, building];

  const { rows } = await db.query(query, values);

  return rows;
};

const allocate = async ({ room, to }) => {
  const query = `
	INSERT INTO allotmemts (room, to) 
	VALUES($1,$2)
	RETURNING *;
	`;
  const values = [room, to];
  const { rows } = await db.query(query, values);
  if (rows.length != 0) {
    const updateQuery = `
		UPDATE rooms
		SET free = FALSE
		WHERE id = $1 RETURNING *;
		`;
    const updatedRoom = await db.query(updateQuery, [room]);
    return updatedRoom;
  } else {
    return rows;
  }
};

const deAllocate = async (room) => {
  const query = `
	DELETE FROM allotments WHERE
	room = $1
	RETURNING *;
	`;
  const values = [room];
  const { rows } = await db.query(query, values);
  const roomquery = `
	SELECT * FROM allotments WHERE room = $1;
	`;
  const alloted = await db.query(roomquery, [room]);
  if (alloted.rows.length == 0) {
    const updateQuery = `
		UPDATE rooms
		SET free = TRUE
		WHERE id = $1 RETURNING *;
		`;
    const updatedRoom = await db.query(updateQuery, [room]);
    return updatedRoom;
  } else {
    return rows;
  }
};

const getallBuildings = async (warden) => {
  const query = ` SELECT * FROM buildings WHERE warden = $1;`;
  const { rows } = await db.query(query, [warden]);
  return rows;
};

const getallFloors = async (building) => {
  const query = ` SELECT * FROM floors WHERE building = $1;`;
  const { rows } = await db.query(query, [building]);
  return rows;
};

const getallRooms = async (floor) => {
  const query = ` SELECT * FROM roooms WHERE floor = $1;`;
  const { rows } = await db.query(query, [floor]);
  return rows;
};

const getallRoomsInBuilding = async (building) => {
  const query = ` SELECT * FROM rooms WHERE building = $1;`;
  const { rooms } = await db.query(query, [building]);
  return rooms;
};

module.exports = {
  addRoom,
  addFloor,
  addBuilding,
  addStaff,
  addWarden,
  addStudent,
  allocate,
  deAllocate,
  getallRooms,
  getallFloors,
  getallBuildings,
  getallRoomsInBuilding,
};
