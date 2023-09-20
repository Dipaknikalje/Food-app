import React from 'react'
import './home.css'
import Poster from './poster/Poster'
import Craving from './craving/Craving'
import Explore from './explore/Explore'
import Trending from './trending/Trending'
import Miss from './Miss/Miss'
import Ideas from './ideas/Ideas'
import PeelPeach from './peaches/PeelPeach'
import FooterSearchBar from '../../Footer/FooterSearchBar'
import Comments from '../recipe/CommentsFIle/Comments'
const Home = () => {
  return (
    <>
    <Poster/>
    <div className='Home-page'>
      <div className='addvertise'>Advertisement</div>

      <Comments/>
        {/* <Comments/> */}
        {/* <div className='comments'>
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
          </div> */}
      <Craving/>
      <Explore/>
      <div className="addvertise"></div>
      <br/>
      <Trending/>
      <Miss/>
      <Ideas/>
      <br/>
      <br/>
      <div className="addvertise"></div>
      <br/>
      <br/>
      <PeelPeach/>
      <br/>
      <FooterSearchBar/>
    </div>
    </>
  )
}

export default Home
