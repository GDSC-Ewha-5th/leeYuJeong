// main.js
window.onload = function () {
    displayNoteBoxes();
    document.getElementById('createNoteBtn').addEventListener('click', function () {
      window.location.href = 'http://127.0.0.1:5500/write.html';
    });
  };


  function displayNoteBoxes() {
    var noteBoxesContainer = document.getElementById('noteBoxes');
    noteBoxesContainer.innerHTML = '';
  
    var notes = JSON.parse(localStorage.getItem('notes')) || [];
  
    notes.forEach(function (note) {
      var noteBox = document.createElement('div');
      noteBox.className = 'note-box';
  
      var titleElement = document.createElement('h2');
      titleElement.textContent = note.title;
  
      var contentElement = document.createElement('p');
      contentElement.textContent = note.content;
  
      noteBox.appendChild(titleElement);
      noteBox.appendChild(contentElement);
  
      noteBoxesContainer.appendChild(noteBox);
    });
  }
  
  function doneClicked() {
    var title = document.getElementById('titleInput').value;
    var content = document.getElementById('contentInput').value;
  
    if (title.trim() !== '' && content.trim() !== '') {
      var notes = JSON.parse(localStorage.getItem('notes')) || [];
      var note = {
        title: title,
        content: content
      };
      notes.push(note);
      localStorage.setItem('notes', JSON.stringify(notes));
  
      document.getElementById('titleInput').value = '';
      document.getElementById('contentInput').value = '';
  
      displayNoteBoxes();
    } else {
      alert('Please enter both title and content.');
    }
  }