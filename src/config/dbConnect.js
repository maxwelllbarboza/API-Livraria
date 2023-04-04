import mongoose from "mongoose";

mongoose.connect("mongodb+srv://maxwellbarboza:123@cluster0.tlmdtpp.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;