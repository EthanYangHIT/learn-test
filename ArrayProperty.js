//var arr = [1,2,3,4];
//console.log(arr.slice(2));
//console.log(arr.concat([5,6]));
//console.log(arr);
//console.log(arr.reverse());
//console.log(arr);
//
//var str = 'hello';
//
////var str1 = Array.prototype.reverse.call(str);
//
//console.log(Array.prototype.reverse.call(str));
//
Array.prototype.slice(start, [end]);

////返回一个新的数组，取原数组索引值的 start 至 end ，当 end 缺省时，默认截取至末尾
//
////Array.prototype.concat(value1,[,value2[,...[valueN]]]);
//
////返回一个新的数组，包含原数组以及参数中的value,value可以为数组或值
//
//Array.prototype.reverse();

//将原对象反转

Array.prototype.every(function(element, index, array){
    return false || true;
});
//判断数组中元素是否均符合callback 中的判断。callback中返回false则立即终止，并返回false
//var str = 'Hello';
//
Array.prototype.splice(start,deleteCount[,item1[,item2[,...]]]);
//  用新元素替换旧元素，以此修改数组的内容
// 从数组的start处，删除deleteCount个元素。itemN为要添加进数组的元素，如果不指定，则只删除数组元素
//  deleteCount 可以为负值，从数组末尾的第deleteCount位开始
////str.join;
////str.map;
////undefined
//
//var c = Array.prototype.join.call(str,'-');
////'H-e-l-l-o'
//var d = Array.prototype.map.call(str,function(v){
//    return v.toUpperCase() + '.'
//}).join('');
////'H.E.L.L.O.'
var a = 1000.234567;
console.log(a.toFixed());
Number.prototype.toExponential()
//返回科学计数法
Number.prototype.toFixed([num]);
//四舍五入至num位，num缺省时保留至整数位
Number.prototype.toPrecision(num);
//显示num位的有效位数