# nest-google-id-token-verification-strategy

## Prerequisite
  - Generate/obtain google outh JWT from OAuth playground using your CLIENT_ID and CLIENT_SECRET
    - ref : https://developers.google.com/google-ads/api/docs/oauth/playground

## Installation
```
npm install
```
## run
```
npm start
```

- pass token as ```-H "Authorization: Bearer <JWT>"``` to the end-point ```/user/profile```

## ScreenShots
  
- API response ```/user/profile```
![api_response](https://github.com/AsfanUlla/nest-google-id-token-verification-strategy/blob/master/result/1.png)
  
### Token payload

  ![token_payload](https://github.com/AsfanUlla/nest-google-id-token-verification-strategy/blob/master/result/2.png)

## Ref -
  https://cloud.google.com/endpoints/docs/openapi/authenticating-users-google-id
