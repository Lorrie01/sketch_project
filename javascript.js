$(document).ready(function() {
  //declare all variables first...it enables us to change them later
  var columnWidthCount = 16;
  var columnHeightCount = 16;
  
  function makeBoxes() {
    //boxcount lets us set how many times we want the for loop to run...when we change the columns/rows  this variable will update
    var boxCount = columnWidthCount * columnHeightCount;
  //
    for (var i = 0; i < boxCount; i++) { //loop through each box
    //any code you place in here will execute each time we loop around
      $("<div class='squares'></div>").appendTo('#main');
    }
    // declare this once so we place it after the loop
    $(".squares").width((780 / columnWidthCount) - 2);
    $(".squares").height((780 / columnHeightCount) - 2);
    $('.squares').hover(
      function() {
       var r = Math.floor(Math.random() * 255);
                var g = Math.floor(Math.random() * 255);
                var b = Math.floor(Math.random() * 255);
                 var color = 'rgb(' + r + ',' + g + ',' + b + ')';
                 $(this).css("background-color",color);
        $(this).addClass('hover');
      }
    );
  }
  // initial function
  makeBoxes();
  // do this after click 
  $('button').on("click", function() {
 
    $('div').remove('.squares');

    var squaresHigh = prompt("How many squares high? (must be a number)");
    var squaresWide = prompt("How many squares wide? (must be a number)");
   //prompt returns a string...use parseInt to turn that number string into an integer
    columnWidthCount = parseInt(squaresWide);
    columnHeightCount = parseInt(squaresHigh);

    makeBoxes();
  });
});