import {Schema, model} from 'mongoose';
export interface IClazz{
    name?: string;
}

let ClazzSchema = new Schema<IClazz>({
    name: String
});

const Clazz = model<IClazz>('Clazz', ClazzSchema);
export {Clazz};