import React from 'react'
import Footer from './Footer';
import Header from './Header';

// import '../styles/components/Layout.css';

const Layout = ({children}) => {
  return (
    <div className='container mx-auto p-2 '>
      <div className='bg-gray-200'>
        <Header />
        {children}
        <Footer />  

      </div>
    </div>
  )
}

export default Layout;
