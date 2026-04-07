import RightCardContent from './RightCardContent.jsx';
const RightCard=(props)=>{
    return (
        <div className="h-full w-80 shrink-0 overflow-hidden relative rounded-4xl">
            <img className="object-cover h-full w-full" src={props.img} />

            <RightCardContent 
            id={props.id}
            tag={props.tag} />
        </div>
    )
}
export default RightCard;