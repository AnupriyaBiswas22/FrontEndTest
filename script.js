const myStore = {
  travel: {
    hashtags: ["WanderLust", "YOLO", "traveltheworld", "traveldiaries", "travelphotography","travelgram","traveler","bucketlist","travelbuddies","travellust"],
    posts: [10000, 4567876, 123456, 87654, 2345678, 156700, 123456, 87654, 2345678, 986547],
    vol: [345678,45678,987654,345678,987654,945678, 987654, 345678, 987654,67898]
  },
  love: {
    hashtags: ["loveyourself","selflove", "catlover","doglover","naturelover","romance", "LoveisLife","lovequotes","instalove","lovemom","lovefootball","fashiolover","onelove"],
    posts: [983456, 987654, 34567,98765,98654,45678,345678,87658,456789,87965,67898,9856,456798],
    vol: [456789,345678, 987654,23456,789876,56785,87656,45678,87656,56789,765,456789,87658]
  },
  paris:{
    hashtags: ["paris", "parisienne", "parisianstyle", "parisjetaime","parisfrance","parisfashionweek","parisian","monamour","parismaville","taylorswift"],
    posts: [993456, 987654, 98765, 66789, 987678, 985567, 5678765, 688789,8765221],
    vol: [345678, 987654, 45678, 765876, 68765, 456789, 34567, 567896,87654]
  },
  movies:{
    hashtags: ["movies", "moviestar", "movietrack", "cinema", "blockbuster", "100croreclub", "superstar", "titanic", "movieSets", "movieScripts", "MovieNight", "Netflix&Chill", "Popcorn", "movieMarathon", "movieFinsta", "MoviesDay", "movies4mentalhealth", "marvel", "DCU", "UniversalPictures", "Disney", "DisneyPictures", "movieStarlet", "movieSet"],
    posts: [983456, 987654,45678,76549,45678, 3456,66789,45678,87689,87655,456789,87654,56789,45678,86456,45678,87654,654567,87659,8765,5678,87659,45678,87654],
    vol: [987654, 876556, 567899, 876543,345678, 987654, 45678, 765876, 68765, 456789, 34567, 567896, 987654, 876556, 567899, 876543,345678, 987654, 45678, 765876, 68765, 456789, 34567, 567896]
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

    td1.innerHTML = '#' + myArray['hashtags'][i];
    td2.innerHTML = myArray['posts'][i];
    td3.innerHTML = myArray['vol'][i];
    
    document.getElementById("tags").appendChild(tr);
  }
}