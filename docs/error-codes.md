---
id: error-codes
title: Error Codes
sidebar_label: Error Codes
---

import { Box, Heading, Text, Card, Image, Button, Flex, Table } from "rebass";

:::note
**The following Method is Revenue Monster supported**<br/>
(Currently not all Method supported in Production)
:::

| Error Codes              | Description                                                                                                                                       | Solution                                                                                                                                                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| InvalidRequest:          | The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed. | Refer to request paramenter(s) as described in API documentation and retry again.                                                                                                                                  |
| InvalidGrant:            | Invalid grant                                                                                                                                     | Check redirect URI (must be exactly the same as request URI query string)                                                                                                                                          |
| InvalidClient:           | Invalid client                                                                                                                                    | Client is not registered in our system, please try again with correct clientId, clientSecret.                                                                                                                      |
| InvalidCode:             | Invalid authorization code                                                                                                                        | This is not the correct authorization code generated from our system, please request a new authorization code again.                                                                                               |
| InActiveClient:          | Client mode is inactive                                                                                                                           | This client/application is disabled, login to Merchant Portal and reactivate it.                                                                                                                                   |
| InvalidScope:            | The requested scope is invalid, unknown, or malformed.                                                                                            | 1. Check scope, currently only support `manage_payment`, `manage_store`, `get_merchant_profile`, `get_user_profile`. 2. Check scope of this user, requested scope cannot be greater than user scope in our system. |
| UnAuthorizedClient:      | The client is not authorized to request this method.                                                                                              | Use other client to request this method.                                                                                                                                                                           |
| UnSupportedGrantType:    | Unsupported grant type                                                                                                                            | Currently we only support grant types of `Client Credentials`, `Authorization Code` and `Refresh Token`.                                                                                                           |
| UnSupportedResponseType: | The authorization server does not support obtaining an authorization code using this method.                                                      | Use `responseType=code` in request URI query string and try again.                                                                                                                                                 |
| AccessDenied:            | The resource owner or authorization server denied the request                                                                                     | User is inactivated in our system, please try again.                                                                                                                                                               |
| InternalError:           | The authorization server encountered an unexpected condition that prevented it from fulfilling the request                                        | Should this condition presists, please contact our customer support.                                                                                                                                               |
| TemporaryUnAvailable:    | The authorization server is currently unable to handle the request due to a temporary overloading or maintenance of the server                    | Should this condition presists, please contact our customer support.                                                                                                                                               |

<hr/>

### Other Error Codes

