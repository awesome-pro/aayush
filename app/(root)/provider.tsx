import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

interface MainProviderProps {
    children: React.ReactNode
}

function MainProvider(
    {
        children
    }: MainProviderProps
) {
  return (
    <main className="w-screen min-h-screen">
        <Navbar />
        {children}
        <Footer />
    </main>
  )
}

export default MainProvider