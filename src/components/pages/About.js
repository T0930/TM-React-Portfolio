import React from 'react';

export default function About() {
  return (
    <section className="page-section bg-primary text-white mb-0 aboutFormat" id="about">
    <div className="container">
        <div className="text-center">
            <h2 className="page-section-heading d-inline-block text-white">ABOUT</h2>
        </div>
        <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>
        <div className="row">
            <div className="col-lg-4 ml-auto">
                <p className="pre-wrap lead">Hello my name is Tom, I am originally from California and moved to Arizona back in 2015.</p>
                <p className="pre-wrap lead">I am currently enrolled as a student in the University of Arizona full stack coding bootcamp.</p>
                <p className="pre-wrap lead">I enjoy many different hobbies such as, playing guitar, sports, and computers.</p>
            </div>
            <div className="col-lg-4 mr-auto">
                <p className="pre-wrap lead">Most of my computer knowledge is self-taught and I have had an interest in technology since I was young.</p>
                <p className="pre-wrap lead">I have never coded before and I am excited to keep learning and developing my skill-set.</p>
                <p className="pre-wrap lead">I have decided to pursue the world of IT due to the challenge it provides!</p>
            </div>
        </div>
    </div>
</section>
  );
}
