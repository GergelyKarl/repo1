import React, { useState, useEffect } from "react";
import "./Feed.css";
import StroryReel from "./StroryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StroryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          username={post.data.username}
          image={post.data.image}
          message={post.data.message}
          timestamp={post.data.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
