import Header from "./components/Header";

const contentStyle = {
    backgroundColor: '#FFFFFF',
    minHeight: '90vh',
    height: 'auto', 
    padding: '20px',
};

const baseTextStyle = {
    textAlign: 'left',
    display: 'block',
    maxWidth: '80%',
    margin: '20px auto', 
    paddingLeft: '20px',
};

const headingStyle = {
    textAlign: 'center',
    maxWidth: '80%',
    margin: '40px auto', 
};

function About(){
    return (
        <div>
            <Header />
            <div style={contentStyle}>
            <p style={baseTextStyle}>This platform is designed with the aim of providing an invaluable resource for students embarking on their journey into the realms of computer science, offering a structured and interactive learning experience. It is particularly useful for beginners looking to grasp basic concepts like variables, data types, and loops, etc. as well as more experienced learners who want to delve into complex topics such as sorting algorithms and data structures. Through a carefully curated blend of content, vivid and interactive visualizations, and engaging quizzes, the website fosters an environment where learners can actively engage with the material, thereby deepening their understanding and retention of  these complex concepts. It stands as an educational tool, inviting students to not only learn but to truly comprehend and apply their knowledge in practical scenarios.</p>
            <p style={baseTextStyle}>Each member who worked on this project brings a unique skill set, here are the members:</p>
            <ul style={{ ...baseTextStyle, listStylePosition: 'inside', padding: 0 }}>
                <li>Viktoria</li>
                <p style={baseTextStyle}>As the developer and the leader behind our web application, Learning by Doing, Viktoria brings a passion for both programming and education, crafting a dynamic platform for learning and exploration. With a keen focus on user progress and engagement, Viktoria has integrated interactive sorting algorithm playgrounds and visualizations, fostering an immersive learning experience within our programming community.</p>
                <li>Eshani</li>
                <p style={baseTextStyle}>As a passionate learner and dedicated team member, Eshani strove to bring enthusiasm and expertise to our education web application. With her extensive work on the Quiz, she hopes to ensure an engaging and accessible learning experience for all!</p>

                <li>Cyrus</li>
                <p style={baseTextStyle}>As the creative force behind the platform, Cyrus has masterfully crafted a user experience that is both intuitive and visually engaging, ensuring that learners are immersed in a productive and enjoyable educational journey.  </p>
                <li>Othman</li>
                <p style={baseTextStyle}>Othman played a pivotal role in shaping the platform, focusing on crafting intuitive visualizations and the overall structural integrity of the website. His contributions were instrumental in enhancing the user experience and facilitating a deeper understanding of complex computer science concepts.</p>
            </ul>
            </div>
        </div>
    )
}
export default About;