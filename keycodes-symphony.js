export function compose() {
    document.addEventListener('keydown', handleKeyPress);
  
    function handleKeyPress(event) {
      event.preventDefault(); // Prevent default for all keys
      const key = event.key.toLowerCase();
  
      if (key.length === 1 && key.match(/[a-z]/i)) {
        createNote(key);
      } else if (key === 'backspace') {
        deleteLastNote();
      } else if (key === 'escape') {
        clearAllNotes();
      }
    }
  
    function createNote(key) {
      const note = document.createElement('div');
      note.className = 'note';
      note.textContent = key;
      note.style.backgroundColor = generateColor(key);
      document.body.appendChild(note);
    }
  
    function deleteLastNote() {
      const notes = document.querySelectorAll('.note');
      const lastNote = notes[notes.length - 1];
      if (lastNote) lastNote.remove();
    }
  
    function clearAllNotes() {
      const notes = document.querySelectorAll('.note');
      notes.forEach(note => note.remove());
    }
  
    function generateColor(key) {
      const hue = ((key.charCodeAt(0) - 97) / 26) * 360;
      return `hsl(${hue}, 70%, 50%)`;
    }
  
    return () => document.removeEventListener('keydown', handleKeyPress);
  }
  