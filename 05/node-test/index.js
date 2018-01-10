console.info('hello world');

var arr = [{a:1, b:2}, {a:3, b:4}];

arr.forEach(function(obj){
    console.info(obj);
    console.info(obj.a + ","+ obj.b);
});