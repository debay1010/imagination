import { Schema, models, model } from "mongoose";

export interface IImage extends Document {
	title: string;
	transformationType: string;
	publicId: string;
	secureUrl: URL;
	width?: number; // Optional property for width
	height?: number; // Optional property for height
	config?: Record<string, unknown>; // Optional configuration object
	transformationUrl?: URL; // Optional transformation URL
	aspectRatio?: string; // Optional aspect ratio
	color?: string; // Optional color
	prompt?: string; // Optional prompt
	author: { id: String; firstName: String; lastName: String }; // Can be author's ID (string) or the full User object
	createdAt: Date;
	updatedAt: Date;
}

const ImageSchema = new Schema({
	title: { type: String, required: true },
	transformationType: { type: String, required: true },
	publicId: { type: String, required: true },
	secureUrl: { type: URL, required: true },
	width: { type: Number },
	height: { type: Number },
	config: { type: Object },
	transformationUrl: { type: URL },
	aspectRatio: { type: String },
	color: { type: String },
	prompt: { type: String },
	author: { type: Schema.Types.ObjectId, ref: "User" },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
