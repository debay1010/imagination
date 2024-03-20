import { Schema, models, model } from "mongoose";
import { unique } from "next/dist/build/utils";

interface IUser {
	clerkId: string;
	email: string;
	username: string;
	firstName?: string; // Optional property for firstName
	lastName?: string; // Optional property for lastName
	photo: string;
	planId: number;
	creditBalance: number;
}

const UserSchema = new Schema({
	clerkId: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	username: { type: String, required: true, unique: true },
	firstName: { type: String },
	lastName: { type: String },
	photo: { type: String, required: true },
	planId: { type: Number, default: 1 },
	creditBalance: { type: Number, default: 10 },
});

const User = models?.User || model("User", UserSchema);

export default User;
