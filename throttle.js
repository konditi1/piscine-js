function throttle(func, wait) {
    let lastCall = 0;
    let lastResult;
  
    return function (...args) {
      const now = Date.now();
      if (now - lastCall >= wait) {
        lastCall = now;
        lastResult = func.apply(this, args);
      }
      return lastResult;
    };
  }
  
  // Updated opThrottle function
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
      result = func.apply(this, args);
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
  
    return function throttled(...args) {
      const now = Date.now();
      const isInvoking = shouldInvoke(now);
  
      lastArgs = args;
      lastThis = this;
  
      if (isInvoking) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        invokeFunc(now);
      } else if (!timeout && trailing) {
        timeout = setTimeout(() => trailingEdge(Date.now()), wait - (now - previous));
      }
  
      return result;
    };
  }
  