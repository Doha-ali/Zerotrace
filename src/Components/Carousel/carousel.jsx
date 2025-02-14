import React from 'react'
import './carousel.css'
import vulnerability from '../images/vulnerability scan.png'
import Emailbreach from '../images/email breach.png'
import Emailspam from '../images/email spam.png'
import Codereview from '../images/code review.png'
import Passowrdmanager from '../images/password manager.png'
 const Mycarousel = () => {
  return (
    <div className='mycar'>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={vulnerability} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>The Vulnerability scan</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src={Emailbreach} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Email Breach</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>


    <div class="carousel-item">
      <img src={Codereview} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Code Reviews</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>


    <div class="carousel-item">
      <img src={Passowrdmanager} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Password Manager</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>


    <div class="carousel-item">
      <img src={Emailspam} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Email spam</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>


  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Mycarousel
