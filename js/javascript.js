//swiper
$(function(){
    var swiper_IndexBanner = new Swiper('.swiper_IndexBanner', {
	    autoHeight: true, //自動高
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 1, //顯示個數
        spaceBetween: 0, //間距
    });
})

//首頁
$(function(){
    $(".homeCenter nav.gameFilter li").click(function(){
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    })
})

//mainPage
$(document).on("click","header.innerPage .mainPage_group", function(){
    if($(".mainPage .betType_mode").hasClass("display")) {
        $(".betType_mode").removeClass("display").siblings('.topContainer').addClass('display');

        $(".filter")
        .removeClass("display")
        .css("top","0");

    } else {
        $(".filter")
        .addClass("display")
        .css("top","31vw");

        $(".jumpWindow")
        .removeClass("display");

        $(".mainPage .betType_mode")
        .addClass("display")
        .next(".topContainer")
        .removeClass("display");
    }
})
$(function(){
    $(".mainPage .betType_mode li").click(function(){
        var text = $(this).text();
        var n = $(this).index();

        $(this)
        .addClass("active")
        .siblings()
        .removeClass();

        $("header.innerPage .mainPage_group .pageTitle")
        .text(""+ text +"");

        $(this)
        .parents(".betType_mode ")
        .removeClass("display");

        $(".filter")
        .removeClass("display")
        .css("top","0");

        $(".mainPage .topContainer")
        .addClass("display");

        if(n == 3) {
            $("header.innerPage .mainPage_group .pageTitle").addClass("multi");

            $(".mainPage .dayFilter")
            .addClass("display");

            $("footer .multiBet_mode")
            .addClass("display");
        } else {
            $(".mainPage .dayFilter")
            .removeClass("display");

            $("header.innerPage .mainPage_group .pageTitle").removeClass("multi");
            $("footer .multiBet_mode")
            .removeClass("display");
        }
    })
    //串關選擇日期
    $(".mainPage .topContainer .dayFilter li").click(function(){
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    })
    //選擇球種
    $(".mainPage .topContainer .gameType li").click(function(){
        var n = $(this).index();
        var typeName = $(this).find("p").text();
        var typeNum = $(this).find("span.num").text();

        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".mainPage .dataContainer:eq(" + n +")")
        .addClass("display")
        .siblings(".dataContainer")
        .removeClass("display");

        $(".mainPage .currentType .group:nth-of-type(1)")
        .find(".typeName").text("" + typeName + "");

        $(".mainPage .currentType .group:nth-of-type(1)")
        .find(".num").text("" + typeNum + "");

        $(".mainPage .switchBtn")
        .removeClass("on");

        $(".dataContainer.display .filterBlock ul li").removeClass("pro");
    })
    //版本開關
    $(".mainPage .switchBtn").click(function(){
        $(this)
        .toggleClass("on");

        $(".dataContainer.display .filterBlock ul li").toggleClass("pro");
    })

    $(".mainPage .dataType .state").click(function(){
        $(this)
        .closest(".dataType")
        .toggleClass("active");
    })

    $(".mainPage .dataType ul li").click(function(event){
        $(this)
        .toggleClass("active");
    })
    //投注
    $(".mainPage .dataType ul li .rateBlock").click(function(event){
        $(this)
       .toggleClass("active");

       if ( $(".mainPage_group p").hasClass("multi") ) {
        $(".filter")
        .removeClass("display")
        .css("top","0");
       } else {
        $(".filter")
        .addClass("display")
        .css("top","0");
       
        $(".filter, .jumpWindow.betGame")
        .addClass("display")
        .siblings()
        .removeClass("display");
       }

        event.stopPropagation();
    })

    //串關功能-----------------------------------------------------------
    $("footer .multiBet_mode .current_state").click(function(){
        $(this)
        .closest(".multiBet_mode")
        .toggleClass("active")
        .closest("body");

        $(".filter")
        .toggleClass("display")
        .css("top","0")
        .find(".jumpWindow")
        .removeClass("display");

        $("header")
        .toggleClass("active");

        $("footer")
        .toggleClass("highIndex");
    })
    $("footer .multiBet_mode ul li .cross_icon").click(function(){
        var num = $(this).closest("ul").find("li").length-1;
        
        $(this)
        .closest("li")
        .remove();

        $(".multiBet_mode .current_state .count").text(""+ num +"");

        if(num == 0) {
            $("footer .multiBet_mode ul")
            .css("padding","0");
        }
    })
    $("footer .multiBet_mode p.moreType").click(function(){
        $(this)
        .toggleClass("active");
        
        $("footer .moreCount")
        .toggleClass("display");

        $("footer ul.betList")
        .css("max-height","40vw");
    })
    $("footer .multiBet_mode .moreCount .close").click(function(){
        $(this)
        .closest(".moreCount")
        .removeClass("display");
    });
    //查看賽事
    $(".mainPage .infoWrap .more").click(function(event){
        var check = $(this).closest(".mainPage").find(".pageTitle").hasClass("multi");
        var date = $(this).siblings(".functionState").find(".date").text();
        var time = $(this).siblings(".functionState").find(".time").text();
        var teamA = $(this).closest(".gameBlock").find(".teamRow .teamName:eq(0)").text();
        var teamB = $(this).closest(".gameBlock").find(".teamRow .teamName:eq(1)").text();

        $(".mainPage .betGame_Detail")
        .addClass("display");
        
        if( check == false){
            $("footer ")
            .addClass("innerPage_Mode")
            .css("z-index","25");
        } else {
            $("footer")
            .css("display","none");
        }

        $(".mainPage .betGame_Detail .info .date").text(date);
        $(".mainPage .betGame_Detail .info .time").text(time);
        $(".mainPage .betGame_Detail .team:eq(0) p").text(teamA);
        $(".mainPage .betGame_Detail .team:eq(1) p").text(teamB);
        $(".mainPage .betGame_Detail p.teamA").text(teamA);
        $(".mainPage .betGame_Detail p.teamB").text(teamB);

        console.log(check);
        event.stopPropagation();

        $(".betGame_Detail .teamBlock").click(function(){
            $(this)
            .addClass("active")
            .siblings().removeClass("active");
        })

        $(".typeBlock .typeName i").click(function(){
            $(this)
            .toggleClass("active");
        })
    })
   
    //查詢聯賽
    $("header.innerPage i.fa-magnifying-glass").click(function(){
        $("footer")
        .css("display","none");

        $("main, main.fullScreen")
        .css("padding","0");

        $(".mainPage .searchFilter")
        .addClass("display");
    })
    $(document).on("click",".mainPage .searchFilter .close_innerMode",function(){
        $(this)
        .closest(".searchFilter")
        .removeClass("display");

        $("footer")
        .css("display","flex");

        $("main.fullScreen")
        .css("padding","0 0 12.888vw");

    })
    $(".searchFilter .content .allGames ul .typeName").click(function(){
        $(this)
        .closest("ul")
        .toggleClass("active");
    })
    $(document).ready(function() {
        $('.searchFilter .selectAll input').click(function() {
            $('.searchFilter .allGames ul li input').each(function() {
                this.checked = !this.checked;
            });
            $('.searchFilter .allGames ul').addClass("active");
        })
    })
    //設置菜單
    $("footer .mainPageNav li.setMenu").prop(function(){
        $(".filter")
        .addClass("display");

        $(".jumpMenu")
        .addClass("display")
        .siblings()
        .removeClass("display");

        $("header")
        .css("top","0")
        .toggleClass("active");
    })
})
$(document).on("click", "footer .mainPageNav li.setMenu", function(){
    $(".filter")
    .addClass("display")
    .find(".jumpMenu")
    .addClass("display")
    .siblings(".jumpWindow")
    .removeClass("display");

    $("header").css("z-index", "20");
})

