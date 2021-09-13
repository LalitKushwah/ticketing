import express from 'express';

const router = express.Router();

router.post('/api/users/signup', (req, res) => {
    
    res.send({ working: true, signup: true });
});

export { router as signupRouter };