import mongoose, {model, Schema,models } from "mongoose";

const ProductSchema = new Schema({
  tittle: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
});

export const Product = models.Product || model('Product' , ProductSchema);