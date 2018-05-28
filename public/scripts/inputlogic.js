// logic for the input page

// reveal teacher options
$("#editByTeacher").click(function(){
	$("#byTeacher").toggleClass("hidden");
	$("#teacherList").toggleClass("hidden");
});

// reveal skill options
$("#editBySkill").click(function(){
	$("#bySkill").toggleClass("hidden");
	$("#skillList").toggleClass("hidden");
});