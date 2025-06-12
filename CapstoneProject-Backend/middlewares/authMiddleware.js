import "dotenv/config";
const jwtSecretKey = process.env.JWT_SECRET_KEY;
import jsonwebtoken from 'jsonwebtoken';
import players from '../models/players.js';


// Middleware per verificare il token JWT
const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization; // Ottieni il token dall'header Authorization
        if (!token) {
            return res.status(401).json({ error: 'Token non fornito' });
        }
        const cleanedToken = token.replace('Bearer ', ''); // Rimuove Bearer e lo spazio dal Token "
        const decoded = jsonwebtoken.verify(cleanedToken, jwtSecretKey); // Verifica il token
        if (decoded.exp) {
            const me = await players.findById(decoded.id); // Trova l'utente nel database
            if (!me) {
                return res.status(401).json({ error: 'Utente non trovato' });
            }
            req.user = me; // Aggiungi l'utente alla richiesta
            next(); // Passa al prossimo middleware o alla route
        }
        else {
            return res.status(401).json({ error: 'Token scaduto, fai un nuovo login' });
        }
    }
    catch (error) {
        res.status(401).json({ error: 'Unauthorized' });

    }
}


export default authMiddleware; // Esporta il middleware per l'uso in altre parti dell'applicazione