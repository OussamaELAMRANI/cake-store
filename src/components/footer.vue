<template>
<footer class="modal-footer">

    <div class="part-logo col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <img src="../assets/LOGO.png" alt="logo" style="height: 100px; width: auto;">
        <p>
            Haninie est une entreprise marocaine dans le fabrication des gateaux et de goufrtte
            ...
        </p>
    </div>
    <div class="quick-lien col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <h4>- Les liens directs ci-dessous </h4>
        <ul>
            <li><a href="#"><span class="glyphicon glyphicon-asterisk"></span>Articles</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-asterisk"></span>Mes Categories</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-asterisk"></span>Se connecter</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-asterisk"></span>Contact nous</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-asterisk"></span>Signaler</a></li>
        </ul>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <div class="contact-us">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="exemple@gmail.com... ">
                <span class="input-group-btn">
                <button class="btn btn-second" type="button">Contact us <span class="glyphicon glyphicon-envelope"></span></button>
              </span>
            </div>
        </div>
        <ul class="social-media">
            <li><a href="#" class="social-facebook"></a></li>
            <li><a href="#" class="social-twitter"></a></li>
            <li><a href="#" class="social-linkedin"></a></li>
            <li><a href="#" class="social-googlePlus"></a></li>
        </ul>
    </div>
</footer>
</template>

<script>
  export default {
    name: 'footer-cake'
  }
</script>

<style lang="scss">
footer {
  margin-top: 20px;
  min-height: 300px;
  background: linear-gradient( to bottom,rgba(0,0,0,.6),rgba(0,0,0,.9)), url('../assets/footer-bg.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  p,h4,li,a {
    color: #fff;
    text-align: left;
  }
}
</style>
