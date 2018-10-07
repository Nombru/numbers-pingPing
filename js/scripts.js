// Business Logic

// var remove = function(output) {
//   var element = document.getElementById("#output");
//   element.parentNode.removeChild(element);
// }

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
    console.log("hi");

    $(".alertmsg").remove();
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






        // var emptyArray = []
        // var total = 0;
        // var countTo = parseInt($("#number1").val());
        // var countBy = parseInt($("#number2").val());
        //
        // var countingNumber = Math.floor(countTo/countBy);
        //
        // if (isNaN(countingNumber)) {
        //   alert("Enter some numbers");
        // } else {
        //   for (index = 0; index <= countingNumber; index += 1) {
        //     total = index * countBy;
        //     emptyArray.push(total);
        //     $(".results").append(total);
        //     };
        //   };

    });
  });
