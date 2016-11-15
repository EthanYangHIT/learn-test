var a = 'test';
var b = a; //copied from a
b = 'changed';
console.log('a: ' + a + '\n' + 'b: ' + b);
//a: test
//b: changed
var obj1 = {a: 'a'};
var obj2 = obj1;//浅拷贝
obj2.a = 'b';
console.log('obj1: ' + JSON.stringify(obj1) + '\n' + 'obj2: ' + JSON.stringify(obj2));

var c = JSON.parse(JSON.stringify(obj1));
var d = new Object({a:'a'});
console.log(c);
console.log(d);

console.log(Object.prototype == a.__proto__)
//obj1: {"a":"b"}
//obj2: {"a":"b"}
//obj1 也被改变