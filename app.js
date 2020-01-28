
$(function(){

	$(".central_content")
    let $des = $(".central_content")
    
    $des.find('dd').hide()

    $des.find('dt').on('click', function(){
		
        $(this).next().slideToggle()
    })
    const btn = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".page-nav-list");

    btn.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
})