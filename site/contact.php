<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['comment'];
$to = "codetrot@gmail.com";
$subject = "Website Feedback";

mail($to, $subject, $message, "From:" .$name .$email);

echo "Your message has been sent!";


?>