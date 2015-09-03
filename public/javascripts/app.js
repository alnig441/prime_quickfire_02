$(document).ready(function(){
    $('.submit-button').on('click',function(e){
        e.preventDefault();
        var newStudent = {}
        newStudent.firstName = $('#first').val();
        newStudent.lastName = $('#last').val();
        console.log('new student submitted ', newStudent);

        $.ajax({
            type: "POST",
            dataType: "json",
            data: newStudent,
            url:"/students"
        }).done(function(res){
        console.log('AJAX POST call done with :', res);
        }).always(function(){
        console.log('AJAX POST call complete');
        }).fail(function(jqXHR, textStatus, errorThrown){
        console.log(errorThrown);
        });

        $.ajax({
            type: "GET",
            dataType: "json",
            url:"/students"
        }).done(function(res){
            console.log('AJAX GET call done with : ', res);
            var $newLi = $('<li>');
            $($newLi).append(res.firstName + ' ' + res.lastName);
            $('#contents').append($newLi);
        }).always(function(){
            console.log('AJAX GET call complete');
        }).fail(function(jqXHR, textStatus, errorThrown){
            console.log(errorThrown);
        });
    });

})