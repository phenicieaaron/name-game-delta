// background
document.body.onload = generate;

   function generate() {

      let root = document.documentElement;

      var colors = [

      '#ff0073', '#00eaff', '#ffd240'

   ],

   total = 50,

   space = parseInt(window.innerWidth / total);

   

   for (let i=0; i<total; i++) {

      let dot = document.createElement('div');

      let ind = parseInt(random(colors.length,0));

      dot.className = 'dots';

      dot.style.background = colors[ind];

      dot.style.boxShadow = '0 0 1vw 0.2vw ' + colors[ind];

      dot.style.left = space * i + 'px';

      dot.style.animationDelay = random(5, 0.2) + 's';

      dot.style.animationDuration = random(10, 3) + 's';

      document.body.appendChild(dot);

   }

   }

   function random(max, min) {

      return Math.random() * (max - min + 1) + min;

   }

$(function () {
  console.log("facts please");

  $("#resetGame").click(function () {
    console.log("clicked button");
    
  });
 
  $("#btnGetFacts").click(function () {
    $("#coolNameFactsOutput").html();
    // handle it if input is blank

    let userName = $("#userName").val();
    console.log("clicked");
    $("#coolNameFactsOutput").html(nameLength(userName));
    $("#evenOrOddOutput").html(evenOrOdd(userName));
    $("#reverseNameOutput").html(reverseName(userName));
    $("#avgLengthOutput").html(averageLength(userName));
  });
});

function nameLength(name) {
  
  return "Your name is " + name.length + " letters long,";
}

function evenOrOdd(name) {
  if (name.length % 2 === 0) {
    return 'which is an even number!';
  }
  else {
    return 'which is an odd number!';
  }
}

function reverseName(name) {
  return "Your name backwards is " +name.split("").reverse().join("") +".";
}

function averageLength(name) {
  //assuming average first name length of 6 characters
  var comparedLength = name.length / 6;
  var finalAverageLength = comparedLength * 10;
  if (name.length < 6) {
    return "Your name is " + Math.floor(finalAverageLength) + "% shorter than the average length.";
  }
  else {
    return "Your name is " + Math.floor(finalAverageLength) + "% longer than the average length.";
  }
}

function spiritAnimal(name) {
  
}

// function everyOtherLetter = everyOtherArray((element, index) => {
//   return index % 2 === 0;
// })

// console.log(everyOtherLetter);
// function loopEveryOther(everyOtherArray) {
//   for (let i=0; i < everyOtherArray.length; i++) {
    
//   }
// }
 

