import { Column, Entity } from "typeorm";

// ============ Entities ================
import { UUIDEntity } from "../../../shared/entities/uuid.entity";

@Entity('users')
export class UserEntity extends UUIDEntity {
  @Column({ name: "name" })
  name!: string;

  @Column({ name: "email" })
  email!: string;

  @Column({ name: "password" })
  password!: string;

  @Column({ name: "status", default : true})
  status!: boolean;
}