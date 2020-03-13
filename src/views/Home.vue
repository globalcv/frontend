<template>
  <!-- Wrapper -->
  <div id="wrapper" class="has-text-centered-mobile">
    <!-- Hero -->
    <section id="hero" class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="has-text-green is-size-1 is-size-3-mobile">We make resumes easy</h1>
          <p class="has-text-green">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <button class="btn has-mustard-bg is-size-7 a-menu">try it now</button>
        </div>
      </div>
    </section>
    <!-- END Hero -->

    <!-- Twitter Feed -->
    <section id="twitter-feed" class="section has-white-mustard-gradient">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="box">
              <article class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img src="../assets/img/twitter-profile-guy.jpg" alt="Image" />
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>Some guy</strong>
                      <small>@someguy</small>
                      <small>5m</small>
                      <br />Frist time I used @fancyapp, was like the first time I
                      listened to The Beatles. Christmas came early, I guess.
                    </p>
                  </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item" aria-label="reply">
                        <span class="icon is-small">
                          <i class="fas fa-reply" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a class="level-item" aria-label="retweet">
                        <span class="icon is-small">
                          <i class="fas fa-retweet" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a class="level-item" aria-label="like">
                        <span class="icon is-small">
                          <i class="fas fa-heart" aria-hidden="true"></i>
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <article class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img src="../assets/img/twitter-profile-girl.jpg" alt="Image" />
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>Some girl</strong>
                      <small>@somegirl</small>
                      <small>5m</small>
                      <br />Fancy App is the answer to all your problems, all praise
                      the #fancyappgod!
                    </p>
                  </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item" aria-label="reply">
                        <span class="icon is-small">
                          <i class="fas fa-reply" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a class="level-item" aria-label="retweet">
                        <span class="icon is-small">
                          <i class="fas fa-retweet" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a class="level-item" aria-label="like">
                        <span class="icon is-small">
                          <i class="fas fa-heart" aria-hidden="true"></i>
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </div>
        </div>
        <p class="is-size-7 has-text-centered">See more at #globalcv</p>
      </div>
    </section>
    <!-- END Twitter Feed -->

    <!-- Features -->
    <section id="features" class="section has-mustard-bg">
      <div class="container">
        <div class="columns">
          <div class="column">
            <img class="feature-img" src="../assets/img/feature2.png" alt="feature" />
          </div>
          <div class="column">
            <h3 class="is-size-3">One resume. available Everywhere</h3>
            <p class="has-text-green paragraph">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="columns reverse-row-order">
          <div class="column">
            <h3 class="is-size-3">Privacy focused</h3>
            <p class="has-text-green paragraph">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
          <div class="column">
            <img class="feature-img" src="../assets/img/feature3.png" alt="feature" />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="columns">
          <div class="column">
            <h3 class="is-size-3">Open Source, all the way</h3>
            <p class="has-text-green paragraph">
              The world runs on open source and so do we here at globalcv. We
              release all of the code
            </p>
          </div>
          <div class="column">
            <img class="feature-img" src="../assets/img/feature1.png" alt="feature" />
          </div>
        </div>
      </div>
    </section>
    <!-- END Features -->
    <!-- Newsletter -->
    <section id="newsletter" class="section">
      <div class="container">
        <h3 class="is-size-3">Stay in touch</h3>
        <p class="has-text-green">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <div class="field newsletter-field">
          <div class="control">
            <input class="input newsletter-input" type="text" placeholder="mail@example.com" />
          </div>
        </div>
        <button class="btn has-mustard-bg is-size-7 a-menu">sign up now</button>
      </div>
    </section>
    <!-- END Newsletter -->
  </div>
  <!-- END Wrapper -->
</template>

<script>
export default {
  name: "Home"
};
</script>
<style scoped></style>
