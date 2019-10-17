import React from "react"
import { Link } from 'react-router-dom'

const labels = {
  mainTitle: "Sayer",
  newItemTitle: "Create new item",
  commentsTitle: "First item with customized long title",
  mainSubTitle: "World's most used time waster"
}

const headerContent = (page)=>{
  let content = ''
  switch(page){
    case 'comments':
      content = 
          <h5>{labels.commentsTitle}</h5>
      break;
    case 'newitem':
      content = 
          <h5>{labels.newItemTitle}</h5>
      break;
    default:
      content = 
        <>
          <h4>{labels.mainTitle}</h4>
          <p>{labels.mainSubTitle}</p>
        </>
      break;
  }
  return content;
}



const Header = ({ page="" }) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className={`container ${page}`}>
        {
          page !== "main" &&
          <Link to='/' className="brand-logo">&larr;</Link>
        }
        {headerContent(page)}
      </div>
    </nav>
  )
}

export default Header