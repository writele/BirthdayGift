(function(){ 

var getRandomImage = function(tag) {

  $.ajax({
    url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + tag,
    dataType: 'jsonp',
    success: function(results){
        var response = results.data;
        var imageURL = response.image_original_url;
        $('.ImageContainer').append().html("<img src='"+imageURL+"'>");
    }
  });
}

var replaceGetGiftMessage = function() {

  var GiftMessages = [
  "Worst. Gift. Ever.",
  "New gift, please.",
  "This gift sucks.",
  "WTF is this",
  "Gift exchange time."
  ];

  var Random = Math.floor(Math.random() * (5));

  $("button span").append().html(GiftMessages[Random]);

}

$("button").on("click", function(){
  getRandomImage("video+games");
  replaceGetGiftMessage();
});

getRandomImage("video+games")();


}());