// logic for the input page

// reveal teacher options
$("#editByTeacher").click(function(){
	$(".teacherList").show();
	$(".skillList").hide();
});

// reveal skill options
$("#editBySkill").click(function(){
	$(".skillList").show();
	$(".teacherList").hide();
});