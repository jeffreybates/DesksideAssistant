//hide most things


$("#username").toggle();
$("#form").toggle();
$("#mon1").toggle();
$("#mon2").toggle();
$("#submitbutton").toggle();
$("#desk").toggle();
$("#floor2map").toggle();
$("#floor3map").toggle();
$("#floor4map").toggle();
$("#floorsnavigation").toggle();

$("#maclaptop").toggle();
$("#pclaptop").toggle();
$("#pcdesktop").toggle();
$("#macdesktop").toggle();
$("#mac").toggle();
$("#pc").toggle();
$("#laptoppower").toggle();
$("#desktop").toggle();
$("#laptop").toggle();


$("#monitorOne").toggle();
$("#monitorTwo").toggle();
$("#thunderbolt").toggle();
$("#cablelock").toggle();
$("#bag").toggle();
$("#monitorPower1").toggle();
$("#monitorPower2").toggle();
$("#minidisplay1").toggle();
$("#minidisplay2").toggle()

	//show Dell Desktop specific things


$("#delldeskimage").click(function() {
	$(function() {
	$("#macproimage").toggle("toggle");
	$("#macbookproimage").toggle("scale");
	$("#delllaptopimage").toggle("scale");
	$("#form").toggle();
	$("#mon1").toggle();
	$("#mon2").toggle();
	$("#submitbutton").toggle();
	$("#desk").toggle();
	$("#floorsnavigation").toggle();
	$("#floor2map").hide();
	$("#floor3map").hide();
	$("#floor4map").hide();

	$("#pcdesktop").toggle();
	$("#pc").toggle();
	$("#desktop").toggle();
	$("#monitorTwo").toggle();
	$("#monitorPower2").toggle();


});
});




	//show Mac Pro Desktop specific things
	
$("#macproimage").click(function() {
	$(function() {
	$("#delldeskimage").toggle("scale");
	$("#macbookproimage").toggle("scale");
	$("#delllaptopimage").toggle("scale");
	$("#form").toggle();
	$("#mon1").toggle();
	$("#mon2").toggle();
	$("#submitbutton").toggle();
	$("#desk").toggle();
	$("#floorsnavigation").toggle();
	$("#floor2map").hide();
	$("#floor3map").hide();
	$("#floor4map").hide();

	$("#macdesktop").toggle();
	$("#mac").toggle();
	$("#desktop").toggle();
	$("#monitorTwo").toggle();
	$("#desktoppower").toggle();
	$("#monitorPower2").toggle();
	$("#minidisplay2").toggle()


});
});


	//show Dell Laptop specific things
	
$("#delllaptopimage").click(function() {
	$("#delldeskimage").toggle("scale");
	$("#macbookproimage").toggle("scale");
	$("#macproimage").toggle("scale");
	$("#form").toggle();
	$("#computerassetfield").toggle();
	$("#mon1").toggle();
	// $("#mon2").toggle();
	$("#submitbutton").toggle();
	$("#desk").toggle();
	$("#floorsnavigation").toggle();
	$("#floor2map").hide();
	$("#floor3map").hide();
	$("#floor4map").hide();

	$("#pclaptop").toggle();
	$("#pc").toggle();
	$("#laptoppower").toggle();
	$("#monitorOne").toggle();
	$("#desktoppower").toggle();
	$("#cablelock").toggle();
	$("#laptop").toggle();
	$("#bag").toggle();
	$("#monitorPower1").toggle();


});



	//show Macbook Pro Laptop specific things
	
$("#macbookproimage").click(function() {
	$("#delldeskimage").toggle("scale");
	$("#delllaptopimage").toggle("scale");
	$("#macproimage").toggle("scale");
	$("#form").toggle();
	$("#computerassetfield").toggle();
	$("#mon1").toggle();
	// $("#mon2").toggle();
	$("#submitbutton").toggle();
	$("#desk").toggle();
	$("#floorsnavigation").toggle();
	$("#floor2map").hide();
	$("#floor3map").hide();
	$("#floor4map").hide();

	$("#mac").toggle();
	$("#maclaptop").toggle();
	$("#laptoppower").toggle();
	$("#monitorOne").toggle();
	$("#thunderbolt").toggle();
	$("#laptop").toggle();
	$("#bag").toggle();
	$("#monitorPower1").toggle();
	$("#minidisplay1").toggle();

});

$("#fl2").click(function() {
	$("#floor2map").show();
	$("#floor3map").hide();
	$("#floor4map").hide();
});


$("#fl3").click(function() {
	$("#floor2map").hide();
	$("#floor3map").show();
	$("#floor4map").hide();
});


$("#fl4").click(function() {
	$("#floor2map").hide();
	$("#floor3map").hide();
	$("#floor4map").show();

});


// $("input[type='text'][name='desk']").change(function() {
//     if ($(this).val() >= 41) {
//         alert("To order quantity greater than 40 please use the contact form.");
//         $(this).val('');
//         $(this).focus();
//     }        
// });    


// $("input[type='text'][name='desk']").change(function() {
//     if ($(this).val() <= 299) {
       
//        	$("#floor2map").show();
        
//     }        
// });    

$("input[type='text'][name='desk']").change(function() {
    if ($(this).val() == 250) {
       
       	$("#floor2map").show();
        
    }        else {
    	$("#floor2map").hide();
    }
});    



$("input[type='text'][name='desk']").change(function() {
    if ($(this).val() == 350) {
       
       	$("#floor3map").show();
        
    }   else {
    	$("#floor3map").hide();
    }     
});    

$("input[type='text'][name='desk']").change(function() {
    if ($(this).val() ==450) {
       
       	$("#floor4map").show();
        
    }        else {
    	$("#floor4map").hide();
    }
});    































