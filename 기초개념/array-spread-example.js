const arr1 = ["a", "b"];
const arr2 = arr1; //내용이 아닌 참조를 복사
const arr3 = [...arr1];

arr1[1] = "1";

console.log(arr1, arr2, arr3);
console.log(arr1 === arr2, arr1 === arr3);
