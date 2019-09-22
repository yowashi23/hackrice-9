
document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('button').addEventListener('click', main);      
});
function main() {
  // Get the DOM reference
  var contentId = document.getElementById("content");
  // Toggle 
  contentId.style.display == "none" ? contentId.style.display = "block" : 
  contentId.style.display = "none"; 
}