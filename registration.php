<?php
	$uName = $_POST['uName'];
	$email = $_POST['email'];
	$password = $_POST['psw'];

	// Database connection
	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(uName, email, psw) values(?, ?, ?)");
		$stmt->bind_param("sss", $uName, $email, $password);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>