import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";

const visualisationStyle = {
    backgroundColor: '#FFFFFF',
    height: '2000px',
    position: 'relative',
    border: '1px solid #ccc' /* Just for visualization purposes */
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

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
      this.parent = null;
      this.depth = 0;
      this.selected = false;
    }
  }
  
class BinarySearchTree {
    constructor() {
      this.root = null;
      this.depth = 0;
      this.nodeSize = 40;
    }

    getNodeX(node){
        var offset;
        if(!node.parent){
            return 600;
        }
        if(node.parent.left===node){
            offset = this.getNodeX(node.parent) - this.getRightBreadthAt(node)*1.2 - this.getLeftBreadthAt(node)*0.2;
        }
        else{
            offset = this.getNodeX(node.parent) + this.getLeftBreadthAt(node)*1.2 + this.getRightBreadthAt(node)*0.2;
        }
        return offset;
    }

    getNodeY(node){
        return node.depth*70+50;
    }

    setNodeDepth(node){
        if(node.parent){
            node.depth = node.parent.depth+1;
        }
    }
  
    insert(data) {
      const newNode = new Node(data);
  
      if (!this.root) {
        this.root = newNode;
        this.depth = 1;
        newNode.depth = 1;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if(node.data === newNode.data){
        return;
      }
      if (newNode.data < node.data) {
        if (!node.left) {
          node.left = newNode;
          newNode.parent = node;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
          newNode.parent = node;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
      this.setNodeDepth(newNode);
      if(newNode.depth>this.depth){
        this.depth = newNode.depth;
      }
      this.nodeSize = 60;
      while(this.getBreadthAt(this.root) > 900){
        this.nodeSize -= 5;
      }
    }

    getDepth(){
        return this.depth;
    }

    getLeftBreadthAt(node){
        var out = this.nodeSize;
        if(node.left){
            out = this.getBreadthAt(node.left);
        }
        return out;
    }
  
    getRightBreadthAt(node){
        var out = this.nodeSize;
        if(node.right){
            out = this.getBreadthAt(node.right);
        }
        return out;
    }

    getBreadthAt(node){
        var out = this.nodeSize*1.6;
        if(node.right){
            out += this.getBreadthAt(node.right);
        }
        if(node.left){
            out += this.getBreadthAt(node.left);
        }
        return out;
    }

    // In-order traversal
    inOrderTraversal(node = this.root) {
        var result = [];  
        if (node) {

            result = [...result, ...this.inOrderTraversal(node.left)];
            result.push(node);
            result = [...result, ...this.inOrderTraversal(node.right)];
        }
        return result;
    }

    // Pre-order traversal
    preOrderTraversal(node = this.root){
        var result = [];  
        if (node) {
            result.push(node);
            result = [...result, ...this.inOrderTraversal(node.left)];
            result = [...result, ...this.inOrderTraversal(node.right)];
        }
        return result;
    }

    // Post-order traversal
    postOrderTraversal(node = this.root){
        var result = [];  
        if (node) {
            result = [...result, ...this.inOrderTraversal(node.left)];
            result = [...result, ...this.inOrderTraversal(node.right)];
            result.push(node);
        }
        return result;
    }

  }

const Visualisation = () => {

    const [tree, setTree] = useState(new BinarySearchTree());
    const [insert, setInsert] = useState('');
    const [count, setCount] = useState(0);

    const insertValue = () => {
        tree.insert(Number(insert));
        setTree(tree);
        handleClick();
      };


      const handleClick = () => {
        // Increment the count and trigger a re-render
        setCount(count + 1);
      };
    
   
     // Print the sorted values using in-order traversal
     const result = tree.inOrderTraversal();
     console.log(result); // Output: [3, 5, 7, 10, 15]
     console.log(tree.getDepth());

     const canvasRef = useRef(null);
      
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    const nodes = tree.preOrderTraversal();

    context.beginPath();
    nodes.forEach((node) =>  {
        const centerX = tree.getNodeX(node);
        const centerY = tree.getNodeY(node);

        context.strokeStyle = 'blue';
        context.lineWidth = 2; // starting point
        context.stroke();
        if(node.left){
            context.moveTo(centerX, centerY);
            context.lineTo(tree.getNodeX(node.left), tree.getNodeY(node.left)); // ending point


        }
        if(node.right){
            context.moveTo(centerX, centerY); // starting point
            context.lineTo(tree.getNodeX(node.right), tree.getNodeY(node.right));
        }
    });

    nodes.forEach((node) =>  {
        const centerX = tree.getNodeX(node);
        const centerY = tree.getNodeY(node);
        const radius = tree.nodeSize/2;

        context.fillStyle = '#ddddff';
        context.moveTo(centerX, centerY); // starting point
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        context.fill();
        context.moveTo(centerX, centerY);
        context.fillStyle = 'black';
        context.font = `${radius/3*2}px Courier`;
        console.log(node.data);
        context.fillText(node.data.toString(), centerX-radius/6*(Math.log10(Math.abs(node.data))+1), centerY+radius/4);
    }
    );


    // Draw a filled text


    // You can add more drawing operations here

    canvas.addEventListener('click', handleCanvasClick);

    // Cleanup the event listener when the component is unmounted
    return () => {
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, [tree, count]); // The empty dependency array ensures the effect runs once after the initial render

  const handleCanvasClick = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Check if the click is within the rectangle boundaries
    if (x >= 10 && x <= 60 && y >= 10 && y <= 60) {
      alert('Rectangle clicked!');
    }
  };

    return (
        <div style={visualisationStyle}>
            <InputContainer>
                        <label>{"Number to insert"}:</label>
                        <InputField
                            type={"Enter number"}
                            value={insert}
                            onChange={e => setInsert(e.target.value)}
                        />
            </InputContainer>

            <Button onClick={insertValue}>Insert</Button>

            <canvas ref={canvasRef} width={1200} height={(tree.getDepth()+1)*100} style={{backgroundColor: '#ededed', margin: 'auto', display: 'block', border: '1px solid black' }}>

            </canvas>
        </div>
    );
}

export default Visualisation;

