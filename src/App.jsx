import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>

      <section className='header'>
        <h1>Welcome to.. idk</h1>
        <p>Already have an account? <span>Login here</span></p>
      </section>

      <form action="" className='accountForm'>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />

        <label htmlFor="Password">Password</label>
        <input type="password" name="password" id="password" />

        <input type="submit" value="Sign up" id="submit" onClick={(e) => {
          e.preventDefault()
        }}/>
      </form>
    </>
  )
}

export default App
