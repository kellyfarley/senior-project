// logic for the input page

// reveal teacher options and hide skill options
$("#editByTeacher").click(function(){
	$(".teacherList").show();
	$(".skillList").hide();
});

// reveal skill options and hide teacher options
$("#editBySkill").click(function(){
	$(".skillList").show();
	$(".teacherList").hide();
});