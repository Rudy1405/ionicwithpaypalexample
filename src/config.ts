import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
	static payPalEnvironmentSandbox = 'AQfqthcA2VuLBXxBs_WZsVTG_YNAgRdf7CFOkfmzpWDfV7YNtLlVwKZ2bKfIxYpeVWckTNhUcpV8c53w';
	static payPalEnvironmentProduction = '';

}