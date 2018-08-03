//fetch('https://api.mcmakler.de/v1/advertisements')
fetch('jsonfile.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
		var k=0;
		var j=0;
		for (var i=0;i < 10; i++) {
			var list = document.getElementsByClassName("card")[j];
			j++;
		   	 list.getElementsByClassName("title")[k].innerHTML = myJson.data[i].title;
			list.getElementsByClassName("rent")[k].innerHTML ="$ "+myJson.data[i].advertisementPrice.sellPrice;
			list.getElementsByClassName("rooms")[k].innerHTML =myJson.data[i].realestateSummary.numberOfRooms+" rooms";
			list.getElementsByClassName("space")[k].innerHTML =myJson.data[i].realestateSummary.space+" metre sq.";
			list.getElementsByClassName("test")[k].src = myJson.data[i].advertisementAssets[i].advertisementThumbnails.thumb_xs.url;
		
		}
  });
	/*
  .catch(function(error) {
    alert(error);
  }); 
*/
