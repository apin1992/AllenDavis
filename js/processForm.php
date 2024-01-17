<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Server-side validation (you can add more checks here)

  // Send email
  $to = "japresaperez@gmail.com";
  $subject = "New Contact Form Submission";
  $headers = "From: $email";

  mail($to, $subject, $message, $headers);
}
?>
