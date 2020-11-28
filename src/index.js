
//const a = getheroesID(2);

//console.log(a);

/*const promesa = new Promise((resolve, reject) => {
	setTimeout (() =>{


		const p1 = getheroesID(2);
		resolve(p1);
		 reject ('No se pudo encontrar el heroe');
	}, 2000)
});

promesa.then ((heroe) =>{,
	console.log('heroe', heroe);
})

.catch ( err => console.warn(err)); */




const getImagen = async() =>{


	try{
		const apiKey = 'NvILVPnDS8iB8ZJPvqJnnThgJf9ehAqH';

	const respHTTP  =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
	const {data} = await respHTTP.json();
	console.log(data);

	const { url } =  data.images.original;
	const img = document.createElement('img');
	img.src = url;
	document.body.appendChild(img);

	} catch (error){

	}
	

}

getImagen();