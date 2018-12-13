<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Test task 3</title>
  <meta http-equiv="x-ua-compatible" content="ie=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="css/font-awesome.css">
  <link rel="stylesheet" href="css/slick.css">
  <link rel="stylesheet" href="css/slick-theme.css">
  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="container-fluid hero-gallery bgc-dark text-white text-normal">
    <div class="container">
      <div class="row">
        <div class="col header">
          <h1 class="text-center">
            <span class="text-slight">МОЯ</span>
            <span class="text-bold">СУПЕР КОМАНДА</span>
          </h1>
        </div>
      </div>
          <div class="row heroes d-flex justify-content-center">
            <div class="col d-flex justify-content-center align-content-center" id="stub">
              <h2 class="text-center my-auto">Героев не найдено</h2>
            </div>
          </div>
    </div>
  </div>
  <div class="container-fluid hero-workshop bgc-white text-dark text-normal">
    <div class="container">
      <div class="row">
        <div class="col header">
          <h1 class="text-center">
            <span class="text-slight">ДОБАВЬ СВОЕГО</span>
            <span class="text-bold">ГЕРОЯ</span>
          </h1>
        </div>        
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <form action="#" class="heroes-form">
            <div class="row">
              <div class="col d-flex flex-column">
                <label for="hero-name">Имя <span class="text-danger">*</span></label>
                <input type="text" id="hero-name" name="hero-name" require>
              </div>
              <div class="col d-flex flex-column">
                <label for="hero-title">Титул <span class="text-danger">*</span></label>
                <input type="text" id="hero-title" name="hero-title" require>
              </div>              
            </div>
            <div class="row">
              <div class="col d-flex flex-column">
                <label for="hero-face">Фото <span class="text-danger">*</span></label>
                <label id="hero-face__wrapper" class="hero-face__wrapper d-flex justify-content-center">
                  <span class="hero-face__value text-slight">
                    Перетащите или выберите фото
                  </span>
                  <input type="file" name="hero-face" id="hero-face" class="hero-face">
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col d-flex justify-content-end">
                <input class="bgc-orange text-white text-bold hero-submit" type="submit" value="ПРИНЯТЬ">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid hero-info bgc-dark text-gray text-normal">
    <div class="container h-100">
      <div class="info-block row h-100">
        <div class="col my-auto copyright">
          ALL RIGHTS RESERVED. COPYRIGHT © <a href="#" class="text-bolder heroes-company">CKDIGITAL</a>
        </div>
        <div class="col my-auto d-flex justify-content-end social-icons">
          <a href="#" class="social-icon d-flex justify-content-center align-items-center">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="#" class="social-icon d-flex justify-content-center align-items-center">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="#" class="social-icon d-flex justify-content-center align-items-center">
            <i class="fa fa-google-plus" aria-hidden="true"></i>
          </a>
          <a href="#" class="social-icon d-flex justify-content-center align-items-center">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </div>      
    </div>
  </div>
  <script src="js/vendor/jquery/dist/jquery.min.js"></script>
  <script src="js/vendor/slick-carousel/slick/slick.min.js"></script>
  <script src="js/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
  <script src="js/script.js"></script>
</body>
</html>
