

function Comments({comments}) {
    return (
      <div>
{comments.map((comment)=>(
    <div>
        {comment.name}
        {comment.comment}
        {comment.date}
        </div>
)

)}
        
      </div>
    );
  }
  
  export default Comments;