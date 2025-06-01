import express from 'express';
const router = express.Router();
import authMiddleware from '../middlewares/authMiddleware.js';
import players from '../models/players.js';


router.get('/me', authMiddleware, async (req, res) => {
    try {
        const user = req.user; // L'utente è stato aggiunto alla richiesta dal middleware
        if (!user) {
            return res.status(404).json({ error: 'Utente non trovato' });
        }
        res.status(200).json(user); // Restituisce i dati dell'utente
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero dei dati utente' });
    }
});


router.get('/', authMiddleware, async (req, res) => {
    try {
        const user = await players.find()
        res.status(200).json(user)
    }
    catch (error) {
        res.status(500).json({ message: "Errore nel recupero degli utenti" })
    }
})

//route per modificare i dati di un utente specifico
router.put('/:id', authMiddleware, async (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    try {
        const updatedUser = await players.findByIdAndUpdate(id, obj, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'Utente non trovato' });
        }       
        res.status(200).json(updatedUser);
    } 
    catch (error) {
        res.status(500).json({ message: 'Errore nell\'aggiornamento dell\'utente' });
    }
})




export default router