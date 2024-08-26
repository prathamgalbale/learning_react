import User from "./User";
import UserClass from "./UserClass";


const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is the About page of React project</h2>

            <UserClass name={"Pratham (class)"} location={"India (class)"}/>
        </div>
    );
};

export default About;