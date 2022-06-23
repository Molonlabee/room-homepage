import React, { Component } from 'react';
import './App.css';
import './sass/main.scss';
import data from './data';
import arrow from './images/icon-arrow.svg';
import left from './images/icon-angle-left.svg';
import right from './images/icon-angle-right.svg';
import chair from './images/desktop-image-hero-2.jpg';


 class App extends Component {
  constructor(){
    super();
    this.state = {
      i: 0,
    }
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }
// FORWARD ARROW
  handleNext() {
    if (this.state.i >= 2) {
      this.setState({ i: this.state.i = 0})
    } else if (this.state.i >= 0) {
      this.setState({ i: this.state.i + 1 });
    }
  }
// BACK ARROW
  handlePrev() {
    if (this.state.i <= 0) {
      this.setState({ i: this.state.i = 2})
    } else if (this.state.i >= 0) {
      this.setState({ i: this.state.i - 1 });
    }
  }
  
  render() {
    return (
      <div className='app'> 
        <section className='slider'>
          <div className='slider__left'>
              <img src={data[this.state.i].image} className='slider__left-img' alt='background' />
            <div className='header'>
              <h1 className='logo'>room</h1>
              <a href='https://wwww.google.com'>home</a>
              <a href='shop'>shop</a>
              <a href='https://wwww.google.com'>about</a>
              <a href='contact'>contact</a>
            </div>
          </div>

          <div className='slider__right'>
            <div className='slider__right-info'>
                <h1>{data[this.state.i].title}</h1>
                <p>{data[this.state.i].description}</p>
                <a href='https://www.google.com'>
                  Shop Now
                  <img src={arrow} className='arrow' />
                </a>
            </div>
            <div className='slider__btns'>
              <button className='btn' onClick={()=> this.handlePrev()}><img src={left}/></button>
              <button className='btn' onClick={()=> this.handleNext()}><img src={right}/></button>
            </div>
          </div>
        </section>
    
        <section className='about'>
          <div className='about__left'></div>
          <div className='about__md'>
            <h1>About our furniture</h1>
            <p>
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.
            </p>
          </div>
          <div className='about__right'></div>
        </section>

        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target=''>Frontend Mentor</a>. 
          Coded by <a href="https://www.janayahernandez.com" target=''>Janaya</a>.
        </div>
      </div>
    )
  }
}

export default App;
