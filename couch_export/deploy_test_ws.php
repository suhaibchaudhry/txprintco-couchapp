<?php
header("Content-Type: text/plain");

include "include/settee/src/settee.php";
include "include/db.php";

$host = '127.0.0.1';
$port = '5984';
$user = 'root';
$pass = 'xyz786';
$db_name = 'tpc_test_ws';


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
exec("couchapp push ../txprintco http://".$user.":".$pass."@".$host.":".$port."/".$db_name);

//$products = array();
$base_path = '/home/usman/Developer/Crawls/SpideyWithShipping';
$data_1 = file_get_contents($base_path.'/crawldump_jul-19-2013_IpCAGf.tpd');
$data_1 =  igbinary_unserialize($data_1);

//$products_types = array_merge_recursive($data_1, $data_2, $data_3);


//megeArrays($data_1, $data_2);
//megeArrays($data_1, $data_3);
//megeArrays($data_1, $data_4);

$products_types = $data_1;

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


// if (is_array($products) == false)
// {
// echo 'It is not an array!';
// exit;
// }

try {
	$db = $server->get_db($db_name);
} catch(Exception $e) {
	die($e->message);
}

$count = count($products_types);
echo $count;
//$products[0]['products'][0]);

foreach($products_types as $product_cat_id => $product_cat) {
	// var_dump($product_cat_id .' '. $product_cat['title']);
	$product_count = count($product_cat);
	// var_dump('Count: ' . $product_count);
	 if(is_array($product_cat) && isset($product_cat['products'])) {
		foreach($product_cat['products'] as $product_id => $product) 
		{
			if(is_array($product))
			{
				// var_dump($product_id);
				$products_types[$product_cat_id]['products'][$product_id]['parent_cat'] = array('title' => $product_cat['title'],  'url' => $product_cat['url']);

				//Add To couch
				// var_dump($products_types[$product_cat_id]['products'][$product_id]);
				$doc = $products_types[$product_cat_id]['products'][$product_id];
				try {
					$db->save($doc);
					//echo $doc;
				} catch(Exception $e) {
					die($e->message);
				}	

				echo "Created Product: ". $products_types[$product_cat_id]['products'][$product_id]['title'] ."\n";
			}
			
		}
	 }
}
