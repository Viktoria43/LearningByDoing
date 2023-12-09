import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from "./pages/Login";

import * as DataStructures from './pages/data_structures';
import * as Introduction from './pages/introduction';

// Assuming you have an array of paths
const dataStructurePaths = ['/BinaryTree', '/Lists', '/Loops', '/OOP', '/Queues', '/Sorting'];
const introductionPaths = ['/Arrays', '/Conditionals', '/DataTypes', '/Functions', '/Loops', '/Operations'];

// Dynamically generate routes
const dataStructureRoutes = dataStructurePaths.map((path) => {
    // Convert the path to a component name (remove leading '/')
    const componentName = path.replace('/', '');

    // Import the component dynamically
    const Component = DataStructures[componentName];

    return (
        <Route
            key={path}
            exact
            path={`/DataStructures${path}`}
            element={<Component />}
        />
    );
});

const introducionRoutes = introductionPaths.map((path) => {
    // Convert the path to a component name (remove leading '/')
    const componentName = path.replace('/', '');

    // Import the component dynamically
    const Component = Introduction[componentName];

    return (
        <Route
            key={path}
            exact
            path={`/Introduction${path}`}
            element={<Component />}
        />
    );
});


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element = {<Home />}/>
                    <Route exact path="/About" element = {<About />}/>
                    <Route exact path="/Contact" element = {<Contact />}/>
                    <Route exact path="/Login" element = {<Login />}/>
                    {dataStructureRoutes}
                    {introducionRoutes}
                </Routes>
            </div>
        </Router>
    );
}

export default App;