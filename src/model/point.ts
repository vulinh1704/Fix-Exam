import {Schema, model} from 'mongoose';
import {IStudent} from "./Student";
export interface IPoint{
    scoreLT?: string;
    scoreTT?: string;
    Student?: IStudent
}

let PointSchema = new Schema<IPoint>({
    scoreLT: String,
    scoreTT: String,
    Student: {
        type: Schema.Types.ObjectId,
        ref: "Student"
    }
});

const Point = model<IPoint>('Point', PointSchema);
export {Point};