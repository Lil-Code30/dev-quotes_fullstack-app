import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    likers: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// static methods for the user model
// find a user by username
userSchema.statics.findByUsername = function (username) {
  return this.find({ username: username });
};
//find a user by email
userSchema.statics.findByEmail = function (email) {
  return this.find({ email: email });
};

// Create and export the model
export const PostModel = mongoose.model("post", postSchema);
export const UserModel = mongoose.model("user", userSchema);
