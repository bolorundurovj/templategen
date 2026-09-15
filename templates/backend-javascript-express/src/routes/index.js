const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

router.get('/info', (req, res) => {
  res.json({
    name: '<%= projectName %>',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  });
});

module.exports = router;

