import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs}) => {

   
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <Link to={'/blog/' + blog.id}>
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
