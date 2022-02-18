import React from 'react';

import passImage from "../../images/password.png";
import movieImage from "../../images/movie.png";
import petImage from "../../images/petrec.png";
import plannerImage from "../../images/planner.png";
import teamImage from "../../images/teamgen.png";
import weatherImage from "../../images/weather.png";

const works = [
  {
    title: "Password Generator",
    description: "Generate random passwords with the click of a button",
    image: passImage
  },
  {
    title: "Weather Dashboard",
    description: "Fetches weather from API",
    image: weatherImage
  },
  {
    title: "Work Planner",
    description: "Set your schedule with a day-planner",
    image: plannerImage
  },
  {
    title: "Employee Management System",
    description: "Add and delete employees",
    image: teamImage
  },
  {
    title: "Movie Roulette",
    description: "Generate random movie selections",
    image: movieImage
  },
  {
    title: "Pet-Rec",
    description: "Track your pet's medical records",
    image: petImage
  },
]

export default function Work() {
  return (
    <section className="page-section portfolio workFormat" id="portfolio">
    <div className="container">
        <div className="text-center">
            <h2 className="page-section-heading text-secondary mb-0 d-inline-block">WORK</h2>
        </div>
        <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
    {works.map((work) => (
            <div className="col-md-6 col-lg-4 mb-5">
              {work.title}
                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal0">
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white">{work.description}</div>
                    </div><img className="img-fluid" src={work.image} alt={work.title}/>
                </div>
            </div>
    ))
    };     
          </div>  
        </div>
</section>
  );
}
