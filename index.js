function toggleMenu(){
	$(".toggle").click(function(event){
		$(".toggle").toggleClass("active");
		$(".nav-items").toggleClass("hidden");
		}
		)
	}
function enlargeImg(){
	$(".enlarge").click(function(event){
		$(".enlarge").toggleClass("bigJS");
		}
		)
	}
function initialize(){
	toggleMenu();
	enlargeImg();
	}

$(initialize());