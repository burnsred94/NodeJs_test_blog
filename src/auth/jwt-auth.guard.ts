import { CanActivate, Injectable, UnauthorizedException } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common/interfaces/features/execution-context.interface";
import { Observable } from "rxjs";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard implements CanActivate {

    constructor(private jwtService : JwtService) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
            try {
                const authHeader = req.headers.authorization;
                const bearer = authHeader.split(' ')[0];
                const token = authHeader.split(' ')[1];

                if(bearer !== 'Bearer' || !token){
                    throw new UnauthorizedException({message : "User not a Unauthorized"});
                }
                const user = this.jwtService.verify(token);
                req.user = user;
                return true
            }catch (e) {
            console.log(e)
                throw new UnauthorizedException({message : "User not a Unauthorized"});
            }
        return undefined
    }
}