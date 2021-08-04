const stripe = Stripe(
  'pk_test_51J1EAYBQ8sFPgA9WZBnjj7ySms2WTK9s3Zah4cT29BthwyXJZ99jFuMCViATQtchGV4vWMagfPs5JU3wuxJxqVjL00L15wrNYI'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
  }
};
