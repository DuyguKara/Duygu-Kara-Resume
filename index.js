
$(".lang-click").click(function(event){
    changeLanguage(event.target.id);
    
});

function changeLanguage(inputId) {
    switch (inputId) {
        case "tr":
            window.location.href = 'turkish.html';
            break;
        case "en":
            window.location.href = 'index.html';
            break;
        default:
            break;
    }
}