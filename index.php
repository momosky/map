<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<meta name="description" content="" />
<title>地图搜索</title>
<link rel="stylesheet" rev="stylesheet" href="./css/map_izaojiao_find.css" type="text/css" />
<script type="text/javascript" src="./js/APF.js"></script>
<script>function bust(){document.write='';window.top.location=window.self.location;setTimeout(function(){document.body.innerHTML='';},0);window.self.onload=function(evt){document.body.innerHTML='';};}if(window.top !== window.self){try{if (window.top.location.host){}else{bust();}}catch(ex){bust();}}</script>
</head>
<body>


<div id="container">
    <div id="header">
        <div class="header_box">
<div id="izaojiao-logo">
	<h1><a href="http://www.izaojiao.com">上海</a></h1>
	        	<div id="city-switcher">
			<div class="slogan">地图搜索</div>
		<div class="cur_city">
       		<a href="#" id="switch_apf_id_5" class="select_icon"><span class="city">上海</span><span class="city_icon">选择城市</span></a>
		</div>

		<div id="city-panel" style="display:none; border:0;">
        <iframe frameborder="0" scrolling="no"></iframe>
            
    </div>
	</div>
</div>   

<div class="head1" id="apf_id_4">
	<div class="searchs">
    	<dl>
        	<dt class="icon"><input name="k" id="keyword" class="qwhereinput gray" value="输入名称或地标" type="text" size="38" /></dt>
            <dt class="btn_search"></dt>
        </dl>
    </div>

    <h2>
            <table>
            <tr>
            <td class="i0">快速定位：</td>
            <td id="area" class="i1 off" >
            <dl class="DL1"><dd></dd><dt><a href="javascript:" id="area_select">区域</a></dt><dt class="arr"></dt></dl>
                <dl id="areaList" class="DL2">
					<dt><a href="javascript:;" aid="7" lat="31.220104873204" lng="121.56739336405" zoom="15">浦东</a></dt>
					<dt><a href="javascript:;" aid="11" lat="31.106018744131" lng="121.41822295874" zoom="14">闵行</a></dt>
					<dt><a href="javascript:;" aid="5" lat="31.196676437131" lng="121.4437543905" zoom="15">徐汇</a></dt>
					<dt><a href="javascript:;" aid="10" lat="31.266299697239" lng="121.39182540631" zoom="14">普陀</a></dt>
					<dt><a href="javascript:;" aid="6" lat="31.229564711888" lng="121.42576354928" zoom="15">长宁</a></dt>
					<dt><a href="javascript:;" aid="2" lat="31.229934723822" lng="121.44052305878" zoom="15">静安</a></dt>
					<dt><a href="javascript:;" aid="4" lat="31.240525263239" lng="121.49275087519" zoom="15">黄浦</a></dt>
					<dt><a href="javascript:;" aid="3" lat="31.222351697873" lng="121.47530065559" zoom="15">卢湾</a></dt>
					<dt><a href="javascript:;" aid="8" lat="31.277089161938" lng="121.48741240679" zoom="15">虹口</a></dt>
					<dt><a href="javascript:;" aid="12" lat="31.260460492547" lng="121.46805865041" zoom="15">闸北</a></dt>
					<dt><a href="javascript:;" aid="9" lat="31.303034311108" lng="121.5328626265" zoom="14">杨浦</a></dt>
					<dt><a href="javascript:;" aid="13" lat="31.437966063416" lng="121.37939190034" zoom="13">宝山</a></dt>
					<dt><a href="javascript:;" aid="15" lat="31.021169325894" lng="121.23847799745" zoom="14">松江</a></dt>
					<dt><a href="javascript:;" aid="16" lat="31.057339717276" lng="121.76098496679" zoom="15">南汇</a></dt>
					<dt><a href="javascript:;" aid="14" lat="31.379175164422" lng="121.26875453082" zoom="15">嘉定</a></dt>
					<dt><a href="javascript:;" aid="19" lat="31.166161200505" lng="121.10322543744" zoom="12">青浦</a></dt>
					<dt><a href="javascript:;" aid="17" lat="30.918535413392" lng="121.46828953812" zoom="15">奉贤</a></dt>
					<dt><a href="javascript:;" aid="18" lat="30.717737422955" lng="121.35614918797" zoom="14">金山</a></dt>
					<dt><a href="javascript:;" aid="20" lat="31.629856771949" lng="121.4085501731" zoom="14">崇明</a></dt>
				</dl>
           </td>
            <td id="block" class="i2 i2off" >
            	<dl class="DL1"><dd></dd><dt><a href="javascript:" id="block_select">板块</a></dt><dt class="arr"></dt></dl>

                <dl id="blockList" class="DL2" style="display:none;">
                	
                </dl>
            </td>
             <td id="recent" class="i4 on" >
            	
            </td>
            </tr>
            </table>
    </h2>

