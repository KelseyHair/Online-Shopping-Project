var pn = [];


$(".add").click(function(){
    
    var input = $(".name").val();
    var namez = $(".price").val();
    var itemPrice = $(".number").val();
    
    $(".list").append("<li>" + input+ " $"+ namez +" #"+ itemPrice+ "</li>");
    pn.push(parseInt(namez));
    
});
    
$(".purchase").click(function(){
    var totalPrice = 0;
pn.forEach(function(price) {
    totalPrice = totalPrice + price;
});

alert("Total Price: " + totalPrice);


});

