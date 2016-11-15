///**
// * Created by Ethan on 2016/9/1.
// */
//var myObject = {a: 'test'};
//
//Object.getOwnPropertyDescriptor(myObject, 'a');
////获取属性描述符
//
//var result = {
//    value: 'test',      //
//    writable: true,     //是否可写
//    enumerable: true,   //是否可作为枚举值（for i in myObject）
//    configurable: true  //是否可配置 delete myObject.a
//}
//
//Object.defineProperty(myObject, 'a', {//定义属性
//    value: '',
//    writable: true,
//    enumerable: true,
//    configurable: true
//});
//
//delete Object.a
////true
//
//
//Object.preventExtensions(myObject)
//
//Object.seal(myObject)
////在现有对象调用 Object.preventExtensions(...) ,并把现有属性标记为 configurable:false
//
//Object.freeze(myObject)
////在现有对象调用 Object.seal(...) ,并把现有属性标记为 writable:false
//
//myObject = {
//    get a(){
//        return this._a_;
//    },
//    set a(val){
//        this._a_ = val *2;
//    }
//};
//
//myObject.a = 2;
//myObject.a;//4


//Object.keys(myObject);  //[ 'a', '_a_' ]

//Object.getOwnPropertyNames(myObject);

var Obj = {
    sum: function () {
        return this.a + this.b
    }
};

var f1 = function () {
    return this.a + this.b
}

//console.log(Obj.prototype);

//Obj.prototype.sum = f1;

var t1 = Object.create(Obj);

for (var i in t1) {
    console.log(t1[i])
}

t1.a = 2;
t1.b = 3;

var t2 = {a: 2, b: 2}

console.log(t1.sum.bind(t2)());

console.log(t1);

//console.log(t1);
