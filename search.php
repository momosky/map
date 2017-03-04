<?php

//   file_put_contents('log/'.time().'_log.txt', print_r($_GET,true));
//   die;
//    print_r($_GET);
//    die();

    require('./inc/mysql.php');

    $lat_max = isset($_GET['p4']) ? $_GET['p4'] : 0;
    $lat_min = isset($_GET['p3']) ? $_GET['p3'] : 0;
    $lng_max = isset($_GET['p6']) ? $_GET['p6'] : 0;
    $lng_min = isset($_GET['p5']) ? $_GET['p5'] : 0;

    //p7 是 价格
	$price = isset($_GET['p7']) ? $_GET['p7'] : 0;
    //p9 是 特色
	$feature = isset($_GET['p9']) ? $_GET['p9'] : 0;
	
	//TODO:年龄段和时间段参数 暂时写 0 
	$age = 0;
	$time = 0;

	$andPrice = $price == 0 ? '' : ' AND `jigou_price` IN('.$price.')';
	$andFeature = $feature == 0 ? '' : ' AND `jigou_cats` IN('.$feature.')';
	$andAge = $age == 0 ? '' : ' AND `jigou_age` IN ('.$age.')';
	$andTime = $time == 0 ? '' : ' AND `jigou_period` IN ('.$time.')';
	
	$sql = "SELECT *
           FROM  zj_jigou
           WHERE `jigou_map_lat` > $lat_min
               AND `jigou_map_lat` < $lat_max
               AND `jigou_map_lng` > $lng_min
               AND `jigou_map_lng` < $lng_max
			   $andPrice
			   $andFeature
			   $andAge
			   $andTime
			LIMIT 40";
	
    $result = mysql_query($sql);

    if (!$result) {
        echo "Could not successfully run query ($sql) from DB: " . mysql_error();
        exit;
    }

    while ($row = mysql_fetch_assoc($result)) {

		$row[0] = $row["jigou_title"];
		$row[1] = "";
		$row[2] = $row["jigou_map_lat"];
		$row[3] = $row["jigou_map_lng"];
		$row[4] = $row["jigou_title"];
		$row[5] = $row["jigou_area"];
        $row[6] = $row["jigou_id"];
        $row[7] = $row["jigou_address"];
	    $data[]=$row;
    }
//	var_dump($row);
//  echo $sql;
//  die;
    mysql_free_result($result);

    header('Content-type: application/json');
    echo json_encode($data);
    
?>