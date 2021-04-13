import Comment from './Comment';
import NewComment from './NewComment';

const Comments = ({ postID, comments, showComments, fetchAllComment }) => {
  const cardStyle = {
    visibility: showComments ? 'hidden' : 'visible',
    maxHeight: showComments ? '0' : '100%',
    opacity: showComments ? 0 : 1,
    transition: 'all 0.5s ease-in-out',
  };

  return (
    <div style={cardStyle} className="bg-gray-200 p-5  rounded shadow ">
      <h3 className="font-bold">Comments:</h3>
      {comments &&
        comments.map((comment) => {
          return (
            <Comment
              key={comment._id}
              text={comment.text}
              author={comment.author}
            />
          );
        })}
      <NewComment postID={postID} fetchAllComment={fetchAllComment} />
    </div>
  );
};

export default Comments;
