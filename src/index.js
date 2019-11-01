import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Person = ({img, name, job, children}) =>{
const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;



        return(
            <article className="person">
                <img src={url} alt="person" />
                <h4>{name}</h4>
                <h4>{job}</h4>
                {children}
            </article>
        );
};

const PersonList = () =>{
    return <section className="person-list">
                <Person img="34" name="john" job="developer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Person>
                <Person img="27" name="bob" job="designer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Person>
                <Person img="20" name="dave" job="engineer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Person>
                <Person img="52" name="pepe" job="painter">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Person>
                <Person img="48" name="matt" job="doctor">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Person>
                <Person img="30" name="paul" job="dentist">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Person>
            </section>
};




ReactDOM.render(<PersonList/> , document.getElementById("root"));