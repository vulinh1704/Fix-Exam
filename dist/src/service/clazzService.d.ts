declare class ClazzService {
    findAll: () => Promise<(import("mongoose").Document<unknown, any, import("../model/clazz").IClazz> & import("../model/clazz").IClazz & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    save: (clazz: any) => Promise<import("mongoose").Document<unknown, any, import("../model/clazz").IClazz> & import("../model/clazz").IClazz & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
declare const _default: ClazzService;
export default _default;
