import React, { useEffect, useState } from "react";
import PostCard from "../components/cards/PostCard";
import Loading from "../components/ui/Loading.js";

const Posts = () => {
  const [state, setState] = useState({
    posts: [],
    loading: true,
  });
  useEffect(() => {
    (async () => {
      const posts = await (
        await fetch("https://jsonplaceholder.typicode.com/posts")
      ).json();
      setState({ posts, loading: false });
    })();
  }, []);
  if (state.loading) return <Loading />;
  return (
    <div className="container">
      <h1>Posts</h1>
      <div className="posts">
        {state.posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
