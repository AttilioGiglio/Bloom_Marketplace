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
					password: 'test123'
				}
			],

			currentuser: null,

		},

		actions: {

			handleChange_AddProduct: (e) => {
				const store = getStore();
				setStore({ ...store.product, [e.target.name]: e.target.value })
			},

			addProduct: (e) => {
				e.preventDefault();
				const store = getStore();
				store.product.id = uuidv4();
				setStore([...store.productlist, store.productlist.push({
					id: store.product.id, img: store.product.img, name: store.product.name, price: store.product.price
				})])

			},

			updateProductCart: (product) => {
				const store = getStore();
				const newitemCart = { id: product.id, img: product.img, name: product.name, price: product.price }
				setStore([...store.cart, store.cart.push(newitemCart)])
			},

			registerUser: (newuser) => {
				const store = getStore();
				newuser.id = uuidv4();
				setStore([...store.users, store.users.push(newuser)])
			},

			loginUser: (params) => {
				const store = getStore();
				const client = {email:params.email, password:params.password};
				setStore({currentuser:client})
				setStore({auth:!store.auth})
				
			},

			logoutUser: () => {
				const store = getStore();

			}

		}
	}

}

export default getState;