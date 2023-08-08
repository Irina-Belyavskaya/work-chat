// ============ DTOs ================
import { UUIDDto } from "src/shared/dtos/uuid.dto";

// ============ Entities ================
import { UserEntity } from "../entities/user.entity";

export class UserDto extends UUIDDto {
  name!: string;
  email!: string;

  static fromEntity(entity: UserEntity) {
    const it = new UserDto();
    it.id = entity.id;
    it.email = entity.email;
    it.created = entity.created.valueOf();
    it.updated = entity.updated.valueOf();
    return it;
  }
}