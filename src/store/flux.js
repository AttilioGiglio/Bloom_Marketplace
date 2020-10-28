import { v4 as uuidv4 } from 'uuid';
import { API } from './config';

const getState = ({ getStore, getActions, setStore }) => {
	return {

		store: {

			product: {
				name: '',
				description: '',
				// img: '',
				quantity: '',
				price: '',
				supplier_id: ''
			},

			productlist: [],

			cart: [],

			order: {
				"total": 0,
				"status": null,
				"client_id": 0
			},

			productstock: 0,

			client: {
				id: 0,
				name: '',
				email: '',
				password: '',
				role: null,
			},

			supplier: {
				id: 0,
				name: '',
				email: '',
				password: '',
				role: null,
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

			updateProductCart: (product) => {
				const store = getStore();
				const newitemCart = { id: product.id, img: product.img, name: product.name, price: product.price }
				setStore([...store.cart, store.cart.push(newitemCart)])
			},

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
				const res = response.json();
				return await res;
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
				const res = response.json();
				return await res;
			},

			logoutSupplier: () => {
				setStore({ token: null })
				localStorage.removeItem('authbusiness');
			},

			createProduct: async (data) => {
				const response = await fetch(API.POSTPRODUCT, {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},

				});
				const res = response.json();
				console.log(res);
				return await res;
				// Hola soy una planta my hermosa porfavor comprame, baby!!
			},

			getProducts: async () => {
				const response = await fetch(API.GETALLPRODUCT);
				const res = response.json();
				return await res;
			},


		}
	}

}

export default getState;