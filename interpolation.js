function interpolation({ step, start, end, callback, duration }) {
    const stepSize = (end - start) / step;
    const delay = duration / step;
  
    for (let i = 0; i < step; i++) {
      setTimeout(() => {
        const x = start + stepSize * i;
        const y = delay * (i + 1);
        callback([x, y]);
      }, delay * i);
    }
  }
  