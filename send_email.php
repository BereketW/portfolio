<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');


function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);

    if (!isset($data['name']) || !isset($data['email']) || !isset($data['subject']) || !isset($data['message'])) {
        echo json_encode([
            'success' => false,
            'message' => 'All fields are required'
        ]);
        exit;
    }

    // Sanitize input data
    $name = sanitize_input($data['name']);
    $email = sanitize_input($data['email']);
    $subject = sanitize_input($data['subject']);
    $message = sanitize_input($data['message']);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode([
            'success' => false,
            'message' => 'Invalid email format'
        ]);
        exit;
    }

    // Email configuration
    $to = 'bereketsodenoo@gmail.com';
    $email_subject = "Portfolio Contact: $subject";
    
    // Prepare email body
    $email_body = "You have received a new message from your portfolio website.\n\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Subject: $subject\n\n";
    $email_body .= "Message:\n$message\n";

    // Create email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Use msmtp to send the email
    $command = "echo -e \"From: $name <$email>\nSubject: $email_subject\n$headers\n\n$email_body\" | msmtp -a default $to";
    
    // Execute the command
    exec($command, $output, $return_var);

    if ($return_var === 0) {
        echo json_encode([
            'success' => true,
            'message' => 'Thank you for your message! I will get back to you soon.'
        ]);
    } else {
        error_log("Email sending failed. Return code: $return_var, Output: " . print_r($output, true));
        echo json_encode([
            'success' => false,
            'message' => 'Sorry, there was an error sending your message. Please try again later.'
        ]);
    }
} else {
    // If not a POST request
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method'
    ]);
}
?> 