document.addEventListener('DOMContentLoaded', function () {
  const heroPageContainer = document.querySelector('#home-page');

  heroPageContainer.innerHTML = `
<div class="masthead">
<div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
  <div class="d-flex justify-content-center">
    <div class="text-center">
      <h1 class="mx-auto my-0 text-uppercase">FlashHire</h1>
      <h2 class="text-white-50 mx-auto mt-2 mb-5">Your Instant Solution to Find Job Opportunities.</h2>
      <a id="get-started-btn" class="btn btn-primary" href="#">Get Started</a>
    </div>
  </div>
</div>
</div>
<!-- About-->
<section class="about-section text-center" id="about">
<div class="container px-4 px-lg-5">
  <div class="row gx-4 gx-lg-5 justify-content-center">
    <div class="col-lg-8">
      <h2 class="text-white mb-4 reveal">Making Finding Jobs a Breeze</h2>
      <p class="text-white-50 reveal">
        Looking for a fast and easy way to find part-time or freelance work?
        Our
        job search app makes it easy to find and apply for jobs in a variety of industries. With a
        user-friendly
        interface and intuitive search options, you can quickly find and apply for jobs that fit your skills
        and
        schedule. So whether you're looking for a side hustle or your next full-time gig, our app has got you
        covered.</a>
      </p>
    </div>
  </div>
</div>
</section>

<!-- Projects-->
<section class="projects-section bg-light" id="projects">
    <div class="container px-4 px-lg-5">
        <!-- Featured Project Row-->
        <div class="row gx-0 mb-4 mb-lg-5 align-items-center reveal">
            <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="/node_modules/startbootstrap-grayscale/dist/assets/img/bg-masthead.jpg" alt="..." /></div>
            <div class="col-xl-4 col-lg-5">
                <div class="featured-text text-center text-lg-left">
                    <h4>How it works</h4>
                    <p class="text-black-50 mb-0">Discover quick and easy job opportunities for today and tomorrow by searching based on your location and preferred job type. Apply to the jobs that interest you with just your application and resume, and start working towards your goals right away!</p>
                </div>
            </div>
        </div>
        <!-- Project One Row-->
        <div class="row gx-0 mb-5 mb-lg-0 justify-content-center reveal">
            <div class="col-lg-6"><img class="img-fluid" src="/node_modules/startbootstrap-grayscale/dist/assets/img/demo-image-01.jpg" alt="..." /></div>
            <div class="col-lg-6">
                <div class="bg-black text-center h-100 project">
                    <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-left">
                            <h4 class="text-white">Search a job</h4>
                            <p class="mb-0 text-white-50">Find the perfect job for you by searching based on your location and preferred job type. Explore a variety of exciting opportunities and take the first step towards a fulfilling career today!</p>
                            <hr class="d-none d-lg-block mb-0 ms-0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Project Two Row-->
        <div class="row gx-0 justify-content-center reveal">
            <div class="col-lg-6"><img class="img-fluid" src="/node_modules/startbootstrap-grayscale/dist/assets/img/demo-image-02.jpg" alt="..." /></div>
            <div class="col-lg-6 order-lg-first">
                <div class="bg-black text-center h-100 project">
                    <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-right">
                            <h4 class="text-white">Apply for job</h4>
                            <p class="mb-0 text-white-50">Easily apply to the jobs that interest you by submitting your application and resume. Showcase your skills and experience to potential employers and take the first step towards landing your dream job!</p>
                            <hr class="d-none d-lg-block mb-0 me-0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact-->
<section class="contact-section bg-black ">
<div class="container px-4 px-lg-5 reveal">
  <div class="row gx-4 gx-lg-5">
    <div class="col-md-4 mb-3 mb-md-0">
      <div class="card py-4 h-100">
        <div class="card-body text-center">
          <i class="fas fa-map-marked-alt text-primary mb-2"></i>
          <h4 class="text-uppercase m-0">Address</h4>
          <hr class="my-4 mx-auto" />
          <div class="small text-black-50">Tel Aviv, Israel</div>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-3 mb-md-0">
      <div class="card py-4 h-100">
        <div class="card-body text-center">
          <i class="fas fa-envelope text-primary mb-2"></i>
          <h4 class="text-uppercase m-0">Email</h4>
          <hr class="my-4 mx-auto" />
          <div class="small text-black-50"><a href="#!">move@gmail.com</a></div>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-3 mb-md-0">
      <div class="card py-4 h-100">
        <div class="card-body text-center">
          <i class="fas fa-mobile-alt text-primary mb-2"></i>
          <h4 class="text-uppercase m-0">Phone</h4>
          <hr class="my-4 mx-auto" />
          <div class="small text-black-50">+1 (555) 902-8832</div>
        </div>
      </div>
    </div>
  </div>
  <div class="social d-flex justify-content-center">
    <a class="mx-2" href="#!"><i class="fab fa-twitter"></i></a>
    <a class="mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
    <a class="mx-2" href="#!"><i class="fab fa-instagram"></i></a>
  </div>
  <p class="text-center mt-5 mb-0 fw-bold">Copyright &copy; IdanB</p>
</div>
</section>
`;
});

export const getStartedBtn = document.getElementById("get-started-btn");

