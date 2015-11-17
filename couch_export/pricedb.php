<?php
header("Content-Type: text/plain");

include "include/settee/src/settee.php";
include "include/db.php";

$host = '127.0.0.1';
$port = '5984';
$user = 'root';
$pass = 'xyz786';
$price_db = 'txprintco_price_maps';

$server = new SetteeServer('http://'.$user.':'.$pass.'@'.$host.':'.$port);
if(!databaseExists($price_db, $server)) {
	try {
		$server->create_db($price_db);
	} catch(Exception $e) {
		die($e->message);
	}

	echo 'Created database: '.$price_db."\n";
} else {
	try {
		$server->drop_db($price_db);
	} catch(Exception $e) {
		die($e->message);
	}

	echo 'Dropped database: '.$price_db."\n";

	try {
		$server->create_db($price_db);
	} catch(Exception $e) {
		die($e->message);
	}

	echo 'Created database: '.$price_db."\n";
}

echo "Pushing CouchApp\n";
exec("couchapp push ../txprintco_pricing http://".$user.":".$pass."@".$host.":".$port."/".$price_db);