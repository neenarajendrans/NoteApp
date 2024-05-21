const express = require('express');
const router = express.Router();
const notesController = require('../controllers.js/notesController');

// Get all notes
router.get('/', (req, res) => {
  const notes = notesController.getAllNotes();
  res.json(notes);
});

// Get note by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const note = notesController.getNoteById(id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).send('Note not found');
  }
});

// Create a new note
router.post('/', (req, res) => {
  const newNote = req.body;
  const createdNote = notesController.createNote(newNote);
  res.status(201).json(createdNote);
});

// Update a note
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedNote = req.body;
  const updated = notesController.updateNote(id, updatedNote);
  if (updated) {
    res.json(updated);
  } else {
    res.status(404).send('Note not found');
  }
});

// Delete a note
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleted = notesController.deleteNote(id);
  if (deleted) {
    res.send('Note deleted successfully');
  } else {
    res.status(404).send('Note not found');
  }
});

module.exports = router;
