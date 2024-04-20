import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import './App.css'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login(userData));
      } else{
        dispatch(logout());
      }
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between'>
      <div>
        <Header />
        <main>
        {/* <Outlet /> */}
        <h1>Appwrite blog app</h1>
        </main>
        <Footer />
      </div>
    </div>
  ) : 
  (
    <div className='min-h-sc flex justify-center items-center'>
      <div className='text-2xl'>Waiting for Appwrite...</div>
    </div>
  )
}

export default App
