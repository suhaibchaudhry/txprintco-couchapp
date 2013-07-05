<?php
header("Content-Type: text/plain");

include "include/settee/src/settee.php";
include "include/db.php";

$host = '127.0.0.1';
$port = '5984';
$user = 'usman';
$pass = 'usman';
$db_name = 'mobile_carriers';


$server = new SetteeServer('http://'.$user.':'.$pass.'@'.$host.':'.$port);
if(!databaseExists($db_name, $server)) {
	try {
		$server->create_db($db_name);
	} catch(Exception $e) {
		die($e->message);
	}

	echo 'Created database: '.$db_name."\n";
} else {
	try {
		$server->drop_db($db_name);
	} catch(Exception $e) {
		die($e->message);
	}
	
	echo 'Dropped database: '.$db_name."\n";
	
	try {
		$server->create_db($db_name);
	} catch(Exception $e) {
		die($e->message);
	}

	echo 'Created database: '.$db_name."\n";
}

echo "Pushing CouchApp\n";
exec("couchapp push ../mobile_carriers http://".$user.":".$pass."@".$host.":".$port."/".$db_name);

$json = file_get_contents('../generate/cache/api_data.dat');
$countries = json_decode($json);

try {
	$db = $server->get_db($db_name);
} catch(Exception $e) {
	die($e->message);
}

foreach($countries as $country_code => $country) {
	//$doc = array();
	//$doc[$country_code] = $country;
	try {
		foreach($country->carriers as $carrier) {
			$carrier->cname = $country->name;
			$carrier->ccode = $country_code;
			$db->save($carrier);
		}
	} catch(Exception $e) {
		die($e->message);
	}

	echo "Created Country: ".$country->name."\n";
}
