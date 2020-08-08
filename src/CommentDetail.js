import React from 'react'

const CommentDetail=(props)=>{
  console.log(props)
  return(
    <div class="comment">
    <a class="avatar">
      <img src={props.avatar}/>
    </a>
    <div class="content">
      <a class="author">{props.author}</a>
      <div class="metadata">
        <div class="date">{props.time}</div>
        <div class="rating">
          <i class="star icon"></i>
          {props.star}
        </div>
      </div>
      <div class="text">
        {props.text}
      </div>
    </div>
  </div>
  );
};

export default CommentDetail;