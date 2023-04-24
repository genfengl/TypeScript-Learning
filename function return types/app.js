function add(n1, n2) {
    return n1 + n2;
}
// void type means no return (can normally be inferred), undefined type means empty return, should rarely use undefined
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
// combineValues = printResult
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
    return result;
});
