const Body = (props) => {
    return (
        <body>
            <div className='cart'>
            <cart>
                <h3>Cart</h3>
                <ul>
                    <li>{props.cart}</li>
                </ul>
            </cart>
            <p>Subtotal</p>  
            <p>Tax</p>  
            <p>Total</p>
            </div>


            <h3>Checkout</h3>
            <form id='checkout'>
                <label htmlFor="first">First Name</label>
                <input type='text' name='first' id='first-name'></input>
                <label htmlFor="last">Last Name</label>
                <input type='text' name='last' id='last-name'></input>
                <label htmlFor="email">Email</label>
                <input type='text' name='email' id='email'></input>
                <label htmlFor="card">Credit Card</label>
                <input type='text' name='card' id='credit-card'></input>
                <label htmlFor="zip">Zip Code</label>
                <input type='text' name='zip' id='zip-code'></input>
                <button type='submit'>Buy Now</button>
            </form>    
        </body>
    )
}

export default Body;