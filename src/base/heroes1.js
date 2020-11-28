import heroes from '../data/heroes';

/*const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

*/


//console.log(heroes);


export const getheroesID = (id) =>{
	return heroes.find ((heroe) => heroe.id === id )
}

//const getCompany = (owner) => {
//	return heroes.filter ((heroe) => heroe.owner === owner)
//}


//console.log(getheroesID(2))

//console.log(getCompany("DC"));