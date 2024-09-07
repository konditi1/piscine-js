// Helper function to create a brick element
const createBrick = (id, content, isFoundation) => {
    const brick = document.createElement('div');
    brick.id = `brick-${id}`;
    brick.textContent = content;
    if (isFoundation) {
      brick.dataset.foundation = true;
    }
    return brick;
  };
  
  export function build(totalBricks) {
    let brickCount = 1;
  
    const interval = setInterval(() => {
      // Foundation bricks are those where the brickCount % 3 equals 2
      const isFoundation = brickCount % 3 === 2;
      const brick = createBrick(brickCount, brickCount, isFoundation);
      
      document.body.appendChild(brick);
      console.log(brick);
  
      if (brickCount++ >= totalBricks) {
        clearInterval(interval);
      }
    }, 100);
  }
  
  export function repair(...repairIds) {
    repairIds.forEach(id => {
      const brick = document.getElementById(id);
      if (!brick) return;
  
      const brickNumber = parseInt(id.replace('brick-', ''), 10);
      const isInProgress = brickNumber % 3 === 2;
  
      brick.dataset.repaired = isInProgress ? 'in progress' : 'true';
      brick.textContent = brickNumber;
    });
  }
  
  export function destroy() {
    const lastBrick = document.querySelector('div[id^="brick"]:last-child');
    if (lastBrick) {
      lastBrick.remove();
    }
  }
  