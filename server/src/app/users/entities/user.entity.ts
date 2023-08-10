import { Column, Entity, OneToMany } from "typeorm";

// ============ Entities ================
import { UUIDEntity } from "../../../shared/entities/uuid.entity";
import { ChatEntity } from "src/chat/entities/chat.entity";
import { MessageEntity } from "src/messages/entities/message.entity";
import { UsersChatsEntity } from "src/chat/entities/chat-users.entity";

@Entity('users')
export class UserEntity extends UUIDEntity {
  @Column({ name: "user_name" })
  name!: string;

  @Column({ name: "user_email" })
  email!: string;

  @Column({ name: "user_password" })
  password!: string;

  @Column({ name: "user_status", default: true })
  status!: boolean;

  @OneToMany(() => UsersChatsEntity, chat => chat.user)
  chat: UsersChatsEntity;

  @OneToMany(() => MessageEntity, message => message.user)
  message: MessageEntity;
}