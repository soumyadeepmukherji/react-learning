function Card({img = "https://via.placeholder.com/400x200", title = "Title", description = "..."}){
    return (
        <>
           <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
                <img className="w-full h-48 object-cover" src={img} alt="Card Image" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                    {description}
                    </p>
                </div>
            </div>     
        </>
    )
}

export default Card