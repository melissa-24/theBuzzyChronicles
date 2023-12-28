var name     ="Adventure Awaits",
    nameArr  =name.split(''),
    arrayLength=nameArr.length,
    containerWidth=$('.adventure').width(),
    fontSizeMax=64,
    containerHeight=$('.adventure').height();
    function getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

function revealMe(){

  var numberOfRealMe = $('.realme').length;
  $("<span>",{
    'class':'realme harf'
  }).appendTo('.adventure').html(nameArr[0]).css({
    left:numberOfRealMe*60,
    'font-size':64
  }).animate({
    bottom:200
  },function(){
    //nameArr.remove(nameArr[0]);
    nameArr.shift();
  });
}
function randomLetters(){
	console.log('started');
   $.each(nameArr,function(key,value){
  $("<span>", {
    'class':'harf'
  }).appendTo('.adventure').html(value).css({
    left:getRandomInt(0,containerWidth),
    fontSize:getRandomInt(12,fontSizeMax)
  }).animate({
    bottom:getRandomInt(600,containerHeight)
  },getRandomInt(200,500),function(){
    $(this).animate({
      opacity:0
    },100,function(){ $(this).remove();});
  });
});
}

 setInterval(function(){
	randomLetters();
},600);

setInterval(function(){
	revealMe();
},500);