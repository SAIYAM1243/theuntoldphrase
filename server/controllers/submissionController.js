import mongoose from "mongoose";
import Submissions from './../models/submissionModel.js';

export const submitBlog = async (req, res, next) => {
    try {
        const { userId } = req.body.user;
        const { title, content } = req.body;

        // Ensure both title and content are provided
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }

        // Create a new submission
        const submission = await Submissions.create({
            title,
            content,
            user: userId,
        });

        res.status(201).json({
            success: true,
            message: "Blog submission successful",
            data: submission,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export const getSubmissions = async (req, res, next) => {
    try {
        // Retrieve all submissions
        const submissions = await Submissions.find();

        res.status(200).json({
            success: true,
            data: submissions,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export const getSubmission = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Retrieve a single submission by ID
        const submission = await Submissions.findById(id);

        if (!submission) {
            return res.status(404).json({ message: "Submission not found" });
        }

        res.status(200).json({
            success: true,
            data: submission,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}; 
