<template lang="">
  <main>
    <div class="alert alert-primary" role="alert">
      A simple primary alert—check it out!
    </div>
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="sdfsdf">sdf2222sdfsd</div>
    <!-- Example single danger button -->
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-danger dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Action
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>
    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div>
      <p>
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Link with href
        </a>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Button with data-bs-target
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: "default",
  head: {},
};
</script>
<style scoped>
main {
  padding-top: 110px;
  min-height: 210vh;
}
</style>
