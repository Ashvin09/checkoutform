$(document).ready(function(){
				$("#2,#3").find(":input").prop("disabled",true);	//when document ready disabled Billing & Review
				$("#2,#3").addClass("inactive");            
				$("#1").addClass("active");

		$("#btn1").click(function(){	
					$("#1,#3").find(":input").prop("disabled",true);  //disabled shipping & Review
					$("#2").find(":input").prop("disabled",false);   //enable Billing
					$("#1,#2").addClass("active");
					$("#1,#3").addClass("inactive");
					$("#2").removeClass("inactive");
				});


		$("#btn2").click(function(){	
					$("#2,#3").find(":input").prop("disabled",true); //disabled Billing & Review
					$("#1").find(":input").prop("disabled",false);	//enable shipping
					$("#1").addClass("active");
					$("#2,#3").addClass("inactive");
					$("#2,#3").removeClass("active");
					$("#1").removeClass("inactive");
				});


		$("#btn3").click(function(){	
					$("#1,#2").find(":input").prop("disabled",true); //disabled shipping & Billing
					$("#3").find(":input").prop("disabled",false);	//enable Review
					$("#3").addClass("active");
					$("#1,#2").addClass("inactive");
					$("#3").removeClass("inactive");
				});
	
        $("#btn4").click(function(){	
					$("#1,#3").find(":input").prop("disabled",true); //disabled shipping & Review
					$("#2").find(":input").prop("disabled",false);	//enable Billing
					$("#2").addClass("active");
					$("#1,#3").addClass("inactive");
				    $("#3").removeClass("active");
					$("#2").removeClass("inactive");
				});
			});
/* if( x == 1)
{
     $("#1").addClass("active");
	 $("#2,#3").addClass("inactive");
	 $("#2,#3").removeClass("active");
	 $("#1").removeClass("inactive");
     $("#2,#3").find(":input").prop("disabled",true);
	
  
}
 *//* else if(x == 2) {
	 $("#2").addClass("active");
	 $("#1,#3").addClass("inactive");
	 $("#1,#3").removeClass("active");
	 $("#2").removeClass("inactive");
	 
}
	else{
	 $("#3").addClass("active");
	 $("#1,#2").addClass("inactive");
	 $("#1,#2").removeClass("active");
	  $("#3").removeClass("inactive");
	} */

 