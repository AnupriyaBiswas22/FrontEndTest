const myStore = {
  travel: {
    hashtags: ["WanderLust", "YOLO", "traveltheworld", "traveldiaries"],
    posts: [10000, 123456, 87654, 2345678],
    vol: [345678, 987654, 345678, 987654]
  },
  love: {
    hashtags: ["romance", "LoveisLife"],
    posts: [3456, 987654],
    vol: [345678, 987654]
  }
}

function getTags(){
  var myData = document.mainform.term.value;
  let myArray = myStore[myData];

  for(let i=0; i<myArray['hashtags'].length; i++)
  {
    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = myArray['hashtags'][i];
    td2.innerHTML = myArray['posts'][i];
    td3.innerHTML = myArray['vol'][i];
    
    document.getElementById("tags").appendChild(tr);
  }
}