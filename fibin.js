let a = 1;
let b = 2;
let c = 3;
let evens = []

for (var i = 0; i < 30; i++) {
a = b;
b = c;
c = a + b;
if(c % 2 === 0) evens.push(c);
}
