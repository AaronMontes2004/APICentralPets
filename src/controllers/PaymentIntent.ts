import { Request, Response } from "express";

const stripe = require("stripe")('sk_test_51Mx30TGYrEPF3syu2Ub0ZJWImLT694975Y0RIdgPfqGGdbDVqcTEiHfCP2scKN12UkT9RENrmqJgY0DYYHUcJtaK00v7iNOiZ7');

export const createPaymentIntent = async (req: Request, res: Response) => {
    try {
        const { amount, products} = req.body;
        
        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Number(amount),
            currency: "USD",
            description: "Adquirió un total de "+products+" productos",
            automatic_payment_methods: {
                enabled: true,
            }
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({
            status: "FAILED",
            msg: "Error interno del sistema",
            data: error
        })
    }
}