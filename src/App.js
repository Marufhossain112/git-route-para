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
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Posts from "./components/Posts/Posts";

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
        {
          path: "/friends",
          loader: async () => {
            return fetch(`https://jsonplaceholder.typicode.com/users`);
          },
          element: <Friends></Friends>,
        },
        {
          path: "/friends/:friendId",
          element: <FriendDetails></FriendDetails>,
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendId}`
            );
          },
        },
        {
          path: "posts",
          loader: () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },
          element: <Posts></Posts>,
        },
      ],
    },
    { path: "/about2", element: <About2></About2> },
    // { path: "*", element: "Sorry, You are in the wrong way...." },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
