function Card({ blog }) {
  return (
    <div id={blog.id} className="card m-1 p-1 " style={{ width: "18rem" }}>
      <img
        src="https://source.unsplash.com/random/?programming,tech"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          minima error aut ut animi. Beatae ut qui iusto dolorem corporis.
        </p>
        <a href={blog.url} className="btn btn-primary ">
          Read More
        </a>
      </div>
    </div>
  );
}

export default Card;
