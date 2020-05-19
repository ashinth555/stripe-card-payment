Stripe Project: Payment Intents - One Time Payments	
PaymentInhtents Integration to support one-time payments	
	
Instructions to setup and test the implementation:	

Install Node on your machine from https://nodejs.org/en/download/	
	
1. Create an account at stripe.com & sign in	
	
2. Download the Zip file stripe-card-payment from this repo to your machine	
	
3. Go to Downloads on your machine and Unzip file		
	
5. Open Terminal and navigate to the directory  stripe-card-payment	
            
6. Build the server: `Npm install`	
           Run the server: npm start	
           Test the integration:Go to http://localhost:4242/	
	
6. Run the following test cases with any CVC, postal code, and future expiration date. Refresh the browser before a new test case	
	
          Payment succeeds                           4242 4242 4242 4242	
          Payment requires authentication            4000 0025 0000 3155	
          Payment is declined                        4000 0000 0000 9995	
	
7. Go to your Stripe Dashboard and click on Payments to verify 	
	
8. Use the Stripe CLI to test that the Webhooks for successful payments work.	
       Refer to Step#2 at https://stripe.com/docs/payments/handling-payment-events#use-cli	
	
9. Go to the file stripe-card-payment on your machine. There should be a file created called OrdersToFulfill. This is a log file containing a line for every successful payment.	
