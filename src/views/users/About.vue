<template>
  <div class="about">
    <div class="container-container">
      <b-carousel class="container-carousel" id="carousel"  v-model="slide" :interval="4000" controls indicators @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <b-carousel-slide class="container-image">
          <template v-slot:img>
            <img class="img-fluid w-100 carousel-image" src="@/assets/about/openinghours.jpeg" alt="image slot">
          </template>
        </b-carousel-slide>
        <b-carousel-slide class="container-image">
          <template v-slot:img>
            <img class="img-fluid w-100 carousel-image" src="@/assets/about/queue.jpeg" alt="image slot">
          </template>
        </b-carousel-slide>
        <b-carousel-slide class="container-image">
          <template v-slot:img>
            <img class="img-fluid w-100 carousel-image" src="@/assets/about/dining.jpeg" alt="image slot">
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <div class="about__garis">
      <div class="about__baris">
        <label class="about__boldtitle">ABOUT US</label>
      </div>
      <div class="about__desc">
        <p class="about__par">
          Full Moon Liquor Bar & Dim Sum is a Hong kong-inspired bar and dim sum parlour, dressed in a vintage industrial interior like a seductive Chinese temptress. With bright red neon lights that decorate the entrance as well as bar counter, Full Moon has attracted loyal devotees ever since its establishment in 2014.
          <br><br>
          From the bar, Full Moon boasts an infinite list of liquor, perfect to hype up the young night. Beside the highly-curated Asian cuisines, Full Moon's house cocktails are mostly seasonal, which depends on the best available fresh ingredient of the season. Not to mention the range of dim sum that arrives in generous servings.
        </p>
      </div>
    </div> 

    <section class="container-paralax banner">
      <div class="banner__inner">
        <div class="banner__images">
          <img class="banner__image" src="@/assets/about/bar2.jpg"/>
        </div>
      </div>
      <div class="banner__content">
        <div class="banner__caption"> 
          <span class="caption">WHERE ARE WE?</span>
        </div>
      </div>
    </section>
    <div class="about__column__container">
      <div class="about__column">
        <div class="about__left">
          <p class="about__left__par">
            <label style="font-weight:bold">GRAND INDONESIA</label><br>
            1ST FLOOR<br>
            JL. M.H THAMRIN NO.1<br>
            JAKARTA 10310<br><br>
            <label style="font-weight:bold">CONTACT US</label><br>
            <label style="text-decoration:underline">+6221 1063 8926</label>
          </p>
        </div>
        <div class="about__right">
          <p class="about__right__par">
            <label style="font-weight:bold">PLAZA INDONESIA</label><br>
            GROUND FLOOR<br>
            JL. M.H THAMRIN NO.28-30<br>
            JAKARTA 10350<br><br>
            <label style="font-weight:bold">CONTACT US</label><br>
            <label style="text-decoration:underline">+6212 9612 5588</label>
          </p>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  title: 'Full Moon 🌕 - About',
  name: 'Home',
  data: function() {
    return {
      slide: 0,
      sliding: null
    }
  },
  mounted: function() {
    this.startAnimation();
  },
  methods: {
    startAnimation: function() {

      gsap.registerPlugin(ScrollTrigger) 

      gsap.to(".about__garis",{duration: 1, opacity: 1, ease:"power2.in"})

      gsap.to(".banner", {
        scrollTrigger: {
          trigger: ".banner",
          scrub: true,
          start: "50% 80%",
          end: "bottom -100%",
          toggleClass: "active",
          ease: "power2"
        }
      });

      gsap.to(".banner__image", {
        scrollTrigger: {
          trigger: ".container-container",
          scrub: 0.5,
          start: "top bottom",
          end: "bottom -300%",
          ease: "power2"
        },
        y: "-30%"
      });

      gsap.to(".about__left",{duration: 1, opacity: 1, ease:"power2.in"},1)

      const tlLocation = gsap.timeline({
        scrollTrigger:{
          trigger:".about__column__container",
          start:'top 75%',
          end: 'bottom 25%',
        }
      });
      tlLocation.fromTo(".about__column", {
          y:25,
          opacity:0,
          stagger:0.1,
          scrub: 0.5,
        }, {y:0, opacity: 1}, 0)
    },

    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss" scoped>

.container-paralax {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  color: white;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.banner__inner {
  min-width: 300px;
  display: flex;
  position: relative;
  width: 100vw;
  height: 200%;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
  }
}

.banner__image {
  width: 100vw;
  height: 100%;
  object-fit: cover;
  filter: brightness(95%);
}

.banner__content {
  display: none;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.caption {
  font-size: 32px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 10px;
  font-weight: 600;
  max-width: 80vw;
}

.banner__caption {
  --padding: 1.5vmin;
  --duration: 400ms;
  --delay: calc(var(--duration) / 2);
  --ease: cubic-bezier(0.25, 1, 0.5, 1);

  position: absolute;
  display: inline-block;
  overflow: hidden;
  top: 50%;
  transform: translateY(-50%);
  padding: var(--padding);

  &::after {
    content: "";
    position: absolute;
    top: calc(100% - var(--padding));
    left: 0;
    background-color: white;
    width: 100%;
    height: 3px;
    transform: scaleX(0);
    transition: transform var(--duration) var(--delay) var(--ease);
  }

  span {
    display: block;
    transform: translateY(110%);
    transition: transform var(--duration) var(--ease);
  }

  .active & {
    &::after {
      transform: scaleX(1);
      transition-delay: 0s;
    }
    span {
      transform: translateY(0);
      transition-delay: var(--delay);
    }
  }
}

.about {
  padding:0rem 0em ;

  &__logo{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
    padding-bottom: 1em ;
  }

  &__banner{
    width: 100vw;
    margin: -8rem 0em;
  }

  &__title{
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    margin-top: 1vw;
    margin-left: auto;
    text-align: center;
    margin-right: auto;
    padding-bottom:3em;
    line-height: 2;
  }

  &__column{
    display: grid;
    margin: 0.5em 0 1em 0;
    padding: 4em 5vw;
    grid-template-columns: repeat(2,1fr);
  }

  &__left{
    display: flex;
    flex-direction: column;
    align-items: center;
    &__par{
      text-align: center;
      line-height: 2;
    }
  }

  &__right{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid $light-grey;
    &__par{
      text-align: center;
      line-height: 2;
    }
  }

  &__desc{
    padding-top:2em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__garis{
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 900px;
    margin: 3.2rem 2rem 5rem;
    margin-left: auto;
    margin-right: auto;
    opacity: 0;
  }

  &__baris{
    display: flex;
    white-space: nowrap;
    justify-content: center;
  }

  &__boldtitle{
    font-size: 30px;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat', sans-serif ;
    padding-left: 18px;
    padding-right: 13px;
    letter-spacing: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid $light-grey;
  }

  &__boldcolumn{
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:2em 15em 0em 15em; 
  }

  &__par{
    font-size: 16px;
    padding: 0 2rem;
    line-height: 2;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    text-align:center;
    align-items: center;
  }
}

.carousel-image{
  background-size: contain;
  object-fit: cover;
  transform: translateY(-100px);
}

.container-image {
  max-height: 500px;
  height: 100%;
}

.countainer-carousel{
  height: 100px;
}

@media screen and (max-width: 500px){
    .about{
        &__column { 
            grid-template-columns: repeat(1,1fr);
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        &__right{
          padding: 2em 0 1em 0;
          border-left: 0px;
        }

        &__left {
          padding: 1em 0 1em 0;
          border-bottom: 1px solid $light-grey;
        }
    }
}

</style>