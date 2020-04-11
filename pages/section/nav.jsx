

export default ({navlist,changeNav}) =>{

    return (
        <div className="nav">
            <div className="nav-item" onClick={()=>changeNav(0)}>全部</div>
            {
                navlist.map((item,index)=>{
                    return <div className="nav-item" key={index} onClick={()=>changeNav(item.sid)}>
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
                cursor: pointer;
                color: var(--text-color);
            } 
            .nav-item:hover{
                color: var(--header-logo-color);
            } 
            `}</style>
        </div>
    )
}