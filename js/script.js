//  console.log('Hi')
//  // alert('danger');
//  var a=9;
//  console.log(a);//block1
//  {
//     var a=20;
//    console.log(a); //block 2
//  }
//  let b=23;
// console.log(b);
//  {
//      let b=34;
//      console.log(b);
// }
// b=44;
// console.log(b);
// const t=40
// console.log(t);
// {
//     const t=90;
//     console.log(t);
// }
// console.log(t);
// //datatypes
// var nam='welcome to javascript';
// console.log(typeof(nam))
// //numbers
// var count=true;
// console.log(typeof(count));
// var gtype;
// console.log(typeof(gtype));
// //array
// let arr=['red','blue','white',10]
// console.log(arr)
// console.log(arr[1])
// console.log(arr.length);
// arr.push('violet');
// console.log(arr)
// arr.pop('blue');
// console.log(arr);
// arr.pop();
// console.log(arr);
// //javascript objects
// let car={
//     mileage:100,
//     model:"i10",
//     color:'red'
// }
// console.log(car)
// console.log(car.model);
// console.log(car.mileage);
// let person=new Object();
// person.gender='male';
// person.height=180;
// console.log(person);
// var a=10;
// b=20;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a%b);
// console.log(a/b);
//increament

e=10;
f=20;
console.log(e);
console.log(f);
if (e>=f && f==20) {
    console.log('e greater than f and f is not= 20');

} else {
    console.log('e is less than f and f  = 20');

}
let add=6;
 add-=3;
 console.log(add);
 var a=10;
var  b=5;
 var c=2;
 var d=3
 var exp=(a+b*(c-d)-7);
 console.log(exp);
//functions
function display(name){
    console.log('Hi ' + name +' welcome to js'); 
}
display('Keerthana');
function addition(t,s){
    var result=t+s;
    return result}
var result=addition(10,30);
console.log('the sum is '+result)
function sub(p,q){
    var re=p-q;
    return re}
    var re=sub(10,5);
    console.log('ths difference is '+re)
    function div(u,v){
        var se=u/v;
        return se
    }
    var se=div(8,4);
    console.log('the ans is '+se)
