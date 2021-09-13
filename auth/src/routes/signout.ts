import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
    res.send({ working: true, signout: true });
});

export { router as signoutRouter };