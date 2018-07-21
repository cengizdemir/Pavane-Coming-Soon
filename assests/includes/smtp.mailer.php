<?php
require("class.phpmailer.php");

    // Get the form fields and remove whitespace.
    $name = strip_tags(trim($_POST["name"]));
            $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Check that data was sent to the mailer.
    if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo "Oops! There was a problem with your submission. Please complete the form and try again.";
        exit;
    }
     
    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPDebug = 1; // Debug mode: 1 = error ve message, 2 = just message
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'ssl'; // For secure connection ssl, else use  tls
    $mail->Host = "mail.yousite.com"; // Your mail server name
    $mail->Port = 465; // For secure connection 465, else use  587
    $mail->IsHTML(true);
    $mail->SetLanguage("en", "phpmailer/language");
    $mail->CharSet  ="utf-8";
    $mail->Username = "your-mail-adress@mail.com"; // Your mail accond name
    $mail->Password = "password"; // Your mail accond password
    $mail->SetFrom("mail-send-from@mail.com", "$name"); // Mail send from
    $mail->AddAddress("mail-send-to@mail.com"); // Your mail will send adress
    $mail->Subject = "Pavane Coming Soon Contact Form"; // Message Title
    $mail->Body = "Name: $name\n <br> Email: $email\n\n <br>  Message:\n$message\n "; // Mail content.

    if(!$mail->Send()){
        echo "Mailer Error: ".$mail->ErrorInfo;
    } else {
        echo "Thank You! Your message has been sent.";
    }
?>
