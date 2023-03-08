document.addEventListener('DOMContentLoaded', function () {
  const contactPageContainer = document.querySelector('#contact-us');

  contactPageContainer.innerHTML = `
    <br><br><br>
    <form id="main-contact-form">
    <div class="contact contact-top">
        <div class="row">
            <div class="col-md-3">
                <div class="contact-info">
                    <img src="/public/assets/imgs/contact-image.png" alt="image" />
                    <h2>Contact Us</h2>
                    <h4>We would love to hear from you!</h4>
                </div>
            </div>
            <div class="col-md-9">
                <div class="contact-form">
                    <div class="form-group">
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="fname" placeholder="Enter First Name"
                                name="fname">
                        </div>
                    </div>
                    <br>
                    <div class="form-group">
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="lname" placeholder="Enter Last Name"
                                name="lname">
                        </div>
                    </div>
                    <br>
                    <div class="form-group">
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="email" placeholder="Enter email"
                                name="email">
                        </div>
                    </div>
                    <br>
                    <div class="form-group">
                        <div class="col-sm-10">
                            <textarea class="form-control" rows="5" id="comment" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <br>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-default">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
<br><br>
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
                <div class="small text-black-50">+1 (555) 902-8832 </div>
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

  const form = document.querySelector("#main-contact-form");
  const firstName = document.querySelector("#fname");
  const lastName = document.querySelector("#lname");
  const email = document.querySelector("#email");
  const comment = document.querySelector("#comment");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!firstName.value || !lastName.value || !email.value || !comment.value) {
      alert("All fields are required");
      return;
    }
    const reg = new RegExp(
      "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
      "ig"
    );
    if (!reg.test(email.value)) {
      alert("Please enter a valid email address");
      return;
    }

    form.submit();
    location.replace("./index.html");
    alert("Thank you for sending us a message!");
  });

});




