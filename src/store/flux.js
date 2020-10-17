const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            productlist: [
                { id: 1, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#1', price: 50000 },
                { id: 2, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#2', price: 20000 },
                { id: 3, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#3', price: 10000 },
                { id: 4, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#4', price: 30000 },
                { id: 5, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#5', price: 40000 },
                { id: 6, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#6', price: 20000 },
                { id: 7, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#7', price: 10000 },
                { id: 8, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#8', price: 50000 },
                { id: 9, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#9', price: 40000 },
                { id: 10, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#10', price: 5000 },
                ],
                cart: [],
                auth: false,
                users: [
                { id: 1, nombre: 'juan', email:'juan@hotmail.com', contraseña:'1234567' },
                { id: 2, nombre: 'andres', email:'andres@gmail.com', contraseña:'9876543' },
                { id: 3, nombre: 'juana', email:'juana@hotmail.com', contraseña:'7654321' },
                { id: 4, nombre: 'andrea', email:'andrea@gmail.com', contraseña:'3456789' }
            ],
                currentuser: null,
                message: null,
                alert:null
        },
        
		actions: {
        

			updateProductCart: (index, color) => {
				const store = getStore();
                    
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;