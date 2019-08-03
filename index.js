module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

function Phrase(content) {
  this.content = content;

  // Return content processed for palindrome testing.
  this.processedContent = function () {
    return this.content.match(/[a-z]/gi).join("").toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function() {
    if (this.content) {
      let processedContent = this.processedContent();
      return processedContent === processedContent.reverse();
    } else {
      return false;
    }
  }
}
