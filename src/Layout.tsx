
import React from 'react';

export const Layout = ({ children }: {children: React.ReactElement}) => {
  return (
    <div className="min-w-screen min-h-screen bg-radial-gradient-circle-at-10-20 text-white">
        { children }
    </div>
  )
}
