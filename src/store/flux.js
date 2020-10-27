import { v4 as uuidv4 } from 'uuid';
import { API } from './config';

const getState = ({ getStore, getActions, setStore }) => {
	return {

		store: {

			product:
			{
				category: '',
				name: '',
				quantity: 0,
				price: 0,
				description: '',
				img: '',
			},

			productlist:
				[
					{ id: 1, img: 'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#1', price: 50000 },
					{ id: 2, img: 'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#2', price: 20000 },
					{ id: 3, img: 'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#3', price: 10000 },
					{ id: 4, img: 'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#4', price: 30000 },
					{ id: 5, img: 'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#5', price: 40000 },
					{ id: 6, img: 'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#6', price: 20000 },
					{ id: 7, img: 'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#7', price: 10000 },
					{ id: 8, img: 'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#8', price: 50000 },
					{ id: 9, img: 'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#9', price: 40000 },
					{ id: 10, img: 'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#10', price: 5000 },
				],

			cart: [],

			auth: false,

			users:
				{
					id: '',
					name: '',
					email: '',
					password: '',
					role: null,
				}
			,

			errors: null,

			currentuser: null,

		},

		actions: {

			handleChange_AddProduct: e => {
				const store = getStore();
				const { product } = store;
				product[e.target.name] = e.target.value;
				setStore({ product })
			},

			addProduct: (e) => {
				e.preventDefault();
				const store = getStore();
				store.product.id = uuidv4();
				setStore({
					productlist: [...store.productlist, {
						id: store.product.id, img: 'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: store.product.name, price: store.product.price
					}]
				})

			},

			updateProductCart: (product) => {
				const store = getStore();
				const newitemCart = { id: product.id, img: product.img, name: product.name, price: product.price }
				setStore([...store.cart, store.cart.push(newitemCart)])
			},

			registerUser: (newuser) => {
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(newuser)
				};
				fetch(API.REGISTERCLIENT, requestOptions)
					.then(response => response.json())
					.then(data => setStore({ users: data }));
			},

			// registerUser: (newuser) => {
			// 	const store = getStore();
			// 	newuser.id = uuidv4();
			// 	setStore([...store.users, store.users.push(newuser)])
			// },

			loginUser: (params) => {
				const user = { email: params.email, password: params.password, role: params.role };
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(user)
				};
				fetch(API.LOGINCLIENT, requestOptions)
					.then(response => response.json())
					.then(data => {setStore({ currentuser: data }); console.log(data)});
			},
			
			
			
			// (params, history, showAlert) => {
			// 	const store = getStore();
			// 	const user = { email: params.email, password: params.password, role: params.role };
			// 	const requestOptions = {
			// 		method: "POST",
			// 		headers: { "Content-Type": "application/json" },
			// 		body: JSON.stringify({
						
			// 				"email":"test2@gmail.com", 
			// 				"password":"TEST 2 SIGNUP CLIENT",
			// 				"role":"client" 
						
			// 		})
			// 	};
			// 	fetch('http://localhost:5000/login_client', requestOptions)
			// .then(response => { console.log(response.json())})
			// 		.then(data => {
			// 			console.log(data)	
			// 			// data.msg
			// 			// 	?
			// 			// 	setStore({
			// 			// 		errors: data
			// 			// 	})
			// 			// 	:
			// 			// 	setStore({
			// 			// 		currentUser: { data },
			// 			// 		auth: !store.auth,
			// 			// 	})
			// 			// localStorage.setItem("currentUser", JSON.stringify(data))
			// 			// localStorage.setItem("auth", JSON.stringify(store.auth))
			// 			// const newPath = (params.role === "client") ? ("/") : ("/summary_business")
			// 			// (store.users.email === user.email) ? history.replace(newPath) : showAlert('No se encuentra registrado', 'alert-error')
			// 		} ).catch(error => console.log(error))
		
			// },
			// loginUser: (params, history, showAlert) => {
			// 	const store = getStore();
			// 	const user = {email:params.email, password:params.password, role:params.role};
			// 	setStore({currentuser: user});
			// 	setStore({auth:!store.auth});
			// 	const newPath = (params.role === "client") ? ("/") : ("/summary_business");
			// 	store.users.map(item=> (item.email === user.email) ? history.replace(newPath) : showAlert('No se encuentra registrado','alert-error'))	
			// 	localStorage.setItem('user', JSON.stringify(user))
			// 	localStorage.setItem('auth', JSON.stringify(store.auth))
			// },

			userDataPersistence: (userlocalstorage, authlocalstorage) => {
				setStore({ currentuser: userlocalstorage, auth: authlocalstorage })
			},

			revalidate: (currentuser, auth) => {
				setStore({ currentuser: currentuser, auth: auth })
			},

			logoutUser: () => {
				const store = getStore();
				setStore({ auth: !store.auth })

			}

		}
	}

}

export default getState;