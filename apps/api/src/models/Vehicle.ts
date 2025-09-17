import { Schema, model } from "mongoose";

const VehicleSchema = new Schema(
  {
    slug: { type: String, unique: true, required: true, index: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: Number,
    category: String,
    transmission: String,
    fuel: String,
    seats: Number,
    imageUrl: String,
    status: { type: String, default: "active", index: true },
  },
  { timestamps: true }
);

export const Vehicle = model("Vehicle", VehicleSchema);
