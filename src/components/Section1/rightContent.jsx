import 'remixicon/fonts/remixicon.css';
import RightCard from './RightCard.jsx';
const  RightContent=(props)=>{
    return (
        <div  id="right" className="h-full flex overflow-x-auto flex-nowrap gap-10 p-6 w-5/2">
           {props.users.map(function(elem){
            return <RightCard
                       id={elem.id} 
                       img={elem.img}
                       tag={elem.tag}       />
           })}
          
        </div>
    )
}
export default RightContent