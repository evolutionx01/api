import * as mongoose from 'mongoose';

export const AddBroadcastSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: false },
  file: { type: String, required: false },
  file_type: { type: String, required: false },
  publish_date: { type: String, required: true }
});

export interface AddBroadcast extends mongoose.Document {
  id: string;
  name: string;
  message: string;
  file: string;
  file_type: string;
  publish_date: string;
}
