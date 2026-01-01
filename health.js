// Health check endpoint for Vercel serverless function
module.exports = async (req, res) => {
  res.status(200).json({ 
    status: 'Server is running',
    timestamp: new Date().toISOString()
  });
};
