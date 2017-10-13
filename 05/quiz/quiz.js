

var list = document.querySelector('.list');
var url = "http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20150401&pageSize=10&pageNo=";

getJSON(url,load);

function load(result){

  for(var i = 0; i < result.data.length; i++){
    console.log(result.data[i]);
    list.innerHTML += "<h1>" + result.data[i].titleKo + "</h1>"
    list.innerHTML += "<img width = 100px src = " + result.data[i].photo.fullname + ">"
    list.innerHTML += "평점 " + result.data[i].moviePoint.inspectPointAvg;
  }

}
