

export default ({navlist}) =>{
    return (
        <div className="nav">
            {
                navlist.map((item)=>{
                    return <div className="nav-item" key={item.s_id}>
                        {item.s_name}
                    </div>
                })
            }
            <style jsx>{`
            .nav{
                width:200px;
                margin:20px 20px 0 0;
                padding-bottom:20px;
                color: var(--text-color);
               
                background-color: var(--header-background-color);
            }
            .nav-item{
                font-weight: 500;
                padding:20px 0 0 15px;
            }  
            `}</style>
        </div>
    )
}