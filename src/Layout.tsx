
import React from 'react';

export const Layout = ({ children }: {children: React.ReactElement}) => {
  return (
    // <div className="min-w-[100vw] min-h-[100vh] bg-gradient-to-br from-blue-500 to-purple-600 text-white">
    <div className="min-w-screen h-screen bg-radial-gradient-circle-at-10-20 text-white">
        { children }
    </div>
  )
}
