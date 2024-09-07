const styles = [
    'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'
  ];
  
  let currentIndex = -1;
  let isRemoving = false;
  
  export function pimp() {
    const button = document.querySelector('.button');
    
    if (!button) return; // Early return if button is not found
  
    if (isRemoving) {
      if (currentIndex >= 0) {
        button.classList.remove(styles[currentIndex--]);
      }
      if (currentIndex === -1) {
        isRemoving = false;
        button.classList.remove('unpimp');
      }
    } else {
      if (currentIndex < styles.length - 1) {
        button.classList.add(styles[++currentIndex]);
      }
      if (currentIndex === styles.length - 1) {
        isRemoving = true;
        button.classList.add('unpimp');
      }
    }
  }
  