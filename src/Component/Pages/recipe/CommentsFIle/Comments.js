// import React, { useRef, useState } from 'react'
// import { BsEmojiSmileFill } from 'react-icons/bs'
// import './comment.css'

// const Comments = () => {

//     const comment = useRef(null);
//     const [count,setCount]=useState(0)
//     const [commentValue, setCommentValue] = useState("")
//     const [sendComment, setSendComment] = useState("");

//     const handleSubmit =async (e) => {
//         e.preventDefault();
//         const value = comment.current.value.trim();
//         setSendComment(value);

//         if(!value){
//           return ;
//         }else{
//           setCount(count+1)
//        axios.post(`http://localhost:7070/usercomment/comment`,{
//         comment:value,
//       user_id,
//       recipe:recipes[0].recipe,
//       recipeName: recipes[0].recipe.label
//     })
//         setCommentValue("")
//     }
//       };

//   return (
//     <div>
//       <div className="comments_cntr">
//                 <h2 className="detail_commets_head">COMMENTS</h2>

//                 <div className="comments_input_line">
//                   <div className="detailed_smile-emoji">
//                     <BsEmojiSmileFill />
//                     {/* <LuSmile/> */}
//                   </div>
//                   <input
//                     type="text"
//                     onChange={(e) => setCommentValue(e.target.value)}
//                     ref={comment}
//                      value={commentValue}
//                     placeholder="write your comment here..."
//                   />
//                   {loggedIn ?
//                   (
//                     <button
//                       onClick={handleSubmit}
//                       className="comments_submit comment_btn"
//                     >
//                       SUBMIT
//                     </button>
//                   )
//                  : (
//                     <button
//                       className="comments_signup comment_btn"
//                       onClick={showSignupForm}
//                     >
//                       SIGN IN
//                     </button>
//                   )}
//                 </div>
//               </div>
//     </div>
//   )
// }

// export default Comments
