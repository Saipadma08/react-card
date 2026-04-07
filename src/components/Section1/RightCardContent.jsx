export default function RightCardContent(props){
    return (
         <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
                <h2 className="m-4 font-bold text-2xl w-10 h-10 flex p-3 items-center rounded-full bg-white">{props.id}</h2>
                <div>
                    <p className="text-white leading-relaxed mb-14">lorem ipsum seita docolor coler bvase qwsfdr vbgsf jsns  ascv djjd hdjs asdet color rafscv hvhsj hhdhx asgsj ok ipsum </p>
                <div className="flex justify-between">
                    <button className="bg-blue-800 text-white mr-5 font-medium px-8 py-3 rounded-full text-lg">{props.tag}</button>
                    <button className="bg-blue-800 text-white font-medium px-5 py-3 rounded-full text-lg"><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}