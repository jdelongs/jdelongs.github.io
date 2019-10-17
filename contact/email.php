<?php 
if(isset($_POST['submit'])){
    $to = "jdelong11@outlook.com";
    $from = $_POST['email']; 
    $name = $_POST['name'];

    $subject = "Job Opening";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    }
?>
