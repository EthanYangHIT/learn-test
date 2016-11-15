//原生dom遍历

var nodeList = document.getElementsByClassName('test1');
for (var i = 0; i < nodeList.length; i++) {
    nodeList[i].className = 'test2';
}

var nodeArr = Array.prototype.slice.call(nodeList);

for (var i = 0; i < nodeArr.length; i++) {
    nodeArr[i].className = 'test2';
}