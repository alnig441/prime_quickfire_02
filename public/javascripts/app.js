$(document).ready(function(){
    $('.submit-button').on('click',function(e){
        e.preventDefault();
        var newStudent = {}
        newStudent.firstName = $('#first').val();
        newStudent.lastName = $('#last').val();
        console.log('new student built ', newStudent);

        $.ajax({
            type: "POST",
            dataType: "json",
            data: newStudent,
            url:"/students"
        }).done(function(res){
        console.log('AJAX call done with :', res);
        }).always(function(){
        console.log('AJAX call complete');
        }).fail(function(jqXHR, textStatus, errorThrown){
        console.log(errorThrown);
        });
    });

})