<?php
function databaseExists($dbName, $server) {
	try {
		$dbs = $server->list_dbs();
	} catch(Exception $e) {
		die($e->message);
	}

	foreach($dbs as $db) {
		if($dbName == $db) {
			return true;
		}
	}

	return false;
}