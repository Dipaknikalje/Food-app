import React from 'react'
import './user.css'
import { NavLink, useParams } from 'react-router-dom'
import FooterSearchRecipe from '../../Footer/FooterSearchRecipe'
import userPic from '../../../Assets/profile.jpg'

const User = () => {
    const email = localStorage.getItem('email')

    const params = useParams()

    return (
        <>
            <div id='user-profile-page'>
                <div id='user-profile-page-gradient'>
                </div>
                <div  id='main-body'>
                <div id='user-profile-page-profile-photo-followers-following'>
                    <div id='user-profile-page-profile-photo'>
                       <img src={userPic} alt='profile'/>
                    </div>
                    <div id='user-profile-page-followers-following'>
                        <div>
                            <p>FOLLOWERS</p>
                            <p>0</p>
                        </div>
                        <div>
                            <p>FOLLOWING</p>
                            <p>0</p>
                        </div>
                    </div>
                </div>
                <div id='user-profile-page-username'>
                    <p>@{email.substring(0, email.length - 10)}</p>
                </div>
                <div id='user-profile-page-filters'>
                    <div id='user-profile-page-filters-container'>
                        <div>
                            <p>FILTERS</p>
                            <NavLink to='/userprofile/activity' activeClassName='active'>Activity</NavLink>
                            <NavLink to='/userprofile/recipes' activeClassName='active'>Recipes</NavLink>
                            <NavLink to='/userprofile/photos' activeClassName='active'>Photos</NavLink>
                            <NavLink to='/userprofile/reviews' activeClassName='active'>Reviews</NavLink>
                            <NavLink to='/userprofile/tweaks' activeClassName='active'>Tweaks</NavLink>
                            <NavLink to='/userprofile/questions' activeClassName='active'>Questions</NavLink>
                            <NavLink to='/userprofile/followers' activeClassName='active'>Followers</NavLink>
                            <NavLink to='/userprofile/following' activeClassName='active'>Following</NavLink>
                        </div>
                        <div>
                            <h3>{params.filtername}</h3>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <FooterSearchRecipe/>
        </>
    )
}

export default User