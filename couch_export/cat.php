#!/usr/bin/env php
<?php
header("Content-Type: text/plain");

$base_path = '../../4over-spider/exports';
$data_set = file_get_contents($base_path.'/crawldump_shallow_jun-02-2015_yQJl93.tpd');
$data = igbinary_unserialize($data_set);
var_dump($data);