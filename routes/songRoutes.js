const express = require('express');
const {
    getAllSongs,
    getSongById,
    addSong,
    updateSong,
    deleteSong,
} = require('../controllers/songController');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticateToken, getAllSongs);
router.post('/', authenticateToken, addSong);
router.get('/:id', authenticateToken, getSongById);
router.put('/:id', authenticateToken, updateSong);
router.delete('/:id', authenticateToken, deleteSong);

module.exports = router;
