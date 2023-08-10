import { UserEntity } from "src/app/users/entities/user.entity";
import { UUIDEntity } from "src/shared/entities/uuid.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { MessageEntity } from "../../messages/entities/message.entity";
import { UsersChatsEntity } from "./chat-users.entity";

@Entity('chats')
export class ChatEntity extends UUIDEntity {
  // @Column({ name: 'user_id' })
  // userId: string;

  // @ManyToOne(() => UserEntity, user => user.chat)
  // @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  // user: UserEntity;

  @OneToMany(() => MessageEntity, message => message.chat)
  message: MessageEntity;

  @OneToMany(() => UsersChatsEntity, usersChats => usersChats.chat)
  usersChats: UsersChatsEntity;
}
