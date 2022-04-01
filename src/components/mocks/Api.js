const stock = [
    {   id:"01", 
        name:"Growler", 
        description:"Capacidad de 1.9L con tapa a rosca.", 
        price: "$1500", 
        stock: 15,
        img:"https://i.ibb.co/bBDKdNv/growler.webp",
        category: 'crystal',
    },
    {   id:"02", 
        name:"Vaso Perzonalizado", 
        description:"Cristalería oficial de la marca con logo de 500ml", 
        price: "$500", 
        stock: 40,
        img:"https://i.ibb.co/Bg4nbmB/glas.webp", 
        category: 'crystal',
    },
    {   id:"03", 
        name:"Cerveza embotellada", 
        description:"Presentación de 750ml.", 
        price: "$200", 
        stock: 50,
        img:"https://i.ibb.co/yPBG6YJ/beer.webp",
        category: 'beer',
    },
    {   id:"04", 
        name:"Barril", 
        description:"Variedad a gusto de 20L, puedes solicitar el alquier de la chopera.", 
        price: "$5000", 
        stock: 4,
        img:"https://i.ibb.co/YD1vZfm/barrel.webp",
        category: 'beer',
    }
];

export const getStock = new Promise((resolve, reject) => {
        if (stock.length === 0) {
            reject(new Error('No hay datos'))
        }else{
           setTimeout(() => {
                resolve(stock);
           }, 2000) 
        }
    })
