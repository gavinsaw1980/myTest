import Search from "../Components/Form/Search";
import CarouselSector from "../Components/Carousel/CarouselSector";
import CarouselJob from "../Components/Carousel/CarouselJob";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="content">
      {/* search job section */}
      <div className="blue bg-circle">
        <div className="container text-lg-left extra-space px-4">
          <div className="row">
            <div className="col-lg-6 col-sm-12 order-sm-last order-lg-1 order-last text-center text-xl-start align-self-center">
              <p className="text-white small">Software Recruitment Specialists</p>
              <h1 className="display-3 text-white mb-4">Elevate your career</h1>
              <Search />
            </div>
            <div className="col-lg-6 col-sm-12 order-sm-first order-lg-2">
              <Image src='/image-search.png' alt="Elevate your career" width={507} height={481} className='d-block mx-md-auto img-fluid mb-4 mb-xl-0' />
            </div>
          </div>
        </div>
      </div>

      {/* who we work with section */}
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <p className='subtitle text-center'>Who we work with</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm pb-lg-0 pb-4 pt-3">
            <Image src='/logo-microsoft.png' alt="Microsoft" width={141} height={30} className='d-block mx-md-0 mx-auto' />
          </div>
          <div className="col-sm pb-lg-0 pb-4 pt-3">
            <Image src='/logo-oracle.png' alt="Oracle" width={159} height={22} className='d-block mx-md-0 mx-auto' />
          </div>
          <div className="col-sm pb-lg-0 pb-4 pt-3">
            <Image src='/logo-atlassian.png' alt="Atlassian" width={183} height={22} className='d-block mx-md-0 mx-auto' />
          </div>
          <div className="col-sm pb-lg-0 pb-4 pt-2">
            <Image src='/logo-cloudflare.png' alt="Cloudfare" width={200} height={31} className='d-block mx-auto' />
          </div>
          <div className="col-sm pt-3">
            <Image src='/logo-vmware.png' alt="vmware" width={147} height={22} className='d-block mx-md-0 mx-auto float-xl-end float-md-none' />
          </div>
        </div>
      </div>

      {/* Latest Jobs section */}
      <div className="lavendar">
        <div className="container extra-space px-4 px-md-0">
          <div className="row">
            <div className="col text-center">
              <h2 className="display-4 mb-4">Latest Jobs</h2>
            </div>
          </div>
          <CarouselJob />
        </div>
      </div>

      {/* our sectors section */}
      <div className="container extra-space px-4 px-md-0">
        <div className="row">
          <div className="col text-center">
            <h2 className="display-4 mb-4">Our sectors</h2>
          </div>
        </div>
        <CarouselSector />
      </div>

      {/* why us section */}
      <div className="blue">
        <div className="container text-lg-left extra-space px-4 px-md-0">
        <div className="row">
          <div className="col-lg-7">
            <Image src='/image-whyus.png' alt="Why us?" width={580} height={301} className='d-block float-md-none mx-md-auto float-xl-start img-fluid mb-4 mb-xl-0' />
          </div>
          <div className="col-lg-5">
            <h3 className="mb-3 text-white display-6">Why us?</h3>
            <p className="text-white pb-4">Lorem ipsum dolor sit amet consectetur. Tellus purus cras ornare placerat enim at ut. Lorem egestas aliquam dis dignissim. Mauris ultricies tortor netus purus proin. Amet cursus posuere velit odio nibh auctor. Id nulla vitae ipsum morbi tellus eget lacus aliquet faucibus. Varius donec arcu placerat augue eget.</p>
            <button className="px-3 py-2 common-white-btn">More about us</button>
          </div>
        </div>
        </div>
      </div>

      {/* What we do section */}
      <div className="red">
        <div className="container text-lg-left extra-space px-4 px-md-0">
          <div className="row">
            <div className="col-lg-5 order-sm-last order-lg-1 order-last">
              <h3 className="mb-3 display-6">What we do</h3>
              <p className="pb-4">Lorem ipsum dolor sit amet consectetur. Tellus purus cras ornare placerat enim at ut. Lorem egestas aliquam dis dignissim. Mauris ultricies tortor netus purus proin. Amet cursus posuere velit odio nibh auctor. Id nulla vitae ipsum morbi tellus eget lacus aliquet faucibus. Varius donec arcu placerat augue eget.</p>
              <button className="px-3 py-2 common-black-btn">View our services</button>
            </div>
            <div className="col-lg-7 order-sm-first order-lg-2">
              <Image src='/image-whatwedo.png' alt="What we do" width={580} height={301} className='d-block float-md-none mx-md-auto float-xl-end img-fluid mb-4 mb-xl-0' />
            </div>
          </div>
        </div>
      </div>

      {/* Latest insights section */}
      <div className="container extra-space px-4 px-md-0">
        <div className="row">
          <div className="col">
            <h2 className="mb-3 display-4">Latest insights</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <p>Lorem ipsum dolor sit amet consectetur. A aliquam pellentesque malesuada venenatis consectetur egestas dui.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="row">
              <div className="col-12">
                {/* blog 1 */}
                <div className="card border-0 position-relative mb-5 animation">
                  <div className="position-absolute top-0 end-0 red card-label px-2 py-3 me-4 rounded-bottom">
                    Education
                  </div>
                  <Image src="/insights/img-placeholder.png" width={373} height={220} className="card-img-top" alt="blog 1" />
                  <div className="card-body border bottom-radius p-4">
                    <p className="card-subtitle mt-3 mb-3 small">25/08/2023</p>
                    <p className="card-title mb-3">Top Tips for a stand out CV</p>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur. Pellentesque integer scelerisque amet mauris dolor aliquam lobortis.</p>
                    <p className="card-author mt-4 small"><Image src="/insights/author.png" alt="author" width={25} height={25} className="me-3" />J. Gonzalez</p>
                    <div className="position-absolute bottom-0 end-0">
                      <a href="#"><Image src="/insights/btn.png" alt="cta-button" width={81} height={83} /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* view our blog */}
              <div className="col-12">
                <div className="text-center px-5 light-yellow view mb-5 mb-lg-0">
                  <button className="px-3 py-2 common-black-btn">View our blogs</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="row">
              <div className="col-12">
                <div className="move-top">
                  {/* blog 2 */}
                  <div className="card border-0 position-relative mb-5 animation">
                    <div className="position-absolute top-0 end-0 light-yellow card-label px-2 py-3 me-4 rounded-bottom">
                      Education
                    </div>
                    <Image src="/insights/img-placeholder-2.png" width={373} height={220} className="card-img-top" alt="blog 2" />
                    <div className="card-body border bottom-radius p-4">
                      <p className="card-subtitle mt-3 mb-3 small">25/08/2023</p>
                      <p className="card-title mb-3">Gain skills and fast track your career</p>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur. Pellentesque integer scelerisque amet mauris dolor aliquam lobortis.</p>
                      <p className="card-author mt-4 small"><Image src="/insights/author.png" alt="author" width={25} height={25} className="me-3" />J. Gonzalez</p>
                      <div className="position-absolute bottom-0 end-0">
                        <a href="#"><Image src="/insights/btn.png" alt="cta-button" width={81} height={83} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                {/* blog 3 */}
                <div className="card border-0 position-relative mb-5 mb-lg-0 animation">
                    <div className="position-absolute top-0 end-0 light-yellow card-label px-2 py-3 me-4 rounded-bottom">
                      Education
                    </div>
                    <Image src="/insights/img-placeholder-3.png" width={373} height={220} className="card-img-top" alt="blog 3" />
                    <div className="card-body border bottom-radius p-4">
                      <p className="card-subtitle mt-3 mb-3 small">25/08/2023</p>
                      <p className="card-title mb-3">Resources for developers</p>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur. Pellentesque integer scelerisque amet mauris dolor aliquam lobortis.</p>
                      <p className="card-author mt-4 small"><Image src="/insights/author.png" alt="author" width={25} height={25} className="me-3" />J. Gonzalez</p>
                      <div className="position-absolute bottom-0 end-0">
                        <a href="#"><Image src="/insights/btn.png" alt="cta-button" width={81} height={83} /></a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="row">
              <div className="col-12">
                <div className="move-top2">
                  {/* blog 4 */}
                  <div className="card border-0 position-relative mb-5 animation">
                    <div className="position-absolute top-0 end-0 light-yellow card-label px-2 py-3 me-4 rounded-bottom">
                      Education
                    </div>
                    <Image src="/insights/img-placeholder-4.png" width={373} height={220} className="card-img-top" alt="blog 4" />
                    <div className="card-body border bottom-radius p-4">
                      <p className="card-subtitle mt-3 mb-3 small">25/08/2023</p>
                      <p className="card-title mb-3">Resources for developers</p>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur. Pellentesque integer scelerisque amet mauris dolor aliquam lobortis.</p>
                      <p className="card-author mt-4 small"><Image src="/insights/author.png" alt="author" width={25} height={25} className="me-3" />J. Gonzalez</p>
                      <div className="position-absolute bottom-0 end-0">
                        <a href="#"><Image src="/insights/btn.png" alt="cta-button" width={81} height={83} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                  {/* blog 5 */}
                  <div className="card border-0 position-relative animation">
                    <div className="position-absolute top-0 end-0 light-yellow card-label px-2 py-3 me-4 rounded-bottom">
                      Education
                    </div>
                    <Image src="/insights/img-placeholder-5.png" width={373} height={220} className="card-img-top" alt="blog 5" />
                    <div className="card-body border bottom-radius p-4">
                      <p className="card-subtitle mt-3 mb-3 small">25/08/2023</p>
                      <p className="card-title mb-3">Resources for developers</p>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur. Pellentesque integer scelerisque amet mauris dolor aliquam lobortis.</p>
                      <p className="card-author mt-4 small"><Image src="/insights/author.png" alt="author" width={25} height={25} className="me-3" />J. Gonzalez</p>
                      <div className="position-absolute bottom-0 end-0">
                        <a href="#"><Image src="/insights/btn.png" alt="cta-button" width={81} height={83} /></a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
