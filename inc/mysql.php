<?php
    $conn = mysql_connect("localhost", "root", "");

    if (!$conn) {
        echo "Unable to connect to DB: " . mysql_error();
        exit;
    }

    if (!mysql_select_db("izaojiao")) {
        echo "Unable to select izaojiao: " . mysql_error();
        exit;
    }

	mysql_query("SET NAMES 'utf8'");