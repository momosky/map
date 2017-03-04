<?php

function cutstr($str, $limit=40,$etc='',$encoding="utf-8") {
	$limit=$limit/2;
	$ostr=$str;
	$start=0;
	if('gbk'==strtolower($encoding) || 'gb2312'==strtolower($encoding)){
		$strlen=strlen($str);
		if ($start>=$strlen){
			return $str;
		}
		$clen=0;
		for($i=0;$i<$strlen;$i++,$clen++){
			if(ord(substr($str,$i,1))>0xa0){
				if ($clen>=$start){
					$tmpstr.=substr($str,$i,2);
				}
				$i++;
			}else{
				if ($clen>=$start){
					$tmpstr.=substr($str,$i,1);
				}
			}
			if ($clen>=$start+$limit){
				break;
			}
		}
		$str=$tmpstr;
	}else{
		$patten = "/[\x01-\x7f]|[\xc2-\xdf][\x80-\xbf]|\xe0[\xa0-\xbf][\x80-\xbf]|[\xe1-\xef][\x80-\xbf][\x80-\xbf]|\xf0[\x90-\xbf][\x80-\xbf][\x80-\xbf]|[\xf1-\xf7][\x80-\xbf][\x80-\xbf][\x80-\xbf]/";
		preg_match_all($patten, $str, $regs);
		$v = 0; $s = '';
		for($i=0; $i<count($regs[0]); $i++){
			(ord($regs[0][$i]) > 129) ? $v += 2 : $v++;
			$s .= $regs[0][$i];
			if($v >= $limit * 2){
				break;
			}
		}
		$str=$s;
	}

	if(strlen($ostr) > strlen($str)) {$str.=$etc;}
	return $str;
}

?>