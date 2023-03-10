import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';


@Injectable()
export class CardService {
  private stripe: Stripe;

  constructor( private configService: ConfigService) {
    this.stripe = new Stripe(configService.get('STRIPE_SECRET_KEY'), {
        apiVersion: '2022-11-15',
      });
    }
    //function calls the Stripe API and returns the data about the Stripe customer.
    public async createCustomer(name: string, email: string) {
      return this.stripe.customers.create({
        name,
        email
      });
    }
  
    public async charge(amount: number, paymentMethodId: string, customerId: string) {
      return this.stripe.paymentIntents.create({
        amount:amount,
        customer: customerId,
        payment_method: paymentMethodId,
        currency: this.configService.get('STRIPE_CURRENCY'),
        confirm: true
      })
    }
}
