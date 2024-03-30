
import Home from "../pages/Home"
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "../pages/Login";
import Error from "../pages/Error";
import AddProduct from "../pages/AddProduct";
import AllProduct from "../pages/AllProduct";
import AllVariant from "../pages/AllVariant";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route>
        <Route
        path="/"
        element={<Home/>}>
             <Route path="/login"
          element = {<Login/>} />
           <Route path="/addproduct"
          element = {<AddProduct/>} />
            <Route path="/allproduct"
          element = {<AllProduct/>} /> 
          <Route
          path="/allvariant"
          element = {<AllVariant/>}/>
      </Route>
        
         
          <Route path="*"
          element = {<Error/>} /> 
    </Route>
    )
  );
  return (
    <RouterProvider router={router}/>
    )
      
}

export default App
