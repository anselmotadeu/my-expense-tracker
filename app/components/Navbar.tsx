import React from 'react'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          Expense Tracker
        </div>
        <div className="space-x-4">
          <Link href="/auth/login" className="text-gray-300 hover:text-white">
            Login
          </Link>
          <Link href="/auth/register" className="text-gray-300 hover:text-white">
            Register
          </Link>
          <Link href="/dashboard" className="text-gray-300 hover:text-white">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar