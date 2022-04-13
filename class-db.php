<?php
class DB {
    private $dbHost     = "DB_HOST";
    private $dbUsername = "DB_USERNAME";
    private $dbPassword = "DB_PASSWORD";
    private $dbName     = "DB_NAME";
  
    public function __construct() {
        if(!isset($this->db)){
            // Connect to the database
            $conn = new mysqli($this->dbHost, $this->dbUsername, $this->dbPassword, $this->dbName);
            if($conn->connect_error){
                die("Failed to connect with MySQL: " . $conn->connect_error);
            }else{
                $this->db = $conn;
            }
        }
    }
  
    public function check_credentials($email = '', $password = '') {
        $sql = $this->db->query("SELECT id, fullname, status FROM users WHERE email = '$email' AND password = '". md5($password) ."'");
 
        if($sql->num_rows) {
 
            $result = $sql->fetch_assoc();
 
            if ('1' == $result['status']) {
                return array('status' => 'success', 'id' => $result['id'], 'fullname' => $result['fullname']);
            }
 
            return array('status' => 'error', 'message' => 'Your account is not activated yet.');
        }
         
        return array('status' => 'error', 'message' => 'Email or password is invalid.');
    }
}