$(document).ready(function(){
    $('.submit-button').on('click',function(e){
        e.preventDefault();
        var student = {}
        student.firstName = $('#first').val();
        student.lastName = $('#last').val();
        console.log(student);

        $.ajax({
            type: "POST",
            dataType: "json",
            data: "student",
            url:"/models/students"
        }).done(function(res){
        console.log('AJAX call done with :', res);
        }).always(function(){
        console.log('AJAX call complete');
        }).fail(function(jqXHR, textStatus, errorThrown){
        console.log(errorThrown)
        })
    });

})