import { useState, useEffect } from "react";

export default function Community({ onTopStoryUpdate }) {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("communityPosts")) || [];
    setPosts(storedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem("communityPosts", JSON.stringify(posts));
  }, [posts]);

  const handlePostSubmit = () => {
    if (!newPost.trim()) return;
    const newEntry = {
      id: Date.now(),
      text: newPost,
      likes: 0,
    };
    setPosts([newEntry, ...posts]);
    setNewPost("");
  };

  const handleLike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );

    setPosts(updatedPosts);

    const topStory = updatedPosts.reduce((max, post) =>
      post.likes > max.likes ? post : max, { likes: -1 });

    if (topStory.likes > 0) {
      localStorage.setItem("topStory", JSON.stringify(topStory));
    }
  };

  return (
    <div className="community-container">
      <h2>Community</h2>
      <div className="post-box">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your story..."
        />
        <button onClick={handlePostSubmit}>Post</button>
      </div>

      <h3>All Posts</h3>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <p>{post.text}</p>
            <button onClick={() => handleLike(post.id)}>❤️ {post.likes}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
