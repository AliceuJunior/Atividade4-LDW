import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
    title: string;
    description?: string;
    date: Date;
    location: string;
}

const EventSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    location: { type: String, required: true },
});

export default mongoose.model<IEvent>('Event', EventSchema);
