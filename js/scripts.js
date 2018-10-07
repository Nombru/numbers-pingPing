// Business Logic

var countDown = function(inputNumber, resultList){
  for (var index = 1; index <= inputNumber; index += 1){
    $(resultList).append("<li class= 'output_li'>" + divisible(index) + " </li>");
  }
}

var divisible = function(inputNumber){
  if ((inputNumber % 15) === 0){
    return "pingpong"
  } else if ((inputNumber % 5) === 0){
    return "pong";
  } else if ((inputNumber % 3) === 0){
    return "ping";
  } else {
    return inputNumber;
  }
}


// User Input Logic
$(document).ready(function() {
  $("form#input").submit(function(event){
    event.preventDefault();
    // console.log("hi");
// used later as a part of the if and else if statements below.
    $(".alertmsg").remove();
// Used in the countDown variable.
    $(".output_li").remove();
      var inputNumber = parseInt($("input#numInput").val());
        if (inputNumber !== inputNumber){
          $(".form-group").append("<span class='alertmsg'>Please enter a valid number.</span>");
          return false;
        } else if (inputNumber < 0){
          $(".form-group").append("<span class='alertmsg'>Please enter a positive integer.</span>");
          return false;
        }

      var result = countDown(inputNumber, ".output");
      $("#output").fadeIn("slow");
    });
  });
