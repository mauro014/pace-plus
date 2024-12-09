import { Time } from "../models/time";

export interface Split {
    id: number;
    distance: number;
    split: Time;
    lap: Time;
    average: Time;
}
