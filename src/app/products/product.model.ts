import * as mongoose from 'mongoose';
import { Schema } from '@nestjs/mongoose';

export const ImagesSchema = new mongoose.Schema({
  img_url: { type: String, required: true },
  title: { type: String, required: true }
});

export const QuantitySchema = new mongoose.Schema({
  quantity: { type: String, required: true },
  consumer_price: { type: Number, required: true },
  member_price: { type: Number, required: true },
  market_price: { type: Number, required: true }
});

export const ProductSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  images: [ImagesSchema],
  quanties: [QuantitySchema]
});

export interface Product extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  category: string;
  brand: string;
  images: any;
  quanties: any;
}
