import { Link } from 'react-router-dom';
import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
   
    <>
        <div class=" top container-fluid text-white pt-2 pb-4 d-none d-lg-flex" >
        <div class="container pb-2">
            <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex">
                    <i class="fa-solid fa-phone-volume" id="title"></i>
                    <div class="ms-1">
                        <h6 class="text-white mb-0" id="title">Call Now</h6>
                        <span id="title">01940-506556</span>
                    </div>
                </div>
                <h3 class="text-white mb-0" id="title">Websky</h3>
                
                <div class="d-flex">
                    <i class="fa-solid fa-envelope" id="title"></i>
                    <div class="ms-2">
                        <h6 class="text-white mb-0" id="title">Mail Now</h6>
                        <span id="title">hmmukarram1977@gmail.com</span>
                    </div>
                </div>
               
                
            </div>
        </div>
    </div>
    <div class="container-fluid sticky-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-3 bg-light" >
                <a href="#" class="navbar-brand d-lg-none">
                    <h1 class="text-warning m-0" id="title">Web<span class="text-primary" id="title">sky</span></h1>
                </a>
                <button type="button" class="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="NavID" aria-expanded="false"
                    aria-label="toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
                        <Link to='/'  class="nav-item nav-link active" aria-current="page" id="nav">Home</Link>
                        <Link to='/About'  class="nav-item nav-link text-dark">About</Link>
                       
                        <div class="nav-item dropdown">
                            <Link to='/Services' class="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown">Services</Link>
                            <div class="dropdown-menu bg-light m-0">
                                <Link to='MyWork'  class="dropdown-item text-dark">my work</Link>
                                <Link to='/Testimonial'  class="dropdown-item text-dark">Testimonial</Link>
                                <Link to='/FAQ'  class="dropdown-item text-dark">FAQ</Link>
                            </div>
                        </div>
                        <Link  to='/Contact' class="nav-item nav-link text-dark">Contact</Link>
                    </div>
                    <div className='text-center'>
                        <Link to='/Login' type="button" class="btn btn-primary me-3">Login</Link>
                         <Link to='/Signup' type="button" class="btn btn-success">Signup</Link>
                    </div>
                    <div class="ms-auto d-none d-lg-flex">
                        <a class="btn btn-sm-square btn-primary ms-2" href="#"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-sm-square btn-primary ms-2" href="#"><i class="fab fa-github"></i></a>
                        <a class="btn btn-sm-square btn-primary ms-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-sm-square btn-primary ms-2" href="#"><i class="fab fa-youtube"></i></a>
                        <button class="btn-search btn btn-primary btn-md-square  ms-2" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fas fa-search text-white"></i></button>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    </>
  )
}

export default NavBar