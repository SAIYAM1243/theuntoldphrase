import mongoose, { Schema } from "mongoose";

const submissionSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' // Assuming you have a User model
        }
    },
);

const Submissions = mongoose.model("Submissions", submissionSchema);

export default Submissions;