</div>
</div>

        <div class="head2">
            <div id="topnav">
				<!--登录>
                <?php if($_SESSION['uid']){?>
                <?php echo $_SESSION['username'] ?> 你已经登录
                <?php }else {?>
				<-->
                <div class="content">
                    <div class="agent"><a href="http://www.izaojiao.com/api/sina_login.php" target="_blank" class="ba">用新浪微博登录</a>
                    </div>

                    <div class="welcome"><a href="http://www.izaojiao.com/login.php" title="登录">您好，请登录</a><code>|</code><a
                            href="http://www.izaojiao.com/register.php" _soj="top" title="注册">免费注册</a><code>|</code>
                    </div>
                </div>
                <?php } ?>
            </div>


            <dl class="navlink">
			<dt><a href="http://www.izaojiao.com/shanghai" title="首 页">首 页</a></dt>
					<dd></dd>
					<dt><a href="http://www.izaojiao.com/huodong/shanghai" title="亲子活动">亲子活动</a></dt>
					<dd></dd>
					<dt><a href="http://www.izaojiao.com/article" title="早教知识">早教知识</a></dt>
					<dd></dd>
					<dt><a href="http://www.izaojiao.com/itanying/shanghai" title="俱乐部">俱乐部</a></dt>
					<dd></dd>
					<dt><a href="http://www.izaojiao.com/itanying/shanghai" title="i 探营">i 探营</a></dt>
					<dd></dd>
					<dt><a href="http://www.izaojiao.com/wenda" title="i 问答">i 问答</a></dt>
					
			</dl>
<dl id="switch_model" class="mapothers">
    <dd class=""></dd>
    <dt>
    <a class="switch_to_list" href="" headparam=""></a>
    </dt>

</dl>
</div>

		
         	
    <span class="anjuke_tabbar_side"></span>
</div>
<div class="border_bg"></div>
</div>
<div id="izaojiao-global-search" style="display:none;">
	
<div class="search_box">
	<form action="/search" id="apf_id_7_form" method="get">
		<div class="select_cont">
	    	<a href="javascript:;" class="select"></a>
	    </div>
	    <ul class="select_list" style="display:none" id="select_list_apf_id_7">
	    <li rel="1"><span></span></li><li rel="2"><a href="javascript:;"></a></li><li rel="3"><a href="javascript:;">找小区</a></li>	        	    		<li rel="4"><a href="javascript:;">找经纪人</a></li>	        	    		<li rel="8"><a href="javascript:;">找问答</a></li>	        	    </ul>
	    <input type="hidden" value="1" name="rd" />
	    <input type="hidden" value="1" id="search_type_apf_id_7" name="t">
	    <input type="text" id="keyword_apf_id_7" value="请输入房源特征,地点或小区名..." class="input_text" name="k"  maxlength="100" />
	    <input type="submit" value="搜索" id="sbtn2_apf_id_7" class="input_button se_house">

	</form>
</div>
	<div style="position: absolute; top: 43px; right: -64px;"><a rel="nofollow" target="_blank" href="/map/sale/">地图找房</a></div>

</div>


    </div>
    <div id="content">
        <script type="text/javascript">
			var parentElement=document.getElementById("container");
			var header = document.getElementById("header");
			var newNode = document.createElement("div");
			newNode.id="overmap_layer";
			parentElement.insertBefore(newNode,header);
		</script>
		<div id="apf_id_8" style="position:relative;z-index:1;background-color:white;margin-bottom:2px; display:none">
    <div class="map2_header_nav"></div>
    <div class="map2_header_nav_new"></div>
