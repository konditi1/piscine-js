let lastCircle = null;
let box = null;

export function createCircle(event) {
  const circleRadius = 25;
  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.position = 'absolute';

  // Position circle at the mouse click, adjusted for radius
  circle.style.left = `${event.clientX - circleRadius}px`;
  circle.style.top = `${event.clientY - circleRadius}px`;
  circle.style.backgroundColor = 'white';

  document.body.appendChild(circle);
  lastCircle = circle;
}

export function moveCircle(event) {
  if (lastCircle && box) {
    const circleRadius = 25;
    const rect = box.getBoundingClientRect();
    let x = event.clientX - circleRadius;
    let y = event.clientY - circleRadius;

    // Check if the circle is inside the box
    const isInside = isInsideBox(x + circleRadius, y + circleRadius, rect, circleRadius);

    if (isInside) {
      // Update circle to purple and trap inside the box
      lastCircle.style.backgroundColor = 'var(--purple)';
      x = Math.max(rect.left + 1, Math.min(x, rect.right - circleRadius * 2 - 1));
      y = Math.max(rect.top + 1, Math.min(y, rect.bottom - circleRadius * 2 - 1));
    } else {
      lastCircle.style.backgroundColor = 'white';
    }

    lastCircle.style.left = `${x}px`;
    lastCircle.style.top = `${y}px`;
  }
}

export function setBox() {
  if (!box) {
    box = document.createElement('div');
    box.className = 'box';
    box.style.position = 'absolute';
    box.style.width = '200px';
    box.style.height = '200px';
    box.style.border = '1px solid var(--clear)';
    box.style.left = `calc(50% - 100px)`; // Center horizontally
    box.style.top = `calc(50% - 100px)`; // Center vertically
    document.body.appendChild(box);
  }
}

function isInsideBox(x, y, boxRect, circleRadius) {
  return (
    x > boxRect.left + circleRadius &&
    x < boxRect.right - circleRadius &&
    y > boxRect.top + circleRadius &&
    y < boxRect.bottom - circleRadius
  );
}

// Initialize event listeners
document.addEventListener('click', createCircle);
document.addEventListener('mousemove', moveCircle);

// Initialize the box in the center of the page
setBox();
