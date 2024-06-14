import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import ErrorPage from './pages/ErrorPage.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import PostDetail from './pages/PostDetail.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import Logout from './pages/Logout.jsx'
import UserProfile from './pages/UserProfile.jsx'
import Bloggers from './pages/Bloggers.jsx'
import CreatePost from './pages/CreatePost.jsx'
import EditPost from './pages/EditPost.jsx'
import DeletePost from './pages/DeletePost.jsx'
import DashBoard from './pages/Dashboard.jsx'
import YourPosts from './pages/YourPosts.jsx'
import CategoryPosts from './pages/CategoryPosts.jsx'
import TestConnection from './components/TestConnection.jsx/TestConnection.jsx'





const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <Home/>},
        {path: 'post/:id', element: <PostDetail />},
        {path: 'signUp', element: <SignUp />},
        {path: 'login', element: <Login />},
        {path: 'logout', element: <Logout />},
        {path: 'profile/:id', element: <UserProfile />},
        {path: 'explore', element: <Bloggers />},
        {path: 'create', element: <CreatePost />},
        {path: 'posts/:id/edit', element: <EditPost />},
        {path: 'delete', element: <DeletePost />},
        {path: 'myPosts/:id', element: <DashBoard />},
        {path: 'posts/users/:id', element: <YourPosts />},
        {path: 'posts/categories/:category', element: <CategoryPosts />},
        {path: 'testConnection', element: <TestConnection />},
      ]
    }
  ]
)

const rootEl = document.getElementById('root')
const root = ReactDOM.createRoot(rootEl)
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

//.createroot() returns an object with several methods to help manage and render your app
// root.unmount --removes react tree component from root element
//root.containsElement()