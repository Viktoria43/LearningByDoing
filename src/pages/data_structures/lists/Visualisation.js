import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";

const visualisationStyle = {
    backgroundColor: '#FFFFFF',
    height: '500px',
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const InputField = styled.input`
  width: 150px;
  padding: 8px;
  margin-top: 5px;
  border-radius: 7px;
`;

const Button = styled.button`
  text-decoration: none;
  background-color: black;
  width: 150px;
  padding: 8px;
  color: white;
  font-size: 1em;
  font-family: 'Futura', 'Trebuchet MS', sans-serif;
  padding: 8px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  margin : auto;
  display: block;
  margin-bottom: 40px;

  &:hover {
    background-color: #559;
`;


// Define a Node class to represent each node in the linked list
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  // Define a SinglyLinkedList class
  class SinglyLinkedList {
    constructor() {
      this.head = null;
    }
  
    // Method to insert a node at the beginning of the linked list
    insertFirst(data) {
      this.head = new Node(data, this.head);
    }
  
    // Method to insert a node at the end of the linked list
    insertLast(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
  
      current.next = newNode;
    }
  
    // Method to display the linked list
    display() {
        console.log("Here's the list:");
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    // Method to convert the linked list to an array
    toArray() {
        const array = [];
        let current = this.head;
        while (current) {
            array.push(current.data);
            current = current.next;
        }
        return array;
    }
    // Method to get the size of the linked list
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
}

  
const Visualisation = () => {

    var [list, setList] = useState(new SinglyLinkedList());
    const [insertFirst, setInsertFirst] = useState('');
    const [insertLast, setInsertLast] = useState('');
    const [count, setCount] = useState(0);

    const insertFirstValue = () => {
        list.insertFirst(Number(insertFirst));
        setList(list);
        handleClick();
      };

    const insertLastValue = () => {
        list.insertLast(Number(insertLast));
        setList(list);
        handleClick();
      };

      const clearList = () => {
        list = new SinglyLinkedList();
        setList(list);
        handleClick();
      };

    const handleClick = () => {
        // Increment the count and trigger a re-render
        setCount(count + 1);
        list.display();
      };

    const canvasRef = useRef(null);
      
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);

        var arr = list.toArray();

        if(list.size()>0){
        
        for(var i = 1; i < list.size(); i++){
            var nodeRadius = Math.max(60 - list.size()*3, 20);

            const centerX = 600+(i-(list.size()-1)/2) * nodeRadius*3.2;
            const centerY = 180;
            context.fillStyle = '#000';

            // Draw the triangle
            context.beginPath();
            context.moveTo(centerX-nodeRadius*1.2, centerY-nodeRadius/5);
            context.lineTo(centerX-nodeRadius*1.2, centerY+nodeRadius/5); // First point
            context.lineTo(centerX-nodeRadius, centerY); // Starting point
            context.closePath(); // Connect the last and first points to close the shape
            context.fill(); // Fill the triangle with the specified color
            context.stroke(); // Draw the triangle border

            context.beginPath();
            context.moveTo(centerX-nodeRadius, centerY); // Starting point
            context.lineTo(centerX-3*nodeRadius, centerY);
            context.closePath(); // Connect the last and first points to close the shape\
            context.stroke(); // Draw the triangle border
            

            }

            for(i = 0; i < list.size(); i++){
                nodeRadius = Math.max(60 - list.size()*3, 20);
    
                const centerX = 600+(i-(list.size()-1)/2) * nodeRadius*3.2;
                const centerY = 180;
                const radius = nodeRadius;
    
                context.beginPath();
                context.fillStyle = '#ddddff';
                context.moveTo(centerX, centerY); // starting point
                context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
                context.fill();
                context.closePath();
                }
        

        for(i = 0; i < list.size(); i++){
            nodeRadius = Math.max(60 - list.size()*3, 20);

            const centerX = 600+(i-(list.size()-1)/2) * nodeRadius*3.2;
            const centerY = 180;
            const radius = nodeRadius;

            context.moveTo(centerX, centerY);
            context.fillStyle = 'black';
            context.font = `${radius/3*2}px Courier`;
            context.fillText(arr[i].toString(), centerX-radius/6*(Math.log10(20)), centerY+radius/4);
            }
        

        }}, 
        [list, count]
    );

    return (
        <div style={visualisationStyle}>
            <div style={{display:"flex", position:"relative", alignItems: 'center' }}>
                <div style = {{width:"50%"}}>
            <InputContainer>
                        <label>{"Number to insert first"}:</label>
                        <InputField
                            type={"Enter number"}
                            value={insertFirst}
                            onChange={e => setInsertFirst(e.target.value)}
                        />
            </InputContainer>

            <Button onClick={insertFirstValue}>Insert</Button>
            </div>
            <div style = {{width:"50%"}}>
            <InputContainer>
                        <label>{"Number to insert last"}:</label>
                        <InputField
                            type={"Enter number"}
                            value={insertLast}
                            onChange={e => setInsertLast(e.target.value)}
                        />
            </InputContainer>

            <Button onClick={insertLastValue}>Insert</Button>
            </div>
            
            </div>

            <Button onClick={clearList}>Clear</Button>

            <canvas ref={canvasRef} width={1200} height={400} style={{backgroundColor: '#ededed', margin: 'auto', display: 'block', border: '1px solid black' }}>

            </canvas>
        </div>
    );
}

export default Visualisation;

