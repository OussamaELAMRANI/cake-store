<template>
  <ul class="navbar">
        <li><a class="active" href="#home"><i class="fa fa-birthday-cake" aria-hidden="true"></i>Home</a></li>
        <li><a href="#contact"><i class="fa fa-list" aria-hidden="true"></i>cakes</a></li>
        <li><a href="#news"><i class="fa fa-th-large" aria-hidden="true"></i>categories</a></li>
        <li><a href="#contact"><i class="fa fa-envelope" aria-hidden="true"></i>Contact us</a></li>
        <li style="float:right"><a href="#about"><i class="fa fa-user" aria-hidden="true"></i> log In</a></li>
    </ul>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>
ul.navbar {
  position: fixed;
  top: 0;
  left: 15%;
  width: 70%;
  height: 50px;
  z-index: 10000;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #fff;
  box-shadow: -2px 4px 19px grey;
}
ul.navbar > li {
  float: left;
}
ul.navbar > li a {
  display: block;
  height: 60px;
  color: #DF968B;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
ul.navbar > li a i {
  margin-right: 6px;
}
ul.navbar > li a:hover:not(.active) {
  background-color: #5C3F36;
  color: #FFF;
}
a.active {
  background-color: #b1877a;
  color: #FFF !important;
}

.right-navbar {
  float: right;
}

</style>
