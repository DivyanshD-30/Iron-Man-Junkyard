import React from 'react';
// import {Button} from './Button';
import '../styles/HeroSection.css';
import '../App.css';
// import Backgroundimg from '../assets/homebackground.webp';

function HeroSection() {
    return (
        <div className="container-carousels">
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://plus.unsplash.com/premium_photo-1682144723453-66ccd1555232?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="logo"/>
                    <div className="carousel-caption d-none d-md-block"/>
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="https://plus.unsplash.com/premium_photo-1664811569310-04a7c276df1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZW52aXJvbm1lbnR8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="logo"/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1650112274147-03a2dba421c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVudmlyb25tZW50YWwlMjBwcm90ZWN0aW9ufGVufDB8fDB8fHww" className="d-block w-100" alt="logo"/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
            </div>


        // <div className="hero-container">
        //     <img className='img-background' src={Backgroundimg} alt=" background"/>
        //     <h1>Online Scrap Dealings</h1>
        //     <p>No more barganings and arguments with scrap dealers.</p>
        //     <div className='hero-btns'>
        //         <Button
        //         className='btns'
        //         buttonStyle='btn--outline'
        //         buttonSize='btn--large'
        //         >
        //            EXPLORE
        //         </Button>
                // {/* <Button
                // className='btns'
                // buttonStyle='btn--primary'
                // buttonSize='btn--large'
                // >
                //    WATCH TRAILER <i className='far fa-play-circle' />
                // </Button> */}
        //     </div>
        // </div>
    );
}

export default HeroSection;