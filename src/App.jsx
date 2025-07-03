import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    < Route path="/" element={<Home />}> </Route>
    < Route path="/shop" element={<Shop />}> </Route>
   </>
  
  )
);

const app = () => {
  return (
     <RouterProvider router={router} />
  )
}

export default app