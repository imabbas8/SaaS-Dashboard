import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export const PLANS = {
  FREE: { name: 'Free', price: 0, priceId: '', features: ['10 projects', 'Basic support'] },
  PRO: { name: 'Pro', price: 19, priceId: 'price_xxx', features: ['Unlimited projects', 'Priority support', 'Advanced analytics'] },
  ENTERPRISE: { name: 'Enterprise', price: 99, priceId: 'price_yyy', features: ['Everything in Pro', 'Custom integrations', 'Dedicated manager'] },
};