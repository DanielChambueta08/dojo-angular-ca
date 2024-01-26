
import { PocketModel } from '../domain/models/pocket/pocket.model';
import { pocketsData } from './db-data';

export function setupPockets(): PocketModel[] {
    return Object.values(pocketsData) as PocketModel[];
}