const async = require('async');

async function parallelMergesort(arr) {
    let tmp = [];
    await mergeAsync(arr, 0, arr.length-1, tmp); 
}

async function mergeAsync(arr, low, high) {
    if (low >= high){ return; }
    let mid = Math.floor((low + high) / 2);
    await async.parallel([
      () => mergeAsync(arr, low, mid),
      () => mergeAsync(arr, mid + 1, high),
    ]);
    merge(arr, low, mid, high);
}

function merge(x, lo, mid, hi, tmp) {
    var a = lo, b = mid+1;
    for (var k = lo; k <= hi; k++) {
        if (a <= mid && (b > hi || x[a] < x[b])) {
            tmp[k] = x[a++];
        } else {
            tmp[k] = x[b++];
        }
    }
    for (var k = lo; k <= hi; k++) {
        x[k] = tmp[k];
    }
}