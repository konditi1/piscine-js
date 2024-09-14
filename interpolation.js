function interpolation({ step, start, end, callback, duration }) {
    const stepSize = (end - start) / step;
    const interval = duration / step;
    let currentStep = 0;
  
    const intervalId = setInterval(() => {
      if (currentStep < step) {
        const x = start + stepSize * currentStep;
        const y = interval * (currentStep + 1);
        callback([x, y]);
        currentStep++;
      } else {
        clearInterval(intervalId);
      }
    }, interval);
  }
  