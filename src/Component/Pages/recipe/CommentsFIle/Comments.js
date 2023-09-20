import React from 'react'
import { NavLink } from 'react-router-dom';
import './comment.css'

const Comments = () => {
    const comments=[
        {
            comment:
              "The salt amount doesn’t make sense to me. 8 grams is salt is about 4 teaspoons.",
            user: "paultepperb",
            recipeName:"Roberta's Pizza Dough",
            time: "44 minutes",
          },
          {
            comment: "Best recipe i have ever seen which brings a lot of happiness",
            user: "lazyme",
            recipeName:"Island French Dressing",
            time: "20 minutes",
          },
          {
            comment:
              "Should always stick with directions,I tried to modify the fruit by making it a cup of pineapple and strawberries,and then added about 3/4 -1 cup more flour, just couldn't get the dough to firm up during the process",
            user: "LIL U.",
            recipeName:"Pineapple Bread ( for Bread Machine)",
            time: "5 Hours",
          },
    ]
  return (
    <div>
       <div className="comments-container">
          <div className="comments-section-title">
            <h2>FRESH FROM OUR COMMUNITY</h2>
            <NavLink>View All</NavLink>
          </div>
          <div className="comments-wrapper">
            {comments
              ? comments.map((item, index) => {
                  return (
                    <div className="comments-card" key={index}>
                      <div className="user-name">
                        <img src="https://geniuskitchen.sndimg.com/gk/img/avatar/burger.png"  alt="icon" />
                        <div>
                          {" "}
                          <span className="user">{item.user}</span>
                          <span className="commented-txt"> commented on _</span>
                           <span className="recipeName">{item.recipeName}</span>
                        </div>
                      </div>
                      <div className="comments-txt">{item.comment}</div>
                      <div className="comment-time">
                        <p>{item.time} ago </p>
                      </div>
                    </div>
                  );
                })
              : "No Comments"}
          </div>
        </div>
    </div>
  )
}

export default Comments
