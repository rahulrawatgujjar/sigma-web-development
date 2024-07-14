import mongoose, { Document, Schema } from "mongoose";


export interface Payment extends Document {
  name: string;
  to_user: string;
  oid: string;
  message: string;
  amount: number;
  createdAt?: Date;
  updatedAt?: Date;
  done: boolean;
}


const paymentSchema = new Schema<Payment>({
  name: {
    type: String,
    required: true
  },
  to_user: {
    type: String
  },
  oid: {
    type: String
  },
  message: {
    type: String
  },
  amount: {
    type: Number
  },
  done: {
    type: Boolean
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const PaymentModel = (mongoose.models?.Payment as mongoose.Model<Payment>) || mongoose.model<Payment>("Payment", paymentSchema);
export default PaymentModel;