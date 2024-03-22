
import Home from "../pages/Home"
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "../pages/Login";
import Error from "../pages/Error";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route>
        <Route
        path="/"
        element={<Home/>}>
             <Route path="/login"
          element = {<Login/>} /> 
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
