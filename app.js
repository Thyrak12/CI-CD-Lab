import express from 'express'; 
 
const app = express(); 
 
app.get('/', (req, res) => { 
  res.status(200).send('Hello, GitHub Actions! Ngorl love Japan'); 
}); 
 
export default app; 