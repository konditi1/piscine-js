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

  
  function opThrottle(fn, delay, { leading = false, trailing = true } = {}) {
    let lastCallTime = 0;
    let timer = null;
    let result;
  
    return function throttled(...args) {
      const now = Date.now();
      
      // Check if the leading option is enabled
      if (!lastCallTime && leading === false) {
        lastCallTime = now;
      }
  
      const remainingTime = delay - (now - lastCallTime);
  
      // Leading edge execution
      if (remainingTime <= 0 || remainingTime > delay) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        result = fn.apply(this, args);
        lastCallTime = now;
      } 
      // Trailing edge execution
      else if (!timer && trailing !== false) {
        timer = setTimeout(() => {
          result = fn.apply(this, args);
          lastCallTime = leading ? Date.now() : 0; // Reset if leading is true
          timer = null;
        }, remainingTime);
      }
  
      return result;
    };
  }
  
  
