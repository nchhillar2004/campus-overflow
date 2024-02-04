import mongoose from "mongoose";
import { postSchema } from "./PostSchema";
import { productSchema } from "./ProductSchema";

export const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "member",
        },
        image: {
            type: String,
            default: "https://placehold.co/200x200",
        },
        banner: {
            type: String,
            default: "https://placehold.co/1400x500?text=BHFS&font=roboto",
        },
        time: {
            type: String,
        },
        plan: {
            type: String,
            default: "free",
        },
        balance: {
            type: String,
            default: "0.00",
        },
        stars: {
            type: String,
            default: "0",
        },
        isVerified: {
            type: Boolean,
            default: "false",
        },
        cart: [productSchema],
        posts: [postSchema],
        likedPosts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Posts",
            },
        ],
        questions: [
            {
                text: String,
                author: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Users",
                },
                answers: [
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
            },
        ],
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const Users = mongoose.models.Users || mongoose.model("Users", userSchema);
export default Users;
