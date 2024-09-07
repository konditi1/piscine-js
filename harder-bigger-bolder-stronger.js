const generateLetters = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontWeights = [300, 400, 600];
    
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < 120; i++) {
      const letterDiv = document.createElement('div');
      const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
      const fontSize = 11 + i;
      const fontWeight = fontWeights[Math.floor(i / 40)];
      
      letterDiv.textContent = randomLetter;
      letterDiv.style.cssText = `
        font-size: ${fontSize}px;
        font-weight: ${fontWeight};
      `;
      
      fragment.appendChild(letterDiv);
    }
    
    document.body.appendChild(fragment);
  };
  
  export { generateLetters };
  