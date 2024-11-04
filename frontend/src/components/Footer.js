import React from "react";
import {Button} from './Button';
import '../styles/Footer.css';
import Signup from '../pages/Signup';
import { Link } from "react-router-dom";

function AppFooter() {

  return (
    <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the adventure newsletter to receive our best vacation deals
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe any time.
            </p>
            <div className="input-areas">
                <form >
                    <input
                    type="email"
                    name = "email"
                    placeholder="your email"
                    className="footer-input"
                    />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to={Signup}>How it works?</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of services</Link>
                </div>
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to={Signup}>How it works?</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of services</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to={Signup}>How it works?</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of services</Link>
                </div>
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to={Signup}>How it works?</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of services</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className="social-logo">
                    TRVL <i className="fab fa-typo3"/>
                    </Link>
                </div>
                <small className="website-rights">TRVL C 2020</small>
                <div className="social-icons">
                    <Link className="social-icon-link facebook"
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                    <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="social-icon-link google"
                    to='/'
                    target='_blank'
                    aria-label='Google'
                    >
                    <i className="fab fa-Google"></i>
                    </Link>
                    <Link className="social-icon-link twitter"
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                    <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="social-icon-link linkedin"
                    to='/'
                    target='_blank'
                    aria-label='Linkedin'
                    >
                    <i className="fab fa-linkedin"></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AppFooter;