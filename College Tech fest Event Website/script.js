// Visitor Counter
if (localStorage.getItem('visitorCount')) {
  localStorage.setItem('visitorCount', Number(localStorage.getItem('visitorCount')) + 1);
} else {
  localStorage.setItem('visitorCount', 1);
}

document.getElementById('visitor-count').innerText = localStorage.getItem('visitorCount');

// Greeting Message based on Time
function updateGreeting() {
  const now = new Date();
  const hours = now.getHours();
  const greetingElement = document.getElementById('greeting');
  
  if (hours < 12) {
      greetingElement.innerText = 'Good Morning! Welcome to College Fest 2024';
  } else if (hours < 18) {
      greetingElement.innerText = 'Good Afternoon! Welcome to College Fest 2024';
  } else {
      greetingElement.innerText = 'Good Evening! Welcome to College Fest 2024';
  }
}

updateGreeting(); // Ensure the greeting is updated on page load
