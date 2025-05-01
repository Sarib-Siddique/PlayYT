import mongoose, { Schema } from "mongoose";

const SubscriptionSchema = new Schema(
  {
    subcriber: {
      type: Schema.Types.ObjectId, // one whos is subscribing
      ref: "User",
      required: true,
    },
    channel: {
      type: Schema.Types.ObjectId, // the channel being subscribed to
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

export const Subscription = mongoose.model("Subscription", SubscriptionSchema);
