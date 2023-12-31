import Menu from "../../components/Header";
import Footer from "../../components/Footer";
import ThreePages from "../../components/ThreePages";
import Content from "./Content";
import Visualisation from "./Visualisation";
import Quiz from "./Quiz";


class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
      this.depth = 0;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
      this.depth = 0;
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
          newNode.depth = node.depth+1;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
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
  
    // In-order traversal
    inOrderTraversal(node = this.root) {
        var result = [];  
        if (node) {
            result = this.inOrderTraversal(node.left);
            result.push(node.data);
            result = [...result, ...this.inOrderTraversal(node.right)];
        }
        return result;
    }
  }
  


function BinaryTree(){
    // Example usage:
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  
  // Print the sorted values using in-order traversal
  // Define a callback function

// Call inOrderTraversal with the callback

const result = tree.inOrderTraversal();
  console.log(result); // Output: [3, 5, 7, 10, 15]
  console.log(tree.getDepth());
    return (
        <div className = "page"> 
            <div className = "content">
            <Menu />
            <ThreePages 
                contentComponent={<Content />}
                visualisationComponent={<Visualisation />}
                quizComponent={<Quiz />}/>
            </div>
            <Footer />
        </div>
    );
}
export default BinaryTree;