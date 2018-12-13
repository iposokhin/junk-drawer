<?php
	$connection = mysqli_connect( "localhost", "root", "", "heroes" );
    
    if (!$connection) {
      echo 'Не могу соединиться с БД. Код ошибки: ' . mysqli_connect_errno() . ', ошибка: ' . mysqli_connect_error();
      exit;
    }

    if ( $_SERVER['REQUEST_METHOD'] == 'PUT' ) {
		$incoming_post = file_get_contents('php://input');
		$data = json_decode($incoming_post, true);

		$name = $data["heroName"];
		$title = $data["heroTitle"];
		$face = $data["heroFace"];
		$date = date("d.m.Y");

		if ( isset($name, $title, $face, $date ) ) {
			$sql = mysqli_query($connection, "INSERT INTO `heroes_info` (`name`, `title`, `face`, `date`) VALUES ('{$name}', '{$title}', '{$face}', '{$date}')");

	  		if ($sql) {
	  			$data[ "heroDate"] = $date ;

				header( 'Accept: application/json, text/plain, */*' );
        		header( 'Content-Type: application/json; charset=utf-8' );
	  			echo json_encode( $data );
	  		} else {
	    		echo 'Произошла ошибка: ' . mysqli_error($connection) . '!!!';
	  		}
		} 
    }  elseif ( $_SERVER['REQUEST_METHOD'] == 'GET' ) {
        $sql = mysqli_query($connection, "SELECT * from `heroes_info` ORDER BY `date` DESC LIMIT 10" );
        $heroes = array();
        
        while ( $row = mysqli_fetch_array( $sql ) ) {
        	$hero = [
              "heroName" => $row['name'],
              "heroTitle" => $row['title'],
              "heroFace" => $row['face'],
              "heroDate" => $row['date']
            ];     

            $heroes[] = $hero;           
        }

        header( 'Accept: application/json, text/plain, */*' );
        header( 'Content-Type: application/json; charset=utf-8' );

        echo( json_encode( $heroes ) );

        mysqli_close( $connection );
        unset( $sql, $i, $connection);
    }
?>