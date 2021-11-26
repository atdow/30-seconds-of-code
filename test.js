/*
 * @Author: atdow
 * @Date: 2021-11-26 11:16:51
 * @LastEditors: null
 * @LastEditTime: 2021-11-26 14:44:22
 * @Description: file description
 */
var numbers = [65, 44, 120, 4];
function myFunction() {
  let a = numbers.reduce(function (prev, cur, index, arr) {
    return prev + cur;
  }, 0);
  console.log(a); // 125
}
var max = numbers.reduce(function (prev, cur) {
    return Math.max(prev,cur);
});
// myFunction();




