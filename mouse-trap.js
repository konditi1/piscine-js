export function createCircle(event) {
  console.log('Click event detected at:', event.clientX, event.clientY);
  
  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.position = 'absolute';
  
  // Use clientX and clientY to get coordinates relative to the viewport
  circle.style.left = `${event.clientX}px`;
  circle.style.top = `${event.clientY}px`;
  circle.style.backgroundColor = 'white';
  
  document.body.appendChild(circle);
  console.log('Circle created at:', circle.style.left, circle.style.top);
}

// Add event listeners
document.addEventListener('click', createCircle);
document.addEventListener('mousemove', moveCircle);

// Initialize the box in the center of the page
setBox();
