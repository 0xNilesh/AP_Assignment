<?php 
    if(isset($_POST["submit"]))
    {
        $firstname = $_POST["firstName"];
        $lastname = $_POST["lastName"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        
        echo "<h2>Your entered data is : </h2>" . "<br><br>";
        echo "<h2>First Name : </h2>" . $firstname . "<br>";
        echo "<h2>Last Name : </h2>" . $lastname . "<br>";
        echo "<h2>Email : </h2>" . $email . "<br>";
        echo "<h2>Password : </h2>" . $password . "<br>";
    }
?>