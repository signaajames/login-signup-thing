import { useState } from 'react'

function App() {

  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen ml-32 w-full'>
      <section className='text-center mb-8 w-[400px]' >
        <h1 className='text-4xl font-bold text-(--text-main) font-display'>Welcome to.. idk</h1>
        <p className='text-(--text-muted) mt-2 font-main text-[12px]'>so if you enter the username and password that another account has, and if not then youve just made a new account.. so no need for that fancy login/signup pages</p>
      </section>

      <form action="" className='flex flex-col font-main w-[400px]' >
        <label htmlFor="username" className='text-(--text-secondary) mb-1'>Username</label>
        <input type="text" name="username" id="username" className='
          mb-7
          p-2
          rounded-md
          border-(--border-color)
          border-solid
          border-2
          text-(--text-muted)
          bg-(--background-secondary)
        '/>

        <label htmlFor="Password" className='text-(--text-secondary) mb-1'>Password</label>
        <input type="password" name="password" id="password" className='
          mb-7
          p-2
          rounded-md
          border-(--border-color)
          border-solid
          border-2
          text-(--text-muted)
          bg-(--background-secondary)
        '/>

        <input type="submit" value="Sign up" id="submit" className='
          py-4 
          px-6 
          w-60
          self-center
          rounded-2xl 
          text-(--text-dark)
          bg-gray-50 
          font-bold 
          cursor-pointer
          transition-colors
          duration-150
          ease-in-out
          hover:bg-gray-200
          active:bg-gray-300
        ' 
        onClick={(e) => {
          e.preventDefault()
        }}/>
      </form>
    </div>
    </>
  )
}

export default App
