---
layout: default
title: Contact
---

<section class="ftco-section contact-section">
  <div class="container mt-5">
    <div class="row d-flex mb-5 contact-info">
      <div class="col-md-12 mb-4">
        <h2 class="h2">Contact Information</h2>
      </div>
      <div class="w-100"></div>
      <div class="col-md-3">
        <p><span>Phone:</span> <a href="tel://+34617077959">(+34) 617 077 959</a></p>
      </div>
      <div class="col-md-4">
        <p><span>Email:</span> <a href="mailto:{{ site.social.email }}">{{ site.social.email }}</a></p>
      </div>
      <div class="col-md-3">
        <p><span>Location:</span> <a href="">Barcelona, Spain</a></p>
      </div>
    </div>
    <div class="row block-9">
      <div class="col-md-8 pr-md-8">
        <form action="https://formspree.io/{{ site.social.email }}" method="POST">
          <div class="form-group">
            <input type="text" class="form-control" name="_replyto" placeholder="Your Email">
          </div>
          <div class="form-group">
            <textarea name="name" id="" cols="30" rows="11" class="form-control" placeholder="Message"></textarea>
          </div>
          <div class="form-group">
            <input type="submit" value="Send Message" class="btn btn-outline-primary py-3 px-5">
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
