import { Component } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';

@Component({
	
	templateUrl: 'paypal.html',
	providers: []

})

//AQfqthcA2VuLBXxBs_WZsVTG_YNAgRdf7CFOkfmzpWDfV7YNtLlVwKZ2bKfIxYpeVWckTNhUcpV8c53w

export class PayPalPage {
	constructor(private payPal: PayPal) { }
	payment: PayPalPayment = new PayPalPayment('10.10', 'USD', 'TV', 'sale');
	currencies = ['EUR', 'USD'];
	payPalEnvironment: string = 'payPalEnvironmentSandbox';
 
	makePayment() {
		this.payPal.init({
			PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
			PayPalEnvironmentSandbox: 'AQfqthcA2VuLBXxBs_WZsVTG_YNAgRdf7CFOkfmzpWDfV7YNtLlVwKZ2bKfIxYpeVWckTNhUcpV8c53w'
		  }).then(() => {
			// Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
			this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
			  // Only needed if you get an "Internal Service Error" after PayPal login!
			  //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
			})).then(() => {
			  let payment = new PayPalPayment('3.33', 'USD', 'Description', 'sale');
			  this.payPal.renderSinglePaymentUI(payment).then(() => {
				// Successfully paid
		  
				// Example sandbox response
				//
				// {
				//   "client": {
				//     "environment": "sandbox",
				//     "product_name": "PayPal iOS SDK",
				//     "paypal_sdk_version": "2.16.0",
				//     "platform": "iOS"
				//   },
				//   "response_type": "payment",
				//   "response": {
				//     "id": "PAY-1AB23456CD789012EF34GHIJ",
				//     "state": "approved",
				//     "create_time": "2016-10-03T13:33:33Z",
				//     "intent": "sale"
				//   }
				// }
			  }, () => {
				// Error or render dialog closed without being successful
			  });
			}, () => {
			  // Error in configuration
			});
		  }, () => {
			// Error in initialization, maybe PayPal isn't supported or something else
		  });
	}
}