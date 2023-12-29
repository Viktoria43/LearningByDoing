import React from "react";

const contentStyle = {
    backgroundColor: '#dd3344',
    height: '900px',
    padding: '20px',
};

const Content = () => {
    return (
        <div style={contentStyle}>
           <h1>Java Lists:</h1> 
           <ul>
           <li>Lists in Java are ordered collections of elements.</li> 
           <li>Java provides the List interface, part of the Java Collections Framework.</li> 
           <li>Common list implementations include ArrayList (dynamic array) and LinkedList (doubly-linked list).</li> 
           <li>Lists maintain element order and allow duplicates.</li> 
           <li>You can add, access, and remove elements by index or value.</li> 
           <li>Lists are flexible and versatile for various data storage and manipulation tasks in Java.</li> 
           </ul>

           <h1>Singly Linked List:</h1>
           <p>A singly linked list is a data structure where each element is a node that contains data and a reference (link) to the next node in the sequence. It's called "singly" because it only links nodes in one direction, from the head (the first node) to the tail (the last node). Here are some key characteristics of a singly linked list:</p>
           <ul>
           <li><b>Node:</b> Each element in the singly linked list is called a node. A node has two parts: data and a reference to the next node.</li> 
           <li><b>Head:</b> The head is a reference to the first node in the list. It allows you to access the list's elements</li> 
           <li><b>Tail:</b> The tail is the last node in the list. Its next reference points to null to indicate the end of the list.</li>
           <li><b>Traversal:</b> To traverse a singly linked list, you start at the head and follow the next references until you reach the desired node.</li>
           <li><b>Insertion and Deletion:</b> Elements can be easily inserted or deleted from a singly linked list by updating the next references of the previous and current nodes.</li>
           </ul>
           <p>Singly linked lists are efficient for insertion and deletion of elements at the beginning or end of the list but less efficient for accessing elements at arbitrary positions.</p>

           <h1>Doubly Linked List:</h1>
           <p>A doubly linked list is a data structure similar to a singly linked list, but it has one key difference: each node has references to both the next and the previous nodes. This "doubly" linked structure allows traversal in both directions, from head to tail and from tail to head. Here are the main characteristics of a doubly linked list:</p> 
           <ul>
           <li><b>Node:</b> Like a singly linked list, a doubly linked list consists of nodes that contain data and references to the next and previous nodes.</li> 
           <li><b>Head:</b> The head is a reference to the first node in the list.</li> 
           <li><b>Tail:</b> The tail is the last node in the list, and it has a reference to both the next node and the previous node.</li>
           <li><b>Traversal:</b> You can traverse a doubly linked list in both directions, which allows for more flexible navigation.</li>
           <li><b>Insertion and Deletion:</b> Similar to a singly linked list, elements can be inserted or deleted from a doubly linked list by updating references. In the case of deletion, both the next and previous references need to be updated.</li> 
           </ul>
           <p>Doubly linked lists are more versatile than singly linked lists because they allow efficient traversal in both directions. However, they consume more memory due to the additional references in each node. They are often used when you need bidirectional traversal or frequent insertion and deletion at both ends of the list.</p> 
        </div>
    );
}

export default Content;