| Error Message                               | Description                                                                                                                          |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ALIPAY_CHINA_NOT_ACTIVE                     | Alipay China is not active. Please contact Revenue Monster to activate merchant for alipay (016-6999168 / support@revenuemonster.my) |
| ACCESS_TOKEN_READ_FAIL                      | Cannot read access token file                                                                                                        |
| ACCOUNT_FROZEN                              | Your account has been frozen. Please contact support.                                                                                |
| ACCOUNT_INACTIVE                            | User account is inactive                                                                                                             |
| ACCOUNT_NOT_FOUND                           | Account does not exist                                                                                                               |
| ACCOUNT_SUSPENDED                           | This account is temporarily locked                                                                                                   |
| AGREEMENT_ALREADY_SIGNED                    | Agreement already signed                                                                                                             |
| AGREEMENT_NOT_FOUND                         | Agreement not found                                                                                                                  |
| AGREMENT_NOT_SIGNED                         | Agreement not signed                                                                                                                 |
| ACCESS_TOKEN_FAIL                           | Fail to request access token                                                                                                         |
| ALIPAY_CLIENT_DUPLICATE                     | Alipay client duplicate                                                                                                              |
| ALREADY_MASTER_MERCHANT                     | Already master merchant                                                                                                              |
| API_ENDPOINT_NOT_FOUND                      | The api endpoint does not exist                                                                                                      |
| API_INACTIVE                                | This API version is no longer active. Please migrate to API v3                                                                       |
| AUTH_CODE_EXPIRED                           | Customer code expired. Please scan again.                                                                                            |
| AUTH_CODE_INVALID                           | Customer code expired. Please scan again.                                                                                            |
| AUTH_CODE_MIS_MATCH                         | Invalid Customer Code                                                                                                                |
| AUTH_CODE_USED                              | Customer code already been used. Please refresh for another transaction.                                                             |
| AUTHORIZATION_HEADER_NOT_ALLOWED            | Authorization header is not allowed                                                                                                  |
| BANK_ERROR                                  | Bank system error                                                                                                                    |
| BOOST_MALAYSIA_NOT_ACTIVE                   | Boost Malaysia is not active. Please contact Revenue Monster to activate merchant for boost.                                         |
| BUSINESS_CATEGORY_NOT_FOUND                 | Business category not found                                                                                                          |
| BUYER_ACCOUNT_ERROR                         | Customer account error                                                                                                               |
| BUYER_ACCOUNT_IN_ACTIVE                     | Customer account is inactive                                                                                                         |
| CAMPAIGN_NOT_FOUND                          | Campaign not found                                                                                                                   |
| CANNOT_UPDATE_SAME_PHONE_NUMBER             | Cannot update the same phone number                                                                                                  |
| CHOP_STAMP_NOT_ACTIVE                       | Chop stamp not active                                                                                                                |
| CHOP_STAMP_NOT_FOUND                        | Chop stamp not found                                                                                                                 |
| CHOP_STAMP_QUANTITY_EXCEED                  | Reached exceed number of chop stamp card                                                                                             |
| CLIENT_INVALID                              | Invalid client                                                                                                                       |
| CLIENT_NO_PERMISSION                        | Developer application does not have permission to access                                                                             |
| CLIENT_NOT_AUTHORIZE_STORE                  | Developer application not authorize user store                                                                                       |
| CLIENT_NOT_FOUND                            | Developer application client not found                                                                                               |
| CLIENT_NOT_SET_PUBLIC_KEY                   | Developer application does not set public key                                                                                        |
| CLIENT_PRODUCT_NOT_SETUP                    | Developer application product not setup                                                                                              |
| CLIENT_PRODUCT_SUBSCRIBED                   | Developer application already subscribed to product                                                                                  |
| COMPANY_TYPE_NOT_FOUND                      | Company type not found                                                                                                               |
| CUSTOMER_REACHED_TRANSACTION_LIMIT          | Customer reached transaction limit                                                                                                   |
| DAILY_PAYMENT_EXCEEDED                      | Daily payment limit exceeded                                                                                                         |
| DAILY_RECEIVED_EXCEEDED                     | Daily payment limit exceeded                                                                                                         |
| DEFAULT_STORE_DELETE_NOT_ALLOWED            | Default store not allowed to delete                                                                                                  |
| DOES_NOT_ALLOW_MULTIPLE_BATCH_PROCESSING    | Does not allow multiple batch processing                                                                                             |
| DOES_NOT_HAVE_ACTIVE_WALLET                 | Does not have active wallet. Please contact Revenue Monster to activate wallet                                                       |
| EMAIL_DUPLICATE                             | Email address already exists                                                                                                         |
| EMAIL_NOT_FOUND                             | Email address not found                                                                                                              |
| EXCEEDED_LIMIT                              | Rate limit exceeded                                                                                                                  |
| EXCEED_TIME_FOR_REVERSE_TRANSACTION         | Exceed time for transaction to reverse                                                                                               |
| EXPIRY_INVALID                              | Invalid expiry type                                                                                                                  |
| EXPIRY_MIN                                  | Min expiry day                                                                                                                       |
| FAILED_TO_REVERSE_ORDER                     | Failed to reverse order                                                                                                              |
| FILE_NOT_FOUND                              | File not found                                                                                                                       |
| GENERIC_TEMPLATE_INVALID                    | Invalid generic template                                                                                                             |
| GRABPAY_MALAYSIA_MERCHANT_ID_NOT_SET        | GrabPay Malaysia is not active. Please contact Revenue Monster to activate merchant for GrabPay                                      |
| GRABPAY_MALAYSIA_NOT_ACTIVE                 | GrabPay Malaysia is not active. Please contact Revenue Monster to activate merchant for GrabPay                                      |
| GRANT_TYPE_INVALID                          | Invalid grant type                                                                                                                   |
| INSUFFICIENT_CARD_BALANCE                   | Insuﬃcient customer balance                                                                                                         |
| INSUFFICIENT_LOYALTY_BALANCE                | Insuffience loyalty balance                                                                                                          |
| INSUFFICIENT_MERCHANT_BALANCE               | Insuﬃcient merchant balance                                                                                                         |
| INSUFFICIENT_PERMISSION_LEVEL               | Insufficient Permission                                                                                                              |
| INSUFFICIENT_REFUND_AMOUNT                  | Insufficient refund amount                                                                                                           |
| INTERNAL_ERROR                              | Internal error                                                                                                                       |
| INVALID_AGREEMENT_VERSION                   | Invalid Agreement Version                                                                                                            |
| INVALID_APP_ID                              | Invalid parameters                                                                                                                   |
| INVALID_CHARSET                             | Invalid format                                                                                                                       |
| INVALID_CLIENT                              | Invalid client                                                                                                                       |
| INVALID_ENCRYPTION                          | Invalid encryption                                                                                                                   |
| INVALID_FILE                                | Invalid file                                                                                                                         |
| INVALID_FORMAT                              | Invalid format                                                                                                                       |
| INVALID_HTTP_METHOD                         | Invalid HTTP Method                                                                                                                  |
| INVALID_ID                                  | Invalid id                                                                                                                           |
| INVALID_IMAGE_DIMENSION                     | Invalid Image Dimension                                                                                                              |
| INVALID_LOYALTY_CREDIT_CODE                 | Invalid loyalty credit code                                                                                                          |
| INVALID_OTP_CODE                            | Invalid otp code                                                                                                                     |
| INVALID_PARAMETER                           | Invalid parameters                                                                                                                   |
| INVALID_PARAMETER_ID                        | Invalid parameter id                                                                                                                 |
| INVALID_PAYMENT_SUBSCRIPTION_METHOD         | Invalid payment subscription method                                                                                                  |
| INVALID_PRIVATE_KEY                         | Invalid private key                                                                                                                  |
| INVALID_PUBLIC_KEY                          | Invalid public key                                                                                                                   |
| INVALID_REQUEST                             | Invalid request                                                                                                                      |
| INVALID_REQUEST_SIGNATURE                   | The request signature is invalid                                                                                                     |
| INVALID_SCOPE                               | Invalid scope                                                                                                                        |
| INVALID_SIGNATURE                           | Invalid signature                                                                                                                    |
| INVALID_TERMINAL_TOKEN                      | Invalid terminal token. Please contact Revenue Monster support                                                                       |
| INVALID_TIMESTAMP                           | Could not authenticate - Timestamp                                                                                                   |
| KEYWORD_DUPLICATE                           | Duplicate keyword                                                                                                                    |
| KEYWORD_KEY_INVALID                         | Invalid keyword key                                                                                                                  |
| KEYWORD_NOT_FOUND                           | Keyword not found                                                                                                                    |
| LIST_TEMPLATE_INVALID                       | Invalid list template                                                                                                                |
| LOYALTY_BATCH_ALREADY_GENERATE_CSV          | Loyalty batch already generate csv                                                                                                   |
| LOYALTY_BATCH_ALREADY_ZIP                   | Loyalty batch already zip                                                                                                            |
| LOYALTY_BIRTHDAY_FIELD_NOT_REQUIRED         | Birth date field not required                                                                                                        |
| LOYALTY_CREDIT_NOT_ENABLED                  | Loyalty credit not enable                                                                                                            |
| LOYALTY_EXPIRED                             | Loyalty point expired                                                                                                                |
| LOYALTY_GENERATE_ERROR                      | Error in generating loyalty point                                                                                                    |
| LOYALTY_INSUFFICIENT                        | Insufficient point                                                                                                                   |
| LOYALTY_MEMBER_REGISTRATION_TOO_MANY        | length of entity too large                                                                                                           |
| LOYALTY_NOT_CORRECT_FORMAT                  | Loyalty not correct format                                                                                                           |
| LOYALTY_NOT_FOUND                           | Loyalty not found                                                                                                                    |
| LOYALTY_NOT_MERCHANT                        | Loyalty not belongs to merchant                                                                                                      |
| LOYALTY_NOT_SUBSCRIBED                      | Not subscribed to loyalty                                                                                                            |
| LOYALTY_POINT_ALREADY_REDEEMED              | Loyalty point already redeemed                                                                                                       |
| LOYALTY_POINT_IS_PROCESSING                 | Loyalty point is proccessing                                                                                                         |
| LOYALTY_POINT_MISSING                       | Loyalty point missing for certain custom id                                                                                          |
| LOYALTY_QUANTITY_MAX                        | Exceeded maximum quantity                                                                                                            |
| LOYALTY_SPENDING_NOT_ALLOWED                | Loyalty spending not allowed                                                                                                         |
| LOYALTY_SPENDING_NOT_FOUND                  | Loyalty spending not found                                                                                                           |
| LOYALTY_SSE_ERROR                           | Error in SSE                                                                                                                         |
| LOYALTY_STATUS_ERROR                        | Error in updating status                                                                                                             |
| MARKET_PLACE_VOUCHER_ALREADY_REQUESTED      | Marketplace voucher already requested                                                                                                |
| MARKET_PLACE_VOUCHER_EXCEED_QUANTITY        | Marketplace voucher exceed quantity                                                                                                  |
| MARKET_PLACE_VOUCHER_NOT_FOUND              | Marketplace voucher not found                                                                                                        |
| MASTER_MERCHANT_CANNOT_SAME_MERCHANT        | Master merchant cannot be your own                                                                                                   |
| MASTER_MERCHANT_NOT_SUBSCRIBE               | Master Merchant not subscribed to this product                                                                                       |
| MASTER_MERCHANT_SUBSCRIPTION_EXPIRED        | Master Merchant subscription expired                                                                                                 |
| MASTER_MERCHANT_SUBSCRIPTION_NOT_ACTIVE     | Master merchant subscription not active                                                                                              |
| MAX_VALUE                                   | Account update failed: value is too long (maximum is n characters)                                                                   |
| MAX_VALUE_MEMBER_TIER                       | Reach maximum limit for member tier                                                                                                  |
| MAX_VALUE_ROLE                              | Reach maximum limit for creating Role                                                                                                |
| MAYBANK_FAIL_TO_CANCELLED                   | Maybank fail to cancelled                                                                                                            |
| MAYBANK_KEY_EXPIRED                         | Maybank key expired                                                                                                                  |
| MAYBANK_KEY_NOT_FOUND                       | Maybank key not found                                                                                                                |
| MAYBANKA_MALAYSIA_MERCHANT_ID_NOT_SET       | Maybank Malaysia is not active. Please contact Revenue Monster to activate merchant for maybank                                      |
| MAYBANK_MALAYSIA_NOT_ACTIVE                 | Maybank Malaysia is not active. Please contact Revenue Monster to activate merchant for maybank                                      |
| MEMBER_NOT_FOUND                            | Member not found                                                                                                                     |
| MEMBER_NOT_MERCHANT                         | Member not belongs to merchant                                                                                                       |
| MEMBER_PARENT_INVALID                       | Invalid member parent                                                                                                                |
| MEMBER_REGISTERED                           | Member already registered                                                                                                            |
| MEMBER_TIER_MAX                             | Reached max member tier                                                                                                              |
| MEMBER_TIER_NOT_FOUND                       | Member Tier not found                                                                                                                |
| MENU_INVALID                                | Invalid Menu                                                                                                                         |
| MERCHANT_CHOP_STAMP_EXPIRED                 | Merchant chop stamp event is expired                                                                                                 |
| MERCHANT_CHOP_STAMP_NOT_FOUND               | Merchant chop stamp event not found                                                                                                  |
| MERCHANT_CHOP_STAMP_NOT_STARTED             | Merchant chop stamp event not started                                                                                                |
| MERCHANT_GALLERY_NOT_FOUND                  | Merchant gallery not found                                                                                                           |
| MERCHANT_ID_INVALID                         | Invalid merchant id                                                                                                                  |
| MERCHANT_INACTIVE                           | Merchant account is inactive                                                                                                         |
| MERCHANT_KEY_INVALID                        | Invalid merchant key                                                                                                                 |
| MERCHANT_MDR_NOT_SET                        | Merchant mdr not set. Please contact Revenue Monster to set.                                                                         |
| MERCHANT_NOT_ACTIVE                         | Merchant not active                                                                                                                  |
| MERCHANT_NOT_FOUND                          | Merchant not found                                                                                                                   |
| MERCHANT_NOT_HAVE_MASTER_MERCHANT           | Merchant not have master merchant                                                                                                    |
| MERCHANT_NOT_HAVE_PARTNER                   | Merchant does not have partner                                                                                                       |
| MERCHANT_NOT_SAME                           | Merchant not same                                                                                                                    |
| MERCHANT_NOT_SETUP                          | Merchant not setup                                                                                                                   |
| MERCHANT_REQUESTED_JOIN                     | Merchant already requested for join as sub merchant                                                                                  |
| MERCHANT_REQUESTED_JOIN_NOT_FOUND           | Merchant join request not found                                                                                                      |
| MERCHANT_SUSPENDED                          | Merchant suspended                                                                                                                   |
| MERCHANT_VERIFIED                           | Merchant profile is verified                                                                                                         |
| MESSAGE_TYPE_NOT_FUND                       | Message type not found                                                                                                               |
| MESSENGER_ACCOUNT_EXISTS                    | Messenger account already exist                                                                                                      |
| MESSENGER_CODE_EXPIRED                      | Messenger code expired                                                                                                               |
| MESSENGER_INVALID_TOKEN                     | Invalid messenger token                                                                                                              |
| MESSENGER_MEMBER_DUPLICATE                  | Messenger member registered                                                                                                          |
| MESSENGER_OWNER_ALLOW_CONNECT               | Only messenger owner allowed to connect                                                                                              |
| MESSENGER_OWNER_INVALID                     | Invalid messenger owner                                                                                                              |
| MESSENGER_PAGE_DUPLICATE                    | Duplicate messenger page                                                                                                             |
| MESSENGER_PAGE_NOT_FOUND                    | Messenger page not found                                                                                                             |
| METHOD_NOT_ALLOWED                          | Method not allowed                                                                                                                   |
| MINIMUM_AMOUNT_REQUIRED                     | Minimum amount should be 10sen                                                                                                       |
| Min_PTS_DUPLICATE                           | Min point exists in member tier                                                                                                      |
| MONEY_PACKET_EXPIRED                        | Money packet is expired                                                                                                              |
| MONEY_PACKET_NOT_FOUND                      | Money packet not found                                                                                                               |
| MONEY_PACKET_NOT_REDEEMED                   | Money packet redeemed                                                                                                                |
| NINE_GRID_MERCHANT_NOT_ALLOW_PAYMENT        | Nine grid not allow to make payment                                                                                                  |
| NO_ACCESS                                   | This application is not allowed to access                                                                                            |
| NO_APP_ID                                   | Missing parameter                                                                                                                    |
| NO_MERCHANT_ID                              | Missing parameter                                                                                                                    |
| NO_METHOD                                   | Missing parameter                                                                                                                    |
| NOT_ALLOW_DELETE_APPROVED_JOIN_REQUEST      | Not allow delete join request                                                                                                        |
| NOT_ALLOW_LINK_PRODUCTION                   | Not allow link for production                                                                                                        |
| NOT_ALLOW_REFUND                            | Refunded not allowed                                                                                                                 |
| NOT_AUTH                                    | Could not authenticate                                                                                                               |
| NOT_AUTHORIZE_USER_STORE                    | Not authorize user store                                                                                                             |
| NOT_MASTER_MERCHANT                         | Not a master merchant                                                                                                                |
| NOT_MASTER_MERCHANT_ACCOUNT                 | Not a master merchant account                                                                                                        |
| NOT_NINER_GRID_MERCHANT                     | Not a nine grid merchant                                                                                                             |
| NOT_PARTNER_ACCOUNT                         | Not a partner account                                                                                                                |
| NOT_PERMITTED                               | Not permitted to perform this action.                                                                                                |
| NOT_SUBSCRIBE                               | Merchant not subscribed to this product                                                                                              |
| NOT_TERMNAL_TRANSACTION                     | Transaction not allowed for different using different terminal                                                                       |
| NOT_USER_STORE                              | Not user store                                                                                                                       |
| OLD_PW_INVALID                              | Invalid old password                                                                                                                 |
| ONLY_FREE_TIER_PLUGIN                       | Only free tier plugin                                                                                                                |
| ONLY_OWNER_ALLOW_FOR_E_AGREEMENT            | Only owner allow see e agreement                                                                                                     |
| OPEN_FAIL                                   | Fail to request open ID                                                                                                              |
| ORDDR_CANCELLED                             | Order error                                                                                                                          |
| ORDER_CLOSED                                | Order error                                                                                                                          |
| ORDER_ID_DUPLICATE                          | Order id duplicate                                                                                                                   |
| ORDER_NOT_EXIST                             | Order error                                                                                                                          |
| ORDER_NOT_PAID                              | Order not paid                                                                                                                       |
| ORDER_PAID                                  | Order is paid                                                                                                                        |
| ORIGIN_INVALID                              | Invalid origin type                                                                                                                  |
| OVERLOAD                                    | Over capacity                                                                                                                        |
| OWNER_NOT_ALLOWED_CREATE                    | Create owner not allowed                                                                                                             |
| OWNER_NOT_ALLOWED_DELETE                    | Delete owner is not allowed                                                                                                          |
| OWNER_NOT_ALLOWED_UPDATE                    | Update owner is not allowed                                                                                                          |
| PAGE_NOT_FOUND                              | Sorry, that page does not exist                                                                                                      |
| PARTNER_MDR_NOT_SET                         | Partner mdr is not set. Please contact Revenue Monster to set the partner mdr                                                        |
| PARTNER_NOT_FOUND                           | Partner not found                                                                                                                    |
| PARTNER_NOT_SAME                            | Partner not same                                                                                                                     |
| PASSWORD_IVALID                             | Email address or password is wrong                                                                                                   |
| PASSWORD_NOT_STRENGTH                       | Password not strength                                                                                                                |
| PASSWORD_REQUIRED                           | Pending customer password                                                                                                            |
| PAYMENT_AMT_INVALID                         | Invalid amount format                                                                                                                |
| PAYMENT_CURRENCY_INVALID                    | Payment currency is invalid                                                                                                          |
| PAYMENT_DECIMAL_INVALID                     | Invalid decimal                                                                                                                      |
| PAYMENT_EXCEED_AMOUNT_LIMIT_PER_TRANSACTION | Transaction amount is over the limit                                                                                                 |
| PAYMENT_EXCEED_AMOUNT_PER_DAY               | Payment exceed amount for per day                                                                                                    |
| PAYMENT_EXCEED_AMOUNT_PER_MONTH             | Payment exceed amount for per month                                                                                                  |
| PAYMENT_EXCEED_NO_TRANSACTION_PER_DAY       | Reached exceed number of daily transaction                                                                                           |
| PAYMENT_EXCEED_AMOUNT_LIMIT_PER_MONTH       | Reached exceed number of monthly transaction                                                                                         |
| PAYMENT_FULLY_REFUNDED                      | Payment already refunded                                                                                                             |
| PAYMENT_LIMIT_NOT_SET                       | Payment limit not set. Please contact Revenue Monster to set the limit                                                               |
| PAYMENT_PARAM_INVALID                       | Invalid payment params                                                                                                               |
| PAYMENT_REDIRECT                            | Merchant ID and redirect URL not found                                                                                               |
| PAYMENT_REFUND_AMOUNT_EXCEED_PER_DAY        | Refund amount transaction exceed then sales amount of the day                                                                        |
| PAYMENT_REFUNDING                           | Payment still refunding process                                                                                                      |
| PAYMENT_SCAN_INVALID                        | Invalid platform scan                                                                                                                |
| PAYMENT_SUBSCRIPTION_METHOD_ACTIVE          | Payment method is active                                                                                                             |
| PAYMENT_TIMEOUT                             | Payment timeout                                                                                                                      |
| PAYMENT_UNSUPPORTED_CURRENCY_TYPE           | Unsupported currency type                                                                                                            |
| PHONE_DUPLICATE                             | Phone number already exists                                                                                                          |
| PIN_INVALID                                 | Pin is invalid                                                                                                                       |
| PLATFORM_NOT_FOUND                          | Platform not found                                                                                                                   |
| PLUGIN_ALREADY_INSTALLED                    | Plugin already installed                                                                                                             |
| PLUGIN_NOT_ALLOW_TO_UPDATE_PRICING          | Plugin not allow to update pricing                                                                                                   |
| PLUGIN_NOT_FOUND                            | Plugin not found                                                                                                                     |
| PLUGIN_NOT_INSTALLED                        | Plugin not installed                                                                                                                 |
| PLUGIN_NOT_VERIFIED                         | Plugin not verified                                                                                                                  |
| PLUGIN_SHOULD_GREATE_THAN_PREVIOUS_VERSION  | Plugin version should greater than previous version                                                                                  |
| PRESTRO_MALAYSIA_NOT_ACTIVE                 | Presto Malaysia is not active. Please contact Revenue Monster to activate merchant for presto                                        |
| PRESTO_MDR_NOT_SET                          | Presto mdr not set. Please contact Revenue Monster to set.                                                                           |
| PRESTO_MERCHANT_ID_NOT_SET                  | Presto merchant id not set. Please contact Revenue Monster to set the merchant id                                                    |
| PRIVATE_KEY_READ_FILE                       | Cannot read private key                                                                                                              |
| PRODUCT_SUBSCRIPTION_ACTIVE                 | Product subscription is active                                                                                                       |
| QR_INVALID                                  | Invalid QR code                                                                                                                      |
| QR_REDEEMED                                 | QR code redeemed                                                                                                                     |
| QUICK_PAY_NOT_REGISTERED                    | User is not registered with Quick Pay                                                                                                |
| RECONCILIATION_NOT_FOUND                    | Reconciliation record not found                                                                                                      |
| REDEMPTION_MERCHANT_INVALID                 | Invalid redemption rule merchant                                                                                                     |
| REDEMTION_PARENT_INVALID                    | Invalid redemption rule parent key                                                                                                   |
| REDEMPTION_RULE_KEY_FOUND                   | Invalid redemption rule key                                                                                                          |
| REDEMPTION_RULE_LIMIT_REACHED               | Reached the voucher limit per member                                                                                                 |
| REDEMPTION_RULE_NOT_FOUND                   | Redemption rule not found                                                                                                            |
| REFUND_AMT_NOT_SAME_AS_TOTAL_AMOUNT         | Refund amount not same as total amount                                                                                               |
| REFUND_AMT_NOT_SAME_AS_TRANSACTION          | Refund amount not same as transaction amount                                                                                         |
| REFUND_PAYMENT_NOT_FOUND                    | Refund payment not found                                                                                                             |
| REFUND_PIN_INVALID                          | Wrong pin number                                                                                                                     |
| REFUND_USER_NOT_FOUND                       | Refund user not found                                                                                                                |
| REPORT_NOT_FOUND                            | Report does not exist                                                                                                                |
| RESET_KEY_INVALID                           | Invalid password reset key                                                                                                           |
| RESET_LINK_EXPIRED                          | Password reset link expired                                                                                                          |
| RESOURCE_GONE                               | Resource no longer exists                                                                                                            |
| ROLE_KEY_INVALID                            | Invalid role key                                                                                                                     |
| ROLE_NOT_FOUND                              | Role not found                                                                                                                       |
| SCOPE_NOT_FOUND                             | Scope not found                                                                                                                      |
| SHOULD_HAVE_INDEX_FILE                      | Should have index.html file                                                                                                          |
| SIGNATURE_INVALID                           | Invalid signature                                                                                                                    |
| SMS_FAIL                                    | Failed to send SMS                                                                                                                   |
| SPAM                                        | Suspicious activity                                                                                                                  |
| SPENDING_DUPLICATE                          | Spending loyalty set                                                                                                                 |
| SPENDING_NOT_FOUND                          | No spending loyalty                                                                                                                  |
| SSL_REQUIRED                                | SSL is required                                                                                                                      |
| STORE_NOT_USER                              | The store has user                                                                                                                   |
| STORE_ID_INVALID                            | Invalid store ID                                                                                                                     |
| STORE_INVALID_FORMAT                        | Store format invalid                                                                                                                 |
| STORE_KEY_INVALID                           | Invalid store key                                                                                                                    |
| STORE_MAXIMUM                               | Maximum store allowed to create is 10                                                                                                |
| STORE_NOT_FOUND                             | Store not found                                                                                                                      |
| STORE_NOT_SET                               | Store not set                                                                                                                        |
| SUB_MERCHANT_DOES_NOT_ALLOWED_LOYALTY       | Sub merchant not allowed to access loyalty                                                                                           |
| SUBSCRIPTION_EXISTS                         | Merchant already subscribed to this product.                                                                                         |
| SUBSCRIPTION_EXPIRED                        | Merchant subscription expired                                                                                                        |
| SUBSCRIPTION_NOT_ACTIVE                     | You have not subscribed to this product                                                                                              |
| SUBSCRIPTION_NOT_FOUND                      | Subscription not found                                                                                                               |
| SYSTEM_ERROR                                | System timed out                                                                                                                     |
| TAC_INVALID                                 | Invalid TAC code                                                                                                                     |
| TAC_LIMIT                                   | TAC code limit has reached                                                                                                           |
| TAC_REQUIRED                                | User TAC code is required                                                                                                            |
| TAC_SENT                                    | TAC code has sent                                                                                                                    |
| TEMPLATE_BODY_INVALID                       | Invalid template body                                                                                                                |
| TEMPLATE_KEY_INVALID                        | Invalid template key                                                                                                                 |
| TEMPLATE_KEYWORD_DUPLICATE                  | Invalid template keyword                                                                                                             |
| TEMPLATE_MESSAGE_DRAFT                      | Draft template message                                                                                                               |
| TEMPLATE_MESSAGE_DUPLICATE                  | Invalid template message                                                                                                             |
| TEMPLATE_NOT_FOUND                          | Template not found                                                                                                                   |
| TERMINAL_ALREADY_REGISTERED                 | Terminal already registered                                                                                                          |
| TERMINAL_INACTIVE                           | Terminal is not active                                                                                                               |
| TERMINAL_NO_PERMISSION                      | Terminal does not have permission to access                                                                                          |
| TERMINAL_NOT_FOUND                          | Terminal not found                                                                                                                   |
| TERMINAL_REFUND_TOKEN_INVALID               | Terminal refund token invalid                                                                                                        |
| TERMINAL_SERIAL_ALREADY_EXIST               | Terminal serial already exist                                                                                                        |
| TERMINAL_SERIAL_NOT_FOUND                   | Terminal serial not found                                                                                                            |
| TNG_MALAYSIA_NOT_ACTIVE                     | TNG Malaysia is not active. Please contact Revenue Monster to activate merchant for tng                                              |
| TOKEN_EXPIRED                               | Invalid or expired token                                                                                                             |
| TOKEN_INVALID                               | Unable to verify your credentials                                                                                                    |
| TOKEN_SUSPENDED                             | Access token suspended                                                                                                               |
| TRANSACTION_DUPLICATE                       | Duplicate order number                                                                                                               |
| TRANSACTION_EXPIRED                         | Transaction is expired                                                                                                               |
| TRANSACTION_NOT_FOUND                       | No payment transaction                                                                                                               |
| TRANSACTION_PAID                            | Transaction already paid                                                                                                             |
| TRANSACTION_QR_CODE_NOT_FOUND               | Transaction qr code not found                                                                                                        |
| TRANSACTION_STATUS_FAILED                   | Payment transaction status failed                                                                                                    |
| TRANSACTION_STATUS_NOT_IN_PROCCESS          | Transaction status not in process                                                                                                    |
| TRANSACTIN_STATUS_NOT_SUCCESS               | Transaction status not success                                                                                                       |
| UNAUTHORIZED                                | Unauthorized                                                                                                                         |
| UNIQUE_CODE_DUPLICATE                       | Duplicate unique code                                                                                                                |
| UNIQUE_CODE_EMPTY                           | Empty unique code                                                                                                                    |
| UNIQUE_CODE_INVALID                         | Invalid unique code                                                                                                                  |
| UNSUPPORTED_JSAPI_METHOD                    | Unsupported method for jsapi                                                                                                         |
| UNSUPPORTED_JSAPI_REGION                    | Unsupported region for jsapi                                                                                                         |
| UNSUPPORTED_METHOD_PAYMENT_REFUND           | Unsupported method payment refund                                                                                                    |
| UNSUPPORTED_METHOD_REVERSE                  | Unsupported method for reverse                                                                                                       |
| USER_ALREADY_REGISTERED                     | User already registered                                                                                                              |
| USER_CANNOT_UPDATE_OWN_ACCOUNT              | User cannot update own account                                                                                                       |
| USER_CREATE_FAIL                            | Unauthorized to create user                                                                                                          |
| USER_DELETE_FAIL                            | Unauthorized to delete user                                                                                                          |
| USER_DEVICE_NOT_FOUND                       | User device not found                                                                                                                |
| USER_DUPLICATE                              | User account already exist                                                                                                           |
| USER_KEY_INVALID                            | Invalid user key                                                                                                                     |
| USER_NO_PERMISSION                          | User does not have permission to access                                                                                              |
| USR_NOT_ACTIVE                              | User not active                                                                                                                      |
| USER_NOT_CREATE_ACCOUNT                     | User not create account                                                                                                              |
| USER_NOT_FOUND                              | User not found                                                                                                                       |
| USER_PIN_CODE_INVALID                       | Invalid user pin code                                                                                                                |
| USER_PROFILE_NOT_FOUND                      | User login profile not found                                                                                                         |
| USER_SUSPENDED                              | User has been suspended                                                                                                              |
| VALIDATION_ERROR                            | Validations error                                                                                                                    |
| V_EMAIL_NOT_FOUND                           | User verification email not found                                                                                                    |
| VERIFICATION_CODE_ALREADY_REQUESTED         | Verification code already requested                                                                                                  |
| VERIFICATION_CODE_INVALID                   | Verification code invalid                                                                                                            |
| VERIFICATION_CODE_REACH_DAILY_LIMIT         | Verification code request reach daily limit                                                                                          |
| VERIFICATION_TOKEN_INVALID                  | Invalid verification token                                                                                                           |
| VERIFICATION_TYPE_NOT_FOUND                 | Verification code type not found                                                                                                     |
| V_LINK_EXPIRED                              | Verification link is expired                                                                                                         |
| VOUCHER_BATCH_EXPIRED                       | Voucher batch expired                                                                                                                |
| VOUCHER_BATCH_KEY_INVALID                   | Voucher batch key is invalid                                                                                                         |
| VOUCHER_BATCH_NOT_ENOUGH_QUANTITY           | Voucher batch not enough quantity                                                                                                    |
| VOUCHER_BATCH_NOT_FOUND                     | Voucher batch not found                                                                                                              |
| VOUCHER_COMBO_EXPIRED                       | Voucher combo expired                                                                                                                |
| VOUCHER_COMBO_NOT_ENOUGH_QUANTITY           | Voucher combo not enough quantity                                                                                                    |
| VOUCHER_COMBO_NOT_FOUND                     | Voucher combo not found                                                                                                              |
| VOUCHER_INSUFFICIENT                        | Insufficient voucher batch                                                                                                           |
| VOUCHER_NOT_ALLOW_VOID                      | Voucher not allow to void                                                                                                            |
| VOUCHER_NOT_FOUND                           | Voucher not found                                                                                                                    |
| VOUCHER\_\_NOT_MERCHANT                     | Voucher is not belongs to merchant                                                                                                   |
| VOUCHER\_\_NOT_MINIMUM_AMOUNT               | Voucher does not meet minimum amount                                                                                                 |
| VOUCHER_NOT_REDEMMED                        | Voucher is not redeemed                                                                                                              |
| VOUCHER_OWNER_INVALID                       | Voucher not owned                                                                                                                    |
| VOUCHER_REDEEMED                            | Voucher redeemed                                                                                                                     |
| VOUCHER_REDEEMED_INVALID                    | Invalid direct redeem                                                                                                                |
| VOUCHER_REDEEM_MAX                          | Max redeem voucher                                                                                                                   |
| VOUCHER_SOLD_OUT                            | Voucher sold out                                                                                                                     |
| WECHAT_ACCOUNT_DUPLICATE                    | WeChat account already exists                                                                                                        |
| WECHAT_PAGE_DUPLICATE                       | Duplicate wechat page                                                                                                                |
| WECHAT_PAGE_INVALID                         | Invalid wechat page                                                                                                                  |
| WECHAT_PAGE_NOT_FOUND                       | Wechat page not found                                                                                                                |
| WECHATPAY_CHINA_MDR_NOT_SET                 | WeChatPay China mdr not set. Please contact Revenue Monster to set.                                                                  |
| WECHATPAY_CHINA_MERCHANT_ID_NOT_SET         | WeChatPay China merchant id not set. Please contact Revenue Monster to set the merchant id                                           |
| WECHATPAY_CHINA_NOT_ACTIVE                  | WeChatPay China is not active. Please contact Revenue Monster to activate merchant for wechat pay                                    |
| WECHATPAY_CLIENT_DUPLICATE                  | Wechat pay client duplicate                                                                                                          |
| WECHATPAY_CLIENT_NOT_FOUND                  | Wechat pay client not found                                                                                                          |
| WECHATPAY_MALAYSIA_MDR_NOT_SET              | WeChatPay Malaysia mdr not set. Please contact Revenue Monster to set.                                                               |
| WECHATPAY_MALAYSIA_MERCHANT_ID_NOT_SET      | WeChatPay Malaysia merchant id not set. Please contact Revenue Monster to set the merchant id                                        |
| WECHATPAY_MALAYSIA_NOT_ACTIVE               | WeChatPay Malaysia is not active. Please contact Revenue Monster to activate merchant for wechat pay                                 |
| WECHAT_PHONE_INVALID                        | Invalid wechat phone number                                                                                                          |
| WECHAT_TEMPLATE_MESSAGE_FAILED              | WeChat template message failed                                                                                                       |
| TOO_MANY_REQUEST_PER_SECOND                 | Reached maximum request limit per second                                                                                             |
