<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg h-100">
      <div class="container">
        <a href="#" class="nav--logo">LOGO</a>
        <div class="nav--menu">
          <ul class="nav--list d-flex">
            <li class="nav--item mx-2"><a href="" class="nav--link">Home</a></li>
            <li class="nav--item mx-2"><a href="" class="nav--link">Category</a></li>
            <li class="nav--item mx-2"><a href="" class="nav--link">Company</a></li>
            <li class="nav--item mx-2"><a href="" class="nav--link">Service</a></li>
            <li class="nav--item mx-2"><a href="" class="nav--link">Solution</a></li>
            <li class="nav--item mx-2"><a href="" class="nav--link">New&Events</a></li>
            <li class="nav--item mx-2"><a href="" class="nav--link">Contact Us</a></li>
          </ul>
        </div>
        <div class="nav--right">เปลี่ยนภาษา</div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
  .header{
    background-color: rgba(51,51,51,0.51);
    border-bottom: 1px solid rgba(255,255,255,0.45);
    height: 110px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .container{
    max-width: 1440px;
  }
  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .nav--link{
    color: #fff;
    font-weight: 500;
    text-decoration: none;
  }
</style>