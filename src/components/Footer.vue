<template>
  <div class="bg-secondary">
    <div class="container py-3">
      <div class="row pt-1 align-items-center">
        <div
          class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow"
          style="color: white;"
        >
          <span>© 2024 Copyright: Konstantinos Tsaousidis</span>
        </div>

        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <div class="text-center">
            <button
              class="btn btn-outline-secondary mx-2 "
              @click="open('linkedin')"
            >
              <i class="fab fa-linkedin"></i>
            </button>
            <button
              class="btn githubut btn-outline-secondary mx-2"
              @click="open('github')"
            >
              <i class="fab fa-github"></i>
            </button>
            <button
              class="btn instabut btn-outline-secondary mx-2"
              @click="open('instagram')"
            >
              <i class="fab fa-instagram"></i>
            </button>
            <button
              class="btn fbbut btn-outline-secondary mx-2"
              @click="open('facebook')"
            >
              <i class="fab fa-facebook"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Footer",
  data() {
    return {
      linkedin: info.links.linkedin,
      github: info.links.github,
      angellist: info.links.angellist,
      resume: info.links.resume,
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
        case "angellist":
          window.open(this.angellist, "_blank");
          break;
        case "resume":
          window.open(this.resume, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>
span {
  font-weight: 500;
}

.btn {
  border-color: white;
  color: white;
}

.btn:hover {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: gray;
}

.btn:focus {
  background-color: white;
  border-color: white;
  color: gray;
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

@media screen and (max-width: 580px) {
  .pbelow {
    padding-bottom: 20px;
    text-align: center;
  }
}
</style>
