function commonParentNode(oNode1, oNode2) {
    var root = document.getElementsByTagName('html')[0];

    function deepSearch(targetNode, nodeList) {
        var length = nodeList.length;
        if (length > 0) {
            for (var i = 0; i < length; i++) {
                if (nodeList[i] === targetNode) {
                    return targetNode
                } else {
                    if (deepSearch(targetNode, nodeList[i].childNodes)) {
                        return targetNode
                    }
                }
            }
            return false
        }
        return false
    }

    function searchNodes(targetNode, parentNode) {
        if (parentNode === root) {
            return root
        }
        if (targetNode === parentNode) {
            return parentNode
        }
        if (!deepSearch(targetNode, parentNode.childNodes)) {
            return searchNodes(targetNode, parentNode.parentNode)
        }
    }

    return searchNodes(oNode1, oNode2)
}
var n1 = document.getElementById('aaa');
var n2 = document.getElementById('aba');
var results = commonParentNode(n1, n2);