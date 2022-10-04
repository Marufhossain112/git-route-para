// bla
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Default from "./components/Default/Default";
import About2 from "./components/About2/About2";
import Home2 from "./components/Home2/Home2";
import Main from "./Layout/Main";
import Friends from "./components/Friends/Friends";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/home2", element: <Home2></Home2> },
        { path: "/about", element: <About></About> },
        { path: "/friends", element: <Friends></Friends> },
      ],
    },
    { path: "/about2", element: <About2></About2> },
    { path: "*", element: "Sorry, You are in the wrong way...." },

  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
