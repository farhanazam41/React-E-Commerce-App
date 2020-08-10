import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button, Segment, Divider} from 'semantic-ui-react';
import calculateCarTotal from '../../utils/calculateCartTotal';


function CartSummary({products, handleCheckout, success}) {
   const [cartAmount, setCartAmount] = React.useState(0);
   const [stripeAmount, setStripeAmount] = React.useState(0)
   const [isCartEmpty, setCartEmpty] = React.useState(false);
  
   React.useEffect(() => {
     const { cartTotal, stripeTotal }  = calculateCarTotal(products)
     setCartAmount(cartTotal);
     setStripeAmount(stripeTotal);   
     setCartEmpty(products.length === 0);
   }, [products]);
  

  return ( 
    <>
    <Divider/>
    <Segment clearing size='large'>
      <strong>Sub Total: </strong> ${cartAmount}
      <StripeCheckout
          name="React Reserve"
          amount={stripeAmount}
          image={products.length > 0 ? products[0].product.mediaUrl : ""}
          currency="USD"
          shippingAddress={true}
          billingAddress={true}
          zipCode={true}
          stripeKey="pk_test_51HAfozGUghbG2Tj1fImhoS9G3hKtAlIUb6Dcyd0h7R1nrlqm6qshUk8lF8mt7jZNUvHAI7VbjnPXES3guof21Swk00lttEwAD4"
          token={handleCheckout}
          triggerEvent="onClick"
        >
          <Button
            icon="cart"
            disabled={isCartEmpty || success}
            color="teal"
            floated="right"
            content="Checkout"
          />
        </StripeCheckout>
      
    </Segment> 
    </>
  );
}

export default CartSummary;
