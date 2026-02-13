
import JsonData from '../json/Data.json'
import JsonData2 from '../json/Data2.json'
import { Image } from './images';



 const  couress =   JsonData.map(e=>(

        {
            ...e , image : Image[e.image]
        }
        
    ))

export default couress
const  couress2 =   JsonData2.map(e=>(

    {
        ...e , image : Image[e.image]
    }   
))

export {couress2}
