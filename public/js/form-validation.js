// Wait for the DOM to be ready
function post(url, data) {
    return $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json",
    });
}

function changeColor(inputId, newColor) {
    $("#" + inputId).css("color", newColor);
}
