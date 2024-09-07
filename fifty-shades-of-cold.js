
export function generateClasses() {
    const style = document.createElement('style');
    const styleContent = colors.map(color => `.${color} { background: ${color}; }`).join('\n');
    
    style.textContent = styleContent;
    document.head.appendChild(style);
  }
  
  export function generateColdShades() {
    const coldColors = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];
    const container = document.body;
  
    colors.forEach(color => {
      if (coldColors.some(coldColor => color.includes(coldColor))) {
        const div = document.createElement('div');
        div.className = color;
        div.textContent = color;
        container.appendChild(div);
      }
    });
  }
  
  export function choseShade(shade) {
    document.querySelectorAll('div').forEach(div => {
      div.className = shade;
    });
  }