const hljs = require("highlight.js/lib/core");  // require only the core library
// separately require languages
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
 
const highlightedCode = hljs.highlight('xml', '<span>Hello World!</span>').value

const code=document.querySelector("#code");
console.log(code)
code.innerHTML=highlightedCode