<template>
  <div
    :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
    class="pt-5 p-st"
  >        
  
    <div
      class="container"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div class="row align-items-center">
        <particles-bg color="#4d76ae" num=200 type="cobweb" :bg="false" />
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center">
          <!--<img :src="picture" />-->
        <lottie-player src="https://lottie.host/183659a1-bcbc-4c49-95d0-58d238c75ce3/uhSyHh5sKi.json" background="##FFFFFF" speed="1" style="width: 400px; height: 400px" loop autoplay direction="1" mode="normal"></lottie-player>
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5">
          <span
            class="home-title"
            :class="{ pgray: !nightMode, 'text-light': nightMode }"
            >Hello there!</span
          >
          <div>
            <p v-html="description"></p>
          </div>
          <div class="text-center pb-4">
            <button
              class="btn btn-outline-secondary mx-2 "
              @click="open('linkedin')"
              v-tooltip.bottom="'LinkedIn'"
            >
              <i class="fab fa-linkedin"></i>
            </button>
            <button
              class="btn githubut btn-outline-secondary mx-2"
              @click="open('github')"
              v-tooltip.bottom="'GitHub'"
            >
              <i class="fab fa-github"></i>
            </button>
            <button
              class="btn fbbut btn-outline-secondary mx-2"
              @click="open('facebook')"
              v-tooltip.bottom="'Facebook'"
            >
              <i class="fab fa-facebook"></i>
            </button>
            <button
              class="btn instabut btn-outline-secondary mx-2"
              @click="open('instagram')"
              v-tooltip.bottom="'Instagram'"
            >
              <i class="fab fa-instagram"></i>
            </button>
            <!-- <button
              class="btn btn-outline-secondary mx-2"
              @click="open('resume')"
              v-tooltip.bottom="'Resume'"
            >
              <i class="fa fa-file"></i>
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

import Wave from "./helpers/Wave";

import "@lottiefiles/lottie-player";
import { ParticlesBg } from "particles-bg-vue";

export default {
  name: "Home",
  components: {
    Wave,
    ParticlesBg,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      video: info.animvideo,
      picture: info.flat_picture,
      description: info.description,
      name: info.name,
      linkedin: info.links.linkedin,
      github: info.links.github,
      instagram: info.links.instagram,
      facebook: info.links.facebook,
      // resume: info.links.resume
    };
  },
  methods: {
    open(link) {
      switch (link) {
        case "linkedin":
          window.open(this.linkedin, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
        case "facebook":
          window.open(this.facebook, "_blank");
          break;
        case "instagram":
          window.open(this.instagram, "_blank");
          break;
        // case "resume":
        //   window.open(this.resume, "_blank");
        //   break;
      }
    },
  },
};
</script>

<style scoped>

canvas {
  height: 15%;
  position: absolute;
  left: 0;
}

.home-title {
  font-size: 28px;
  font-weight: 500;
}

img {
  max-width: 300px;
  margin-top: 60px;
  transform: rotateY(180deg);
}

@media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid rgb(205, 205, 205);
  }
}

.fa {
  font-size: 15px;
}

.btn {
  border-color: #669db3ff;
  color: #669db3ff;
}

.btn:hover {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.instabut:hover {
  background-color: rgb(219, 9, 107);
  border-color: rgb(219, 9, 107);
  color: white;
}

.githubut:hover {
  background-color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
  color: white;
}

.fbbut:hover {
  background-color: rgb(19, 82, 255);
  border-color: rgb(19, 82, 255);
  color: white;
}

.btn:focus {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.btn:focus {
  outline: none !important;
}

p {
  text-align: justify;
  font-weight: 400;
}

/* LEAVES */
</style>
