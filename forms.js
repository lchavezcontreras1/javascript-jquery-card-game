function displayGreeting()
{
    // Read value from text box
    var lastName = $("#lname").val();


    // Write value to text box
    $("#output").val(lastName);




    return false;
}

function init()
{
    $("form").submit(displayGreeting);
}

$(init);