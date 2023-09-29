'use client'

import React from 'react';
import './style.css';

export default function CarouselSector() {    
	return (    
        <div id="carouselExampleControls" className="carousel slide carousel-dark" >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 position-relative mb-lg-0 mb-4">
                            <img src="../Our-Sector/slide1.png" className="mx-auto d-block img-fluid" />
                            <div className="w-75 position-absolute bottom-0 start-50 translate-middle-x pb-4 text-center">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-12 col-md-12 pt-2">
                                        <p className="title">Software engineering</p>
                                    </div>
                                    <div className="col-xl-6 col-lg-12 col-md-12 text-xl-end text-md-center">
                                        <button className="btn view-btn py-3 px-4">View more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 position-relative">
                            <img src="../Our-Sector/slide2.png" className="mx-auto d-block img-fluid" />
                            <div className="w-75 position-absolute bottom-0 start-50 translate-middle-x pb-4 text-center">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-12 col-md-12 pt-2">
                                        <p className="title">DevOps</p>
                                    </div>
                                    <div className="col-xl-6 col-lg-12 col-md-12 text-xl-end text-md-center">
                                        <button className="btn view-btn py-3 px-4">View more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 position-relative mb-lg-0 mb-4">
                            <img src="../Our-Sector/slide2.png" className="mx-auto d-block img-fluid" />
                            <div className="w-75 position-absolute bottom-0 start-50 translate-middle-x pb-4 text-center">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-12 col-md-12 pt-2">
                                        <p className="title">title</p>
                                    </div>
                                    <div className="col-xl-6 col-lg-12 col-md-12 text-xl-end text-md-center">
                                        <button className="btn view-btn py-3 px-4">View more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 position-relative">
                            <img src="../Our-Sector/slide1.png" className="mx-auto d-block img-fluid" />
                            <div className="w-75 position-absolute bottom-0 start-50 translate-middle-x pb-4 text-center">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-12 col-md-12 pt-2">
                                        <p className="title">title</p>
                                    </div>
                                    <div className="col-xl-6 col-lg-12 col-md-12 text-xl-end text-md-center">
                                        <button className="btn view-btn py-3 px-4">View more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="row mt-5">
                    <div className="col-lg-2 col-sm-12 text-center mb-lg-0 mb-4">
                        <a role="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <img src="../icon-arrow-prev.png" className="me-4" />
                        </a>
                        <a role="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <img src="../icon-arrow-next.png" />
                        </a>
                    </div>
                    <div className="col-8"></div>
                    <div className="col-lg-2 col-sm-12 text-center">
                        <p className="mt-1"><a href="#">More on our sectors</a></p>
                    </div>
                </div>
            </div>
        </div>
	)
}