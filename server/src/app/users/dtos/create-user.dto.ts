import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsString({message: "Must be a string"})
  readonly name: string;

  @IsString({message: "Must be a string"})
  @IsEmail({}, {message: "Incorrect email"})
  readonly email: string;

  @IsString({message: "Must be a string"})
  @Length(4, 16, {message: "Range: 4-16 symbols"})
  readonly password: string;
}