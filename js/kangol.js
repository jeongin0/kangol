$(document).ready(function(){
    detailHeaderScroll();
    menu();
    menuTransition();
    menuClose();
    footerContents();
    panelControl();
    cartPanel();
    inputSub();
    popupControl();
    reviewMenu();
    sizeControl();
    accComponent(".accComponent li h3");
    selectComponent();
    countBtn();
    qtyComponent();
    passWordIcon();
    passwordCheck();
    passwordStrength();
    passwordSubmit();
    starList();
    orderPanel();
    cancelOrder();
    onlyNumber();
    selChooseNewsletters();
    selChooseAddress();
    reOrderSubmitBtn();
    wReviewSubmitBtn();
    checkoutInvalid();
    checkoutPayment();
    autoAdd();
    etcInfo();
    etcInfoAutoAdd();
    sendUs();
    backBtn();
    scrollPage();
});


function detailHeaderScroll(){
    var $winScroll = 0;

    $(window).on('scroll', function(){
        var $hereScroll = $(window).scrollTop();

        if($hereScroll <= 0){
            return;
        }

        if($hereScroll > $winScroll){
            $("header").addClass("hidden");
        }else if($hereScroll < $winScroll){
            $("header").removeClass("hidden");
        }
        $winScroll = $hereScroll;
    });
}

function menu(){
    $("header div > ul li.menu").click(function(){
        $("header div nav").toggleClass("active");
    });
}

function menuTransition(){
    $("header div nav ul > li").click(function(){
        $(this).toggleClass("active");
    });
}

function menuClose(){
    $(".closeBtn").click(function(){
        $(this).parent().parent().removeClass('active');
    });
}

function footerContents(){
    $("footer section .conTent > nav b").click(function(){
        $(this).toggleClass("moveSlide");
    });
}

function panelControl(){
    $(".panelBtn").click(function(){
        var $data = "#" + $(this).attr("data-panel");
        $($data).toggleClass("active");

        if($("#searchPanel").hasClass("active")){
            $("header ul li:nth-child(1) input").val("close");
        }else{
            $("header ul li:nth-child(1) input").val("search");
        }
    });
    $(".closeBtn").click(function(){
        $(this).parent().parent().removeClass('active');
    });
}

function cartPanel(){
    function totalPrice(){
        var $total = 0;
        
        $("#cartPanel ul li").each(function(){
            var $prodText = $(this).find("strong.qsRG18").text();
            var $prodPrice = parseFloat($prodText);
            var $priceCount = parseInt($(this).find($("span.qTy")).text());

            $total += $prodPrice * $priceCount;
        });

        $("#cartPanel div strong").text($total.toFixed(2));
    }
    
    $("#cartPanel ul li figure figcaption input[type=button]").click(function(){
        var $figcaption = $(this).closest("figcaption");
        var $countSet = $figcaption.find("span.qTy");
        var $countText = parseInt($($countSet).text());
    
        if($(this).val() == "+"){
            if($countText < 99){
                $countText++;
            }
        }else if($(this).val() == "-"){
            if(1 < $countText){
                $countText--;
            }
        }
        $countSet.text($countText);
        totalPrice();
    });

    $("#cartPanel ul li figure figcaption input[value=Remove]").click(function(){
        $(this).closest("li").remove();

        if($("#cartPanel ul li").length === 0){
            $("#cartPanel p.noneProd").addClass("active");
            $("#cartPanel p.haveProd").removeClass("active");
        }else{
            $("#cartPanel p.haveProd span").text($("#cartPanel ul li").length);
        }

        totalPrice();
    });
}

function inputSub(){
    $("footer form").on("submit",function(e){
        e.preventDefault();

        var $connect = $("footer form input[type='email']");
        var $subscribeText = $("footer .subscribeText");

        if($connect.val().includes("@")){
            $subscribeText.addClass("active");
        }
    });
}

function sizeControl(){
    $(".prodSize ol li").click(function(){
        $(".prodSize ol li").removeClass("active");
        $(this).addClass("active");
    });
}

function popupControl(){
    $(".popupBtn").click(function(){
        var $data = "#" + $(this).attr("data-popup");
        $($data).addClass("active");
    });
    $(".closeBtn").click(function(){
        $(this).parent().removeClass('active');
    });
}

function reviewMenu(){
    $(".tabButton li").click(function(){
        var $menuTap = $(this).attr("data-tap");
        $(".tabButton li").removeClass("active");
        $(this).addClass("active");
        
        $(".tabPage").removeClass("active");
        $("#" + $menuTap).addClass("active");
    });
}


