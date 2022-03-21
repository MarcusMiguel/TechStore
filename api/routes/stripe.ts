const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/checkout", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: parseInt(req.body.amount),
            currency: "usd"
        },
        (stripeErr, stripeRes) => {

            if (stripeErr) {
                console.log(stripeErr)
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

export default router;