</div>

<div id="apf_id_9" class="map2_sidebar">
	<div class="map2left2010">
    <dl class="list1 model">
    	<dt class="title">按特色：</dt>
    	<dt><a href="javascript:;" paramid="0" class="focus">所有</a></dt>
    		    <dt><a href="javascript:;" paramid="7">启蒙类</a></dt>
	    	    <dt><a href="javascript:;" paramid="11">创意类</a></dt>
	    	    <dt><a href="javascript:;" paramid="8">益智类</a></dt>
	    	    <dt><a href="javascript:;" paramid="10">情商类</a></dt>
	    	    <dt><a href="javascript:;" paramid="9">运动类</a></dt>
	    	    <dt><a href="javascript:;" paramid="6">才艺类</a></dt>
	    	    <dt><a href="javascript:;" paramid="5">语言类</a></dt>
	    	    <dt><a href="javascript:;" paramid="219">托班</a></dt>
	    	    <dt><a href="javascript:;" paramid="221">父母教育</a></dt>
	 </dl>
	 <dl class="list1 age">
		<dt class="title">按年龄：</dt>
		<dt><a href="javascript:;" paramid="0" class="focus">所有</a></dt>
				<dt><a href="javascript:;" paramid="30">0-1岁</a></dt>
				<dt><a href="javascript:;" paramid="31">1-2岁</a></dt>
				<dt><a href="javascript:;" paramid="32">2-3岁</a></dt>
				<dt><a href="javascript:;" paramid="33">3-4岁</a></dt>
				<dt><a href="javascript:;" paramid="239">4-5岁</a></dt>
				<dt><a href="javascript:;" paramid="240">5-6岁</a></dt>
				<dt><a href="javascript:;" paramid="34">6岁以上</a></dt>
	 </dl>
	 <dl class="list1 time">
		<dt class="title">按上课时段：</dt>
		<dt><a href="javascript:;" paramid="0" class="focus">所有</a></dt>
				<dt><a href="javascript:;" paramid="35">周末班</a></dt>
				<dt><a href="javascript:;" paramid="37">晚上班</a></dt>
				<dt><a href="javascript:;" paramid="38">全日班</a></dt>
				<dt><a href="javascript:;" paramid="36">白天班</a></dt>
	 </dl>
	 <dl class="list1 price">
		<dt class="title">按价格：</dt>
		<dt><a href="javascript:;" paramid="0" class="focus">所有</a></dt>
				<dt><a href="javascript:;" paramid="220">4K元以下/年</a></dt>
				<dt><a href="javascript:;" paramid="1">4-8K元/年</a></dt>
				<dt><a href="javascript:;" paramid="2">8-12K元/年</a></dt>
				<dt><a href="javascript:;" paramid="3">12-16K元/年</a></dt>
				<dt><a href="javascript:;" paramid="4">16K元以上/年</a></dt>
	 </dl>
    
   
</div>
</div>


