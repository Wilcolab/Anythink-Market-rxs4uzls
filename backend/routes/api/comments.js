/**
 * @module routes/api/comments
 * @description This module defines the routes for managing comments in the application.
 * 
 * @route GET /api/comments
 * @returns {Array<Comment>} 200 - An array of comments
 * @throws {500} - Failed to fetch comments
 * 
 * @route POST /api/comments
 * @param {Comment} comment.body.required - The comment to create
 * @returns {Comment} 201 - The created comment
 * @throws {400} - Failed to create comment
 * 
 * @route GET /api/comments/:id
 * @param {string} id.path.required - The ID of the comment to retrieve
 * @returns {Comment} 200 - The requested comment
 * @throws {404} - Comment not found
 * @throws {500} - Failed to fetch comment
 * 
 * @route PUT /api/comments/:id
 * @param {string} id.path.required - The ID of the comment to update
 * @param {Comment} comment.body.required - The updated comment data
 * @returns {Comment} 200 - The updated comment
 * @throws {404} - Comment not found
 * @throws {400} - Failed to update comment
 * 
 * @route DELETE /api/comments/:id
 * @param {string} id.path.required - The ID of the comment to delete
 * @returns {Object} 200 - A message indicating successful deletion
 * @throws {404} - Comment not found
 * @throws {500} - Failed to delete comment
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot, please implement the following routes for comments:
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(400).json({ error: "Failed to create comment" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comment" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json(updatedComment);
  } catch (err) {
    res.status(400).json({ error: "Failed to update comment" });
  }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});