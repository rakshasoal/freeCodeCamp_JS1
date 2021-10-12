function palindrome(str) {
  const alphabetsOnly = (str) => {
    return str.replace(/[^a-zA-Z0-9]/g, "");
  };
  str = alphabetsOnly(str);
  console.log(str);
  let revString = [];
  for (let i = str.length - 1; i >= 0; i--) revString = revString + str[i];
  console.log("rev str", revString);
  if (revString.toLowerCase() === str.toLowerCase()) return true;
  else return false;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
