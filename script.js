
document.getElementById("check-btn").addEventListener("click", function() {
    const input = document.getElementById("text-input").value.trim();
    const resultElement = document.getElementById("result");
  
    if (input === "") {
      alert("Please input a value");
      return;
    }
  
    const formattedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedInput = formattedInput.split("").reverse().join("");
  
    if (formattedInput === reversedInput) {
      resultElement.textContent = `${input} is a palindrome`;
    } else {
      resultElement.textContent = `${input} is not a palindrome`;
    }
  });
  
  