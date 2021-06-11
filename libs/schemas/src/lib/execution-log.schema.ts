import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExecLogDocument = ExecLog & Document;

@Schema()
export class ExecLog {
  @Prop()
  command: string;

  @Prop()
  response: string
}

export const ExecLogSchema = SchemaFactory.createForClass(ExecLog);
