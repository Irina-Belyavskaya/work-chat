// import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
// import { UsersService } from "src/app/users/users.service";

// @Injectable()
// export class WsGuard implements CanActivate {

//   constructor(private userService: UsersService) {}

//   async canActivate(context: ExecutionContext) {
//     const bearerToken = context.args[0].handshake.headers.authorization.split(' ')[1];
//       try {
//           const decoded = jwt.verify(bearerToken, jwtConstants.secret) as any;
//           return new Promise((resolve, reject) => {
//               return this.userService.findByUsername(decoded.username).then(user => {
//                   if (user) {
//                       resolve(user);
//                   } else {
//                       reject(false);
//                   }
//               });

//             });
//       } catch (ex) {
//           console.log(ex);
//           return false;
//       }
//   }
// }



import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

// ============ DTOs ================
import { UserSessionDto } from '../dtos/userSession.dto';

// ============ Services ================
import { SecurityService } from '../security.service';
import { UsersService } from 'src/app/users/users.service';

@Injectable()
export class WsGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly securityService: SecurityService,
    private readonly userService: UsersService
  ) {}

  async canActivate(context: any) {
    try {      
      const authHeader = context.args[0].handshake.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if(bearer !== 'Bearer' || !token) {
        throw new HttpException({message: 'User unauthorized'}, HttpStatus.UNAUTHORIZED);
      }
      const decodedUser = UserSessionDto.fromPayload(this.jwtService.verify(token));
      const userEntity = await this.userService.getUserById(decodedUser.id)
      if (!userEntity) {
        throw new HttpException({message:'User unauthorized'}, HttpStatus.UNAUTHORIZED);
      }
      const req = context.switchToHttp().getRequest();
      req.user = decodedUser;
      return true;
    } catch (error) {
      throw new HttpException({message: 'User unauthorized'}, HttpStatus.UNAUTHORIZED);
    }
  }
}