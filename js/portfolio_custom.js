 $(function(){
            $(".menu-btn").on("click",function(){
              $(".menu-btn,header.gnb_header ul li a").toggleClass("on"); 
            });
            //네비 언더바 효과
            $(".gnb-menu1 a").hover(function(){
              $("li.progress-bar").addClass("on1");  
            },function(){
              $("li.progress-bar").removeClass("on1");
            });
            $(".gnb-menu2 a").hover(function(){
              $("li.progress-bar").addClass("on2");  
            },function(){
              $("li.progress-bar").removeClass("on2");
            });
            $(".gnb-menu3 a").hover(function(){
              $("li.progress-bar").addClass("on3");  
            },function(){
              $("li.progress-bar").removeClass("on3");
            });
            $("a.top_btn").click(function() {//탑버튼이동
                $('html, body').animate({
                    scrollTop: 0
                },500);
                return false;
            });

            $("li.gnb-menu a").click(function(){      
                $('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
                return false;
            });

            //what i do 댑스 에니메이션 컨트롤
            $("p.stop").click(function(){
               $(".skill-title-wrap h1").addClass("off");
                return false;
            });
            $("p.play").click(function(){
               $(".skill-title-wrap h1").removeClass("off");
                return false;
            });

            //프로젝트메뉴
            $("li.project-menu").click(function(){
                var clickTg = $(this).parents(".project");
                clickTg.find(".introduce-wrap").removeClass("active");
                clickTg.addClass("active");
                $("div.introduce-wrap",this).addClass("active");
                $(window).on("scroll",function(){//스크롤
                    var scr = $(window).scrollTop();
                    var scrBottom = $(window).scrollTop() + $(window).height();
                    var width = $(window).width();
                    var el = clickTg.position().top;
                    var nextEl = el + clickTg.height();
                    if ( scr >= nextEl || scrBottom <= el){
                        $(clickTg).removeClass("active");
                        $(".introduce-wrap").removeClass("active");
                    };
                });
                $("div.close-btn").click(function(){
                   $(this).parents(".project").removeClass("active").find(".introduce-wrap").removeClass("active"); 
                });
            });
            $(".view_more").click(function(){
               $(".aladin-project,.disney-project").slideDown(500); 
                $(this).parent(".view_more_btn").css("display","none");
                return false;
            });
        
        $(window).on("scroll",function(){//스크롤
                var scr=$(window).scrollTop();
                if (scr >= 1000){//탑버튼
                        $("aside").fadeIn();
                        $(".today_weather").css("right","80px");
                    }else{
                        $("aside").fadeOut();
                        $(".today_weather").css("right","20px");
                };
                /*$("#scrolltop").text(scr) ;
                var scrollBottom = $(window).scrollTop() + $(window).height();
                $("#scrollbottom").text(scrollBottom);*/
          });
});
        
        