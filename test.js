var results = {},
    random = require('./modules/random'),
    l = 5;
    length = 1000000;
var t0 = Date.now();
console.log('Test 1 started');
for (var i = 0; i < length; i++) {
    var n = random.r1(l);
    if(!results[n]){
        results[n] = '';
    }
}
var t1 = Date.now();
var time = t1 - t0;
var duplicates = length - Object.keys(results).length;
console.log('Test 1 ended with results: \nDuplicates: '+duplicates+'\nTime taken: '+time);

var results2 = {};

var t2 = Date.now();
console.log('Test 2 started');
for (var i = 0; i < length; i++) {
    var n = random.r2(l);
    if(!results2[n]){
        results2[n] = '';
    }
}
var t3 = Date.now();
var time2 = t3 - t2;
var duplicates2 = length - Object.keys(results2).length;
console.log('Test 2 ended with results: \nDuplicates: '+duplicates2+'\nTime taken: '+time2);

var results3 = {};

var t4 = Date.now();
console.log('Test 3 started');
for (var i = 0; i < length; i++) {
    var n = random.r3(l);
    if(!results3[n]){
        results3[n] = '';
    }
}
var t5 = Date.now();
var time3 = t5 - t4;
var duplicates3 = length - Object.keys(results3).length;
console.log('Test 3 ended with results: \nDuplicates: '+duplicates3+'\nTime taken: '+time3);

var results4 = {};

var t6 = Date.now();
console.log('Test 4 started');
for (var i = 0; i < length; i++) {
    var n = random.r4(l);
    if(!results4[n]){
        results4[n] = '';
    }
}
var t7 = Date.now();
var time4 = t7 - t6;
var duplicates4 = length - Object.keys(results4).length;
console.log('Test 4 ended with results: \nDuplicates: '+duplicates4+'\nTime taken: '+time4);

var results5 = {};

var t8 = Date.now();
console.log('Test 5 started');
for (var i = 0; i < length; i++) {
    var n = random.r5(l);
    if(!results5[n]){
        results5[n] = '';
    }
}
var t9 = Date.now();
var time5 = t9 - t8;
var duplicates5 = length - Object.keys(results5).length;
console.log('Test 5 ended with results: \nDuplicates: '+duplicates5+'\nTime taken: '+time5);
