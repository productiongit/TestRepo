const Song = require('../models/Song');

exports.getAllSongs = async (req, res) => {
    const songs = await Song.find();
    res.json(songs);
};

exports.getSongById = async (req, res) => {
    const song = await Song.findById(req.params.id);
    res.json(song);
};

exports.addSong = async (req, res) => {
    const song = new Song(req.body);
    await song.save();
    res.json(song);
};

exports.updateSong = async (req, res) => {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(song);
};

exports.deleteSong = async (req, res) => {
    await Song.findByIdAndDelete(req.params.id);
    res.json({ message: 'Song deleted' });
};
