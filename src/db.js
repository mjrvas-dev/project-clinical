import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://mjrvasdev:h9Xtoj6DGWPjQRln@projectclinicaldb.bjdgpgn.mongodb.net/?retryWrites=true&w=majority');
        console.log("DB is connected")
    } catch (error) {
        console.log(error);
    }
}