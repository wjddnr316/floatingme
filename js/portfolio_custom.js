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
                $(this).parents(".project").find(".introduce-wrap").removeClass("active");
                $(this).parents('article.project').addClass("active");
                $("div.introduce-wrap",this).addClass("active");
            });
            $("div.close-btn").click(function(){
               $(this).parents(".project").removeClass("active").find(".introduce-wrap").removeClass("active"); 
            });
        });
        
        $(window).on("scroll",function(){//스크롤
            var scr=$(window).scrollTop();
            var width=$(window).width();
            if (scr >= 1000){//탑버튼
                    $("aside").fadeIn();
                    $(".today_weather").css("right","80px");
                }else{
                    $("aside").fadeOut();
                    $(".today_weather").css("right","20px");
            }
            /*$("#scrolltop").text(scr) ;*/
            
            if(width > 1024){//데스크탑
                if (scr >= 2800 || scr <= 1200){
                    $("article.yuhan-project, article.yuhan-project li.project-menu div.introduce-wrap").removeClass("active");
                }
                if (scr >= 3600 || scr <= 2200){
                    $("article.jansport-project, article.jansport-project li.project-menu div.introduce-wrap").removeClass("active");
                }
                if (scr >= 4500 || scr <= 3040){
                    $("article.ju-project, article.ju-project li.project-menu div.introduce-wrap").removeClass("active");    
                }
                if (scr >= 5450 || scr <= 3900){
                    $("article.aladin-project, article.aladin-project li.project-menu div.introduce-wrap").removeClass("active");
                }
                if (scr >= 6300 || scr <= 4800){
                    $("article.disney-project, article.disney-project li.project-menu div.introduce-wrap").removeClass("active");
                }
            }
            if (width <= 1023){//테블릿
                if ( scr >= 3500 || scr <= 2100){
                    $("article.yuhan-project, article.yuhan-project li.project-menu div.introduce-wrap").removeClass("active");
                }
                if ( scr >= 4100 || scr <= 2850){
                    $("article.jansport-project, article.jansport-project li.project-menu div.introduce-wrap").removeClass("active");
                }
                if ( scr >= 4900 || scr <= 3550){
                    $("article.ju-project, article.ju-project li.project-menu div.introduce-wrap").removeClass("active");    
                }
                if ( scr >= 5600 || scr <= 4300){
                    $("article.aladin-project, article.aladin-project li.project-menu div.introduce-wrap").removeClass("active");
                }
                if ( scr >= 6400 || scr <= 5000){
                    $("article.disney-project, article.disney-project li.project-menu div.introduce-wrap").removeClass("active");
                }
            }
        });