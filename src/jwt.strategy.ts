import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: false,
        rateLimit: false,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://www.googleapis.com/oauth2/v3/certs`,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: '1014844474032-nmmuk9pupf93faia1sk8sei72hst2ili.apps.googleusercontent.com',
      issuer: 'https://accounts.google.com',
      algorithms: ['RS256'],
    });
  }

  validate(payload: unknown): unknown {
    //console.log(payload);
    return payload;
  }
}