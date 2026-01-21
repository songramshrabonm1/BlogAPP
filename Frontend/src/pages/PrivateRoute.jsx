import React from 'react'
import { useSelector } from 'react-redux'
import { SignIn } from './Authentication/SignIn';
import { Dashboard } from './Dashboard';
import { Navigate, Outlet } from 'react-router';
import { signIn } from '../../../Backend/Controllers/auth.controller';

const PrivateRoute = () => {
    const currentUser = useSelector((state) => state.user) ;  
  return (
    <div>
        {currentUser ? <Outlet></Outlet> : <Navigate to={signIn}></Navigate>}
    </div>
  )
}

export default PrivateRoute