import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mrp: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
    },
    cost: {
        type: Number,
    },
    image:{
        type: String, 
    },
    features: {
        type: Object,
    },
    quantity:{
        type: Number,
        default: 1,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    about: {
        type: String,
        required: true,
    },
    seller: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: "bhfs",
    },
    time: {
        type: String,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
        },
    ],
    comments: [
        {
            text: String,
            author: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Users",
            },
            createdAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Products || mongoose.model("Products", productSchema);

