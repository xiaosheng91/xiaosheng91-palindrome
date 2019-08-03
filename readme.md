# Phrase object (with palindrome detector)

This is a sample NPM module created in [*Learn Enough JavaScript to Be Dangerous*](http://softcover.io/read/28fdb94f/learn_enough_javascript/_single-page) by Michael Hartl.

The module can be used as follows:

```
$ npm install --global xiaosheng91-palindrome
$ vim test.js
let Phrase = require("xiaosheng91-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```
