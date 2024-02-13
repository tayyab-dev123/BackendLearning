// Import the mongoose library and its Schema object. Mongoose is used to interact with MongoDB.
import mongoose, { Schema } from "mongoose";

// Import the mongoose-aggregate-paginate-v2 library. This library adds pagination capabilities to Mongoose aggregate queries.
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// Define a new Mongoose schema for videos.
const videoSchema = new Schema(
  {
    // The owner field is a reference to a User document. It stores the ObjectId of the user who owns this video.
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    // The videoFile field stores the path to the video file. It is required.
    videoFile: {
      type: String,
      required: true,
    },

    // The thumbnail field stores the path to the thumbnail image of the video. It is required.
    thumbnail: {
      type: String,
      required: true,
    },

    // The title field stores the title of the video. It is required.
    title: {
      type: String,
      required: true,
    },

    // The description field stores the description of the video. It is required.
    description: {
      type: String,
      required: true,
    },

    // The duration field stores the duration of the video in seconds. It is required.
    duration: {
      type: Number,
      required: true,
    },

    // The views field stores the number of views the video has received. It defaults to 0.
    views: {
      type: Number,
      default: 0,
    },

    // The isPublished field indicates whether the video is published or not. It defaults to true.
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  // The second argument to the Schema constructor is an options object.
  // The timestamps option is set to true, which tells Mongoose to automatically manage createdAt and updatedAt fields for each document.
  { timestamps: true }
);

// Apply the mongooseAggregatePaginate plugin to the videoSchema. This adds pagination capabilities to the schema.
videoSchema.plugin(mongooseAggregatePaginate);

// Create a Mongoose model named "Video" from the videoSchema and export it.
// This model can be used to create, read, update, and delete documents in the "videos" collection in MongoDB.
export const Video = mongoose.model("Video", videoSchema);
