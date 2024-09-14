// Basic debounce function (unchanged)
function debounce(func, wait) {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Updated opDebounce function
function opDebounce(func, wait, options = {}) {
  let timeout;
  let lastCallTime = 0;
  
  return function executedFunction(...args) {
    const currentTime = Date.now();
    const isInvokedAfterDelay = (currentTime - lastCallTime) > wait;

    const later = () => {
      timeout = null;
      if (!options.leading) {
        lastCallTime = Date.now();
        func(...args);
      }
    };

    if (!timeout && options.leading && isInvokedAfterDelay) {
      lastCallTime = currentTime;
      func(...args);
    }

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Helper function for testing (simulating the 'add' function)
function add(x = 0) {
  return x + 1;
}

// Helper function for running tests (simulating the 'run' function)
async function run(fn, { delay, count }) {
  let result = 0;
  for (let i = 0; i < count; i++) {
    await new Promise(resolve => setTimeout(resolve, delay));
    result = fn(result);
  }
  return result;
}