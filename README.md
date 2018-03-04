# chatbot
CatCat chatbot

## Flow
```
Facebook Messenger -> AWS Lamda -> Firebase
```

## Setup
- Create `AWS` `IAM` with `claudia` profile and policy
  ```
  AWSLambdaFullAccess
  IAMFullAccess
  AmazonAPIGatewayAdministrator
  ```
- Fill `~/.aws/credentials` with
  ```
  [claudia]
  aws_access_key_id = YOUR_ACCESS_KEY
  aws_secret_access_key = YOUR_ACCESS_SECRET
  ```
- Install
  ```
  npm i claudia-bot-builder huh
  ```
- Deploy
  ```
  claudia create --region us-east-1 --profile claudia --api-module bot
  ```
- Connecting with Facebook Messenger
  ```
  claudia update --configure-fb-bot --profile claudia
  # And config webhook after this see : https://vimeo.com/170647056
  ```

# TODO
- [x] Connect Facebook Messenger with AWS lamda
- [ ] Connect AWS lamda with Firebase