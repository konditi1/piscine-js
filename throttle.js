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
  
  // Throttle function with options
  function opThrottle(func, wait, options = {}) {
    let timeout = null;
    let previous = 0;
    let result;
  
    const leading = options.leading !== false;
    const trailing = options.trailing !== false;
  
    function invokeFunc(time) {
      const args = lastArgs;
      lastArgs = null;
      previous = time;
      result = func.apply(lastThis, args);
    }
  
    function shouldInvoke(time) {
      const timeSinceLastCall = time - previous;
      return (previous === 0 && leading) || (timeSinceLastCall >= wait);
    }
  
    function trailingEdge(time) {
      timeout = null;
      if (trailing && lastArgs) {
        invokeFunc(time);
      }
    }
  
    let lastArgs;
    let lastThis;
    let lastCallTime;
  
    return function throttled(...args) {
      const now = Date.now();
      lastArgs = args;
      lastThis = this;
      lastCallTime = now;
  
      if (!timeout && !previous && !leading) {
        previous = now;
      }
  
      const remaining = wait - (now - previous);
  
      if (shouldInvoke(now)) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        invokeFunc(now);
      } else if (!timeout && trailing) {
        timeout = setTimeout(() => {
          const now = Date.now();
          if (now - lastCallTime >= wait) {
            trailingEdge(now);
          } else {
            timeout = setTimeout(trailingEdge, remaining);
          }
        }, remaining);
      }
  
      return result;
    };
  }
  