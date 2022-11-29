import {Schema, model} from 'mongoose';
import {IClazz} from "./clazz";
export interface IStudent{
    name?: string;
    Clazz?: IClazz
}

let StudentSchema = new Schema<IStudent>({
    name: String,
    Clazz: {
        type: Schema.Types.ObjectId,
        ref: "Clazz"
    }
});

const Student = model<IStudent>('Student', StudentSchema);
export {Student};