import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import Policy from './pages/Policy'
import Regestration from './pages/auth/Regestration'
import Login from './pages/auth/Login'
import DashBoard from './pages/user/DashBoard'
import Example from './pages/Example'
// import AdminRoute from './components/Layout/AdminRoute'
import ForgotPassword from './pages/auth/ForgetPassword'

import PrivateRoute from './components/Layout/private'
import AdminRoute from './components/Layout/AdminRoute'
import AdminDashboard from './pages/amin/AdminDashboard'

// import AdminDashboard from './pages/amin/AdminDashboard'

export default function App() {
  return (
    <>
<Routes>
  <Route path='/'  element={<Home/>}   />

   <Route  element={<PrivateRoute/>}>
   <Route path="/dashboard" element={<DashBoard/>}/>
   </Route>
  
   {/* 
    <Route path='/AdminDashboard' element={<AdminRoute/>}>
    <Route path='admin' element={<AdminDashboard/>}/>

    </Route> */}
  <Route path='admindashboard' element={<AdminDashboard/>}/>
  <Route path='/example' element={<Example/>}/>
    
  <Route path='/About'  element={<About/>}   />
  <Route path='/Contact'  element={<Contact/>}   />
  <Route path='/Policy'  element={<Policy/>}   />
  <Route path='/Regestration' element={<Regestration/>}  />
  <Route path='/forgot-password' element={<ForgotPassword/>}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/*'  element={<PageNotFound/>}   />
  
</Routes>
    </>
  )
}
