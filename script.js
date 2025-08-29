// =======================
// Part 1: Basics
// =======================

// Variable declaration and conditional example
function checkAge() {
  let age = document.getElementById("userAge").value;

  if (age >= 18) {
    document.getElementById("ageResult").textContent = "✅ You are an adult!";
  } else if (age > 0) {
    document.getElementById("ageResult").textContent = "👶 You are under 18.";
  } else {
    document.getElementById("ageResult").textContent = "⚠️ Please enter a valid age.";
  }
}

// =======================
// Part 2: Functions
// =======================

// Function to add two numbers
function calculateSum(a, b) {
  return a + b;
}

// Function that interacts with DOM
function showSum() {
  let n1 = parseInt(document.getElementById("num1").value);
  let n2 = parseInt(document.getElementById("num2").value);
  let result = calculateSum(n1, n2);
  document.getElementById("sumResult").textContent = `Result: ${result}`;
}

// =======================
// Part 3: Loops
// =======================

function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old results

  // Example: for loop countdown
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = `Countdown: ${i}`;
    list.appendChild(li);
  }

  // Example: while loop
  let count = 1;
  while (count <= 3) {
    let li = document.createElement("li");
    li.textContent = `Extra while loop count: ${count}`;
    list.appendChild(li);
    count++;
  }
}

// =======================
// Part 4: DOM Manipulation
// =======================

// 1. Toggle class on element
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// 2. Create new list items dynamically
document.getElementById("createBtn").addEventListener("click", function () {
  let ul = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New item added at " + new Date().toLocaleTimeString();
  ul.appendChild(li);
});

// 3. Change text content when hovering
document.getElementById("toggleText").addEventListener("mouseover", function () {
  this.textContent = "✨ You hovered over me!";
});

document.getElementById("toggleText").addEventListener("mouseout", function () {
  this.textContent = "Click the button to highlight this text.";
});