function accComponent(target){
    $(target).click(function(){
        $(this).toggleClass("active");
    });
}

function selectComponent(){
    $(".selectComponent input[type='button']").click(function(){
        $(this).toggleClass("active");
        $(this).next().toggleClass("active");
    });
    
    $(".selectOption li").click(function(){
        var $selectText = $(this).text();

        $(".selectComponent input[type='button'], .selectOption").removeClass("active");
        $(this).siblings().removeClass("active");
        $(this).addClass("active");

        $(".selectComponent input[type='button']").val($selectText);
    });
}

function countBtn(){
    $("[class^='click']").click(function(){
        $(this).closest(".countSet").children("span").text(0);
        $(this).closest(".countSet").children(".clickUp").css("background-image", "url(images/icon_up.png)");
        $(this).closest(".countSet").children(".clickDown").css("background-image", "url(images/icon_down.png)");
        switch($(this).val()){
            case "up":
                $(this).next("span").text(1);
                $(this).css("background-image", "url(images/icon_up_active.png)");
                break;
            case "down":
                $(this).next("span").text(1);
                $(this).css("background-image", "url(images/icon_down_active.png)");
                break;
        }
    });
}

function qtyComponent(){
    var $countSet = $(".qtyComponent span");

    $(".qtyComponent input").click(function(){
        var $countText = parseInt($($countSet).text());
        
        if($(this).val() == "+"){
            if($countText < 99){
                $countText++;
            }
        }else if($(this).val() == "-"){
            if(1 < $countText){
                $countText--;
            }
        }
        $countSet.text($countText);
    });
}

function onlyNumber(){
    $(".onlyNumber").keyup(function(){
        var $onlyNumb = $(this).val().replace(/[^0-9]/g, '');
        $(this).val($onlyNumb);
    });
}

function passWordIcon(){
    $(".visibleBtn").click(function(){
        var $visibleBtn = $(this);
        var $inputType = $visibleBtn.siblings("input[type='password'],input[type='text']");

        if($inputType.attr("type") === "password"){
            $inputType.attr("type","text");
        }else{
            $inputType.attr("type","password");
        }
    });
}

function passwordCheck(){
    var $pass1word = $("#accountPassword");
    var $pass2word = $("#confirmPassword");

    $pass1word.on("change keyup",function(){
        var $wordPattern = $pass1word.val();
        $pass2word.attr("pattern", $wordPattern);

        if($pass1word.val() == $pass2word.val()){
            $pass2word.removeAttr("pattern");
        }
    });
}

function passwordStrength(){
    var $checkPW = null;
    $("#accountPassword").on("keyup",function(){
        $checkPW = $("#accountPassword");
        var $pattern = /(?=.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/\\])/;
    
        var $pTest1 = $(".pWord1Test");
        var $pTest2 = $(".pWord2Test");
        var $pTest3 = $(".pWord3Test");
    
        var $testCheck = $checkPW.val();
    
        if($testCheck.length == 0){
            $pTest1.show().css("color","var(--bc03)");
            $pTest2.hide();
            $pTest3.hide();
        }else if($testCheck.length <= 5){
            $pTest1.hide();
            $pTest2.show().css("color","var(--bc03)");
            $pTest3.hide();
        }else if(6 <= $testCheck.length && $pattern.test($testCheck)){
            $pTest1.hide();
            $pTest2.hide();
            $pTest3.show().css("color","var(--bc03)");
        }
    });
}

function passwordSubmit(){
    $(".personalInfo input[type='submit']").click(function(){
        $checkPW = $("#accountPassword");
        var $pattern = /(?=.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/\\])/;
        
        var $pTest1 = $(".pWord1Test");
        var $pTest2 = $(".pWord2Test");
        var $pTest3 = $(".pWord3Test");
        
        var $testCheck = $checkPW.val();
        
        if($testCheck.length == 0){
            $pTest1.show();
            $pTest2.hide();
            $pTest3.hide();
        }else if($testCheck.length <= 5){
            $pTest1.hide();
            $pTest2.show();
            $pTest3.hide();
        }else if(6 <= $testCheck.length && $pattern.test($testCheck)){
            $pTest1.hide();
            $pTest2.hide();
            $pTest3.show();
        }
    });
}


