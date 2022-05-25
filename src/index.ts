import { app } from "./app";
import mongoose from "mongoose";

const start = async () => {

    app.listen(3000, () => {
        console.log('Listening on port 3000.');
    });
};

start();
