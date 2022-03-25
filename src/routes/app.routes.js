const express = require('express');
const router = express.Router();

// Task Model
const Task = require('../models/app');

// GET all Tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// GET all Tasks
router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

// ADD a new task
router.post('/', async (req, res) => {
  const { name, port, state, typeApp, lang } = req.body;
  const task2 = new Task({ name, port, state, typeApp, lang});
  await task2.save();
  res.json({status: 'Task Saved'});
});

router.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({status: 'Task Deleted'});
});

module.exports = router;