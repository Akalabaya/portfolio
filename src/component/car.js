import React from 'react'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
export default function car() {
    return (
      <div id="carouselExampleControls" class="carousel slide " data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100"  src="https://careerfoundry.com/en/blog/uploads/web_dev_pillar_page.jpg" width="100%"   alt="First slide"/>
          <div class="carousel-caption d-none d-md-block">
     

    <h1>Welcome to RJ-TECHSOL</h1>
    <p className="" style={{"fontFamily":"sans-serif"}} >This is Ranjan Dey</p>
  </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://www.teahub.io/photos/full/88-885387_android-developer-wallpaper-hd.jpg" alt="Second slide"/>
          <div class="carousel-caption d-none d-md-block">
     
          <h1>All in one solution</h1>
    <p className="" style={{"fontFamily":"sans-serif"}} >Get all work done.</p>
   </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src=" https://careerfoundry.com/en/blog/uploads/web_dev_pillar_page.jpg" alt="Third slide"/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    )
}
