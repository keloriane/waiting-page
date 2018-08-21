import React, { Component } from 'react';
import './service.css';
import Hexagon from './../../../resources/images/hexagon.svg';

import { TweenLite, Expo, TimelineLite } from 'gsap';
import ScrollMagic from 'scrollmagic';
require('animation.gsap');
require('debug.addIndicators');



 class Services extends Component {


    componentDidMount(){
        const controller = new ScrollMagic.Controller();
        const serviceSection = document.querySelector('.services-container')
        const titleService = document.querySelector('.service-title')
        const tlHeader = new TimelineLite();

        tlHeader
            .from(titleService,1,{y:-120,opacity:0, ease: Expo.easeInOut})

        const servicesAnimation = new ScrollMagic.Scene({
            triggerElement:serviceSection,
            reverse:true
        })
        .setTween(tlHeader)
        .addTo(controller)
        .addIndicators({
            colorStart: 'red'
        })
    }
  render() {


    return (
      <div className="section-content">
      <div className="hexagon services-items">
      <h3 className="service-title">Services</h3>
      <div className="services-container">
                <div className="item-container">
                    <h4 className="service-title">Marketing/Communication</h4>
                   <img src={Hexagon} alt=""/>
                </div>
                <div className="hexagon services-items">
                    <div className="item-container">
                    <img src={Hexagon} alt=""/>
                    </div>
                </div>
                <div className="hexagon services-items">
                    <div className="item-container">
                    <img src={Hexagon} alt=""/>
                    </div>
                </div>
                <div className="hexagon services-items">
                    <div className="item-container">
                    <img src={Hexagon} alt=""/>
                    </div>
                </div>
                </div>



        
        </div>
        
      </div>
    )
  }
}
export default Services;