import { Schema, model, Types } from "mongoose";

const ReservationSchema = new Schema(
  {
    refCode: { type: String, unique: true, required: true, index: true },
    vehicleId: {
      type: Types.ObjectId,
      ref: "Vehicle",
      required: true,
      index: true,
    },
    pickupCode: String,
    dropoffCode: String,
    from: { type: Date, required: true, index: true },
    to: { type: Date, required: true, index: true },
    total: { type: Number, required: true },
    priceBreakdown: { type: Object },
    status: { type: String, default: "hold", index: true }, // 'hold' | 'paid' | 'cancelled'
  },
  { timestamps: true }
);

// Overlap sorguları hızlı olsun:
ReservationSchema.index({ vehicleId: 1, from: 1, to: 1, status: 1 });

export const Reservation = model("Reservation", ReservationSchema);
