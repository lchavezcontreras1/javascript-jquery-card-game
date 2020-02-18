function drawCard()
{
   var qoh = "<img src=\"qoh.jpeg\" alt=\"Queen of hearts\"/>";

   var newCard = $(qoh);

   $("#table").append(newCard);

   // $("#table img").first().before(newCard);

   // $("#table img").last().after(newCard);

}
function discardAllCards()
{
    $("#table img").remove();
}

function init()
{
    $("#drawButton").click(drawCard);
    $("#discardButton").click(discardAllCards);
}

$(init);