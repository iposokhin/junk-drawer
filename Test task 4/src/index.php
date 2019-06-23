<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-4">
  <title>Test task 4</title>
  <meta http-equiv="x-ua-compatible" content="ie=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="css/font-awesome.css">
  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body class="page">
  <div class="container-fluid header page__header">
    <div class="container">
      <div class="row">
        <div class="col">
          <a href="#">
            <img src="images/2.png" class="logo header__logo" alt="Логотип">            
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-center">
          <img src="images/1.png" class="picture header__picture" alt="Иконка">  
        </div>
      </div>
      <div class="row">
        <div class="col">
          <form action="#" class="header__form form d-flex flex-column">
            <div class="d-flex justify-content-between form__controls controls">
              <div class="d-flex flex-column justify-content-between form__section">
                <div class="form__group">
                  <label for="name" class="text-medium">Имя <span class="text-red">*</span></label>
                  <input type="text" class="form__input input" id="name" autocomplete="off" required>
                </div>
                <div class="form__group">
                  <label for="email" class="text-medium">E-mail <span class="text-red">*</span></label>
                  <input type="text" class="form__input input" id="email" autocomplete="off" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required>              
                </div>
              </div>
              <div class="form__section">
                <div class="form__group h-100">
                  <label for="comment" class="text-medium">Комментарий <span class="text-red">*</span></label>
                  <textarea class="input form__textarea textarea" id="comment" required></textarea>
                </div>              
              </div>              
            </div>
            <input type="submit" value="Записать" class="ml-auto form__submit submit text-bold text-center">
          </form>
        </div>
      </div>      
    </div>
  </div>
  <div class="container-fluid content page__content">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="content__head head text-medium text-center">Выводим комментарии</h1>
        </div>
      </div>
      <ul class="row comments content__comments d-flex justify-content-between flex-wrap">

      </ul>
    </div>
  </div>
  <div class="container-fluid footer page__footer d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col">
          <a href="#">
            <img src="images/2.png" class="logo footer__logo logo--size--small" alt="Логотип">            
          </a>          
        </div>
        <div class="col footer__social-icons social-icons d-flex justify-content-end">
          <a href="#" class="social-icons__icon icon d-flex justify-content-center align-items-center">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="#" class="social-icons__icon icon d-flex justify-content-center align-items-center">
            <i class="fa fa-vk" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <script src="js/script.js"></script>
</body>
</html>
