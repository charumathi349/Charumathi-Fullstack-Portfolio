import React from 'react';
import { BiCheck } from 'react-icons/bi';
import '../Components/Services.css';

const Services = () => {
    return ( <
        section id = "services" >
        <
        h5 > What I Do < /h5> <
        h2 > Services < /h2>

        <
        div className = "container services_container" > { /* UI/UX Design */ }

        <
        article className = "service" >
        <
        div className = "services_head" >
        <
        h3 > Full Stack Web Development < /h3> <
        /div> <
        ul className = "services_list" >
        <
        li >
        <
        BiCheck className = "service_list_icon" / >
        <
        p > Building complete web applications from frontend interface to backend logic. < /p> <
        /li> <
        li >
        <
        BiCheck className = "service_list_icon" / >
        <
        p > Developing responsive user interfaces using HTML, CSS, JavaScript, React, and Bootstrap. < /p> <
        /li> <
        li >
        <
        BiCheck className = "service_list_icon" / >
        <
        p > Implementing backend functionality using Java, Spring Boot, and PHP. < /p> <
        /li> <
        li >
        <
        BiCheck className = "service_list_icon" / >
        <
        p > Designing and managing databases using MySQL. < /p> <
        /li> <
        /ul> <
        /article> <
        article className = "service" >
        <
        div className = "services_head" >
        <
        h3 > Frontend Development < /h3> <
        /div> <
        ul className = "services_list" >
        <
        li >
        <
        BiCheck className = "service_list_icon" / >
        <
        p > Developing interactive and responsive web interfaces. < /p> <
        /li> <
        li >
        <
        BiCheck className = "service_list_icon" / >
        <
        p > Converting UI designs into functional components using HTML, CSS, JavaScript, and React. < /p> <
        /li> <
        li >
        <
        BiCheck className = "service_list_icon" / >
        <
        p > Building simple prototypes to visualize user flow and interactions. < /p> <
        /li> <
        li >
        <
        BiCheck className = "service_list_icon" / >
        <
        p > Ensuring websites are mobile - friendly and responsive across devices. < /p> <
        /li>

        <
        /ul> <
        /article>

        { /* Web Development */ }


        { /* Graphic Design */ } <
        article className = "service" >
        <
        div className = "services_head" >
        <
        h3 > Backend & Database Development < /h3> <
        /div> <
        ul className = "services_list" >
        <
        li >
        <
        BiCheck className = "service_list_icon" / >
        <
        p > Building backend APIs and application logic using Java and Spring Boot. < /p> <
        /li> <
        li >
        <
        BiCheck className = "service_list_icon" / >
        <
        p > Creating database structures and managing data using MySQL. < /p> <
        /li> <
        li >
        <
        BiCheck className = "service_list_icon" / >
        <
        p > Implementing CRUD operations and authentication systems. < /p> <
        /li>


        <
        /ul> <
        /article> <
        /div> <
        /section>
    );
};

export default Services;