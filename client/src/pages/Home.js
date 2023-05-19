import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'

const Home = () => {
  const [auth,setAuth] =useAuth()
  return (
    <>
      <Layout>
      <div>
        <pre>{JSON.stringify(auth,null,4)}</pre>
      </div>
      </Layout>
    </>
  )
}

export default Home
