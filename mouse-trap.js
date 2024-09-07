let lastCircle = null;
let box = null;
let hasEntered = false;

export function createCircle(event) {
  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.position = 'absolute';

  // Adjust circle position to center it at the mouse click
  const circleRadius = 25;
  circle.style.left = `${event.clientX - circleRadius}px`;
  circle.style.top = `${event.clientY - circleRadius}px`;
  circle.style.backgroundColor = 'white';

  document.body.appendChild(circle);
  lastCircle = circle;
  hasEntered = false;
}

export function moveCircle(event) {
  if (lastCircle && box) {
    const circleRadius = 25;
    const rect = box.getBoundingClientRect();

    // Calculate the new position of the circle
    let x = event.clientX - circleRadius;
    let y = event.clientY - circleRadius;

    const isInside = isInsideBox(x + circleRadius, y + circleRadius, rect, circleRadius);

    if (isInside) {
      hasEntered = true;
      lastCircle.style.backgroundColor = 'var(--purple)';
    } else {
      hasEntered = false;
      lastCircle.style.backgroundColor = 'white';
    }

    if (hasEntered) {
      x = Math.max(rect.left + 1, Math.min(x, rect.right - circleRadius * 2 - 1));
      y = Math.max(rect.top + 1, Math.min(y, rect.bottom - circleRadius * 2 - 1));
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
    box.style.left = `calc(50% - 100px)`;
    box.style.top = `calc(50% - 100px)`;
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
