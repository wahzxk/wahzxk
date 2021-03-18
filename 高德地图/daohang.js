var walking; //行走导航线路
var Driving; //驾车导航线路
var Transfer; //公交换乘
var Riding; //骑行
//骑行导航
function qixing(map, locPoint, position) { //map：地图 tabInd:当前类型 locPoint:自身位置 position:点击的图标的经纬度
	if (Riding != undefined) {
		Riding.clear();
	}
	if (walking != undefined) {
		walking.clear();
	}
	if (Driving != undefined) {
		Driving.clear();
	}
	if (Transfer != undefined) {
		Transfer.clear();
	}
	var start = new AMap.LngLat(locPoint.gdLongitude, locPoint.gdLatitude);
	var end = new AMap.LngLat(position.gdLongitude, position.gdLatitude);
	AMap.plugin('AMap.Riding', function() {
		Riding = new AMap.Riding({
			// 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
			map: map,
			hideMarkers: true,
		})
		Riding.search(start, end, function(status, result) {
			if (status === 'complete') {

			} else {
				uni.showModal({
					title: '获取驾车数据失败',
					content: result,
					showCancel: false,
					confirmText: '确定'
				});
			}
		})
	})
}
//行走导航
function xingzou(map, locPoint, position) { //map：地图 tabInd:当前类型 locPoint:自身位置 position:点击的图标的经纬度
	if (Riding != undefined) {
		Riding.clear();
	}
	if (walking != undefined) {
		walking.clear();
	}
	if (Driving != undefined) {
		Driving.clear();
	}
	if (Transfer != undefined) {
		Transfer.clear();
	}
	var start = new AMap.LngLat(Number(locPoint.gdLongitude), Number(locPoint.gdLatitude));
	var end = new AMap.LngLat(Number(position.gdLongitude), Number(position.gdLatitude));
	AMap.plugin('AMap.Walking', function() {
		walking = new AMap.Walking({
			map: map,
			hideMarkers: true,
		})
		walking.search(start, end, function(status, result) {
			if (status === 'complete') {

			} else {
				uni.showModal({
					title: '获取行走数据失败',
					content: result,
					showCancel: false,
					confirmText: '确定'
				});
			}
		})
	})
}
//驾车导航
function jiache(map, locPoint, position) { //map：地图 tabInd:当前类型 locPoint:自身位置 position:点击的图标的经纬度
	if (Riding != undefined) {
		Riding.clear();
	}
	if (walking != undefined) {
		walking.clear();
	}
	if (Driving != undefined) {
		Driving.clear();
	}
	if (Transfer != undefined) {
		Transfer.clear();
	}
	var start = new AMap.LngLat(locPoint.gdLongitude, locPoint.gdLatitude);
	var end = new AMap.LngLat(position.gdLongitude, position.gdLatitude);
	AMap.plugin('AMap.Driving', function() {
		Driving = new AMap.Driving({
			// 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
			map: map,
			hideMarkers: true,
		})
		Driving.search(start, end, function(status, result) {
			if (status === 'complete') {

			} else {
				uni.showModal({
					title: '获取驾车数据失败',
					content: result,
					showCancel: false,
					confirmText: '确定'
				});
			}
		})
	})
}
//公交换乘
function gongjiao(map, locPoint, position) { //map：地图 tabInd:当前类型 locPoint:自身位置 position:点击的图标的经纬度
	if (Riding != undefined) {
		Riding.clear();
	}
	if (walking != undefined) {
		walking.clear();
	}
	if (Driving != undefined) {
		Driving.clear();
	}
	if (Transfer != undefined) {
		Transfer.clear();
	}
	var start = new AMap.LngLat(locPoint.gdLongitude, locPoint.gdLatitude);
	var end = new AMap.LngLat(position.gdLongitude, position.gdLatitude);
	AMap.plugin('AMap.Transfer', function() {
		Transfer = new AMap.Transfer({
			// 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
			map: map,
			hideMarkers: true,
		})
		Transfer.search(start, end, function(status, result) {
			console.log(result)
			if (status === 'complete') {

			} else {
				uni.showModal({
					title: '获取驾车数据失败',
					content: result,
					showCancel: false,
					confirmText: '确定'
				});
			}
		})
	})
}

module.exports = {
	qixing: qixing,
	gongjiao: gongjiao,
	jiache: jiache,
	xingzou: xingzou
}

//使用
var dh = require('daohang.js');
var startLngLat = {//起始点经纬度
  gdLongitude: '',
  gdLatitude: ''
};
var endLngLat = {//目的地经纬度
  gdLongitude: '',
  gdLatitude: ''
};
dh.jiache(map, startLngLat, endLngLat)