function selChooseNewsletters(){
    $("#subOptionPopup input[type='submit']").click(function(e){
        e.preventDefault();

        var $checked = $("#subOptionPopup input[type='checkbox']");
        var $chkNews = $checked.prop("checked");

        var $noneSub = $(".selChoose dd.noneSub");
        var $checkSub = $(".selChoose dd.checkSub");

        $noneSub.removeClass("active");
        $checkSub.removeClass("active");

        if($chkNews === true){
            $checkSub.addClass("active");
            $("#subOptionPopup").removeClass("active");
        }else if($chkNews === false){
            $noneSub.addClass("active");
            $("#subOptionPopup").removeClass("active");
        }
    });
}

function selChooseAddress(){
    $("#addAddrPopup form").on("submit",function(){
        var $address = $("#addAddrPopup .yourAddr");
        var $value1 = $address.find("#newPNumber");
        var $value2 = $address.find("#newAddr1");
        var $value3 = $address.find("#newAddr2");
        var $value4 = $address.find("#newCity");
        var $value5 = $address.find("#newCode");

        var $val1 = $value1.val();
        var $val2 = $value2.val();
        var $val3 = $value3.val();
        var $val4 = $value4.val();
        var $val5 = $value5.val();

        if(!$val1 || !$val2 || !$val3 || !$val4 || !$val5){
            return false;
        }
        
        if (!/^\d{11}$/.test($val1)){
            $value1.css("border","2px solid var(--rc02)");
            $value1.next("p").css("display", "block");
            return false;
        }else{
            $value1.css("border","" );
            $value1.next("p").css("display", "none");
        }

        if (!/^\d{5}$/.test($val5)){
            $value5.css("border","2px solid var(--rc02)");
            $value5.next("p").css("display", "block");
            return false;
        }else{
            $value5.css("border","" );
            $value5.next("p").css("display", "none");
        }
        
        var $telVal = $val1.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");

        var $putText = $(".selChoose .newAdd");
        $putText.find("span:nth-of-type(1)").text($telVal);
        $putText.find("span:nth-of-type(2)").text($val2);
        $putText.find("span:nth-of-type(3)").text($val3);
        $putText.find("span:nth-of-type(4)").text($val4);
        $putText.find("span:nth-of-type(5)").text($val5);

        
        var $all = $(".selChoose");
        $all.find("dl dd.noneAddr").removeClass("active");
        $all.find("dl dd.newAdd").addClass("active");

        $("#addAddrPopup").removeClass("active");

        return false;
    });
}

function orderPanel(){
    $(".odPanelBtn").click(function(){
        var $orderMe = $(this).attr("data-panel");
        $(this).toggleClass("active");
        $("#" + $orderMe).toggleClass("active");
    }); 
    
}

function reOrderSubmitBtn(){
    $("[id*='reOrder'] form").on("submit",function(){
        var $tabPage = $(this).closest(".tabPage");
        var $inputPage = $tabPage.attr("id");
        var $btnId = $("input[type='button'][data-panel='" + $inputPage + "']"); 
        var $emailInput = $tabPage.find("input[type='email']");

        if($emailInput.val().includes("@")){
            $btnId.val("RETURN SUCCESS!");
            $tabPage.removeClass("active");
            $btnId.prop("disabled",true);
        }
        return false;
    });
}

function starList(){
    var $starList = $("[id*='wReview'] .starCount li");
    $starList.on("click",function(){
        var $starBtn = $(this);
        var $listStar = $starBtn.parent().children("li");

        $listStar.removeClass("active");
        $starBtn.addClass("active");
        $starBtn.prevAll().addClass("active");
    });
}

function wReviewSubmitBtn(){
    starList();

    $("[id*='wReview'] form").on("submit",function(){
        var $tabPage = $(this).closest(".tabPage");
        var $inputPage = $tabPage.attr("id");
        var $btnId = $("input[type='button'][data-panel='" + $inputPage + "']"); 
        
        var $star = $("[id*='wReview'] .starCount li");
        if($star.filter(".active").length === 0){
            return false;
        }
        
        var $allInput = $("[id*='wReview'] input[type='text'], [id*='wReview'] input[type='email'], [id*='wReview'] textarea");
        $allInput.each(function(){
            if($(this).val() != ""){
                $(this).prop("readonly",true);
                $tabPage.removeClass("active");
            }
        });
        
        console.log($btnId.length);
        $btnId.addClass("changeBtn");
        $star.off("click");

        return false;
    });
}

function cancelOrder(){
    $("#cancelOrderPopup button").click(function(){
        var $clickBtn = $(this).val();
        var $cancelBtn = $(".statusInfo input.cancelOpen");

        if($clickBtn === "yes"){
            $("#cancelOrderPopup").removeClass("active");
            $cancelBtn.val("CANCEL SUCCESS!");
            $cancelBtn.prop("disabled", true);
        }else if($clickBtn === "no"){
            $("#cancelOrderPopup").removeClass("active");
        }
    });
}

