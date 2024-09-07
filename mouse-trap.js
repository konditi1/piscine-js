// Create the circle element on click
export function createCircle(event) {
  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.position = 'absolute';

  // Use clientX and clientY to get coordinates relative to the viewport
  circle.style.left = `${event.clientX}px`;
  circle.style.top = `${event.clientY}px`;
  circle.style.backgroundColor = 'white';
  
  document.body.appendChild(circle);
}

// Add event listeners
document.addEventListener('click', createCircle);
document.addEventListener('mousemove', moveCircle);

// Initialize the box in the center of the page
setBox();
