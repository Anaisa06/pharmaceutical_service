import { IMed } from '../Interfaces/meds.interface';
import { Inventory } from '../models/meds.model';
import { Request, Response } from "express";


export const getAll = async (_: Request, res: Response): Promise<void> => {
    
    try {
        const meds: IMed[] = await Inventory.getAll();
        res.status(200).json({ data: meds });
    } catch (error) {
        console.log('Error in get all meds: ', error);
        res.status(500).send('Error in get all meds')
    }
}

export const getAvailable = async (_: Request, res: Response): Promise <void> => {
    try {
        const meds: IMed[] = await Inventory.getAvailable();
        res.status(200).json({ data: meds });
    } catch (error) {
        console.log('Error in get available meds: ', error);
        res.status(500).send('Error in get available meds')
    }
}

export const create = async (req: Request, res: Response): Promise <void> => {
    try {
        const { name, quantity, expiration_date, price } = req.body;
        const newMed = await Inventory.create(req.body);
        res.status(201).json({ data: newMed });
    } catch (error) {
        console.log('Error in get available meds: ', error);
        res.status(500).send('Error in get available meds')
    }
}