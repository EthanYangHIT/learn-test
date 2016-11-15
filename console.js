function funcA() {
    for (var i = 0; i < 1000; i++) {
        for (var j = 0; j < 1000; j++) {
        }
    }
}

function funcB() {
    for (var i = i; i < 10000; i++) {
        for (var j = 0; j < 10000; j++) {

        }
    }
}

function testProfile(){
    funcA();
    funcB();
}

console.profile('case 1');
testProfile();
console.profileEnd();


