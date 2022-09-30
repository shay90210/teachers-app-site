import Item1 from '../../img/readsweatshirt.jpg';
import Item2 from '../../img/readuntil1.jpg';
import Item3 from '../../img/mask1.jpg';
import Item4 from '../../img/espanol1.jpg';
import Item5 from '../../img/cellphonesaway1.jpg';
import Item6 from '../../img/virtualteachingmug.jpg';
import Item7 from '../../img/mug1.jpg';
import Item9 from '../../img/ohbecause2.jpg';
import Item10 from '../../img/ohbecause3.jpg';
import Item11 from '../../img/teacherbae1.jpg';
import Item12 from '../../img/teacherbae2.jpg';
import Item13 from '../../img/teacherbae3.jpg';

const initialState = {
    items: [
        { id: 0, image: Item1, name: 'Read Sweatshirt', price: 35},
        { id: 1, image: Item2, name: 'Read Until T Shirt', price: 18},
        { id: 2, image: Item3, name: 'CDC Approved Teacher Mask', price: 16},
        { id: 3, image: Item4, name: 'Espanol T Shirt', price: 22},
        { id: 4, image: Item5, name: 'Cellphones Away T Shirt', price: 14},
        { id: 5, image: Item6, name: 'Virtual Teaching Mug', price: 10},
        { id: 6, image: Item7, name: 'Give Teachers Flowers Mug', price: 10},
        { id: 8, image: Item9, name: 'Oh Because... Sweatshirt Black', price: 30 },
        { id: 9, image: Item10, name: 'Oh Because... Sweatshirt Grey', price: 30 },
        { id: 10, image: Item11, name: 'Teacher Bae Red', price: 22 },
        {  id: 11, image: Item12, name: 'Teacher Bae White', price: 22 },
        { id: 12, image: Item13,  name: 'Teacher Bae Orange', price: 22 }
    ],
    addedItems:[],
    total: 0
}

const cartReducer = (state = initialState, action) => {
    return state;
}

export default cartReducer;