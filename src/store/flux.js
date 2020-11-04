import { API } from './config';

const getState = ({ getStore, setStore }) => {
	return {

		store: {

			productlist: [],

			cart: [],

			summary: {
				p_month_sales:0,
				q_month_sales:0,
				month_stock:0,
				p_month_average_sales:0
			},

			daily_sales:[],

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
				id:0,
				business_legal_name: '', 
    			business_id: '',
    			card_name: "",
    			card_number: 0,
				cvv: 0,
				date:'',
    			address: '', 
    			comuna: '',
    			region: ''
			},

			token: null

		},

		actions: {

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

			loginClient: async(email, password, role) => {
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

			loginSupplier: async(email, password, role) => {
				const response = await fetch(API.LOGINBUSINESS, {
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

			createProduct: async (sku_id, name, quantity_in, price, description, category, id_supplier) => {
				const response = await fetch(API.POSTPRODUCT + id_supplier, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						'category':category,
						'sku_id':sku_id,
						'name':name,
						'quantity_in':quantity_in,
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
				const newitemCart = { id: product.id, /*img: product.img,*/ name: product.name, price: product.price, quantity_in: product.quantity_in, quantity_out:product.quantity_out }
				setStore([...store.cart, store.cart.push(newitemCart)])
				sessionStorage.setItem("cartlist", JSON.stringify(store.cart))
			},

			createOrder: async (total, client_id) => {
				let memory = JSON.parse(sessionStorage.getItem('cartlist'));
				console.log(memory)
				const response = await fetch(API.POSTORDER + client_id, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						'total':total,
						'products':JSON.parse(sessionStorage.getItem('cartlist'))
				}),
			});
				const res =  await response.json();
				return res
			},

			getAllOrders: async (supplier_id) => {
				const response = await fetch(API.GETALLORDERBYSUPPLIER + supplier_id);
				const res = await response.json();
				return res
			},

			getAllProductByOrder:  async (order_id) => {
				const response = await fetch(API.GETPRODUCTSPERORDER + order_id);
				const res = await response.json();
				return res
			},

			postPutFullInfoSupplier: async(supplier_id, information) => {
				const response = await fetch(API.POSTPROFILEBUSINESS + supplier_id, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(information),
			});
				const res =  await response.json();
				return res
			},

			getAllinfo: async(supplier_id) => {
				const response = await fetch(API.GETPROFILEBUSINESS + supplier_id);
				const res = await response.json();
				setStore({information: res})
			},

			getSummaryInfoSupplier: async(total, client_id) => {
				const response = await fetch(API.POSTORDER + client_id, {
					method: 'GET',
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
		}
	}

}

export default getState;