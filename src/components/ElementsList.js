import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const ElementsList = () => {
  const [elements, setElements] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const itemsList = localStorage.getItem('elements') ? JSON.parse(localStorage.getItem('elements')) : [];
    setElements(itemsList);
  }, [])

  useEffect(() => {
    const commentList = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
    setComments(commentList);
  }, [])

  const clickComment = (e) => {
    localStorage.setItem("page", "comments");
    localStorage.setItem("commentID", e.target.id);
  }
  const addItemClick = (e) => {
    localStorage.setItem("page", e.target.id)
  }

  const deleteElement = (e) => {
    let element = e.target.parentNode.firstChild;
    let parentElement = e.target.parentNode;
    let items = elements;
    items.forEach((item) => {
      if (+element.id === item.key) {
        items.splice(item, 1)
      }
    })
    setElements(items);
    localStorage.setItem("elements", JSON.stringify(items))
    parentElement.remove();
  }

  const elementsList = elements.map((item, index) => {
    const commentsList = comments.filter(comment => +comment.commentID === item.key)
    return (
      <div key={index} className="createdElements">
        <Link to='/comments' className="collection-item" onClick={clickComment} id={item.key}>
          {item.text}
          <div className="commentsCount">{commentsList.length}</div>
        </Link>
        <div className="btn delete waves-effect waves-light" onClick={deleteElement}>&#128465;
        </div>
      </div>
    )
  })
  return (
    <>
    <Header page='main'/>
    <div>
      <div id="elementsList" className="collection">{elementsList}</div>
      <Link to='/newitem' className="btn-floating btn-large scale-transition" id='newitem' onClick={addItemClick}>+</Link>
    </div>
    </>
  )
}

export default ElementsList;