import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51HZNkQBEspuFA8V0SJHuv7yto9ESLRDjC4nh8hJyPhFQJMFjG7zCwnadzx0GcsYnY0BJHetUlxz3e7EspZuIkuvQ00uENxpGaP');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment} ></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;