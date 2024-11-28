import { Time } from "./time";

export interface Split {
    id: number;
    split: Time;
    lap: Time;
    average: Time;
}
