<?php
	require_once 'includes/mailchimp.class.php';

   // $api = new MCAPI('ENTER_YOUR_API_KEY_HERE');
    $api = new MCAPI('d3adc49485fd9b295667ad67b68a7138-us14');
	$merge_vars = array('FNAME'=>$_POST["fname"], 'LNAME'=>$_POST["lname"]);

	// Submit subscriber data to MailChimp
	// For parameters doc, refer to: http://apidocs.mailchimp.com/api/1.3/listsubscribe.func.php
	//$retval = $api->listSubscribe( 'ENTER_YOUR_LIST_ID_HERE', $_POST["email"], $merge_vars, 'html', false, true );
	$retval = $api->listSubscribe( '8f167eb45c', $_POST["email"], $merge_vars, 'html', false, true );

	if ($api->errorCode){
		echo "Please try again.";
	} else {
		echo "Thank you, you have been added to our mailing list.";
	}
?>
