import { useParams, Link } from "react-router-dom";

function Post() {
  const { id } = useParams();

  const posts = [
    {
      id: 1,
      title: "React Introduction",
      content: "React is a JavaScript library"
    }
  ];

  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <h2 style={{ padding: 20, fontFamily: "Arial" }}>
        Post Not Found
      </h2>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <Link to="/">⬅ Back to Home</Link>

      <div>
        <h1 style={{ marginTop: 20, color: "#8a5400" }}>
          {post.title}
        </h1>
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default Post;
