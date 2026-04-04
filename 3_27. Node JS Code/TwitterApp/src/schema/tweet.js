import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    body:{
        type:String,
        required:true,
        trim:true, // Remove Whitespace from the beginning and end of the string  // remove leading/trailing spaces
        maxlength:280
    }
})

const Tweet = mongoose.model("Tweet", tweetSchema);// Tweet collection

export default Tweet;