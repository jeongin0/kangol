$(function(){
    colorImgChange();
});

function colorImgChange(){
    var $img =$(".showProd img").attr("src");
    var $firstLoad = $(".prodColor div button:first-child img").attr("alt");
    var $tuneName = $(".showProd img").attr("src").replace(".jpg", $firstLoad + ".jpg");
    $(".showProd img").attr("src", $tuneName);

    $(".prodColor div button img").click(function(){
        $firstLoad = $(this).attr("alt");
        $tuneName = $img.replace(".jpg", $firstLoad + ".jpg");
        $(".showProd img").attr("src", $tuneName);

        $(".prodColor div button").click(function(){
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
        });
        var $wordSpace = $firstLoad.replace(/([A-Z])/g, " $1");
        $(".prodColor em").text($wordSpace);
    });
    $(".prodColor div button img").each(function(){
        var $whiteColor = $(this).attr("src");
        if($whiteColor.includes("White_01")){
            $(this).css("box-shadow","0px 2px 8px 0px rgba(99, 99, 99, 0.2)");
        }
    });
}