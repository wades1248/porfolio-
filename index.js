function toggle(){
	$(".toggle").click(function(event){
		$(".toggle").toggleClass("active");
		$(".nav-items").toggleClass("hidden");
		}
		)
	}
$(toggle());