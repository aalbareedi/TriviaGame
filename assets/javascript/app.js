"use strict";
$(document).ready(function() {
  var questionsArr = [
    "1. Which player scored the most points in one game?",
    "2. Which player has the most overall career assists?",
    "3. Who won the most career NBA championships as player?",
    "4. Which player has the highest overall career PPG?",
    "5. Which team holds the record for the most consecutive NBA Finals appearances?",
    "6. Which player won the most regular-season MVP's?",
    "7. Which player has the most overall career points?",
    "8. Which team owns the longest winning streak in the regular-season?",
    "9. Who won the most NBA Finals MVP's?",
    "10. Which team owns the best regular-season record?"
  ];
  var detailsArr = [
    " set the single-game scoring record by scoring 100 points on March 2, 1962 over the New York Knicks.",
    " has 15,806 total career assists, 3,715 more than Jason Kidd in 2nd place.",
    " holds the record for the most NBA championships won with 11 titles during his 13-year playing career.",
    " averaged a record breaking 30.12 PPG throughout his career.",
    " (1957-1966) hold the record for 10 straight Finals appearances having won 9 of them.",
    " holds the record with 6 total regular-season MVP awards, 3 with the Bucks and 3 with the Lakers.",
    " has 38,387 total career points, 1,459 more than Karl Malone in 2nd place.",
    " (1971-72) won 33 straight games, holding the NBA record.",
    " is 6 for 6 in the Finals with 6 Finals MVP's, 3 more than anyone else ever.",
    " (2015-16) broke the 1995-96 Chicago Bulls record of 72-10 by 1 game."
  ];
  var answers = {
    key: [
      ["Allen Iverson", "Michael Jordan", "Wilt Chamberlain", "Kobe Bryant"],
      ["Jason Kidd", "John Stockton", "Magic Johnson", "Steve Nash"],
      ["Michael Jordan", "Kareem Abdul-Jabbar", "Bill Russell", "Tim Duncan"],
      ["Michael Jordan", "LeBron James", "Wilt Chamberlain", "Kobe Bryant"],
      [
        "San Antonio Spurs",
        "Los Angeles Lakers",
        "Chicago Bulls",
        "Boston Celtics"
      ],
      [
        "Michael Jordan",
        "Kareem Abdul-Jabbar",
        "Bill Russell",
        "Wilt Chamberlain"
      ],
      [
        "Michael Jordan",
        "Kareem Abdul-Jabbar",
        "Kobe Bryant",
        "Wilt Chamberlain"
      ],
      [
        "Boston Celtics",
        "Golden State Warriors",
        "Chicago Bulls",
        "Los Angeles Lakers"
      ],
      ["Magic Johnson", "LeBron James", "Michael Jordan", "Shaquille O'Neal"],
      [
        "Boston Celtics",
        "Golden State Warriors",
        "Chicago Bulls",
        "Los Angeles Lakers"
      ]
    ]
  };
  var imageArr = [
    "assets/images/wilt.png",
    "assets/images/stockton.jpg",
    "assets/images/russellRings.jpg",
    "assets/images/jordan4.jpg",
    "assets/images/celtics.jpg",
    "assets/images/kareemMvp.jpg",
    "assets/images/kareemScoring.jpg",
    "assets/images/lakers7172.jpg",
    "assets/images/mjMvp.jpg",
    "assets/images/2016gsw.jpg"
  ];
  var correctAnswersArr = [2, 1, 2, 0, 3, 1, 1, 3, 2, 1];
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unanswered = 0;
  var initialTime = 15;
  var questionNum = 0;
  var lastQuestion = false;
  var windowTimeout1;
  var continueGame;
  $(
    "#question-answer, #result-image, #final-result, #time, #startOver"
  ).addClass("goAway");

  $("#startButton").click(function() {
    windowTimeout1 = setInterval(function() {
      updateTime(initialTime); // updates time
      initialTime--; // decrease time by 1;
      var lastQuestion = questionNum == 9;
      if (initialTime == 0) {
        // times has run out
        // go to a question
        unanswered++;
        showResult("Time Has Ran Out!");
        showResultAndNextQuestion(lastQuestion);
      }
    }, 1000);

    $(this).toggleClass("goAway");
    $("#question-answer, #time").toggleClass("goAway"); // now appears!
    goToThisQuestion(questionNum);
  });
  $("#answer1").click(function() {
    lastQuestion = questionNum == 9;
    if (correctAnswersArr[questionNum] == 0) {
      correctAnswers++;
      showResult("Correct!");
    } else {
      incorrectAnswers++;
      showResult("Incorrect!");
    }
    showResultAndNextQuestion(lastQuestion);
  });
  $("#answer2").click(function() {
    lastQuestion = questionNum == 9;
    if (correctAnswersArr[questionNum] == 1) {
      correctAnswers++;
      showResult("Correct!");
    } else {
      incorrectAnswers++;
      showResult("Incorrect!");
    }
    showResultAndNextQuestion(lastQuestion);
  });
  $("#answer3").click(function() {
    lastQuestion = questionNum == 9;
    if (correctAnswersArr[questionNum] == 2) {
      correctAnswers++;
      showResult("Correct!");
    } else {
      incorrectAnswers++;
      showResult("Incorrect!");
    }
    showResultAndNextQuestion(lastQuestion);
  });
  $("#answer4").click(function() {
    lastQuestion = questionNum == 9;
    if (correctAnswersArr[questionNum] == 3) {
      correctAnswers++;
      showResult("Correct!");
    } else {
      incorrectAnswers++;
      showResult("Incorrect!");
    }
    showResultAndNextQuestion(lastQuestion);
  });
  $("#startOver").click(function() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;
    initialTime = 15; // 15 seconds
    questionNum = 0;
    lastQuestion = false;
    $("#final-result, #startOver").toggleClass("goAway");
    updateView(correctAnswers, incorrectAnswers, unanswered);
    goToThisQuestion(questionNum); // goes to question # 0
    updateTime(initialTime);
    $("#question-answer").toggleClass("goAway");
    windowTimeout1 = setInterval(function() {
      updateTime(initialTime);
      initialTime--; // decrease time by 1;
      var lastQ = questionNum == 9;
      if (initialTime == 0) {
        // times has run out
        // go to a question
        unanswered++;
        showResult("Time Has Ran Out!");
        showResultAndNextQuestion(lastQ);
      }
    }, 1000);
  });
  function updateView(correctAnswers, incorrectAnswers, unanswered) {
    $("#correctAns").text(correctAnswers);
    $("#incorrectAns").text(incorrectAnswers);
    $("#unanswered").text(unanswered);
  }
  function updateTime(initialTime) {
    $("#currentTime").text(initialTime);
  }
  function goToThisQuestion(questionNum) {
    $("#question").text(questionsArr[questionNum]);
    $("#answer" + 1).text(answers.key[questionNum][0]);
    $("#answer" + 2).text(answers.key[questionNum][1]);
    $("#answer" + 3).text(answers.key[questionNum][2]);
    $("#answer" + 4).text(answers.key[questionNum][3]);
  }
  function showResultAndNextQuestion(isLastQuestion) {
    $("#question-answer, #result-image").toggleClass("goAway");
    updateView(correctAnswers, incorrectAnswers, unanswered);
    // resume game by disappearing 5 seconds later;
    if (isLastQuestion) {
      clearInterval(windowTimeout1); // this stops the clock!
      resumeGameForLastQ(); // this will make the result-image go away 4 seconds later.
    } else {
      resumeGame(); // 5 seconds later, the game is resumed;
      clearInterval(windowTimeout1); // stop outside clock
    }
  }
  // show incorrect/correct and actual answer
  function showResult(response) {
    console.log("Question number " + questionNum + " was " + response);
    $("#result").text(response);
    var correctAnswerIndex = correctAnswersArr[questionNum];
    var correctAnsStr = answers.key[questionNum][correctAnswerIndex];
    correctAnsStr += detailsArr[questionNum];
    console.log(correctAnsStr);
    $("#explanation").text(`${correctAnsStr}`);
    $("#image").attr("src", imageArr[questionNum]);
  }
  // 5 seconds later we go to the next question
  function resumeGame() {
    setTimeout(function() {
      questionNum++;
      goToThisQuestion(questionNum);
      initialTime = 15; // timer has start over
      updateTime(initialTime); // updates time
      continueGame();
      $("#question-answer, #result-image").toggleClass("goAway");
    }, 4000);
  }
  function resumeGameForLastQ() {
    setTimeout(function() {
      $("#result-image").toggleClass("goAway");
      $("#final-result, #startOver").toggleClass("goAway"); // now appears!
    }, 4000);
  }
  function continueGame() {
    windowTimeout1 = setInterval(function() {
      initialTime--; // decrease time by 1;
      updateTime(initialTime); // updates time
      var lastQuestion = questionNum == 9;
      if (initialTime == 0) {
        // go to a question
        unanswered++;
        showResult("Time Has Ran Out!");
        showResultAndNextQuestion(lastQuestion);
      }
    }, 1000);
  }
});
