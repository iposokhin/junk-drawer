<?php
	$connection = mysqli_connect( "localhost", "root", "", "comments" );
    
    if (!$connection) {
      echo 'Не могу соединиться с БД. Код ошибки: ' . mysqli_connect_errno() . ', ошибка: ' . mysqli_connect_error();
      exit;
    }

    if ( $_SERVER['REQUEST_METHOD'] == 'PUT' ) {
		$incoming_post = file_get_contents('php://input');
		$data = json_decode($incoming_post, true);

		$name = $data["name"];
		$email = $data["email"];
		$comment = $data["comment"];

		if ( isset($name, $email, $comment ) ) {
			$sql = mysqli_query($connection, "INSERT INTO `data` (`name`, `email`, `comment`) VALUES ('{$name}', '{$email}', '{$comment}')");

	  		if ($sql) {
				header( 'Accept: application/json, text/plain, */*' );
        		header( 'Content-Type: application/json; charset=utf-8' );
	  			echo json_encode( $data );
	  		} else {
	    		echo 'Произошла ошибка: ' . mysqli_error($connection) . '!!!';
	  		}
		} 
    }  elseif ( $_SERVER['REQUEST_METHOD'] == 'GET' ) {
        $sql = mysqli_query($connection, "SELECT * from `data`" );
        $comments = array();
        
        while ( $row = mysqli_fetch_array( $sql ) ) {
        	$comment = [
              "name" => $row['name'],
              "email" => $row['email'],
              "comment" => $row['comment']
            ];     

            $comments[] = $comment;           
        }

        header( 'Accept: application/json, text/plain, */*' );
        header( 'Content-Type: application/json; charset=utf-8' );

        echo( json_encode( $comments ) );

        mysqli_close( $connection );
        unset( $sql, $i, $connection);
    }
?>