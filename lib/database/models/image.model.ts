import { Schema, models, model } from "mongoose";
import { number } from "zod";

// export interface IImage extends Document {
// 	title: string;
// 	transformationType: string;
// 	publicId: string;
// 	secureURL: string;
// 	width?: number; // Optional property for width
// 	height?: number; // Optional property for height
// 	config?: object; // Optional configuration object
// 	transformationUrl?: string; // Optional transformation URL
// 	aspectRatio?: string; // Optional aspect ratio
// 	color?: string; // Optional color
// 	prompt?: string; // Optional prompt
// 	author: { id: String; firstName: String; lastName: String }; // Can be author's ID (string) or the full User object
// 	createdAt: Date;
// 	updatedAt: Date;
// }

export interface IImage extends Document {
	title: string;
	transformationType: string;
	publicId: string;
	secureURL: string;
	width?: number;
	height?: number;
	config?: object;
	transformationUrl?: string;
	aspectRatio?: string;
	color?: string;
	prompt?: string;
	author: {
		_id: string;
		firstName: string;
		lastName: string;
	};
	createdAt?: Date;
	updatedAt?: Date;
}

const ImageSchema = new Schema({
	title: { type: String, required: true },
	transformationType: { type: String, required: true },
	publicId: { type: String, required: true },
	secureURL: { type: String, required: true },
	width: { type: Number },
	height: { type: Number },
	config: { type: Object },
	transformationUrl: { type: String },
	aspectRatio: { type: String },
	color: { type: String },
	prompt: { type: String },
	author: { type: Schema.Types.ObjectId, ref: "User" },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;

// ***********************************

// const AdvertSchema = new Schema({
// 	advertType: { type: String, required: true },
// 	title: { type: String, required: true },
// 	category:{type:String},
// 	location:{type:String},
// 	description:{type:String},

// 	youtubeLink:{type:String},
// 	contactNumber:{type:number},
// 	price:{type:Number},
// 	negotiable: {type:Boolean},

// 	frequency:{type:String},  // for rent- daily/weekly/monthly
// 	// price == rate for rent/lease
// 	imagePublicId: { type: String, required: true },
// 	imageSecureURL: { type: String, required: true },
// 	transformUrl_imageAdvertUrl: { type: String },
// 	author: { type: Schema.Types.ObjectId, ref: "User" },
// 	createdAt: { type: Date, default: Date.now },
// 	updatedAt: { type: Date, default: Date.now },
// });
