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

function megeArrays(&$data_1, $data_2) {
	foreach($data_2 as $product_cat_id => $product_cat) {
		if(is_array($product_cat) && isset($product_cat['products'])) {
			if(empty($data_1[$product_cat_id])) {
				$data_1[$product_cat_id] = $data_2[$product_cat_id];
			} else {
				foreach($product_cat['products'] as $product_id => $product) {
					//if(empty($data_1[$product_cat_id]['products'][$product_id])) {
						//print "INDEX: ".$product_id."\n";
						$data_1[$product_cat_id]['products'][$product_id] = $product;
					//}
				}
			}
		}
	}
}