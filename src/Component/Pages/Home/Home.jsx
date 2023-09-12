import React from 'react'
import './home.css'
import Craving from '../Subpages/Craving'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='Home-page'>
      <div className='image56'>
      </div>
      <div className='addvertise'>Advertisement</div>
      <div className='comments-section'>
        <div className='heading-btn'>
        <div className='comments-heading'>Fresh from our community</div>
        <NavLink to="/comments" className="allcmt-btn">View All</NavLink>
        </div>
        <div className='comments'>
          <div className="user-review">
            <span className="user-content">
              <img
                src="https://geniuskitchen.sndimg.com/gk/img/avatar/burger.png"
                alt="img"
                className="user-icon "
              />
              <p className="text-user">
                <span className="username">User-name </span>
                reviewed
                <span className="username text-recipe"> 
                   {" "}Crock Pot Boston Baked Beans
                </span>
              </p>
            </span>
            <br/>
            <p className="text-comment">So this is my first try at cinnamon raisin bread and the only step I missed is brushing with oil/crisco I before baking. Also I split one loaf separate before I added raisins because I have coworkers who hate raisins (I love them!) I haven’t</p>

            <h3 className="time-cook">5 Hour Ago</h3>
            <h3 className="comment-reply">Reply</h3>

          </div> <div className="user-review">
            <span className="user-content">
              <img
                src="https://geniuskitchen.sndimg.com/gk/img/avatar/burger.png"
                alt="img"
                className="user-icon "
              />

              <p className="text-user">
                <span className="username">User-name </span>
                reviewed
                <span className="username text-recipe"> 
                   {" "}Crock Pot Boston Baked Beans
                </span>
              </p>
            </span>
            <br/>
            <p className="text-comment">So this is my first try at cinnamon raisin bread and the only step I missed is brushing with oil/crisco I before baking. Also I split one loaf separate before I added raisins because I have coworkers who hate raisins (I love them!) I haven’t</p>

            <h3 className="time-cook">5 Hour Ago</h3>
            <h3 className="comment-reply">Reply</h3>

          </div>
          <div className="user-review">
            <span className="user-content">
              <img
                src="https://geniuskitchen.sndimg.com/gk/img/avatar/burger.png"
                alt="img"
                className="user-icon "
              />

              <p className="text-user">
                <span className="username">User-name </span>
                reviewed
                <span className="username text-recipe"> 
                   {" "}Crock Pot Boston Baked Beans
                </span>
              </p>
            </span>
            <br/>
            <p className="text-comment">So this is my first try at cinnamon raisin bread and the only step I missed is brushing with oil/crisco I before baking. Also I split one loaf separate before I added raisins because I have coworkers who hate raisins (I love them!) I haven’t</p>

            <h3 className="time-cook">5 Hour Ago</h3>
            <h3 className="comment-reply">Reply</h3>

          </div>
          </div>
      </div>
      <div>
      <div className='heading-btn'>
        <div className='comments-heading'>What we are craving?</div>
        <NavLink to="/comments" className="allcmt-btn">View All</NavLink>
        </div>
        <Craving/>
      </div>
      <div>
        <h1>EXPLORE MORE</h1>
        <div className='more-dishes'>
          <img src="https://www.food.com/ideas/summer-grilling-6564" alt=""/>
          <p>Grilling & BBQ</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
