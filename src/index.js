module.exports = function getZerosCount(number) {
  var counter = 0;

  for(var i = 5; i <= number; i+=5) {
    var j = i;
      while(true) {
        if(j%5 != 0) {
          break;
        } else {
          counter++;
          j = j/5;
        }
      }     
  }
  return counter;
}