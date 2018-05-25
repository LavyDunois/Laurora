<?php
	//Contact Form Emailer
	class contactFormMailer{
		public function sendMail($firstname, $surname, $sender, $message){
			$send_to = 'info@laurora.nu';
			$from = $firstname.' '.$surname;
			$subject = 'Bericht van '.$from.' Laurora Contact Pagina';
			$body = 'Bericht van '.$from.'
E-mail: '.$sender.'
Bericht:
'.$message;
			//Check of ingevulde velden leeg zijn
			if($firstname != '' AND $surname != '' AND $sender != '' AND $message != ''){
				//Validate Email
				if(filter_var($sender, FILTER_VALIDATE_EMAIL)){
					//Verstuur Email
					mail($send_to, $subject, $body, 'From: '.$sender);
					//Redirect to Success message
					header('Location: ../index.php?page=contact_worked');
				}else{
					//Email is Foutief
					header('Location: ../index.php?page=contact_bad_email');
				}
			}else{
				//Een of meer velden zijn leeg.
				header('Location: ../index.php?page=contact_failed');
			}
		}
	}
	//Create Object
	$phpMailer = new contactFormMailer();
	//Send Mail
	$phpMailer->sendMail($_POST['firstname'],$_POST['surname'],$_POST['sender'],$_POST['message']);
?>