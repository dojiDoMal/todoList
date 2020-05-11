$("ul").on("click", "li", function(){
    $(this).toggleClass("li-clicked");
});

$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$(".toggler").click(function(){
    $(this).toggleClass("fa-caret-up");
    $("input").fadeToggle(200);
})

$("input").keypress(function(e){
    if(e.which === 13){
        var newTodo = $(this).val();
        $(this).val("");
        $("ul").append("<li>" + 
        "<span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");
    }
});