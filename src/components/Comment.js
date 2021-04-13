const Comment = ({ key, text, author }) => {
  return (
    <div className="rounded bg-gray-100 p-3">
      <p className="pb-5">{text}</p>
      <div className="flex justify-end items-center">
        <span className="font-bold mr-2">By:</span> {author}
      </div>
    </div>
  );
};

export default Comment;
