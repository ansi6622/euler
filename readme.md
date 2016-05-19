##for the first euler
function counting(){
var counter = [];
for (var i = 1; i < 1000; i++) {
var result = 0;
if (i % 3 === 0 || i % 5 === 0){
  counter.push(i);
}
}
return counter;
}
function adding(){
  var arrayz = counting();
  var result = 0;
  for (var i = 0; i < arrayz.length; i++) {
   console.log(arrayz[i])
   result += arrayz[i];
  }
  return result;
}


adding();
##for the second euler uncommented other recursion example in es2015 cuz i didnt see the need to not run it, npm install babel-cli and then babel-node is how i run this. import numpy as np
mat = np.array([[4,-5],[-2,3]])
vect = np.array([-13,9])
col_vect = np.array([[13],[9]])
zer = np.zeros((3,2))
ones = np.ones((2,4))
zer.reshape((2,3))
a = np.identity(3)
print(mat)
print(vect)
print(col_vect)
print(zer)
print(ones)
print(a)
/
?
%history kelsey python notes
