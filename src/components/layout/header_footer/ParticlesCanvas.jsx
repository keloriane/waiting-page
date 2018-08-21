import React, { Component } from 'react'
import logo from './../../../resources/images/ecosystemLogo.svg'




import light from './../../../resources/images/lightHexa.svg'
import dark from './../../../resources/images/darkHexa.svg'
import regular from './../../../resources/images/hexa.svg'



 class ParticlesCanvas extends Component {

componentDidMount(){
  const canvas = document.getElementById("#canvas");
  const c = canvas.getContext('2d')
  const svg = new Image();
  svg.src = logo;

  function drawScene(){
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    
  }
  c.drawImage(svg, 0,0);
  svg.onload = drawScene;
}
  render() 
  
  {

   
    return (
      <canvas id="canvas">
        
      </canvas>
    )
  }
}
export default ParticlesCanvas;