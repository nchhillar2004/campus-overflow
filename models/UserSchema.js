import mongoose from "mongoose";
import { postSchema } from "./PostSchema"

export const userSchema = new mongoose.Schema(
    {
        full_name: {
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
        posts: [postSchema],
        likedPosts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Post",
            },
        ],
        questions: [
            {
                text: String,
                author: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                },
                answers: [
                    {
                        text: String,
                        author: {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: "User",
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
