import LeftContent from './leftContent.jsx';
import RightContent from './rightContent.jsx';

 const Page1Content=(props)=> {
    return (
        <div className="py-10 flex items-center gap-12 h-[90vh] px-18 bg-pink-100">
            <LeftContent/>
            <RightContent users={props.users}/>
        </div>
    )
}
export default Page1Content