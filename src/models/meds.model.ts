import { QueryResult } from "mysql2";
import pool from "../../config/database.config"
import { IMed } from "../Interfaces/meds.interface";


export class Inventory {

    static async getAll(): Promise<IMed[]> {
        const query: string = 'SELECT * FROM meds';
        const [rows] = await pool.query(query);
        return rows as IMed[];
    };

    static async getAvailable(): Promise<IMed[]> {
        const query: string = 'SELECT * FROM meds WHERE quantity > 0';
        const [rows] = await pool.query(query);
        return rows as IMed[];
    }

    static async create(newMed: IMed): Promise<any> {
        const { name, quantity, expiration_date, price } = newMed;
        const query: string = 'INSERT INTO meds (name, quantity, expiration_date, price) VALUES (?, ?, ?, ?)';
        const med = await pool.query(query, [name, quantity, expiration_date, price]);
        return med
    }
}
