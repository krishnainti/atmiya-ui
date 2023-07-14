<?php

// Define some constants
define( "RECIPIENT_NAME", "ATMIYA" );
define( "RECIPIENT_EMAIL", "membership@atmiyausa.org" );

// Read the form values
$name = isset( $_POST['name'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['name'] ) : "";
$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
$phone = isset( $_POST['phone'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['phone'] ) : "";
$address = isset( $_POST['address'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['address'] ) : "";
$city = isset( $_POST['city'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['city'] ) : "";
$state = isset( $_POST['state'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['state'] ) : "";
$zipcode = isset( $_POST['zipcode'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['zipcode'] ) : "";
$occupation = isset( $_POST['occupation'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['occupation'] ) : "";
$referrer = isset( $_POST['referrer'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['referrer'] ) : "";
$referrerphone = isset( $_POST['referrerphone'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['referrerphone'] ) : "";
$message = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message'] ) : "";

$mail_subject = 'Membership: ' . $name;

$body = 'Name: '. $name . "\r\n";
$body .= 'Email: '. $senderEmail . "\r\n";


if ($phone) {$body .= 'Phone: '. $phone . "\r\n"; }
if ($address) {$body .= 'Address: '. $address . "\r\n"; }
if ($city) {$body .= 'City: '. $city . "\r\n"; }
if ($state) {$body .= 'State: '. $state . "\r\n"; }
if ($zipcode) {$body .= 'Zipcode: '. $zipcode . "\r\n"; }
if ($occupation) {$body .= 'Occupation: '. $occupation . "\r\n"; }
if ($referrer) {$body .= 'ReferrerName: '. $referrer . "\r\n"; }
if ($referrerphone) {$body .= 'ReferrerPhone: '. $referrerphone . "\r\n"; }
$body .= 'Message: ' . "\r\n" . $message;

// If all values exist, send the email
if ( $name && $senderEmail && $message ) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $name . " <" . $senderEmail . ">"; 
  
  $success = mail($recipient, $mail_subject, $body, $headers );
         if( $success == true ) {
            echo "Message sent successfully...";
         }else {
            echo "Message could not be sent...";
         }
}

?>