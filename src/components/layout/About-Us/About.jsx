import React, { Component } from 'react'
import slide_one from './../../../resources/images/hive-team.png';
import slide_two from './../../../resources/images/community.jpg';
import Button from './../../featured/Button';
import { TweenLite, Expo, TimelineLite } from 'gsap';
import ScrollMagic from 'scrollmagic';
import './about.scss'
require('animation.gsap');
require('debug.addIndicators');




class About extends Component {

  onShowClick = () => {
   console.log('hello')
  };
  componentDidMount(){
    const controller = new ScrollMagic.Controller();
    const serviceSection = document.querySelector('.container-about')
    const imageContainer = document.querySelector('.image-container')
    const layer = document.querySelector('.layer-image')
    const tlAbout = new TimelineLite();

    tlAbout
        .from(layer,0.45,{width:0})
     

    const servicesAnimation = new ScrollMagic.Scene({
        triggerElement:serviceSection,
        reverse:true
    })
    .setTween(tlAbout)
    .addTo(controller)
    .addIndicators({
        colorStart: 'red'
    })
}

  render() {
    return (
    
      <div className="section-content">
        <div className="text-content">
        <h3 className='title-section'>About Hive</h3>
        <p className="text-about-us">We’ve got big news coming soon!
        
        
        After eight months and four successful events, various meet-ups and workshops gathering hundreds of people around blockchain, we decided to answer the ever-growing excitement we witnessed by opening a new chapter in our adventure.
        
        Our community emerged from a shared passion for blockchain technology.
        We grew and reinforced our blockchain-agnostic identity, while striving to introduce the general public to the potential if this disruptive, break-through innovation. HIVE slowly became a go-to point of contact in the Belgian capital.
        
        Convinced by the empowerment that blockchain can provide in many aspects of our everyday life, we decided to create an structure enabling professionals and tech-savvy individuals to interact with the industry. In opposition to the old ways, we want our model to give the technology back to the people.
        
        We’ll tell you more at our next BIP event in October.
        
        Stay tuned!”</p>
        </div>
      
        <div className="image-container">
        <img src={slide_one} alt="" className="team"  onClick={this.onShowClick}/>
        <div className="layer-image" ></div>
       
        </div>
        </div>
        
       
      )
  }
}
export default About;