import { useEffect, useState } from "react";
import Card from "../components/Card";
import blogs from "../data/blogs.json";

function Articles() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(blogs);
  }, []);
  return (
    <>
      <h1 className="text-center">Articles</h1>
      <div className="container d-flex flex-wrap justify-content-center">
        {items ? (
          blogs.map((blog) => {
            return <Card key={blog.id} blog={blog}></Card>;
          })
        ) : (
          <h3> No Articles to Display</h3>
        )}
      </div>
    </>
  );
}

export default Articles;
