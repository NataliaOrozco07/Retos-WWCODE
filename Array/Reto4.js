const articulo = ['Televisor','Portatil','Lavadora','Nevera',]
const precio = [15000, 10000, 20000, 18000]

const vencimiento = new Date('12-12-2023');

const listaPrecio = articulo.map((articulo,i) => {
    return {
        Articulo: articulo,
        Precio: precio[i],
        Vencimiento: vencimiento.toDateString()
    };
});

listaPrecio.sort((a,b) => b.Precio - a.Precio)
console.log(listaPrecio);
