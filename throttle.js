// Basic throttle function
function throttle(func, wait) {
    let timeout = null;
    let previous = 0;
  
    return function (...args) {
      const now = Date.now();
      const remaining = wait - (now - previous);
  
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        func.apply(this, args);
      } else if (!timeout) {
        timeout = setTimeout(() => {
          previous = Date.now();
          timeout = null;
          func.apply(this, args);
        }, remaining);
      }
    };
  }


function opThrottle(fn, waitTime, { leading = false, trailing = true } = {}) {
  let lastExecutionTime = 0;
  let timeoutId = null;

  return function throttled(...args) {
    const currentTime = Date.now();

    // Handle leading call: set the last execution time if leading is false
    if (!lastExecutionTime && !leading) {
      lastExecutionTime = currentTime;
    }

    const timeSinceLastExecution = currentTime - lastExecutionTime;

    // If enough time has passed, invoke the function immediately
    if (timeSinceLastExecution > waitTime) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      fn.apply(this, args);
      lastExecutionTime = currentTime;
    } 
    // If trailing is enabled and there's no pending timeout, schedule a trailing call
    else if (!timeoutId && trailing) {
      timeoutId = setTimeout(() => {
        fn.apply(this, args);
        lastExecutionTime = leading ? Date.now() : 0; // Reset lastExecutionTime if leading
        timeoutId = null;
      }, waitTime);
    }
  };
}
  
  
