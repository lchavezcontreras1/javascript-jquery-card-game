const imageDirectory = "cards-png-100x153-numbered";

$(document).ready(function () {
    $("#drawDeck").click(drawCard);
    $("#discardAllButton").click(discardAllCards);


    function drawCard() {
        // Generate random number 1 - 52
        var randomNumber = Math.floor(Math.random() * 52) + 1;

        // Create a new image element
        var cardImage = $("<img>");

        // set the image's src attribute
        cardImage.attr("src", `${imageDirectory}/${randomNumber}.png`);

        // set the image's alt text
        cardImage.attr("alt", "playing card");

        // make the card clickable
        cardImage.click(discardOne);

        // Add the new card as the last child of the play area
        $("#playArea").append(cardImage);

        // $("#playArea img").first().before(cardImage);

        // $("#playArea img").last().after(cardImage);

    }

    function discardOne(event) {
        // Get the card that was clicked from the event object
        var clickedCard = $(event.target);

        // Remove the clicked card from the play area (its current parent)
        clickedCard.remove();

        // Remove any card image in the discard area
        // Then put the clicked card's image in the discard area
        $("#discardPile").empty().append(clickedCard);
    }

    function discardAllCards() {
        // find the last card in the play area
        var lastCardDealt = $("#playArea img").last();

        // Remove all the cards from the play area
        $("#playArea img").remove();

        // Add just the last card to the discard area
        $("#discardPile").empty().append(lastCardDealt);
    }

});