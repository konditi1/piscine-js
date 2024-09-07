// Create the circle element on click
export function createCircle(event) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.position = 'absolute';
    circle.style.left = `${event.pageX}px`;
    circle.style.top = `${event.pageY}px`;
    circle.style.backgroundColor = 'white';
    document.body.appendChild(circle);
  }
  
  // Move the last created circle along with the mouse
  export function moveCircle(event) {
    const circles = document.querySelectorAll('.circle');
    const lastCircle = circles[circles.length - 1];
  
    if (lastCircle) {
      lastCircle.style.left = `${event.pageX}px`;
      lastCircle.style.top = `${event.pageY}px`;
  
      // Check if the circle is inside the box
      const box = document.querySelector('.box');
      if (isCircleInsideBox(lastCircle, box)) {
        lastCircle.style.backgroundColor = 'var(--purple)';
        trapCircle(lastCircle, box);
      }
    }
  }
  
  // Set the box in the center of the page
  export function setBox() {
    const box = document.createElement('div');
    box.className = 'box';
    box.style.position = 'absolute';
    box.style.width = '200px';
    box.style.height = '200px';
    box.style.border = '1px solid black';
    box.style.left = `calc(50% - 100px)`; // Center horizontally
    box.style.top = `calc(50% - 100px)`; // Center vertically
    document.body.appendChild(box);
  }
  
  // Helper function to check if a circle is inside the box
  function isCircleInsideBox(circle, box) {
    const circleRect = circle.getBoundingClientRect();
    const boxRect = box.getBoundingClientRect();
  
    return (
      circleRect.left > boxRect.left &&
      circleRect.right < boxRect.right &&
      circleRect.top > boxRect.top &&
      circleRect.bottom < boxRect.bottom
    );
  }
  
  // Helper function to trap the circle inside the box
  function trapCircle(circle, box) {
    const boxRect = box.getBoundingClientRect();
  
    // Adjust circle position if it moves outside the box
    const circleSize = circle.offsetWidth;
    circle.style.left = `${Math.max(boxRect.left, Math.min(boxRect.right - circleSize, parseInt(circle.style.left)))}px`;
    circle.style.top = `${Math.max(boxRect.top, Math.min(boxRect.bottom - circleSize, parseInt(circle.style.top)))}px`;
  }
  
  // Add event listeners
  document.addEventListener('click', createCircle);
  document.addEventListener('mousemove', moveCircle);
  
  // Initialize the box in the center of the page
  setBox();
  