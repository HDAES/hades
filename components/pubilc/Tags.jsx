import Link from "next/link";
export default ({tags =[]}) =>{
    return (
       
        <div className="tags">
             <div className="tag-title">
                <i className="iconfont icon-biaoqian1 " />
                <span>标签</span>
            </div>
            <div className="tag-list">
                {
                tags.map((item,index) => (
                    <Link href='/' key={index}>
                        <a><i className={`iconfont icon ${item.s_icon}`}></i> {item.s_name}</a>
                    </Link>
                    )
                )
                }
            </div>
        <style jsx>{`
            .tags{
                margin-top:20px;
                padding: 10px;
                border-radius: 5px;
                color: var(--text-color);
                background-color: var(--header-background-color);
            }
            .tag-title{
                height: 30px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid var(--border-color);
            }
            .tag-title i{
                padding: 0 10px 0 0;
                color: var(--text-color);
            }
            .tag-title span{
                font-weight: bold;
                
            }
            .tag-list {
                padding-bottom: 10px;
            }
            a{
                display: inline-block;
                margin: 10px;
                margin-bottom: 0;
                padding: 2px 10px;
                border-radius: 3px;
                text-decoration: none;
                transition: all 0.3s ease;
                color: var(--text-color);
                font-weight: 500;
                border: 1px solid var(--border-color);
            }
            a .icon{
                font-size:14px;
                padding-right:3px;
            }
            a:hover{
                background-color: var(--content-color);
            }
        `}</style>
        </div>
    )
}