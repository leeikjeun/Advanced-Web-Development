var fullBt = document.getElementById('fullBt');
var locationBt = document.getElementById('locationBt');
var container = document.querySelector('.test-map'); //지도를 담을 영역의 DOM 레퍼런스

var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴

var img = document.querySelector('img');

fullBt.addEventListener('click',fullScreen);
locationBt.addEventListener('click',geoLocation);

function fullScreen(){
  if (screenfull.enabled) {
    img.style.height = "100%";
    screenfull.request(img);
  }
}

function geoLocation(){
  if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
              pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
              };
              console.log(pos);
              setCenter(pos);
          }, function () {
              handleLocationError(true, infoWindow, map.getCenter());
          });
      } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
      }
}

function setCenter(pos) {
    // 이동할 위도 경도 위치를 생성합니다
    var moveLatLon = new daum.maps.LatLng(pos.lat, pos.lng);
    var marker = new daum.maps.Marker({
        position: moveLatLon
    });
    // 지도 중심을 이동 시킵니다
    map.setCenter(moveLatLon);
    marker.setMap(map);
}
