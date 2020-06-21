function rot13(str) {
    return str.replace(/[A-Z]/g, (c) => { return (c.charCodeAt(0) + 13 > 90) ? String.fromCharCode(c.charCodeAt(0) - 13) : String.fromCharCode(c.charCodeAt(0) + 13);});
}
  
console.log(rot13("SERR PBQR PNZC!"));
  