const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = createProxyMiddleware('/api', {
  target: 'http://localhost:3307', // Replace with your PHP server's URL
  changeOrigin: true,
});
