<?php
/**
 *В этом примере показана отправка сообщения с помощью функции mail() PHP.
 */

require '../PHPMailerAutoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer;
//Укажите, от кого будет отправлено сообщение
$mail->setFrom('from@example.com', 'First Last');
//Задать альтернативный адрес для ответа
$mail->addReplyTo('replyto@example.com', 'First Last');
//Укажите, кому должно быть отправлено сообщение
$mail->addAddress('whoto@example.com', 'John Doe');
//Тема сообщения
$mail->Subject = 'PHPMailer mail() test';
//Чтение текста HTML-сообщения из внешнего файла, преобразование связанных изображений во встроенные,
//преобразование HTML в основной текстовый альтернативный текст
$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
//Замените текстовое тело текстом, созданным вручную
$mail->AltBody = 'This is a plain-text message body';
//Attach an image file
$mail->addAttachment('images/phpmailer_mini.png');

//отправить сообщение, проверить на наличие ошибок
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}
