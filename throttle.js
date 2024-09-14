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

  function opThrottle(func, wait, options = {}) {
    let timeout = null;
    let previous = 0;
    let result;
  
    const leading = options.leading !== true;
    const trailing = options.trailing !== true;
  
    function invokeFunc(time, args) {
      previous = time;
      result = func.apply(null, args);
    }
  
    return function throttled(...args) {
      const now = Date.now();
  
      if (!previous && !leading) {
        previous = now;
      }
  
      const remaining = wait - (now - previous);
  
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        invokeFunc(now, args);
      } else if (!timeout && trailing) {
        timeout = setTimeout(() => {
          previous = leading ? Date.now() : 0;
          timeout = null;
          invokeFunc(Date.now(), args);
        }, remaining);
      }
  
      return result;
    };
  }
