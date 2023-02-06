import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { Box } from "@mui/material";
import Warden from "./Pages/Warden";
import AddBuilding from "./Pages/AddBuilding";
import Building from "./Pages/Building";
import Student from "./Pages/Student";
import Staff from "./Pages/StaffDetail";
import Floor from "./Pages/Floor";
import AddFloor from "./Pages/AddFloors";
import AddRooms from "./Pages/AddRooms";
import Room from "./Pages/Room";
import Menu from "./Pages/Menu";
import UpdateMenu from "./Pages/UpdateMenu";
import Complaint from './Complaint'
import Allocate from './Allocate'
import DeAllocate from './DeAllocate'
// import Chat from "./Pages/Chat/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/warden",
    element: <Warden />,
  },
  {
    path: "/addbuilding",
    element: <AddBuilding />,
  },
  {
    path: "/building",
    element: <Building />,
  },
  {
    path: "/student",
    element: <Student />,
  },
  {
    path: "/staff",
    element: <Staff />,
  },
  {
    path: "/floor",
    element: <Floor />,
  },
  {
    path: "/addfloor",
    element: <AddFloor />,
  },
  {
    path: "/addrooms",
    element: <AddRooms />,
  },
  {
    path: "/room",
    element: <Room />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/update-menu",
    element: <UpdateMenu />,
  }, {
	  path:"/complaint", 
	  element:<Complaint/>
  }
, {
	  path:"/allocate", 
	  element:<Allocate/>
  }
, {
	  path:"/deallocate", 
	  element:<DeAllocate/>
  }

]);

function App() {
  return (
    <Box overflow="hidden">
      <RouterProvider router={router}></RouterProvider>
    </Box>
  );
}

export default App;
