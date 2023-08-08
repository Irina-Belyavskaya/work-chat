import { IsEmail, IsString, IsUUID } from "class-validator";

export class UserSessionDto {
  @IsUUID()
  id: string;

  @IsString()
  @IsEmail()
  email: string;

  public static fromPayload(dto: UserSessionDto): UserSessionDto {
    if (!dto) {
      return;
    }

    return {
      id: dto.id,
      email: dto.email,
    };
  }
}