import React ,{useState}from 'react'

const Comment = () => {
    const [comment, setComment] = useState("");

    function handleCommentChange(event) {
      setComment(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
  
     
      if (localStorage.getItem("comments") === null) {
        var comments = [];
      } else {
        var comments = JSON.parse(localStorage.getItem("comments"));
      }
      comments.push(comment);
      localStorage.setItem("comments", JSON.stringify(comments));
  
      
      setComment("");
    }
  return (
    <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Comment Us:</label>
    <textarea class="form-control" id="exampleFormControlTextarea1"  placeholder="write your comment here....."rows="3"value={comment}
          onChange={handleCommentChange}></textarea>
    <button className='btn2'onClick={handleSubmit}>Submit</button>
  </div>
  )
}

export default Comment;
