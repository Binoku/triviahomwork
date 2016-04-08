// Scripts for Trivia Game

$(document).ready(function() {
    
  // User can type name immediately on page load
  $('#player-name').focus();

  // Hide Questions
  $('.questions').hide();

  function removeWelcomeScreen() {
    $('#welcome-screen').detach();
    $('#username').text(playerName);
    $('#question1').show().addClass('animated fadeIn');
    $('#answer1').focus();
  };

  // Store playername and begin game
  $('#name-button').on('click', function(e) {
    e.preventDefault();
    playerName = $('#player-name').val().trim() || 'Player';
    $('#welcome-screen').addClass('animated slideOutUp');
    setTimeout(removeWelcomeScreen, 1000);
  });

  var playerAnswer = '';
  var correctAnswer = '';

  function answerCheck() {
    if(playerAnswer === correctAnswer) {
      // do something
      console.log('Correct!')
    }
    else {
      // do something else
      console.log('Incorrect!');
    }
  };

  // Answer1 Button Actions
  $('#answer1-btn').on('click', function(e) {
    console.log('answer1-btn click function fired');
    e.preventDefault();
    correctAnswer = 'jafar'
    playerAnswer = $('#answer1').val().trim().toLowerCase();
    answerCheck();
  });


}); // end 