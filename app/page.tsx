"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import Navbar from './components/Navbar'

const HomePage: React.FC = () => {
  const router = useRouter()

  const goToLogin = () => {
    router.push('/auth/login')
  }

  const goToRegister = () => {
    router.push('/auth/register')
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl mb-8">Bem-vindo ao Expense Tracker</h1>
        <div className="space-x-4">
          <button
            onClick={goToLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
          <button
            onClick={goToRegister}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </div>
      </div>
    </>
  )
}

export default HomePage