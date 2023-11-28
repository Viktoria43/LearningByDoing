import Header from "./components/Header";
import {Link} from "react-router-dom";
function Contact(){
    return (
        <div>
            <Header />
            <h1>This is the Contact page</h1>
            <p>Call me <Link to="/Contact">+1 234 456 7892</Link></p>
        </div>
    )
}

export default Contact;