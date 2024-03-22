
import Home from "../pages/Home"
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "../pages/Login";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route>
        <Route
        path="/"
        element={<Home/>}>
            
      </Route>
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
