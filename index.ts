import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {router} from "./src/router/router";

mongoose.connect('mongodb://localhost:27017/fix-exam').then(
    () => {
        console.log('Nice')
    }
).catch(() => {
    console.log('Lon nhừ')
})

const app = express();
app.use(cors());
app.use(express.json());
app.use('', router);
app.listen(3000, () => {
    console.log('Yamete Kunasai')
})

