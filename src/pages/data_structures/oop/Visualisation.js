import React from "react";
import styled from 'styled-components';
import oop_vis from "./oop_vis.png";

const visualisationStyle = {
    backgroundColor: '#FFFFFF',
    height: '500px',
};


const Image = styled.img`
  marginTop: 
  transition: box-shadow 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px 3px #7f7f7f;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
  }
` ;




const Visualisation = () => {
    return (
        <div style={visualisationStyle}>
           <Image src = {oop_vis} style={{width:80+"%", marginLeft:10+"%"}}></Image>
        </div>
    );
}

export default Visualisation;

