<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=10">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="widget">
    <?php
      if( strripos( $_SERVER['HTTP_USER_AGENT'], "MSIE" ) ) {
        echo '<p>Данный виджет не поддерживается для браузера Internet Explorer, пожалуйста, смените браузер.</p>';
      } else {
        echo '<h2 class=fo-name>РОССИЯ</h2>
        <object class="svg" data="./images/map.svg" type="image/svg+xml"></object>
        <script type="text/javascript" src="script.js"></script>';
      }
    ?>
  </div>
</body>
</html>