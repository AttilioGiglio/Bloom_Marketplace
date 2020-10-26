import { v4 as uuidv4 } from 'uuid';

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

			users: [
				{
					id: 'testID',
					name: 'Test',
					email: 'test@gmail.com',
					password: 'test123',
					role: null,
				}
			],

			currentuser: null,

		},

		actions: {

			handleChange_AddProduct: e => {
				const store = getStore();
				const {product} = store;
				product[e.target.name] = e.target.value;
				setStore({ product })
			},

			addProduct: (e) => {
				e.preventDefault();
				const store = getStore();
				store.product.id = uuidv4();
				setStore({productlist:[...store.productlist, {
					id: store.product.id, img: 'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: store.product.name, price: store.product.price
				}]})

			},

			updateProductCart: (product) => {
				const store = getStore();
				const newitemCart = { id: product.id, img: product.img, name: product.name, price: product.price }
				setStore([...store.cart, store.cart.push(newitemCart)])
			},

			registerUser: () => {
				//To access to data from the store(obj), use getstore. You will use frequently to change the data stored.
				const store = getStore();
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(store.users)
				};
				fetch(REACT_APP_APIURL, requestOptions)
					.then(response => response.json())
					.then(data => setStore({ contacts: data }));
			},

			// registerUser: (newuser) => {
			// 	const store = getStore();
			// 	newuser.id = uuidv4();
			// 	setStore([...store.users, store.users.push(newuser)])
			// },

			loginUser: (params, history, showAlert) => {
				const store = getStore();
				const user = {email:params.email, password:params.password, role:params.role};
				setStore({currentuser: user});
				setStore({auth:!store.auth});
				const newPath = (params.role === "client") ? ("/") : ("/summary_business");
				store.users.map(item=> (item.email === user.email) ? history.replace(newPath) : showAlert('No se encuentra registrado','alert-error'))	
				localStorage.setItem('user', JSON.stringify(user))
				localStorage.setItem('auth', JSON.stringify(store.auth))
			},

			userDataPersistence: (userlocalstorage, authlocalstorage) => {
				setStore({currentuser: userlocalstorage, auth:authlocalstorage})
			},
	
			revalidate: (currentuser,auth) => { 
				setStore({currentuser: currentuser, auth:auth})
			},

			logoutUser: () => {
				const store = getStore();
				setStore({auth:!store.auth})

			}

		}
	}

}

export default getState;