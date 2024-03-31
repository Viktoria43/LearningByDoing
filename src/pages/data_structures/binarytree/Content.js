import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const contentStyle = {
    backgroundColor: '#FFFFFF',
    height: '850px',
    padding: '10px',
};

const codeBlockStyle = {
    borderRadius: '15px',
    overflowX: 'auto',
    backgroundColor: '#2d2d2d',
  };



const Content = () => {

    const codeSnippet = 
    `               1
             /   \\
            0     3
`;

    const codeSnippet2 = 
    `               1
             /   \\
`;
    return (
        <div style={contentStyle}>
            <p>A binary tree is a widely used tree data structure in computer science and mathematics. It is a hierarchical structure that consists of nodes connected by edges. Each node in a binary tree can have at most two children, which are referred to as the left child and the right child. Binary trees are used in various applications, including data storage, searching, and sorting algorithms.</p>
            
            <p><b>Node:</b> Each element in a binary tree is called a "node." Nodes are the fundamental building blocks of the tree.</p>
            <div style={{ ...codeBlockStyle, maxWidth: '320px' }}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet}
            </SyntaxHighlighter>
            </div>
            <p><b>Root:</b> The topmost node in a binary tree is called the "root." It serves as the starting point for traversing the tree.</p>
            <div style={{ ...codeBlockStyle, maxWidth: '320px' }}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet2}
            </SyntaxHighlighter>
            </div> 
            <p><b>Parent:</b> A node that has one or more child nodes is called a "parent." The node that connects to its children via edges is the parent.</p>
            <p><b>Child:</b> Nodes directly connected to a parent node are called its "children." In a binary tree, a node can have at most two children: a left child and a right child. The left child is smaller than the parent and the right one is greater than the parent.</p>
            <p><b>Leaf:</b> Nodes that do not have any children are known as "leaves." They are the endpoints of the tree.</p>
            <p><b>Subtree:</b> A subtree is a portion of a tree that is also a tree by itself. It includes a node and all of its descendants.</p>
            <p><b>Depth:</b> The depth of a node in a tree is the length of the path from the root to that node. The root node has a depth of 0, and its children have a depth of 1, and so on.</p>
            <p><b>Height:</b> The height of a tree is the length of the longest path from the root to a leaf. It is the maximum depth of any node in the tree.</p>
            
        </div>
    );
}

export default Content;