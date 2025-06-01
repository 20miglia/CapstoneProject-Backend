import express from 'express';
import players from '../models/players.js';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import "dotenv/config";
const router = express.Router()
const saltRounds = +process.env.SALT_ROUNDS;
const jwtSecretKey = process.env.JWT_SECRET_KEY;



//route per la registrazione
//router.post('/register', async (req, res) => {
//    const { fullname, username, email, password } = req.body;
    //oppure potevo scrivere const obj = req.body;
//    try {
//        const newPlayer = new players({ fullname, username, email, password });
//        const newPlayerSave = await newPlayer.save();
//        res.status(201).json(newPlayerSave);
//    } catch (error) {
//        res.status(500).json({ error: 'Error registering player' });
//    }
//}); 

//route per la registrazione con password criptata
router.post('/register', async (req, res) => {
    const password = req.body.password;

    const user = new players({
        ...req.body,
        password: await bcrypt.hash(password, saltRounds)
    })
    try {
        const newPlayer = await user.save();
        if (!newPlayer) {
            return res.status(400).json({ error: 'User not created' });
        }
        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(500).json({ error: 'Error registering player' });
    }
});


//route per il login
router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const player = await players.findOne({email: email });
        if (!player) {
            return res.status(401).json({ error: 'Invalid email' });
        }
        const isMatch = await bcrypt.compare(password, player.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        const token = jsonwebtoken.sign({ id: player._id, fullname: player.fullname, username: player.username, email: player.email }, jwtSecretKey, { expiresIn: '3h' });
        res.status(200).json(token);
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
});


export default router;





