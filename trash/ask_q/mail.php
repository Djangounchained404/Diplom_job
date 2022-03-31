<?php 

if ($_POST['subject']==1) {
	$subject = 'Вопрос по уроку';
}
elseif ($_POST['subject']==1) {
	$subject = 'Вопрос по главе';
}
elseif ($_POST['subject']==1) {
	$subject = 'Отзыв';
}
else {
	$subject = 'Вопрос по уроку';
}

$to = "n.musikhin134@yandex.ru";
$from = trim($_POST['email']);

$message = htmlspecialchars($_POST['massage']);
$message = urldecode($massage);   
$message = trim($massage);

$headers = "From: $from" . "\r\n". "Reply-To: $from " . "\r\n". "X-Mailer: PHP/". phpversion();

if(mail($to,$subject,$massage,$headers)) {
	echo 'Mail is sent'
}
else {
	echo 'Mail is not sent'
}






?>