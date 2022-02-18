import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import './styles.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
     
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {renderPage()}

      <Footer />

    </div>
  );
}
