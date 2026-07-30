function List({list}){
    console.log({list})
    return(
        <>
        <h2>List of Sports</h2>
        <ol>
            {list.map((item,index) => (
                <li key={index}>{item}</li>
            ))}
        </ol>
        </>
    )
}

export default List