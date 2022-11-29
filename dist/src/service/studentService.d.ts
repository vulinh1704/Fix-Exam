declare class StudentService {
    findAll: () => Promise<Omit<import("mongoose").Document<unknown, any, import("../model/student").IStudent> & import("../model/student").IStudent & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    save: (student: any) => Promise<import("mongoose").Document<unknown, any, import("../model/student").IStudent> & import("../model/student").IStudent & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findById: (id: any) => Promise<import("mongoose").Document<unknown, any, import("../model/student").IStudent> & import("../model/student").IStudent & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
declare const _default: StudentService;
export default _default;
