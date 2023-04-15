import { Request, Response } from "express";

const stripe = require("stripe")('sk_test_51Mx30TGYrEPF3syu2Ub0ZJWImLT694975Y0RIdgPfqGGdbDVqcTEiHfCP2scKN12UkT9RENrmqJgY0DYYHUcJtaK00v7iNOiZ7');

const calculateOrderAmount = (items: any) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  };

export const createPaymentIntent = async (req: Request, res: Response) => {
    try {
        const { items } = req.body;
        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount: calculateOrderAmount(items),
            currency: "usd",
            automatic_payment_methods: {
            enabled: true,
            }
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "FAILED",
            msg: "Error interno del sistema",
            data: error
        })
    }
}