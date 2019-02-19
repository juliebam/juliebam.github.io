
const answers = [];

let $question1 = $('.question-1');
let $question2 = $('.question-2');
let $question3 = $('.question-3');
let $question4 = $('.question-4');
let $question5 = $('.question-5');
let $score = $('.score');

$(document).ready(function(){

    $('.start').on('click keypress', function(event) {
        if (event.which === 13 || event.type === 'click')
            $('.start').addClass('hide');
            $('.question-1').removeClass('hide');
    })
    
    $('label').on('click', function() {
        const labelId = $(this).attr('for');
        $(`input[id=${labelId}`).attr('checked', true);
    })

            //Firefox bug??? - when clicking on the answer of the first question, it does not push it into the array , works fine on Chrome and Edge though...
    $('.question-1 label').on('click keypress', function(event) {
        if (event.which === 13 || event.type === 'click')
            $question1.addClass('hide');
            $question2.removeClass('hide');
        const userAnswer = $('input[name=biology]:checked').val();
        const pressedAnswer = $(this).val();

        if (userAnswer === 'correct' || pressedAnswer === 'correct' ){
            answers.push(userAnswer);
            // answers.push(pressedAnswer);
        }     
    })

    $('.question-2 label').on('click keypress', function(event) {
        if (event.which === 13 || event.type === 'click')
            $question2.addClass('hide');
            $question3.removeClass('hide');
        const userAnswer = $('input[name=chemistry]:checked').val();
        const pressedAnswer = $(this).val();
        if (userAnswer === 'correct' || pressedAnswer === 'correct' ){
            answers.push(userAnswer);
            // answers.push(pressedAnswer);
        } 
    })

    $('.question-3 label').on('click keypress', function(event) {
        if (event.which === 13 || event.type === 'click')
            $question3.addClass('hide');
            $question4.removeClass('hide');
        const userAnswer = $('input[name=earth]:checked').val();
        const pressedAnswer = $(this).val();
        if (userAnswer === 'correct' || pressedAnswer === 'correct' ){
            answers.push(userAnswer);
            // answers.push(pressedAnswer);
        } 
    })

    $('.question-4 label').on('click keypress', function(event) {
        if (event.which === 13 || event.type === 'click')
            $question4.addClass("hide");
            $question5.removeClass("hide");
        const userAnswer = $('input[name=botany]:checked').val();
        const pressedAnswer = $(this).val();
        if (userAnswer === 'correct' || pressedAnswer === 'correct' ){
            answers.push(userAnswer);
            // answers.push(pressedAnswer);
        } 
    })

    $('.question-5 label').on('click keypress', function(event) {
        if (event.which === 13 || event.type === 'click');
        const userAnswer = $('input[name=health]:checked').val();
        const pressedAnswer = $(this).val();
        if (userAnswer === 'correct' || pressedAnswer === 'correct' ){
            answers.push(userAnswer);
            // answers.push(pressedAnswer);
        } 

        const numOfCorrectAnswers = answers.length;

    
        if (numOfCorrectAnswers === 5) {
            $question5.addClass('hide');
            $('.results-five').removeClass('hide');
            $score.html(`<p>Your score is ${numOfCorrectAnswers} out of 5<p>`);
        } else if (numOfCorrectAnswers === 4){
            $question5.addClass('hide');
            $('.results-four').removeClass('hide');
            $score.html(`<p>Your score is ${numOfCorrectAnswers} out of 5<p>`);
        } else if (numOfCorrectAnswers === 3){
            $question5.addClass('hide');
            $('.results-three').removeClass('hide');
            $('.score').html(`<p>Your score is ${numOfCorrectAnswers} out of 5<p>`);
        }  else if (numOfCorrectAnswers === 2) {
            $question5.addClass('hide');
            $('.results-two').removeClass('hide');
            $score.html(`<p>Your score is ${numOfCorrectAnswers} out of 5<p>`);
        } else {
            $question5.addClass('hide');
            $('.results-one').removeClass('hide');
            $score.html(`<p>Your score is ${numOfCorrectAnswers} out of 5<p>`);
        }
        $('.retry').click(function() {
            location.reload();
        })
    })  
});

    // when (any) label is clicked, we are going to grab the value in for (answer-1) and save it to labelID variable, then we are going to grab the id value in the input and check if its equal to the value of for in label, and if its the same the clicked radio head will be checked.
