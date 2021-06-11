import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExecLogDocument = ExecLog & Document;

@Schema({
  timestamps: true
})
export class ExecLog {
  @Prop()
  command: string;

  @Prop()
  response: string

  @Prop()
  status: string
}

export const ExecLogSchema = SchemaFactory.createForClass(ExecLog);
