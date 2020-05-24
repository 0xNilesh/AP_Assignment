<?php 
    if(isset($_POST["submit"]))
    {
        $firstname = $_POST["firstName"];
        $lastname = $_POST["lastName"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        
        echo "<h4>Your entered data is : </h4>";
        echo "<h2>First Name : " . $firstname . "</h2>";
        echo "<h2>Last Name : " . $lastname . "</h2>";
        echo "<h2>Email : " . $email . "</h2>";
        echo "<h2>Password : " . $password . "</h2>";
    }
?>