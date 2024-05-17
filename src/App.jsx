
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
import Registration from "../pages/Registration";
import CategoryStatus from "../pages/CategoryStatus/CategoryStatus";
import AddCategory from "../pages/AddCategory";
import AllCategory from "../pages/AllCategory";
import AddSubCategory from "../pages/AddSubCategory";
import AllSubCategory from "../pages/AllSubCategory";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route>
        <Route
        path="/"
        element={<Home/>}>
           <Route path="/addproduct"
          element = {<AddProduct/>} />
            <Route path="/allproduct"
          element = {<AllProduct/>} /> 
          <Route
          path="/allvariant"
          element = {<AllVariant/>}/>
          <Route
          path="/categorystatus"
          element = {<CategoryStatus/>}/>
          <Route
          path="/addcategory"
          element = {<AddCategory/>}/>
          <Route
          path="/allcategory"
          element = {<AllCategory/>}/>
           <Route
          path="/addsubcategory"
          element = {<AddSubCategory/>}/><Route
          path="/allsubcategory"
          element = {<AllSubCategory/>}/>
      </Route>
        
         
          <Route path="*"
          element = {<Error/>} /> 
            <Route path="registration"
          element = {<Registration/>} /> 
          <Route path="/login"
          element = {<Login/>} />
    </Route>
    )
  );
  return (
    <RouterProvider router={router}/>
    )
      
}

export default App
