const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount, cause, causeLabel } = JSON.parse(event.body);

    if (!amount || amount < 1) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Montant invalide' }),
      };
    }

    const origin = event.headers.origin || 'https://votre-domaine-netlify.netlify.app'; // Remplacez par votre domaine Netlify réel

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
        cause,
        causeLabel,
        amount: String(amount),
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    console.error('Stripe checkout error:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};