import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { authLogoutAction } from '../redux/AuthRedux/auth.action';
import { login } from '../redux/AuthRedux/auth.api';

export const NavBar = () => {
    const dispatch = useDispatch();
	const isUserLoggedIn = useSelector(
		(state) => state.auth.auth.isUserLoggedIn
	);
  return (
		<div className='linkContainer'>
			<Link to="/">Home</Link>
			<Link to="/userpage">userpage</Link>
			{isUserLoggedIn && (
				<button
				  onClick={() => {
					  dispatch(authLogoutAction());
				  }} className="loginBtn"
				>
					LOGOUT
				</button>
			)}
		</div>
  );
}