function checkoutInvalid(){
    var $allTest = $(".addAddress");
    var $phoneTest = $allTest.find("#accountPNumber");
    var $codeTest = $allTest.find("#accountCode");

    if($phoneTest.length === 0 && $codeTest.length === 0){
        return;
    }

    $(".enterInfo form").on("submit",function(e){
        var $phoneVal = $phoneTest.val();
        var $codeVal = $codeTest.val();

        var $phoneCheck = /^\d{3}-\d{4}-\d{4}$/.test($phoneVal);
        var $codeCheck = /^\d{5}$/.test($codeVal);
        
        if(!$phoneCheck){
            $phoneTest.css("border","2px solid var(--rc02)");
            $phoneTest.next("p").css("display", "block");
        }else{
            $phoneTest.css("border","" );
            $phoneTest.next("p").css("display", "none");
        }

        if(!$codeCheck){
            $codeTest.css("border","2px solid var(--rc02)");
            $codeTest.next("p").css("display", "block");
        }else{
            $codeTest.css("border","" );
            $codeTest.next("p").css("display", "none");
        }

        if(!$phoneCheck || !$codeCheck){
            e.preventDefault();
        }
    });

    $phoneTest.on("keyup", function(){
        var $addHyphen = $phoneTest.val().replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
        $phoneTest.val($addHyphen);
        return true;
    });
    $codeTest.on("keyup",function(){    
        var $limit = $codeTest.val().replace(/^\d{6}$/);
        $codeTest.val($limit);
        return true;
    });
}

function checkoutPayment(){
    $("input[name=paymentMet]").on("change",function(){
        var $cardInfo = $(".cardInfo");
        var $infoInput = $cardInfo.find("input");

        if($("#chkRadio1").is(":checked")){
            $cardInfo.removeClass("showHide");
            $infoInput.attr("required", true);
        }else{
            $cardInfo.addClass("showHide");
            $infoInput.removeAttr("required");
        }
    });
}

function autoAdd(){
    var $cardNumb = $(".cardInfo #cardNumber");
    $cardNumb.on("change",function(){
        var $numbVal = $cardNumb.val();
        $numbVal = $numbVal.replace(/(\d{4})/g, "$1 ").trim();
        $cardNumb.val($numbVal);
    });
    
    var $dateNumb = $(".cardInfo #expirationDate");
    $dateNumb.on("keyup", function(){
        var $addDash = $dateNumb.val();
        if($addDash.length > 2){
            $addDash = $addDash.slice(0, 2) + "/" + $addDash.slice(2); 
        }
        $dateNumb.val($addDash);
    });
}

function etcInfo(){
    $(".etcInfo h3").on("click",function(){
        $(this).parent("li").toggleClass("active");
    });
}

function etcInfoAutoAdd(){
    var $credit = $(".etcInfo #storeCredit");
    $credit.on("change",function(){
        var $discountCode = $credit.val();
        var $allVal = "$" + $discountCode + ".00 USD";
        $(this).val($allVal);
    });
}

function sendUs(){
    var $sendUs = $(".contactSend");
    var $sendNumb = $sendUs.find("#accountPNumber");
    var $sendInput = $sendUs.find("#accountName, #accountEmail, #accountPNumber, #accountMind");
    $(".sendUs form").on("submit",function(){
        var $sendVal = $sendNumb.val();
        if(!/^\d{3}-\d{4}-\d{4}$/.test($sendVal)){
            $sendNumb.css("border","2px solid var(--rc02)");
            $sendNumb.next("p").css("display", "block");
            return false;
        }else{
            $sendNumb.css("border","" );
            $sendNumb.next("p").css("display", "none");
        }

        $sendInput.prop("readonly",true);
        $(".sendUs input[type='submit']").addClass("active").next().css("display","block");

        return false;
    });
    $sendNumb.on("keyup",function(){
        var $addHyphen = $sendNumb.val().replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
        $sendNumb.val($addHyphen);
        return true;
    });
}

function backBtn(){
    $(".backBtn").on("click",function(){
        $("html").scrollTop(0);
        history.back();
    });
}

function scrollPage(){
    $(window).on("scroll",function(){
        var $scroll = $(window).scrollTop();
        var $srcollHeight = $(".scrollBar span:nth-child(2)").height(); 

        if($srcollHeight > $scroll){
            $(".scrollBar span:nth-child(1)").css("top", $scroll + "px");
        }
    });
}