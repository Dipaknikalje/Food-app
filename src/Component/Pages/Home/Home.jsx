import React from 'react'
import './home.css'
import Craving from '../Subpages/Craving'

const Home = () => {
  return (
    <>
    <div className='Home-page'>
      <div className='image56'>
        <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/24/25/3/l3Fx6AnTcGOjhwYNhggo_0S9A9332.jpg" alt="loading" />
      </div>
      <div className='addvertise'>Advertisement</div>
      <div className='comments'>
        <h1 className='comments-heading'>Fresh from our community</h1>
        <div className='user-comments'>
          <img src="https://www.food.com/user/2003112967" alt="loading" className='user-icon' />
          <p className='user-name'>spazman5072 reviewed Crock Pot Boston Baked Beans</p>
          <p>So this is my first try at cinnamon raisin bread and the only step I missed is brushing with oil/crisco I before baking. Also I split one loaf separate before I added raisins because I have coworkers who hate raisins (I love them!) I haven’t</p>
        </div>
      </div>
      <div>
        <h1>What we are craving</h1>
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
