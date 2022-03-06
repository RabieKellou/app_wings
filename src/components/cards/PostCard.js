const PostCard = ({ post }) => {
  return (
    <div className="post">
      <h3 className="post__title">{post.title}</h3>
      <p className="post__para">{post.body}</p>
    </div>
  );
};

export default PostCard;
