
$(document).ready(()=>{
	$("#mobile-menu").on("click", ()=>{
		$("#mobile-menu").attr('data-display', Number($("#mobile-menu").attr("data-display")) * -1);
		$(".mobile-menu").css("display", Number($("#mobile-menu").attr("data-display"))==-1?"none":"block");
	});
});



