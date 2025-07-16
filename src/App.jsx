import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
 } from "react-router-dom";
 import Home from "./pages/Home";
 import Shop from "./pages/Shop";
 import About from "./pages/About";
 import Contacts from "./pages/Contacts";
 

 const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route path="/" element={<Home />}></Route>
    < Route path="/shop" element={<Shop />}> </Route>
    < Route path="/About" element={<About />}> </Route>
    < Route path="/Contacts" element={<Contacts />}> </Route>
     
   </>
  
  )
);

const app = () => {
  return (
     <RouterProvider router={router} />
  )
}

export default app