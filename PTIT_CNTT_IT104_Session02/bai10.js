const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
const check = (arr) => {
  let map = [];
  arr.forEach((string) => {
    const temp = string.split("").sort().join("");
    if(!map[temp]){
        map[temp] = [];
    }
    map[temp].push(string);
  });
  return map;
};
console.log(check(arr));

