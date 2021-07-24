import WhyChooseEasybank from './components/WhyChooseEasybank';
import LatestArticles from './components/LatestArticles';
import Footer from './components/Footer';
import Header from './components/Header';
import React, { useState } from 'react';
import './App.css';

function App() {
  return (
      <div>
        <Header />
      <main>
        <div >
        <div className = "next-generation-digital-banking" ></div> 
          <div className = "text container main-text-desktop" >
            <h2 className = "h2-style-default" > Next generation digital banking </h2> 
            <p className = "p-text-style-default" >
              Take your financial life online.Your Easybank account will be a one - stop - shop
              for spending, saving, budgeting, investing, and much more.
            </p>
            <button className = "btn-request-invite btn-request-invite-desktop" > Request Invite </button>
          </div>
        </div> 
          <WhyChooseEasybank />
          <LatestArticles />
      </main>
      <Footer />
      </div>
    );
}

export default App;