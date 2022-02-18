import React from 'react';

import profpic from "../../images/profilepic.gif";



export default function Home() {
  return (
    <header className="masthead bg-primary text-white text-center homeFormat">
    <div className="container d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-5 photoEdit" src={profpic} alt=""/>
        <h1 className="masthead-heading mb-0">TOM MYLASTNAME</h1>
        <div className="divider-custom divider-light">
        </div>
        <p className="pre-wrap masthead-subheading font-weight-light mb-0">DEVELOPER</p>
    </div>
</header>
  );
}
