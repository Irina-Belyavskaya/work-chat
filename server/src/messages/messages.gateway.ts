import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { User } from 'src/app/users/decorators/user.decorator';
import { UserSessionDto } from 'src/app/security/dtos/userSession.dto';
import { UseGuards } from '@nestjs/common';
import { JwtPermissionsGuard } from 'src/app/security/guards/jwt-permission.guard';
import { WsGuard } from 'src/app/security/guards/ws.guard';
import { Socket } from 'dgram';

@WebSocketGateway({
  cors: {
    origin: ['http://localhost:3000']
  }
})
@UseGuards(WsGuard)
export class MessagesGateway {
  constructor(private readonly messagesService: MessagesService) {}

  @SubscribeMessage('createMessage')
  create(@MessageBody() createMessageDto: CreateMessageDto) {
    return this.messagesService.create(createMessageDto);
  }

  @SubscribeMessage('findAllMessages')
  findAll(@User() userSrc :UserSessionDto,@ConnectedSocket() client: Socket, @MessageBody() userIdDest: string) {
    return this.messagesService.findAll(userSrc.id, userIdDest);
  }
}
