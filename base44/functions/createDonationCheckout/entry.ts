import Stripe from 'npm:stripe@14.21.0';
import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { amount, cause, causeLabel } = await req.json();

    if (!amount || amount < 1) {
      return Response.json({ error: 'Montant invalide' }, { status: 400 });
    }

    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY'));

    const origin = req.headers.get('origin') || 'https://app.base44.com';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'eur',
            unit_amount: amount * 100,
            product_data: {
              name: `Don SNPE — ${causeLabel || 'Cause générale'}`,
              description: `Don pour la cause : ${causeLabel}. Merci pour votre générosité !`,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/donation-success?amount=${amount}&cause=${cause}`,
      cancel_url: `${origin}/faire-un-don`,
      metadata: {
        base44_app_id: Deno.env.get('BASE44_APP_ID'),
        cause,
        causeLabel,
        amount: String(amount),
      },
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});