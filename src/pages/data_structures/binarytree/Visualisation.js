import React from 'react';

const visualisationStyle = {
    backgroundColor: '#44dd33',
    height: '500px',
    position: 'relative',
    border: '1px solid #ccc' /* Just for visualization purposes */
};




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
      this.nodeSize = 4;
    }
    serializeNode(node) {
        var offset;
        if(node === this.root){
            offset = 50;
        }
        else{
            if(node.parent.left===node){
                offset = this.serializeNode(node.parent)['offset'] - this.getRightBreadthAt(node)-0.2;
            }
            else{
                offset = this.serializeNode(node.parent)['offset'] + this.getLeftBreadthAt(node)+0.2;
            }
        }
        return {"data" : node.data, "selected" : node.selected, "depth" : node.depth, "offset" : offset} ;
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
      if (newNode.data < node.data) {
        if (!node.left) {
          node.left = newNode;
          newNode.parent = node;
          newNode.depth = node.depth+1;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
          newNode.parent = node;
          newNode.depth = node.depth+1;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
      if(newNode.depth>this.depth){
        this.depth = newNode.depth;
      }
    }

    getDepth(){
        return this.depth;
    }

    getLeftBreadthAt(node){
        var out = this.nodeSize*1.2;
        if(node.left){
            out = this.getBreadthAt(node.left);
        }
        return out;
    }
  
    getRightBreadthAt(node){
        var out = this.nodeSize*1.2;
        if(node.right){
            out = this.getBreadthAt(node.right);
        }
        return out;
    }

    getBreadthAt(node){
        var out = this.nodeSize;
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

 // Example usage:
 const tree = new BinarySearchTree();
 tree.insert(10);
 tree.insert(5);
 tree.insert(15);
 tree.insert(3);
 tree.insert(7);
 tree.insert(1);
 tree.insert(9);
 tree.insert(52);
 tree.insert(150);
 tree.insert(33);
 tree.insert(72);
 tree.insert(38);
 tree.insert(39);
 tree.insert(71);


const Visualisation = () => {
   
     // Print the sorted values using in-order traversal
     const result = tree.inOrderTraversal();
     console.log(result); // Output: [3, 5, 7, 10, 15]
     console.log(tree.getDepth());
    return (
        <div style={visualisationStyle}>
            / ----- Visualization goes here ------ /
            
            {tree.inOrderTraversal().map((node) => (tree.serializeNode(node))).map((node) => (
                
              <button id = {node['id']} 
                      style={{  width: `${Math.log10(node['data'])*15+20}px`,
                      height : '25px',
                      borderRadius: '15px',
                      cursor: 'pointer',
                      position: 'absolute',
                      left: `${node['offset']}%`,
                      top: `${node['depth']*10 + 10}%`
                    }}>{node['data']}</button>
              
            ))}
            

        </div>
    );
}

export default Visualisation;

