import { Minimize } from "lucide-react";
import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true , unique:true},
    password: { type: String, require: true ,},
    cartData: { type: Object, require: true , default:{}},
    
}, { minimize: false })


const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;