import { UserEntity } from "src/app/users/entities/user.entity";
import { UUIDEntity } from "src/shared/entities/uuid.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { MessageEntity } from "../../messages/entities/message.entity";
import { ChatEntity } from "./chat.entity";

@Entity('users-chats')
export class UsersChatsEntity extends UUIDEntity {
  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'chat_id' })
  chatId: string;

  @ManyToOne(() => UserEntity, user => user.chat)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserEntity;

  @ManyToOne(() => ChatEntity, chat => chat.usersChats)
  @JoinColumn({ name: "chat_id", referencedColumnName: "id" })
  chat: ChatEntity;
}