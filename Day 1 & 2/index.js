const arr = [ 2, null, undefined, true, NaN, 'B'] ;

for ( var i=0; i< arr.length; i++){
    console.log(arr[i]);
}
for ( var i in arr) {
    console.log(arr[i]);
}

for ( var element of arr) {
    console.log(element);
}

arr.forEach((element)=> {
    console.log(element);
})
