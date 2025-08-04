const checkEndString = (string1, string2) => {
  if(string1.endsWith(string2)) return true;
  return false;
}
let string1 = prompt("Nhập vào chuỗi thứ nhất: ");
let string2 = prompt("Nhập vào chuỗi thứ hai: ");
console.log(checkEndString(string1, string2));