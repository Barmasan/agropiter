<?php 

if( $_POST ) {

	require_once('PHPMailer/PHPMailerAutoload.php');
	$mail = new PHPMailer;
	$mail->CharSet = 'utf-8';

	$name = $_POST['user_name'];
	$phone = $_POST['user_phone'];
	$titleProduct = $_POST['titleProduct'];

	//$mail->SMTPDebug = 3;                               // Enable verbose debug output

	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'artem.mashyanov@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
	$mail->Password = 'FHSWdff&GD@X1120'; // Ваш пароль от почты с которой будут отправляться письма
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

	$mail->setFrom('artem.mashyanov@yandex.ru'); // от кого будет уходить письмо?
	$mail->addAddress('forum.metrika@yandex.ru');     // Кому будет уходить письмо 
	// $mail->addAddress('yana-adamovna@yandex.ru');               // доп почта - Name is optional
	//$mail->addReplyTo('info@example.com', 'Information');
	//$mail->addCC('cc@example.com');
	//$mail->addBCC('bcc@example.com');
	//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = 'Заявка с лэндинга - Агропитер';
	$mail->Body    = 'Заявка с позиции: <b>' .$titleProduct. '</b><br> Имя заказчика: <b>' .$name . ',</b> его телефон - <b>' .$phone. '</b>';
	$mail->AltBody = '';

	if( $mail->send() ) {
	    $answer = '1';
	} else {
	    $answer = '0';
	}

	die( $answer );

}
?>