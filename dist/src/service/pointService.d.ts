declare class PointService {
    findAll: () => Promise<Omit<import("mongoose").Document<unknown, any, import("../model/point").IPoint> & import("../model/point").IPoint & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    save: (point: any) => Promise<import("mongoose").Document<unknown, any, import("../model/point").IPoint> & import("../model/point").IPoint & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
declare const _default: PointService;
export default _default;
