<?php
    require('./inc/mysql.php');

    $price = isset($_GET['p7']) ? $_GET['p7'] : 0;
	$feature = isset($_GET['p9']) ? $_GET['p9'] : 0;
	$age = 0;
	$time = 0;

	$andPrice = $price == 0 ? '' : ' AND `jigou_price` IN('.$price.')';
	$andFeature = $feature == 0 ? '' : ' AND `jigou_cats` IN('.$feature.')';
	$andAge = $age == 0 ? '' : ' AND `jigou_age` IN ('.$age.')';
	$andTime = $time == 0 ? '' : ' AND `jigou_period` IN ('.$time.')';

    $sql = "SELECT j.jigou_id, t.type_name, t.type_area_lat, t.type_area_lng FROM zj_jigou j LEFT JOIN zj_type t ON j.jigou_area = t.type_id";

    $result = mysql_query($sql);

    while ($row = mysql_fetch_assoc($result)) {
        if(isset($area[$row['type_name']])){
            $area[$row['type_name']]['num'] ++;
        }else{
            $area[$row['type_name']]['num'] = 1;
        }
        $area[$row['type_name']]['lat'] = $row['type_area_lat'];
        $area[$row['type_name']]['lng'] = $row['type_area_lng'];
    }
    mysql_free_result($result);

    foreach($area as $name => $detail){
        $data[] = array(
            'id' => 6,
            'cityid' => 11,
            'parent_id' => 7,
            'point_name' => $name,
            'lat' => $detail['lat'],
            'lng' => $detail['lng'],
            'zoom' => 14,
            'type' => 1,
            'marker_data' => "",
            'propNum' =>  $detail['num'] . '个',
        );
    }
    header('Content-type: application/json');
    echo json_encode($data);