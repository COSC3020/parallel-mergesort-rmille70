// Testing From: https://github.com/COSC3020/parallel-mergesort-cadenmcfate/blob/main/code.test.js

const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js')+'');

var testSort =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        var sync = a2.sort(function(a, b) {
            return a - b; 
        });
        return parallelMergesort(a1).then(() => {
            return JSON.stringify(a1) === JSON.stringify(sync);
        });
    });

jsc.check(testSort);