//tutorialPage
$(function(){
    //球種規則切換
    $(".tutorialPage .gameType li").click(function(){
        var n = $(this).index();
        
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".tutorialPage .ruleContainer:eq(" + n + ")")
        .addClass("display")
        .siblings(".ruleContainer").removeClass("display");
    })
    //規則類別切換
    $(".tutorialPage .ruleType li").click(function(){
        var n = $(this).index();
        
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".tutorialPage .ruleContainer.display")
        .find(".ruleType_content:eq(" + n + ")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//deposit
$(function(){
    $('header .fa-circle-question.deposit').click(function(){
        $(this).next('.balance').toggleClass('display');
    })
    $(".depositPage .payTypeBlock .type").click(function(){
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    })

    $(".depositPage .quickMoneyBlock button").click(function(){
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    })
})

//transfer
$(function(){
    $(function(){
        $(".transferPage .platBlock .platform i").click(function(){
            $(this)
            .toggleClass("active");
        })
    })

    //遊戲平台展開收合
    $(document).on("click",".transferPage .platWrap_Switcher",function(){
        $(this)
        .closest(".transferPage")
        .find(".platBlock")
        .addClass("active");

        $(this)
        .addClass("active")
        .find("p")
        .text("收合");
    });
    $(document).on("click",".transferPage .platWrap_Switcher.active",function(){
        $(this)
        .closest(".transferPage")
        .find(".platBlock")
        .removeClass("active");

        $(this)
        .removeClass("active")
        .find("p")
        .text("展開");
    });

    $(function(){
        $(".switcher").click(function(){
            $(this)
            .toggleClass("on");
        })
    })
})

//post 
$(function(){
    $(".postPage .postType li").click(function(){
        var n = $(this).index();

        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".postPage .typeContainer:eq(" + n + ")")
        .addClass("display")
        .siblings()
        .removeClass("display");
    })
})

//cs
$(function(){
    $(".csPage .quickHref p").click(function(){
        var n = $(this).index();
        
        $(".csPage .innerMode:eq("+ n +")")
        .addClass("display");
    })
    $(".csPage .innerMode .innerMode_header i").click(function(){
        $(this)
        .closest(".innerMode")
        .removeClass("display");
    })
})

//gameResult
$(function(){
    //球種日期選擇
    $('.gameResultPage .resultType li').click(function(){
        var n = $(this).index();

        $(this)
        .addClass("active")
        .css("filter","brightness(1)")
        .siblings()
        .removeClass("active")
        .css("filter","brightness(0.4)");

        $(this)
        .closest(".resultType")
        .css("background","#000000ad");

        $(".filter")
        .addClass("display")
        .css("top","31vw");

        if(n == 0){
            $(".jumpBlock.sportType")
            .addClass("display")
            .siblings()
            .removeClass("display");
        } if(n == 1) {
            $(".jumpBlock.dateFilter")
            .addClass("display")
            .siblings()
            .removeClass("display");
        }

        
        $('.jumpBlock .content button').click(function(){
            var val = $(this).text();
            
            $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");

            $(".gameResultPage .resultType li.active")
            .find("p")
            .text(val);
        })
    })

    //今日昨日篩選
    $('.gameResultPage .searchFilters button').click(function(){
        var n= $(this).index();

        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        $(".gameResultPage .dataTable:eq("+ n +")")
        .addClass("display")
        .siblings()
        .removeClass("display");
    })
})

//member
$(function(){
    $('.memberPage .topArea .memberBlock').click(function(){
        $(this)
        .closest(".memberPage")
        .find(".memberEditing")
        .addClass("display");
    })

    $(".memberEditing .innerMode_header i").click(function(){
        $(this)
        .closest(".memberEditing")
        .removeClass("display");
    })

    //編輯資料
    $(".memberEditing button.turnEditBtn").click(function(){
        $(this)
        .css("display", "none")
        .closest(".memberEditing")
        .find(".memberData")
        .addClass("editing");

        $(".hintBox")
        .addClass("editing");
    })

    //確認修改(完成編輯)
    $(".memberPage .memberEditing .memberData .btnBlock button").click(function(){
        $(this)
        .closest(".memberData")
        .removeClass("editing");

        $(".memberEditing button.turnEditBtn")
        .css("display", "flex");

        $(".hintBox")
        .removeClass("editing");
    })

    //教學
    $(".memberPage ul li.tutorialBtn").click(function(){
        $(this).closest('.bottomArea').addClass("tutorial_mode");
    });
    $(".memberPage ul li.endTutorialBtn").click(function(){
        $(this).closest('.bottomArea').removeClass("tutorial_mode");
    })
    $(".memberPage .forBasic").click(function(){
		$(".jumpWindow")
		.removeClass("display");

		$(".filter")
		.css("z-index","101");
		$("footer")
		.css("display","none");

		$(".filter,.noviceWindow.basic")
		.addClass("display");
	})
	$(".memberPage .forSingle").click(function(){
		$(".jumpWindow")
		.removeClass("display");

		$(".filter")
		.css("z-index","101");
		$("footer")
		.css("display","none");

		$(".filter,.noviceWindow.single")
		.addClass("display");
	})
	$(".memberPage .forMulti").click(function(){
		$(".jumpWindow")
		.removeClass("display");

		$(".filter")
		.css("z-index","101");
		$("footer")
		.css("display","none");

		$(".filter,.noviceWindow.multi")
		.addClass("display");
	})
	$(".memberPage .forBet").click(function(){
		$(".jumpWindow")
		.removeClass("display");

		$(".filter")
		.css("z-index","101");
		$("footer")
		.css("display","none");

		$(".filter,.noviceWindow.bet")
		.addClass("display");
	})


	$(".goWindow .cancelBtn,.goWindow .content button").click(function(){
		$(".filter")
		.removeClass("display");
	})

	$(".noviceWindow .cancelBtn,.noviceWindow .cancel").click(function(){
		$(".filter")
		.removeClass("display");

		$("footer")
		.css("display","block");
	})
})

//setting
$(function(){
    $(".settingPage .controller, .settingPage .switch").click(function(){
        $(this)
        .toggleClass("close");
    })
    $(".settingPage .bottomArea .row").click(function(){
        $(".settingPage .changePW")
        .addClass("display");
    })
    $(".settingPage .topArea .row:eq(3) .switch").click(function(){
        document.location.href="https://wawweb.github.io/newBall_mobile/html/setting.html";
    })
})

//betLimit 
$(function(){
    $(".betLimitPage .tableOuter, .gameRulePage .tableOuter").click(function(){
        $(this)
        .toggleClass("active")
        .siblings()
        .removeClass("active");
    })
})

//betRecord
$(function(){
    
    //切換記錄類別
    $(".betRecordPage .recordType li").click(function(){
        var n = $(this).index();

        $(this)
        .addClass("active")
        .siblings()
        .removeClass();

        $(".betRecordPage .dataTable:eq(" + n +")")
        .addClass("display")
        .siblings()
        .removeClass("display");

        if( n == 0) {
            $(".betRecordPage .searchFilters")
            .css("display", "none");
        } else {
            $(".betRecordPage .searchFilters")
            .css("display", "grid");
        }
    })

    //搜尋日期切換
    $(".betRecordPage .searchFilters button").click(function(){
        $(this)
        .addClass("active")
        .siblings()
        .removeClass();
    })

    //即時注單收合
    $(".betRecordPage .dataTable.current li .detailBlock").click(function(){
        $(this)
        .toggleClass("active")
        .siblings()
        .removeClass("active");
    })

    //歷史注單收合
    $(".betRecordPage .dataTable.history li").click(function(){
        $(this)
        .toggleClass("active")
        .siblings()
        .removeClass("active");

        $(this)
        .find(".tableOuter:eq(0) table")
        .addClass("active");
    })
    $(".betRecordPage .dataTable.history li .detailBlock .tableOuter").click(function(event){
        $(this)
        .find("table")
        .toggleClass("active");

        event.stopPropagation();
    })
})

//jumpWindow
$(function(){
    $('.jumpWindow .closeWindow').click(function(){
        $('.filter')
        .removeClass('display');
    })

    $(".callAnnounce").click(function(){
        $('.filter, .jumpWindow.announcement')
        .addClass('display')
        .siblings(".jumpWindow").removeClass('display');
    })
    $(".hotGameBtn").click(function(){
        $('.filter, .jumpWindow.betHotGame')
        .addClass('display')
        .siblings(".jumpWindow").removeClass('display');
    })

    $('.jumpBlock .closeWindow').click(function(){
        $('.filter')
        .removeClass('display');

        $(".resultType")
        .css("background","#FFFFFF")
        .find("li")
        .css("filter","brightness(1)")
        .removeClass("active");
    })
    //菜單設置
    $(".jumpMenu .switchBtn").click(function(){
        $(this)
        .toggleClass('on');
    })
    $(".jumpMenu .closeMenu").click(function(){
        $(this)
        .closest(".jumpMenu")
        .removeClass('display');

        $("header").css("z-index","15");

        $(".filter")
        .removeClass('display');
    })
    //未結注單
    $(".showUnFinish_bet").click(function(){
        var n = $(".jumpWindow.unFinish_bet .content").find(".tableOuter").length;
        $(".filter")
        .addClass("display");

        $(".jumpWindow.unFinish_bet")
        .siblings()
        .removeClass("display");

        $(".jumpWindow.unFinish_bet")
        .addClass("display")
        .find("span.num")
        .text(""+ n +"");

    })
    $(".jumpWindow.unFinish_bet .tableOuter").click(function(){
        $(this)
        .toggleClass("active");
    })
})