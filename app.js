function Fibonacci() {

  this.looping = function(n){
    var a = 0, b = 1, f =1;
    for (var i = 2; i <= n; i++) {
      f = a + b;
      a = b;
      b = f;
    }
    return f;
  }
////
  this.recursive = function(n){
    if(n <= 2){
      return 1;
    }
    else {
      return this.recursive(n-1) + this.recursive(n - 2)
    }
  }
///////////
this.akyuna = function(i){
var v1 = 1;
var v2 = 1;
var v3 = v1 + v2;

    while(v3 < i){
        console.log(v3);
        v1 = v2;
        v2 = v3;
        v3 = v1 + v2;
    }
  }
fib(4000000);
}
