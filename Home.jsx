import { Link } from 'react-router-dom';

function Home() {

  const posts = [
    {
      id: 1,
      title: "React Introduction",
      content: "React is a JavaScript library"
    }
  ];

  return (
    <>
      <h1>📖 Mini Blog - Home</h1>
      <p>Select a blog post to view the full article</p>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "12px",
            background: "linear-gradient(to right, #4facfe, #00f2fe)"
          }}
        >
          <h2
            style={{
              margin: "0 0 10px 0",
              color: "#1a3d6c"
            }}
          >
            {post.title}
          </h2>

          <Link to={`/post/${post.id}`}>Read More</Link>
        </div>
      ))}
    </>
  );
}

export default Home;
