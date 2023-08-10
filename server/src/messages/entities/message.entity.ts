import { UserEntity } from "src/app/users/entities/user.entity";
import { UUIDEntity } from "src/shared/entities/uuid.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { ChatEntity } from "../../chat/entities/chat.entity";

@Entity('messages')
export class MessageEntity extends UUIDEntity {
  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'chat_id' })
  chatId: string;

  @Column({ name: 'message_text' })
  messageText: string;

  @ManyToOne(() => ChatEntity, chat => chat.message)
  @JoinColumn({ name: "chat_id", referencedColumnName: "id" })
  chat: ChatEntity;

  @ManyToOne(() => UserEntity, user => user.message)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserEntity;
}