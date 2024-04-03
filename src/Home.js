import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]); // blog useState should initially be null so as to allow fetching

  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
      fetch('blogs') // use your api end point instead
      .then(res => {
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setBlogs(data);
      })
  }, [])
  return <div className="home">
     { isPending && <div>Loading...</div> }
     {blogs && <BlogList blogs={blogs} />}
  </div>;
};

export default Home;
