import { memo } from 'react'
import Link from 'next/link'
export default memo(({section}) =>{
    console.log(`${new Date()} >>>>>>>>>>> Section render`)
    return (
        <div className="section">
            {
                section.map((item,index) =>{
                    return <div key={index} className="sectionItem">
                        <Link href={{ pathname: "/section", query: { section: item.id }}}>
                        <div className="section-container">
                            <img src={item.image}  alt={item.name} />
                            <div className="mask" />
                            <div className="name">{item.name}</div>
                            <div className={`iconfont icon ${item.icon}`} />
                        </div>
                        </Link>
                    </div>
                })
            }

            <style jsx>{`
                .section{
                    display: flex;
                    justify-content: space-between;
                }
                .sectionItem{
                    width:24%;
                }
                .section-container{
                    position: relative;
                    width:100%;
                    height:110px;
                    border-radius: 10px;
                    cursor: pointer;
                }
                .section-container:hover .mask {
                    background-color: var(--mask-hover-color);
                }
                img{
                    height:110px;
                    width:100%;
                    object-fit: contain ;
                }
                .mask {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 110px;
                    border-radius: 10px;
                    background-color: var(--mask-color);
                }
                .icon {
                    position: absolute;
                    top: 20px;
                    left: 50%;
                    transform: translateX(-18px);
                    font-size: 36px;
                    color: var(--header-background-color);
                }
                .name {
                    position: absolute;
                    font-family: Monaco;
                    top: 72px;
                    width: 100%;
                    text-align: center;
                    font-size: 1rem;
                    color: var(--header-background-color);
                    text-shadow: 0 0 0.1em, 0 0 0.3em;
                }
            `}</style>
        </div>
    )
})