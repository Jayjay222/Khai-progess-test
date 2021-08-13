let arr = [1, 5, 5, 5, 5, 6 , 7];
let ans = deduplicate(arr);

console.log(ans);


function deduplicate(arr) {
  let isExist = (arr, x) => {
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === x) return true;
    }
    return false;
  }

  let ans = [];
  arr.forEach(element => {
    if(!isExist(ans, element)) ans.push(element);
  });
  return ans;
}