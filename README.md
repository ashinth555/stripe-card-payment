Stripe Project: Payment Intents - One Time Payments	
PaymentInhtents Integration to support one-time payments	
	
Instructions to setup and test the implementation:	

1. Install Node on your machine from https://nodejs.org/en/download/	
	
2. Create an account at https://stripe.com & sign in	
	
3. Download the Zip folder stripe-card-payment from this repo to your machine.	
	
4. Go to Downloads on your machine and Unzip the folder.	

5. Go to your stripe account and navigate to the Dashboard -> Developer -> API Keys

6. Copy the publishable key under Standard keys, and paste it in line #2 of the file client.js in the unzipped folder stripe-card-payment. Save the file.

7. Copy the secret key under Standard keys, and paste it in line # 19 of the file server.js in the unzipped folder stripe-card-payment. Save the file.

8. Open Terminal and navigate to the directory  stripe-card-payment.
            
9. Build the server.

    `Npm install`	

10. Run the server.

    `npm start`	

11. Test the integration:Go to http://localhost:4242/	
	
12. Run the following test cases with any CVC, postal code, and future expiration date. Refresh the browser before every new test case.	

        TEST SCENARIO                              TEST CARD NUMBER
	
        Payment succeeds                           4242 4242 4242 4242
	
        Payment requires authentication            4000 0025 0000 3155	
	
        Payment is declined                        4000 0000 0000 9995	
	
	
13. Go to your Stripe Dashboard and click on Payments to verify the test payments.	
	
14. Use the Stripe CLI to test that the Webhooks for successful payments work.	
       Refer to Step#2 at https://stripe.com/docs/payments/handling-payment-events#use-cli	
	
15. Go to the file stripe-card-payment on your machine. There should be a file created called OrdersToFulfill. This is a log file containing a line for every successful payment.	

Link to Friction Log: https://docs.google.com/document/d/1Hhi3cIB2wmKH1kQCthKIjmAJDMDpGr1RoNrcmAjhKxY/edit?usp=sharing
