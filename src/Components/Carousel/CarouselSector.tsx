'use client'

import React from 'react';
import './style.css';
import Image from 'next/image';

export default function CarouselSector() {    
	return (    
        <div id="carouselExampleControls" className="carousel slide carousel-dark" >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 position-relative mb-lg-0 mb-4">
                            <Image src="/Our-Sector/slide1.png" alt="sector 1" width={578} height={311} className="mx-auto d-block img-fluid" />
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
                            <Image src="/Our-Sector/slide2.png" alt="sector 2" width={578} height={311} className="mx-auto d-block img-fluid" />
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
                            <Image src="/Our-Sector/slide2.png" alt="sector 3" width={578} height={311} className="mx-auto d-block img-fluid" />
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
                            <Image src="/Our-Sector/slide1.png" alt="sector 4" width={578} height={311} className="mx-auto d-block img-fluid" />
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
                            <Image src="/icon-arrow-prev.png" alt="prev" width={34} height={34} className="me-4" />
                        </a>
                        <a role="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <Image src="/icon-arrow-next.png" width={34} height={34} alt="next" />
                        </a>
                    </div>
                    <div className="col-8"></div>
                    <div className="col-lg-2 col-sm-12 text-center">
                        <p className="mt-1"><a href="#">View more jobs</a></p>
                    </div>
                </div>
            </div>
        </div>
	)
}