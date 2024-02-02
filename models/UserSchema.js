import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        full_name: {
            type: String,
            required: true
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
    },
    {timestamps: true}
)

const Users = mongoose.models.User || mongoose.model("USER", userSchema);

export default Users;