const express = require('express');
const notesRoutes = require('./routes/notesRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/notes', notesRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.Follow the link : http://localhost:3000`);
});
