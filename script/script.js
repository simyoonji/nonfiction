/*popUp 스크롤*/
$(function(){
$(window).scroll(function(){
	var pPOPUP = $(window).scrollTop();
	
	if(pPOPUP <= 0) {
		$('#popUp').css('top',0);
		
	} else if (pPOPUP > 50){
		$('#popUp').css('top','-50px');
	}
});
});

/*메뉴 슬라이드*/
$('#header-pc nav > ul > li').mouseover(function(){
	$(this).find('.submenu-pc').stop().slideDown();
});
$('#header-pc nav > ul > li').mouseleave(function(){
	$(this).find('.submenu-pc').stop().slideUp();
});

/*aside 슬라이드*/
$('#header-pc aside > ul > li:eq(0)').click(function(){
	$(this).find('ul.languageBox').slideToggle();
	$(this).toggleClass('change');
});


$('.nav-m').click(function(){
	$('.aside-m-bl').toggleClass('on');
	$('#popUp').toggleClass('on');
	$('#header-M').toggleClass('on');
	$('#header-M .mobile-slide-menu').toggleClass('on');
	$('#header-M > .headerM-inner > h1').toggleClass('on');
	$('#header-M ul.nav-m > li').toggleClass('change');
	$('#header-M ul.aside-m > .a').toggleClass('on');
	$('#header-M ul.aside-m > .b').toggleClass('on');
});


/*모바일 메뉴 슬라이드*/
$('#header-M .mobile-slide-menu > ul > li').mouseover(function(){
	$(this).find('ul.m-slide-menu').stop().slideDown();
});
$('#header-M .mobile-slide-menu > ul > li').mouseleave(function(){
	$(this).find('ul.m-slide-menu').stop().slideUp();
});

/*모바일 언어 슬라이드*/
$('.m-slide-language-menu').click(function(){
	$(this).find('ul.languageBox2').slideToggle();
});



