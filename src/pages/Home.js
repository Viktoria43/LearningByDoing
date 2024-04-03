import React from 'react';
import Header from "./components/Header";
import ButtonsContainer from "./components/ButtonsContainer";
import Disclaimer from "./components/Disclaimer.js"; 

function Home() {
  return (
    <div className="page">
      <Header />
      <Disclaimer /> {}
      <div className="content">
        <ButtonsContainer />
      </div>
    </div>
  );
}

export default Home;
