// Import the necessary libraries and modules.
import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Define a new schema for the User model.
const userSchema = new Schema(
  {
    // Define the properties of the schema.
    watchHistory: [
      {
        // The watchHistory property is an array of ObjectIds referencing the Video model.
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    username: {
      // The username property is a required string that must be unique, lowercase, and trimmed.
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //url cloudnary
      required: true,
    },
    coverImage: {
      type: String, //url cloudnary
      required: true,
    },
    password: {
      type: String, //url cloudnary
      required: true,
    },
    refreshToken: {
      type: String, //url cloudnary
      required: true,
    },
  },
  { timeseries: true }
);

// Define a pre-save hook for the userSchema.
// This function will be called before a document is saved.
userSchema.pre("save", async function (next) {
  // If the password field has not been modified, skip this hook and call the next middleware.
  if (!this.isModified("password")) return next();

  // If the password field has been modified, hash the new password using bcrypt.
  // The second argument to bcrypt.hash is the salt rounds, which determines the complexity of the hash.
  // The higher the number, the more secure the hash, but the longer it takes to generate.
  this.password = bcrypt.hash(this.password, 10);

  // Call the next middleware.
  next();
});

// Define a method named isPasswordCorrect on the userSchema.
// This method takes a password and compares it to the hashed password of the user document.
userSchema.methods.isPasswordCorrect = async function (password) {
  // Use bcrypt.compare to check if the provided password matches the hashed password.
  // bcrypt.compare will hash the provided password with the same salt used for the stored password and then compare the hashes.
  return await bcrypt.compare(password, this.password);
};

// Define a method named generateAccessToken on the userSchema.
// This method generates a JSON Web Token (JWT) that can be used for authentication.
userSchema.methods.generateAccessToken = function () {
  // Use jwt.sign to generate a JWT.
  // The first argument is the payload, which includes the user's id, username, email, and full name.
  // The second argument is the secret key, which is stored in an environment variable.
  // The third argument is an options object, which sets the expiry of the token.
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

// Define a method named generateRefreshToken on the userSchema.
// This method generates a JWT that can be used to refresh the access token when it expires.
userSchema.methods.generateRefreshToken = function () {
  // Use jwt.sign to generate a JWT.
  // The first argument is the payload, which includes the user's id.
  // The second argument is the secret key, which is stored in an environment variable.
  // The third argument is an options object, which sets the expiry of the token.
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

// Create a model from the userSchema and export it.
// The first argument is the name of the model, which is "User".
// The second argument is the schema to use for the model.
export const User = mongoose.model("User", userSchema);
