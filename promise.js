function promiseTest() {
    console.log('start');
    return new Promise(function (resolve, reject) {
        var now = Date.now();
        //console.log(now.toString().toLocaleString(dateTimeString));
        setTimeout(function () {
            console.log('costs:' + (Date.now() - now) / 1000 + 's');
            resolve();
        }, 1000 * 5)
    })
}
console.log('promise is not started now');
promiseTest().then(function () {
    console.log('you see ,done');
});