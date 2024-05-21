const fs = require('fs');
const path = require('path');
const notesFilePath = path.join(__dirname, '../data/notes.json');

// Fetch all notes
const getAllNotes = () => {
  const data = fs.readFileSync(notesFilePath);
  return JSON.parse(data).notes;
};

// Get note by ID
const getNoteById = (id) => {
  const notes = getAllNotes();
  return notes.find(note => note.id === id);
};

// Create a new note
const createNote = (note) => {
  const notes = getAllNotes();
  const newNote = { ...note, id: Date.now().toString() };
  notes.push(newNote);
  fs.writeFileSync(notesFilePath, JSON.stringify({ notes }));
  return newNote;
};

// Update a note
const updateNote = (id, updatedNote) => {
  const notes = getAllNotes();
  const index = notes.findIndex(note => note.id === id);
  if (index !== -1) {
    notes[index] = { ...notes[index], ...updatedNote };
    fs.writeFileSync(notesFilePath, JSON.stringify({ notes }));
    return notes[index];
  }
  return null;
};

// Delete a note
const deleteNote = (id) => {
  let notes = getAllNotes();
  notes = notes.filter(note => note.id !== id);
  fs.writeFileSync(notesFilePath, JSON.stringify({ notes }));
  return true;
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote
};
