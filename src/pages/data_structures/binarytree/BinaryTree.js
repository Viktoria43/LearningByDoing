import Menu from "../../components/Header";
import Footer from "../../components/Footer";
import ThreePages from "../../components/ThreePages";
import Content from "./Content";
import Visualisation from "./Visualisation";
import Quiz from "./Quiz";

function BinaryTree(){

    const level =9;
    // Example usage:
 // const tree = new BinarySearchTree();
 //  tree.insert(10);
 //  tree.insert(5);
 //  tree.insert(15);
 //  tree.insert(3);
 //  tree.insert(7);
 //
  // Print the sorted values using in-order traversal
  // Define a callback function

// Call inOrderTraversal with the callback

// const result = tree.inOrderTraversal();
//
//   console.log(result); // Output: [3, 5, 7, 10, 15]
//   console.log(tree.getDepth());

    return (
        <div className = "page"> 
            <div className = "content">
            <Menu />
            <ThreePages 
                contentComponent={<Content />}
                visualisationComponent={<Visualisation />}
                quizComponent={<Quiz />}

                level={level}
            />



            </div>
            <Footer />
        </div>
    );
}

export default BinaryTree;