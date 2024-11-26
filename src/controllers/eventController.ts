import { Request, RequestHandler, Response } from 'express';
import Event from '../models/eventModel';

export const createEvent = async (req: Request, res: Response) => {
    try {
        const { title, description, date, location } = req.body;
        const newEvent = new Event({ title, description, date, location });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar evento.' });
    }
};

export const getEvents = async (req: Request, res: Response) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar eventos.' });
    }
};

export const getEventById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ error: 'Evento não encontrado.' });
        }
        return res.status(200).json(event);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar evento.' });
    }
};

export const updateEvent = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id  = req.params.id
        const event = await Event.findByIdAndUpdate(id, req.body, { new: true });
        if (!event) return res.status(404).json({ error: 'Evento não encontrado.' });
        return res.status(200).json(event);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao atualizar evento.' });
    }
};

export const deleteEvent = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const event = await Event.findByIdAndDelete(id);
        if (!event) {
            return res.status(404).json({ error: 'Evento não encontrado.' });
        }
        return res.status(200).json({ message: 'Evento removido com sucesso.' });
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao remover evento.' });
    }
};
