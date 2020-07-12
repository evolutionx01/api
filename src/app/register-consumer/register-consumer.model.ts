import * as mongoose from 'mongoose';

export const RegisterConsumerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  NRIC_no: { type: Number, required: true },
  marital_status: { type: String, required: true },
  gender: { type: String, required: true },
  status: { type: String, required: true },
  race: { type: String, required: true },
  country: { type: String, required: false },
  passport_no: { type: String, required: false },
  mobile: { type: Number, required: true },
  whatsapp: { type: Number, required: true },
  email: { type: String, required: false },
  address: { type: String, required: true },
  town: { type: String, required: true },
  state: { type: String, required: true },
  postal_code: { type: Number, required: true },
  preffered_communication: { type: String, required: true },
  profession: { type: String, required: true },
  income_net: { type: Number, required: true },
  spices: { type: String, required: false },
  type_of_buusiness: { type: String, required: true },
});

export interface RegisterConsumer extends mongoose.Document {
  id: string;
  name: string;
  NRIC_no: number;
  marital_status: string;
  gender: string;
  status: string;
  race: string;
  country: string;
  passport_no: string;
  mobile: number;
  whatsapp: number;
  email: string;
  address: string;
  town: string;
  state: string;
  postal_code: number;
  preffered_communication: string;
  profession: string;
  income_net: number;
  spices: string;
  type_of_buusiness: String;
}
