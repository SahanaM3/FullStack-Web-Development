import React, { useState } from "react";

function Blog() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const addComment = () => {
    if (name.trim() && text.trim()) {
      const newComment = {
        id: Date.now(),
        name,
        text,
        time: new Date().toLocaleTimeString(),
      };
      setComments([newComment, ...comments]); // real-time update
      setName("");
      setText("");
    }
  };

  return (
    <div style={styles.container}>
      {/* Blog Content */}
      <div style={styles.blogCard}>
        <h1>📘 Responsive Blog Layout</h1>
        <p style={styles.meta}>Posted on Dec 25 · 5 min read</p>
        <p>
          This blog demonstrates a responsive layout with a real-time comment
          update feature using React. Comments appear instantly without page
          refresh, simulating live interaction.
        </p>
      </div>

      {/* Comment Section */}
      <div style={styles.commentCard}>
        <h3>💬 Live Comments</h3>

        <input
          style={styles.input}
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button style={styles.button} onClick={addComment}>
          Post Comment
        </button>

        <div style={styles.commentList}>
          {comments.length === 0 && (
            <p style={{ color: "#777" }}>No comments yet</p>
          )}

          {comments.map((c) => (
            <div key={c.id} style={styles.comment}>
              <strong>{c.name}</strong>
              <span style={styles.time}>{c.time}</span>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial",
  },
  blogCard: {
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  meta: {
    color: "#888",
    fontSize: "14px",
  },
  commentCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    minHeight: "80px",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    background: "#007BFF",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
  commentList: {
    marginTop: "20px",
  },
  comment: {
    borderBottom: "1px solid #ddd",
    paddingBottom: "10px",
    marginBottom: "10px",
  },
  time: {
    fontSize: "12px",
    color: "#888",
    marginLeft: "10px",
  },
};

export default Blog;
