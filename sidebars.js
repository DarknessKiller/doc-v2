module.exports = {
  someSidebar: {
    Introduction: ["introduction/overview", "introduction/usecase"],

    "Quick Start": [
      {
        type: "category",
        label: "SDK",
        items: ["quickstart/sdk", "quickstart/mobile-sdk"],
      },
      "quickstart/signature-algorithm",
      "quickstart/verify-signature",
      {
        type: "category",
        label: "Access Token",
        items: [
          "quickstart/accesstoken/client-credentials",
          "quickstart/accesstoken/authorization-code",
          "quickstart/accesstoken/refresh-token",
        ],
      },
    ],

    "Merchant Onboarding": [
      "merchant-onboarding/create-merchant",
      "merchant-onboarding/get-merchants",
      "merchant-onboarding/get-merchant",
      "merchant-onboarding/update-merchant",
      "merchant-onboarding/review-merchant",
      "merchant-onboarding/upload-merchant-file",
      {
        type: "category",
        label: "Application Clients",
        items: [
          "merchant-onboarding/application-clients/get-application-clients",
          "merchant-onboarding/application-clients/create-application-client",
          "merchant-onboarding/application-clients/update-application-client",
        ],
      },
    ],

    Payment: [
      "payment/overview",
      "payment/quick-pay",
      {
        type: "category",
        label: "Transaction QR",
        items: [
          "payment/transactionQR/transaction-qr",
          "payment/transactionQR/get-transaction-qr-code-url",
          "payment/transactionQR/get-transaction-qr-code-url-by-code",
          "payment/transactionQR/get-transaction-by-code",
        ],
      },
      {
        type: "category",
        label: "Web/Mobile Payment",
        items: [
          "payment/webpayment/web-payment",
          "payment/webpayment/notify-url",
          // "payment/webpayment/get-web-payment-qr-code",
          "payment/webpayment/qr-code&url-by-checkout-id",
          "payment/webpayment/get-online-transaction",
        ],
      },
      "payment/alipay-mini-program",
      "payment/refund",
      "payment/reverse",
      "payment/query-status-by-order-id",
      "payment/query-status-by-transaction-id",
      "payment/get-fpx-bank-list",
      "payment/get-all-transaction",
      "payment/daily-settlement-report",
      {
        type: "category",
        label: "Customer Card Token",
        items: [
          "payment/customertoken/get-customer-token",
          "payment/customertoken/delete-customer-token"
        ],
      },
    ],

    "à la carte": [
      "alacarte-open/introduction",
      {
        type: "category",
        label: "Orders",
        items: [
          "alacarte-open/orders/get-orders-by-store-id",
          "alacarte-open/orders/get-order-by-id",
          "alacarte-open/orders/update-order-status",
          "alacarte-open/orders/refund-order",
        ],
      },
      {
        type: "category",
        label: "Store",
        items: [
          "alacarte-open/store/get-store-by-id",
          "alacarte-open/store/update-store-by-id-delivery",
          "alacarte-open/store/update-store-by-id-types",
          "alacarte-open/store/update-store-by-id-availability",
        ],
      },
      {
        type: "category",
        label: "Inventory",
        items: [
          "alacarte-open/inventory/create-category-by-store-id",
          "alacarte-open/inventory/get-categories-by-store-id",
          "alacarte-open/inventory/update-category-by-id",
          "alacarte-open/inventory/create-item",
          "alacarte-open/inventory/get-items-by-category-id",
          "alacarte-open/inventory/get-all-items-by-store-id",
          "alacarte-open/inventory/update-item-by-id",
          "alacarte-open/inventory/update-item-quantity-by-id",
        ],
      },
      "alacarte-open/set-notification",
    ],

    "POS Integration": [
      "pos/payment",
      "pos/cancellation",
      "pos/card-refund",
      "pos/card-settlement",
    ],

    "Supported Payment Methods": [
      "method/quick-pay",
      "method/transaction-qr",
      "method/web-payment",
    ],

    "Loyalty & Voucher": [
      {
        type: "category",
        label: "Member",
        items: [
          "campaign/member/register-loyalty-member",
          "campaign/member/check-loyalty-member",
          "campaign/member/profile",
          {
            type: "category",
            label: "Vouchers",
            items: [
              "campaign/member/vouchers/vouchers-detail",
              "campaign/member/vouchers/voucher-by-code",
              "campaign/member/vouchers/redeem-voucher",
            ],
          },
          {
            type: "category",
            label: "Rewards",
            items: [
              "campaign/member/rewards/rewards-detail",
              "campaign/member/rewards/reward-by-id",
              "campaign/member/rewards/redeem-reward",
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Loyalty",
        items: [
          {
            type: "category",
            label: "Loyalty Point",
            items: [
              "campaign/loyalty/loyalty-point/give-loyalty-point",
              "campaign/loyalty/loyalty-point/spending-loyalty-point",
              "campaign/loyalty/loyalty-point/cancel-spending-loyalty-point",
              "campaign/loyalty/loyalty-point/calculate-spending-reward",
            ],
          },
          {
            type: "category",
            label: "Loyalty Members",
            items: [
              "campaign/loyalty/loyalty-members/member-authorize",
              "campaign/loyalty/loyalty-members/loyalty-members",
              "campaign/loyalty/loyalty-members/loyalty-member",
              "campaign/loyalty/loyalty-members/loyalty-member-history",
              "campaign/loyalty/loyalty-members/bulk-create-members",
              "campaign/loyalty/loyalty-members/topup-online",
              "campaign/loyalty/loyalty-members/topup-offline",
            ],
          },
          {
            type: "category",
            label: "Loyalty Balance",
            items: [
              "campaign/loyalty/loyalty-balance/get-loyalty-balances",
              "campaign/loyalty/loyalty-balance/spend-loyalty-balance",
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Voucher",
        items: [
          "campaign/voucher/overview",
          "campaign/voucher/get-voucher-batches",
          "campaign/voucher/voucher-by-code",
          "campaign/voucher/voucher-batch-by-key",
          "campaign/voucher/issue-voucher",
          "campaign/voucher/void-voucher",
        ],
      },

      {
        type: "category",
        label: "Campaign",
        items: ["campaign/chop-stamp", "campaign/gourmet-card"],
      },
    ],
    "Merchant Wallet": [
      "merchant-wallet/check-balance",
      "merchant-wallet/topup-wallet",
      "merchant-wallet/history",
      "merchant-wallet/topup-history",
    ],
    Settings: [
      {
        type: "category",
        label: "Store",
        items: [
          "settings/store-detail/store-details",
          "settings/store-detail/get-store-by-id",
          "settings/store-detail/create-store",
          "settings/store-detail/update-store",
          "settings/store-detail/delete-store",
        ],
      },
      {
        type: "category",
        label: "Merchant",
        items: [
          "settings/merchant-detail/merchant-profile",
          "settings/merchant-detail/merchant-subscriptions",
        ],
      },
      {
        type: "category",
        label: "User",
        items: ["settings/user-profile"],
      },
    ],

    "Push Notification": ["push-notification/push-to-merchant"],
    Downloads: [
      "downloads/revenue-monster-logo",
      "downloads/application",
      "downloads/logo",
      "downloads/testing-wallets",
    ],
    // FAQ: ["introduction/overview"],
    Appendix: ["product-terms", "error-codes", "bank-code"],
    "Plug-in": ["plug-in/wooCommerce", "plug-in/opencart"],
    eKYC: [
      "ekyc/mykad-recognition",
      "ekyc/liveness-check-with-face-verification",
      "ekyc/face-verification",
      "ekyc/get-mykad-result",
      "ekyc/get-ekyc-result",
    ],
    "Short Message Service ": ["sms/send-sms"],
  },
};
