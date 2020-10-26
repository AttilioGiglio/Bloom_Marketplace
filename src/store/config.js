export const APIS = {
    REGISTERCLIENT: 'http://localhost:5000/signup_client',
    LOGINCLIENT: 'http://localhost:5000/login_client', //aqui va el id del user
    TOKENLCIENT: 'http://localhost:5000/token_client', 
    REGISTERBUSINESS: 'http://localhost:5000/signup_business',
    LOGINBUSINESS: 'http://localhost:5000/login_business', 
    TOKENBUSINESS: 'http://localhost:5000/token_business',
    POSTPROFILEBUSINESS: 'http://localhost:5000/profile_business',
    GETPROFILEBUSINESS: 'http://localhost:5000/profile_business/<id>',
    POSTPRODUCT: 'http://localhost:5000/product_cards',
    CHECKOUT: 'http://localhost:5000/checkout_step_one',
    POSTORDER: 'http://localhost:500/orders_list_business',
    GETPRODUCTSPERORDER: 'http://localhost:5000/products_list_business/<id>',
    SUMMARYBUSINESS: 'http://localhost:5000/summary_business/<id>',
}