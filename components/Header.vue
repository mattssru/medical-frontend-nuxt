<template>
  <header
    class="header"
    id="mainHeader"
    :class="{ 'navbar-shrink': isNavbarShrink }"
  >
    <nav class="navbar navbar-expand-lg h-100">
      <div class="container">
        <a href="#" class="nav--logo d-block"
          ><img src="~/assets/images/logo.webp" alt=""
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
        <div class="display--hamburger align-items-center">
          <button
            type="button"
            class="btn--hamburger p-0"
            :class="{ open: isMenuOpen }"
            @click="toggleHamburger"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div
          class="menu--bg"
          :class="{ 'menu--bg--active': isMenuOpen }"
          @click="closeMenu"
        ></div>
        <div class="menu--responsive" :class="{ 'menu--open': isMenuOpen }">
          <div class="menu--contain" id="navMenu">
            <a href="" class="nav--link">Home</a>
            <a href="" class="nav--link">Category</a>
            <a href="" class="nav--link">Company</a>
            <a href="" class="nav--link">Service</a>
            <a href="" class="nav--link">Solution</a>
            <a href="" class="nav--link">New&Events</a>
            <a href="" class="nav--link">Contact Us</a>
          </div>
        </div>
        <div class="nav--right">
          <button type="button" class="btn--search"></button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavbarShrink: false,
      isMenuOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isNavbarShrink = window.scrollY > 0;
    },
    toggleHamburger() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      if (this.isMenuOpen) {
        this.isMenuOpen = false;
      }
    },
    // toggleHamburger() {
    //   $('.btn--hamburger').toggleClass('open');
    //   $('.menu--responsive').toggleClass('menu--open');
    //   $('.menu--bg').toggleClass('menu--bg--active');
    // },
    // closeMenu() {
    //   if ($('.btn--hamburger').hasClass('open')) {
    //     this.toggleHamburger();
    //   }
    // },
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
  height: 60px;
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
}
.navbar-shrink .nav--logo img {
  height: 40px;
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
.display--hamburger {
  display: none;
}
.btn--hamburger {
  z-index: 1000;
  width: 29px;
  height: 23px;
  position: relative;
  background-color: transparent;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  border: none;
}

.btn--hamburger span {
  position: absolute;
  height: 3.4px;
  width: 100%;
  border-radius: 9px;
  background: #000;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}
.btn--hamburger span:nth-child(1) {
  top: 0px;
}
.btn--hamburger span:nth-child(2) {
  top: 8px;
}
.btn--hamburger span:nth-child(3) {
  top: 17px;
}
.btn--hamburger.open span:nth-child(1) {
  top: 14px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}
.btn--hamburger.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
  top: 14px;
}
.btn--hamburger.open span:nth-child(3) {
  top: 14px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
.btn--hamburger img {
  width: 100%;
  height: 100%;
}
.btn--hamburger:focus {
  outline: none;
  box-shadow: none;
}
.menu--bg {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.4s ease-in-out;
  visibility: hidden;
}
.menu--bg--active {
  opacity: 1;
  visibility: inherit;
  transition: opacity 0.3s ease-in-out;
}
.menu--responsive {
  position: fixed;
  left: auto;
  top: 0%;
  right: -68em;
  bottom: 0%;
  z-index: 999;
  display: flex !important;
  width: 100%;
  height: 100%;
  max-width: 30em;
  padding: 1.5em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2d2f2d;
  transition: right 0.35s ease-in-out, left 0.5s ease-in-out;
  transform-style: preserve-3d;
  overflow-x: hidden;
  overflow-y: auto;
}
.menu--open {
  right: 0;
  transition: right 0.35s ease-in-out, left 0.5s ease-in-out;
}
.menu--contain {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 15em;
  max-width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  position: inherit;
  top: auto;
  left: auto;
  padding: inherit;
  text-align: inherit;
  background-color: inherit;
  transition: inherit;
  box-shadow: none;
  border-radius: 0;
  z-index: inherit;
}
@media screen and (max-width: 991px) {
  .display--hamburger {
    display: flex;
    order: 3;
  }
  .btn--hamburger {
    display: flex;
  }
  .nav--right {
    margin-left: auto;
    margin-right: 20px;
  }
  .nav--menu {
    display: none;
  }
  .nav--link {
    padding-top: 0.7em;
    padding-bottom: 0.7em;
    font-size: 1.3rem;
  }
  .nav--link::before {
    bottom: 10px;
    width: 100%;
  }
}
</style>