<div id="apf_id_10" class="map2_div">
	<div id="overmap_layer_only" style="display:none;"></div>
	<div class="shadowh o1 shadowh1"></div>
    <div class="shadowh o2 shadowh2"></div>
    <div class="shadowh o3 shadowh3"></div>
    <div class="shadowh o4 shadowh4"></div>
    <div class="shadowh o5 shadowh5"></div>
    
    <div class="shadowv o1 shadowv1"></div>
    <div class="shadowv o2 shadowv2"></div>
    <div class="shadowv o3 shadowv3"></div>
    <div class="shadowv o4 shadowv4"></div>
    <div class="shadowv o5 shadowv5"></div>
    
    <div id="apf_id_10_map2_canvas2" class="map2_canvas2"></div>
    <div class="map2_commname"></div>
    <div class="map2_commname_highlight"></div>
    <div class="map2_propwind">
    	<div id="map2_propwind_close" class="map2_propwind_close"><a href="javascript:;">关闭</a></div>
    	<h2>
    		<span class="map2_propwind_commname"><a href="javascript:;" class="map2_propwind_listlink" target="_blank"></a></span>
    		
    	</h2>
    	<div id="map2_info_wrapper">
    		<div id="map2_propertys">
    			<div id="map2_info_sort">
    				<div class="sort_buttons"></div>
    				<span class="span_propnum">
    				<p>地址：莘松路莘松路1000号207-208室</p><em class="prop_num" style="">a</em>
    				
    				<span class="span_hqfilter">
    				<div name="frm_ishq" id="map2_is_hq" method="post" /><label for="map2_is_hq"></label><br />

    				</span>
    			</div>
				
    			<div class="map2_propwind_load" style=""></div>
    			<div id="noprops">
    				<p>
    					很抱歉，没有找到符合条件的早教机构。
    				</p>
    				<p>
    					<strong>建议您：</strong><br />
    					重新选择早教机构筛选条件。
    				</p>
    				<p class="red">
    					&lt;--就在左边
    				</p>
    			</div>
    			<ul class="property_list">

    			</ul>
    			<div id="map2_info_page">
    				<a class="page_prev">上一页</a>
    				<a class="page_next">下一页</a>
    				<span class="total_pages"></span>
    			</div>
    		</div>
    	</div>
    	<div id="map2_filters">
			<img class="map2_img" src="http://www.izaojiao.com/data/logo/2/5/10105.jpg">
            <ul class="map2_filters_morelink">
                <li style="float:right;;margin-right: 4px"><a href="javascript:;" class="map2_comm_moreinfo" target="_blank">大家点评</a></li>
    		    <li style="float:right;;margin-right: 4px"><a href="javascript:;" class="map2_comm_fresh" target="_blank">查看照片</a></li>
                <li style="float:right;margin-right:  4px"><a href="javascript:;" class="map2_comm_brokerlist" target="_blank">免费试听</a></li>
    		</ul>
			<ul class="map2_filters_price"></ul>
			<ul class="map2_filters_housemodel"></ul>
    	</div>
    </div>
    <div class="map2_proparrow map2_proparrow_right"></div>
    <div class="map2_notice">
        <div class="l1">在这个位置没找到符合您要求的早教机构&nbsp;:(</div>
        <div class="l2">您可以试试下面的方法：</div>
        <ul class="l3ul">
            <li>拖动地图到其他位置，或者缩小地图试试。</li>
            <li>如果您选择了某个条件，可以考虑换一个再试试。<br/>其他筛选条件也是一样哦。</li>
        </ul>
        <div class="isee">
        	<div class="noprompt"><input type="checkbox" id="chkNoPrompt" /><label for="chkNoPrompt">不再提醒</label></div>
        	<div class="l4"><a href="javascript:;">我知道了</a></div>
        </div>
    </div>
    
    <div class="map2_notice_noresult">
        <div class="l1"></div>
        <div class="l2">建议您：</div>
        <ul class="l3ul">
            <li>输入正确的小区名或者路名;</li>
            <li>先选择区域板块，再缩放/拖动地图到目标位置;</li>
        </ul>
        <div class="isee">
        	<div class="noprompt" style="display:none"><input type="checkbox" id="chkNoPromptNoResult" /><label for="chkNoPromptNoResult">不再提醒</label></div>
        	<div class="l4"><a href="javascript:;">再去找找</a></div>
        </div>
    </div>
</div>
    </div>
    <div style="clear:both;"></div>
    <div id="footer"></div>
</div>
<script type="text/javascript" src="./js/prototype_gather_packed.js"></script>
<script type="text/javascript" src="http://api.map.baidu.com/api?key=645945cc783dceffb4f087d35031e300&v=1.1&services=true"></script>
<script type="text/javascript" src="./js/Map2_Baidu_Findding.js"></script>
<script type="text/javascript">

	new anjuke.global.header.CitySelector('switch_apf_id_5', 'city-panel', 500);
	
	new anjuke.global.header.SearchBar({
		'suggesturl'   : './autocomplete.php',
		'searchform'   : 'apf_id_7_form',
		'searchtype'   : 'search_type_apf_id_7',
		'searchkw'     : 'keyword_apf_id_7',
		'searchbutton' : 'sbtn2_apf_id_7'
	});

	new function() {
	    var searchType = '1';
	    Element.observe(document, 'SearchBar:OptionList', function(event) {
	        searchType = event.memo;
	    });
	    new anjuke.global.search.SearchSuggestion('keyword_apf_id_7', './autocomplete.php', {
	        onParameters: function(entry) {
	            var params = entry.toQueryParams();
	            if (searchType) {
	                params.c = '11';
	                params.t = searchType;
	                params.vr = 1;
	            }
	            return Object.toQueryString(params);
	        },
	        formid: 'apf_id_7_form'
	    });
	}

	var params_header = document.location.hash.substring(1).toQueryParams();
	var sidebarFilter = new Anjuke.Map2.HeaderFilter("apf_id_4", 600 , params_header,"baidu");

	new function() {
	    new anjuke.global.search.SearchSuggestion('keyword', './communitycomplete.php', {
	        onParameters: function(entry) {
	            var params = entry.toQueryParams();
	            params.c = '11';
	            params.t = '3';
	            params.vr = 1;
	            params.tag = 1;
	            params.address_flag = 1;
	            if( params_header.keyword != '' ){
	            	params.keyword = params_header.keyword;
	            }

	            return Object.toQueryString(params);
	        }
	    });
	}

	function selectCommunity(lat,lng,commid,commname){
		document.fire("search:kw" , {"commid":commid , "commname":commname , "lat":lat , "lng":lng});
	}

	var header = new Anjuke.Map2.Header("apf_id_8", 600);

	var load_map_tag ;
	function allowUserOperate(){
		if( load_map_tag ){
			$("overmap_layer").setStyle({"display":"none"});
			clearTimeout(allowTag);
		}else{
			allowTag = setTimeout(allowUserOperate,100);
		}
	}
	allowUserOperate();
	var sidebar = new Anjuke.Map2.Sidebar("apf_id_9");
	var sidebarFilter = new Anjuke.Map2.SidebarFilter("apf_id_9", 600);

	Event.observe(document, "dom:loaded", function() {

	    var center = {
	            "lat":31.244217,
	            "lng":121.503644,
	            "zoom":11            };
	    var filter = {"model": 0, "age": 0, "time": 0, "price": 0};

	    var params = document.location.hash.substring(1).toQueryParams();
	    if( params && params.commid > 0 ){
	        var center = {
	                "lat":params.l1,
	                "lng":params.l2,
	                "zoom":params.l3
	        };
	    }else{
	        var center = {
	                "lat":31.244217,
	                "lng":121.503644,
	                "zoom":11
	        };
	    }

	    if (params) {
			//板块
	        if (params.p1 != undefined && parseInt(params.p1)>0) {
	            var blockId = 0;
	            if (params.p2 != undefined && parseInt(params.p2)>0) {
	                blockId = params.p2;
	            }
	            document.fire("area:select", {"areaid": params.p1, "blockid": blockId});
	        }
			//区域
	        if (params.a1 != undefined && parseInt(params.a1)>0) {
	            filter.areaid = params.a1;
	            document.fire("filter:initArea", {"id":params.a1});
	        }
		
	        if (params.a2 != undefined && parseInt(params.a2)>0) {
	            filter.blockid = params.a2;
	            //document.fire("filter:initBlock", {"id":params.a2});
	        }
			//地铁
	        if (params.a3 != undefined && parseInt(params.a3)>0) {
	            filter.subwayid = params.a3;
	            document.fire("filter:initSubway", {"id":params.a3});
	        }
			//价格
	        if (params.f1 != undefined && parseInt(params.f1)>0) {
	            filter.price = params.f1;
	            document.fire("filter:initPrice", {"id":params.f1});
	        }

	        if (params.f2 != undefined && parseInt(params.f2)>0) {
	            filter.area = params.f2;
	            document.fire("filter:initRange", {"id":params.f2});
	        }

	        if (params.f3 != undefined && parseInt(params.f3)>0) {
	            filter.room = params.f3;
	            document.fire("filter:initRoom", {"id":params.f3});
	        }

	        if (params.f4 != undefined && parseInt(params.f4)>0) {
	            filter.fitment = params.f4;
	            document.fire("filter:fitment", {"id":params.f4});
	        }

	        if (params.l1 != undefined && params.l2 != undefined && params.l3 != undefined && parseInt(params.l3)>0) {
	            center.lat = parseFloat(params.l1);
	            center.lng = parseFloat(params.l2);
	            center.zoom = parseInt(params.l3);
	        }

	        if (params.f5 != undefined && parseInt(params.f5)>0 && params.f6 != undefined && parseInt(params.f6)>0){
	            filter.customtype = params.f5;
	            filter.customid = params.f6;
	            //document.fire("custom:tracker", {"type":params.f5, "id":params.f6});
	        }

	        if (params.f7 != undefined && parseInt(params.f7)>0){
	            filter.age = params.f7;
	            filter.age = params.f7;
	            document.fire("filter:initAge", {"id":params.f7});
	        }

	        if (params.f8 != undefined && parseInt(params.f8)>0 ){
	            filter.type = params.f8;
	            filter.type = params.f8;
	            document.fire("filter:initType", {"id":params.f8});
	        }

	        if (params.flag != undefined && parseInt(params.flag)>0 && params.flagname != undefined && parseInt(params.flagname) != ''){
	            filter.flag = params.flag;
	            filter.flagname = params.flagname;
	        }
	        if (params.keyword != undefined ){
	            filter.keyword = params.keyword;
	        }
	    }

	    var DEF_TRADE_TYPE = 1;

	    var DEF_CITY_INFO = {
	        "cityId":11,
	        "name":"上海",
	        "lat":center.lat,
	        "lng":center.lng,
	        "zoom":center.zoom,
	        "swlat":30.539672823447,
	        "swlng":120.56502978536,
	        "nelat":31.958353950725,
	        "nelng":122.30627513928    };

	    var DEF_MIN_CONTAINER_WIDTH = 950;
	    var DEF_MIN_CANVA_HEIGHT = 500;
	    var DEF_HEAD_HEIGHT = 108;

	    var viewportDimensions = document.viewport.getDimensions();

	    var canvas = $("apf_id_10_map2_canvas2");
	    var canvasHeight = viewportDimensions.height - DEF_HEAD_HEIGHT;
	    if (canvasHeight < DEF_MIN_CANVA_HEIGHT) {
	        canvasHeight = DEF_MIN_CANVA_HEIGHT;
	    }
	    canvas.setStyle({"height":canvasHeight+"px"});

	    var container = $("container");
	    if (viewportDimensions.width < DEF_MIN_CONTAINER_WIDTH) {
	        container.setStyle({"width":DEF_MIN_CONTAINER_WIDTH});
	    }
	    var findding2 = new Anjuke.Map2.Findding2('apf_id_10', {
	        'tradetype':DEF_TRADE_TYPE,
	        'cityInfo':DEF_CITY_INFO,
	        'filter':filter,
	        'load':'baidu',
	        'commid':params.commid,
	        'isrankon':'1'
	    });
    
	    load_map_tag = findding2.drawMap();

	    findding2.getJsonMarkers();

	    findding2.updateListUrl();
    
	    Event.observe(window, "resize", function() {
	        viewportDimensions = document.viewport.getDimensions();
	        canvasHeight = viewportDimensions.height - DEF_HEAD_HEIGHT;
	        if (canvasHeight < DEF_MIN_CANVA_HEIGHT) {
	            canvasHeight = DEF_MIN_CANVA_HEIGHT;
	        }

	        var containerWidth = viewportDimensions.width;
	        if (containerWidth < DEF_MIN_CONTAINER_WIDTH) {
	            containerWidth = DEF_MIN_CONTAINER_WIDTH;
	        }
	        canvas.setStyle({"height":canvasHeight+"px"});
	        container.setStyle({"width":containerWidth});
	        window.setTimeout(function(){
	//            canvas.setStyle({"height":canvasHeight+"px"});
	//            container.setStyle({"width":containerWidth});
	        }, 500);

	        findding2.getCanvasDimension();
	    });
	});
</script>
</body>
</html>
