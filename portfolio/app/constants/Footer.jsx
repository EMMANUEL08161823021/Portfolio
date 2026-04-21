import React from 'react'

const Footer = () => {
  return (
     <div className="py-8 max-w-6xl px-4 mx-auto border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[13px] text-gray-600">
          © {new Date().getFullYear()} Emmanuel Oguntolu. All rights reserved.
        </p>
        <p className="text-[13px] text-gray-700">
          Built with Next.js · Tailwind CSS · Montserrat
        </p>
      </div>
  )
}

export default Footer