import express from "express";
import v1Routes from "./v1/v1Routes.js";
import v2Routes from "./v2/v2Routes.js";

const router = express.Router(); // Create a New Router Object

router.use("/v1",v1Routes); // If the remaining req url starts with
// tweets, use the tweetRouter

router.use("/v2",v2Routes); // If the remaining req url starts with
// comments, use the commentRouter

export default router; // Export the router object
