import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
    "client-id": process.env.REACT_APP_APP_ID,
    currency: "USD",
    intent: "capture",
     
}


export default function PaypalSetup({total, navigate, clearCart}) {
    return (
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons 
            style={{layout: 'vertical'}}
            createOrder={(data, actions) => {
                return actions.order
                    .create({
                        purchase_units: [
                            {
                                amount: {
                                    
                                    value: total,
                                },
                            },
                        ],
                    })
                 }}
            onClick={console.log(initialOptions.total)}
            onApprove={(data, actions) => {
                return actions.order.capture().then(function (details) {
                    alert (
                        "Transaction completed by " + details.payer.name.given_name
                    )
                });
            }} />
        </PayPalScriptProvider>
    )
}