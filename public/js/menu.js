import React from "react";

    $(document).ready(function(){

    // layout css preparing
    $(".level-menu .drop-down").each(function () {
        var numOfcol = $(this).find(".level-2 .col").length;
        $(this).find(".level-2 .col").css("max-width", 1 / numOfcol * 100 + "%");
    });

    $(".level-menu .l-menu").mouseover(function(){
    var thisLeft = $(this).position().left;
    $(this).siblings(".l-menu").children(".highlight-bar").hide();
    $(this).siblings(".l-menu").children(".drop-down").hide();
    $(this).children(".highlight-bar").show();
    // set the proper left
    //$(this).children(".drop-down").css("left", thisLeft+"px");
    // give enough width firstly
    $(this).children(".drop-down").css('min-width', 900);
    $(this).children(".drop-down").show();
    // adjust to the proper width
    var colLength = $(this).children(".drop-down").find(".level-3 .col").length;
    if(colLength == 1){
    var itemsCnt = $(this).children(".drop-down").find(".level-3 .topNavCat").length;
    if(itemsCnt > 9){
    $(this).children(".drop-down").find(".level-3 .col").css('min-width',320);
    $(this).children(".drop-down").css('min-width',320);
}else{
    $(this).children(".drop-down").css('min-width', colLength * 160);
}
}else{
    $(this).children(".drop-down").css('min-width', colLength * 160);
}
    //$(this).children(".drop-down").css("max-width","calc(100% - "+(thisLeft+5)+"px)");
});

    $(".level-menu .l-menu").on("mouseleave", ".drop-down", function(){
    $(this).fadeOut(200);
    $(this).siblings(".highlight-bar").fadeOut(200);
    //$(this).children(".drop-down").css("max-width","calc(100% - "+(thisLeft+5)+"px)");
});


    $(".level-menu .l-menu").on("keydown", function(e){

    //if it is inside a pop menu
    if($(e.target).parents('.drop-down').length>0){
    // esc pressed
    if(e.which==g_keycodes.esc){
    $(this).children(".drop-down") .trigger('mouseleave');
    $(this).children('a').focus();
}
    else{
    // do nothing
}

}
    // the top lvl link
    else{
    //has sub menu
    if($(this).find('.drop-down a').length>0){
    // space(32) or enter(13)
    if(e.which==g_keycodes.space || e.which==g_keycodes.enter){
    if($(this).children(".drop-down").is(':visible')){
    $(this).children(".drop-down").trigger('mouseleave');
}
    else{
    $(this).trigger('mouseover');
}

    e.preventDefault();

}
    //esc pressed
    else if (e.which==g_keycodes.esc){
    $(this).children(".drop-down").trigger('mouseleave');
}

}


}


});

});