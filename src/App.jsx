import React from 'react';
import './App.css';


import Header from './components/intro/Header';
import SearchBar from './components/intro/SearchBar';
import IntroSection from './components/intro/IntroSection';
import TutorsPage from './components/tutor/TutorPage';
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <IntroSection/>
      <TutorsPage/>
      <Footer/>
    </div>
  );
}


export default App;