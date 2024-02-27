import React from "react";
import ReactDOM from "react-dom";
import paliat from '../images/high-angle-man-sleeping-with-mask.jpg'
import respite from '../images/young-doctor-helping-one-guy-stand-up.jpg'
import supported from '../images/male-social-worker-taking-care-old-woman.jpg'
import { Carousel } from 'flowbite-react';
function Hero(){
    return(
class Hero1 extends React.Component {
  /* return (


    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel slideInterval={5000} pauseOnHover>
      <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
    </Carousel>
  </div>
  ) */

  

 
    constructor(props) {
      super(props);
      this.state = {
        images: [
          "https://picsum.photos/200/300/?image=523",
          "https://picsum.photos/200/300/?image=524",
          "https://picsum.photos/200/300/?image=525",
          "https://picsum.photos/200/300/?image=526"
        ],
        selectedImage: "https://picsum.photos/200/300/?image=523",
        in: 0
      };
    }
  
    componentDidMount() {
      setInterval(() => {
        this.setState(prevState => {
          if (prevState.in === 3) {
            return {
              in: 0,
              selectedImage: this.state.images[0]
            };
          } else {
            return {
              in: prevState.in + 1,
              selectedImage: this.state.images[prevState.in + 1]
            };
          }
        });
      }, 3000);
    }
  
    render() {
      const backgroundStyle = {
        background: `url('${this.state.selectedImage}')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        backgroundSize: "cover"
      };
  

      return (
        <div className="Hero1">
          <div key={this.state.selectedImage}>
            <div style={backgroundStyle} className="wave wave5" />
            <div style={backgroundStyle} className="wave wave4" />
            <div style={backgroundStyle} className="wave wave3" />
            <div style={backgroundStyle} className="wave wave2" />
            <div style={backgroundStyle} className="wave wave1" />
            <div style={backgroundStyle} className="wave wave0" />
          </div>
        </div>
      );
    }
  }
    )
}

export default Hero