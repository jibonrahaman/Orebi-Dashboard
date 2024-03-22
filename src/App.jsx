import Home from "../pages/Home"
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Home/>}
      >       
      </Route>
    )
  );
  return (
    <RouterProvider router={router}/>
    )
      
}

export default App
