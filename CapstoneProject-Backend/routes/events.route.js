import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import events from "../models/events.js";
import upload from "../cloud/cloudinary.js";
const router = express.Router();


// Route per ottenere tutti gli eventi  
router.get("/", authMiddleware, async (req, res) => {
    try {
        const allEvents = await events.find();
        res.status(200).json(allEvents);
    } catch (error) {
        res.status(500).json({ message: "Errore nel recupero degli eventi" });
    }
});

// Route per ottenere un evento specifico
router.get("/:id", authMiddleware, async (req, res) => {
    const id = req.params.id;
    try {
        const event = await events.findById(id);
        if (!event) {
            return res.status(404).json({ message: "Evento non trovato" });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: "Errore nel recupero dell'evento" });
    }
});

// Route per creare un nuovo evento
router.post("/", authMiddleware, async (req, res) => {
     const match = req.body;
     try {
         const event = new events(match);
         const newEvent = await event.save();
        res.status(201).json(newEvent);
     }
     catch (error) {
         res.status(500).json({ message: "Errore nella creazione dell'evento" });
     }


});

// Route per modificare un evento specifico
router.put("/:id", authMiddleware, async (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    try {
        const updatedEvent = await events.findByIdAndUpdate(id, obj, { new: true });
        if (!updatedEvent) {
            return res.status(404).json({ message: "Evento non trovato" });
        }
        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: "Errore nell'aggiornamento dell'evento" });
    }
});

// Route per eliminare un evento specifico
router.delete("/:id", authMiddleware, async (req, res) => {
    const id = req.params.id;
    try {
        const deletedEvent = await events.findByIdAndDelete(id);
        if (!deletedEvent) {
            return res.status(404).json({ message: "Evento non trovato" });
        }
        res.status(200).json({ message: "Evento eliminato con successo" });
    } catch (error) {
        res.status(500).json({ message: "Errore nell'eliminazione dell'evento" });
    }
});


// PATCH: Route per il caricamento di un'immagine per un evento specifico
router.patch("/:id/image", authMiddleware, upload.single("matchlocation"), async (req, res) => {
    try{
        const id = req.params.id; //Sarà l'id dell'evento
        const imageUrl = req.file.path; // Assuming the image URL is stored in req.file.path
        const updatedEvent = await events.findByIdAndUpdate(id, { matchlocation: imageUrl }, { new: true });
        
        if (!updatedEvent) {
            return res.status(404).json({ message: "Evento non trovato" });
        }
        
        res.status(200).json(updatedEvent);

    }
    catch (error) {
        res.status(500).json({ message: "Errore nel caricamento dell'immagine" });
    }
});

export default router;