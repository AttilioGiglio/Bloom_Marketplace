import { API } from './config';

const getState = ({ getStore, getActions, setStore }) => {
	return {

		store: {

			product: {
				id:'',
				name: '',
				sku_id:'',
				description: '',
				quantity: '',
				price: '',
				date:''
				// img: '',
			},

			productlist: [],

			cart: [],

			order: {
				order_number: 0,
				client_id:0,
				client_name:'',
				total:0,
				date:'',
				products:[
					{
						sku_id:0,
						name:'',
						description:'',
						quantity:0,
						price:0
					}
				]
			},

			productstock: 0,

			client: {
				id: 0,
				name: '',
				email: '',
				role: null,
			},

			supplier: {
				id: 0,
				name: '',
				email: '',
				role: null,
			},

			information:{
				business_legal_name: '', 
    			business_id: '',
    			card_name: 0,
    			card_number: 0,
    			cvv: 0,
    			month: 0,
    			year:  0,
    			address: '', 
    			comuna: '',
    			region: '',
			},

			errors: null,

			token: null

		},

		actions: {

			// handleChange_AddProduct: e => {
			// 	const store = getStore();
			// 	const { product } = store;
			// 	product[e.target.name] = e.target.value;
			// 	setStore({ product })
			// },

			// addProduct: (e) => {
			// 	e.preventDefault();
			// 	const store = getStore();
			// 	store.product.id = uuidv4();
			// 	setStore({
			// 		productlist: [...store.productlist, {
			// 			id: store.product.id, img: 'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: store.product.name, price: store.product.price
			// 		}]
			// 	})

			// },


			registerClient: (newuser) => {
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(newuser)
				};
				fetch(API.REGISTERCLIENT, requestOptions)
					.then(response => response.json())
					.then(data => data);
			},

			loginClient: async (email, password, role) => {
				const response = await fetch(API.LOGINCLIENT, {
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(
						{
							'email': email,
							'password': password,
							'role': role
						}
					)
				});
				const res = await response.json();
				if (res.access_token) {
					setStore({
						token: res.access_token
					});
					return true;
				}
				return false;
			},

			getClientByToken: async (token) => {
				const response = await fetch(API.TOKENCLIENT,
					{
						method: 'GET',
						headers: {
							Authorization: `Bearer ${token}`,
						}
					}
				)
				const res = await response.json();
				console.log(res)
				if (res) {
					setStore({
						client: {
							'id': res.id,
							'name':res.name,
            				'email': res.email,
            				'role': res.role
						}
					});
					return true;
				}
				return res;
			},

			logoutClient: () => {
				setStore({ token: null })
				localStorage.removeItem('auth');
			},

			registerSupplier: (newuser) => {
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(newuser)
				};
				fetch(API.REGISTERBUSINESS, requestOptions)
					.then(response => response.json())
					.then(data => data);
			},

			loginSupplier: async (email, password, role) => {
				const response = await fetch(API.LOGINBUSINESS, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(
						{
							'email': email,
							'password': password,
							'role': role
						}
					)
				});
				const res = await response.json();
				if (res.access_token) {
					setStore({
						token: res.access_token
					});
					return true;
				}
				return false;
			},

			getSupplierByToken: async (token) => {
				const response = await fetch(API.TOKENBUSINESS,
					{
						method: 'GET',
						headers: {
							Authorization: `Bearer ${token}`,
						}
					}
				)
				const res = await response.json();
				if (res) {
					setStore({
						supplier: {
							'id': res.id,
							'name':res.name,
            				'email': res.email,
            				'role': res.role
						}
					});
					return true;
				}
				return res;
			},

			logoutSupplier: () => {
				setStore({ token: null })
				localStorage.removeItem('authbusiness');
			},

			createProduct: async (name, quantity, price, description, id_supplier) => {
				const response = await fetch(API.POSTPRODUCT + id_supplier, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						'name':name,
						'quantity':quantity,
						'price':price,
						'description':description,
					}),

				});
				const res =  await response.json();
				return res
			},
			
			getAllProducts: async () => {
				const response = await fetch(API.GETALLPRODUCT);
				const res = await response.json();
				if (res) {
					setStore({productlist:res});
					return true;
				}
				return false;
			},

			updateProductCart: (product) => {
				const store = getStore();
				const newitemCart = { id: product.id, img: product.img, name: product.name, price: product.price }
				setStore([...store.cart, store.cart.push(newitemCart)])
				sessionStorage.setItem("cartlist", JSON.stringify(store.cart))
			},

			createOrder: async (total, client_id) => {
				const response = await fetch(API.POSTORDER + client_id, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						'total':total,
				}),
			});
				const res =  await response.json();
				return res
			},

			getAllOrders: async (total, client_id) => {
				const response = await fetch(API.POSTORDER + client_id, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						'total':total,
				}),
			});
				const res =  await response.json();
				return res
			},
			
			// getAllProductByOrder: async (total, client_id) => {
			// 	const response = await fetch(API.POSTORDER + client_id, {
			// 		method: 'POST',
			// 		headers: {
			// 			'Content-Type': 'application/json',
			// 		},
			// 		body: JSON.stringify({
			// 			'total':total,
			// 	}),
			// });
			// 	const res =  await response.json();
			// 	return res
			// },

			// postPutFullInfoSupplier: async (total, client_id) => {
			// 	const response = await fetch(API.POSTORDER + client_id, {
			// 		method: 'POST',
			// 		headers: {
			// 			'Content-Type': 'application/json',
			// 		},
			// 		body: JSON.stringify({
			// 			'total':total,
			// 	}),
			// });
			// 	const res =  await response.json();
			// 	return res
			// },
			// getSummaryInfoSupplier: async (total, client_id) => {
			// 	const response = await fetch(API.POSTORDER + client_id, {
			// 		method: 'POST',
			// 		headers: {
			// 			'Content-Type': 'application/json',
			// 		},
			// 		body: JSON.stringify({
			// 			'total':total,
			// 	}),
			// });
			// 	const res =  await response.json();
			// 	return res
			// },
		}
	}

}

export default getState;