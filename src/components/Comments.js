import React, { useEffect, useState, Fragment } from 'react';
import Header from './Header';

const Comments = () => {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState({});

  useEffect(() => {
    const comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
    setComments(comments);
  }, [])

  const handleSubmit = () => {
    const items = [...comments, comment];
    localStorage.setItem("comments", JSON.stringify(items));
  }

  const commentsList = comments.map((comment, index) => {
    return (
      <Fragment key={index}>
        {localStorage.commentID === comment.commentID &&
          <div className="card horizontal" author={comment.commentID}>{comment.text}</div>
        }
      </Fragment>
    )
  })

  return (
    <>
      <Header page='comments'/>
      <div className='comments'>
        {commentsList}
        <div className="commentsForm">
          <form onSubmit={handleSubmit}>
            <input
              id="commentInput"
              onChange={e => setComment({
                text: e.target.value,
                key: Date.now(),
                commentID: localStorage.commentID
              })
              }
              placeholder="New comment goes here..."
            >
            </input>
            <button id="commentButton" type="submit">></button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Comments;