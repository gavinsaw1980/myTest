'use client'

import React from 'react';
import './style.css';
import Image from 'next/image';

export default function CarouselJob() {    
	return (  
        <div id="carouselExampleControls" className="carousel slide carousel-dark" data-bs-ride="carousel">
            <div className="carousel-inner px-lg-5 px-0">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="card job-bg-color border-0 special-radius pt-4 px-4 mb-lg-0 mb-4">
                                <div className="card-body">
                                    <p className='card-label w-25 pt-1 pb-1 mb-3 text-center'><Image src="/Jobs/icon-python.png" width={19} height={19} alt="python" className="me-1" />Python</p>
                                    <h5 className="card-title mb-3">Software Engineer</h5>
                                    <p className="card-location"><Image src="/Jobs/icon-location.png" alt="location" width={25} height={25} className="me-1" />London</p>
                                    <p className="card-location"><Image src="/Jobs/icon-cash.png" width={25} height={25} alt="cash" className="me-1" />£65,000</p>
                                    <p className="card-text mt-3">Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.</p>
                                    <button className="button card-link text-center w-100 border-0 py-3">View this job</button>
                                    <p className="card-date mt-3">Posted on 29/08/2023</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="card job-bg-color2 border-0 special-radius pt-4 px-4 mb-lg-0 mb-4">
                                <div className="card-body">
                                    <p className='card-label w-25 pt-1 pb-1 mb-3 text-center'><Image src="/Jobs/icon-python.png" width={19} height={19} alt="python" className="me-1" />Python</p>
                                    <h5 className="card-title mb-3 text-white">Software Engineer</h5>
                                    <p className="card-location"><Image src="/Jobs/icon-location.png" alt="location" width={25} height={25} className="me-1" />London</p>
                                    <p className="card-location"><Image src="/Jobs/icon-cash.png" width={25} height={25} alt="cash" className="me-1" />£65,000</p>
                                    <p className="card-text mt-3 text-white">Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.</p>
                                    <button className="button card-link text-center w-100 border-0 py-3">View this job</button>
                                    <p className="card-date mt-3 text-white">Posted on 29/08/2023</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="card job-bg-color3 border-0 special-radius pt-4 px-4">
                                <div className="card-body">
                                    <p className='card-label w-25 pt-1 pb-1 mb-3 text-center'><Image src="/Jobs/icon-python.png" width={19} height={19} alt="python" className="me-1" />Python</p>
                                    <h5 className="card-title mb-3">Software Engineer</h5>
                                    <p className="card-location"><Image src="/Jobs/icon-location.png" alt="location" width={25} height={25} className="me-1" />London</p>
                                    <p className="card-location"><Image src="/Jobs/icon-cash.png" width={25} height={25} alt="cash" className="me-1" />£65,000</p>
                                    <p className="card-text mt-3">Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.</p>
                                    <button className="button card-link text-center w-100 border-0 py-3">View this job</button>
                                    <p className="card-date mt-3">Posted on 29/08/2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="card job-bg-color3 border-0 special-radius pt-4 px-4 mb-lg-0 mb-4">
                                <div className="card-body">
                                    <p className='card-label w-25 pt-1 pb-1 mb-3 text-center'><Image src="/Jobs/icon-python.png" width={19} height={19} alt="python" className="me-1" />Python</p>
                                    <h5 className="card-title mb-3">Software Engineer</h5>
                                    <p className="card-location"><Image src="/Jobs/icon-location.png" alt="location" width={25} height={25} className="me-1" />London</p>
                                    <p className="card-location"><Image src="/Jobs/icon-cash.png" width={25} height={25} alt="cash" className="me-1" />£65,000</p>
                                    <p className="card-text mt-3">Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.</p>
                                    <button className="button card-link text-center w-100 border-0 py-3">View this job</button>
                                    <p className="card-date mt-3">Posted on 29/08/2023</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="card job-bg-color2 border-0 special-radius pt-4 px-4 mb-lg-0 mb-4">
                                <div className="card-body">
                                    <p className='card-label w-25 pt-1 pb-1 mb-3 text-center'><Image src="/Jobs/icon-python.png" width={19} height={19} alt="python" className="me-1" />Python</p>
                                    <h5 className="card-title mb-3 text-white">Software Engineer</h5>
                                    <p className="card-location"><Image src="/Jobs/icon-location.png" alt="location" width={25} height={25} className="me-1" />London</p>
                                    <p className="card-location"><Image src="/Jobs/icon-cash.png" width={25} height={25} alt="cash" className="me-1" />£65,000</p>
                                    <p className="card-text mt-3 text-white">Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.</p>
                                    <button className="button card-link text-center w-100 border-0 py-3">View this job</button>
                                    <p className="card-date mt-3 text-white">Posted on 29/08/2023</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="card job-bg-color border-0 special-radius pt-4 px-4">
                                <div className="card-body">
                                    <p className='card-label w-25 pt-1 pb-1 mb-3 text-center'><Image src="/Jobs/icon-python.png" width={19} height={19} alt="python" className="me-1" />Python</p>
                                    <h5 className="card-title mb-3">Software Engineer</h5>
                                    <p className="card-location"><Image src="/Jobs/icon-location.png" alt="location" width={25} height={25} className="me-1" />London</p>
                                    <p className="card-location"><Image src="/Jobs/icon-cash.png" width={25} height={25} alt="cash" className="me-1" />£65,000</p>
                                    <p className="card-text mt-3">Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.</p>
                                    <button className="button card-link text-center w-100 border-0 py-3">View this job</button>
                                    <p className="card-date mt-3">Posted on 29/08/2023</p>
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