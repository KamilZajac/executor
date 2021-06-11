import {IsString} from 'class-validator';

export class ExecuteDto {
  @IsString()
  public command: string;
}
