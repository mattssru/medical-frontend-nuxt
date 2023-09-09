<template>
  <header class="header" id="mainHeader">
    <nav class="navbar navbar-expand-lg h-100">
      <div class="container">
        <a href="#" class="nav--logo d-block"
          ><img src="../assets/images/logo.webp" alt=""
        /></a>
        <div class="nav--menu">
          <ul class="nav--list d-flex">
            <li class="nav--item mx-2">
              <a href="" class="nav--link">Home</a>
            </li>
            <li class="nav--item mx-2">
              <a href="" class="nav--link">Category</a>
            </li>
            <li class="nav--item mx-2">
              <a href="" class="nav--link">Company</a>
            </li>
            <li class="nav--item mx-2">
              <a href="" class="nav--link">Service</a>
            </li>
            <li class="nav--item mx-2">
              <a href="" class="nav--link">Solution</a>
            </li>
            <li class="nav--item mx-2">
              <a href="" class="nav--link">New&Events</a>
            </li>
            <li class="nav--item mx-2">
              <a href="" class="nav--link">Contact Us</a>
            </li>
          </ul>
        </div>
        <div class="nav--right">เปลี่ยนภาษา</div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        document.getElementById("mainHeader").classList.add("navbar-shrink");
      } else {
        document.getElementById("mainHeader").classList.remove("navbar-shrink");
      }
    },
  },
};
</script>

<style scoped>
.header {
  background-color: rgba(51, 51, 51, 0.51);
  border-bottom: 1px solid rgba(255, 255, 255, 0.45);
  transition: all 0.5s ease, background-color 0.3s ease-out;
  height: 110px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
}
.header.navbar-shrink {
  height: 50px;
}
.container {
  max-width: 1440px;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.nav--logo img {
  height: 60px;
  transition: all 0.5s ease, background-color 0.3s ease-out;
  margin-left: 61px;
}
.nav--link {
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  position: relative;
}
.nav--link::before {
  content: "";
  position: absolute;
  left: -4%;
  bottom: -20px;
  height: 2px;
  width: 110%;
  transform: rotateY(90deg);
  background: #fff;
  transition: ease-in-out 0.4s;
}
.nav--link:hover::before {
  transform: rotateY(0);
}
</style>
