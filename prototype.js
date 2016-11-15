var a = {
    say: function () {
        console.log('hi')
    },
    b: 'bbb',
    c: {a: 1}
};

var b = Object.create(a.constructor);
b.b = 'test';

console.log(a.prototype);
console.log(b.__proto__.__proto__);


b.say();
//console.log(JSON.stringify(a.prototype.constructor));
//
//function A(){
//    this.say = function(){
//        console.log('hi');
//    }
//};
//
//console.log(JSON.stringify(A.prototype));
//
//var c = new A();
//
//c.say();
