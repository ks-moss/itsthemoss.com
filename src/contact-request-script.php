<?php

    try {
        $db = new mysqli("localhost", "root", "", "contact-request-page");
    } catch (Exception $exc) {
        echo $exc->getTraceAsString();
    }

    if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['msg'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $msg = $_POST['msg'];

        $is_insert = $db->query("INSERT INTO `data` (`name`, `email`, `msg`) VALUES ('$name', '$email', '$msg')");

        
        if($is_insert == TRUE) {
            echo "<h2>Thanks, your request submitted.<h2/>";
            exit();
        }
    }
?>

