import { Icon } from 'antd'


export default ({articlelist}) =>{
    return (
        <div className="article-list">
            {
                articlelist.map((item,index) => {
                    return (
                        <div key={index} className="item">
                            <div className="title">{item.title}</div>
                            <div className="info">
                                <div className="create-time">
                                    <Icon style={{fontSize:24,color:'var(--text-color)'}} type="calendar" />
                                    <span className="time">{item.d_create_time}</span>
                                </div>
                                <div className="folder">
                                    <Icon style={{fontSize:24,color:'var(--text-color)'}} type="folder" />
                                    <span>{item.f_name}</span>
                                </div>
                                <div className="tag">
                                    <Icon style={{fontSize:24,color:'var(--text-color)'}} type="tags" />
                                    <span>{item.tag}</span>
                                </div>
                            </div>
                            <img className="art-image" src={item.image} />
                            <div className="description">{item.description}</div>
                        </div>
                    )
                })
            }
        <div className="more">
            <div className="continue">Continue</div>
        </div>
        <style jsx>{`
            .article-list{
                width:100%;
              margin-top:20px;
              background-color: var(--header-background-color); 
            }
            .item{
                margin:0 20px;
                padding:20px 0;
                border-bottom: 1px solid var(--card-hover-color);
            }
            .title{
                color: var(--header-logo-color);
                font-size:18px;
                font-weight: bold;
                cursor: pointer;
                transition: all .7s;
            }
            .title:hover{
                margin-left: 20px;
                color:#8080FF;
            }
            .info{
                display: flex;
                padding-top:20px
            }
            .tag,.create-time,.folder{
                display: flex;
                padding-right:10px; 
            }
            .tag span,.folder span,.create-time span{
                padding-left:10px;
                font-weight: 500;
                color:var(--text-color);
            }
            .art-image{
                margin-top: 20px;
                width: 200px;
                object-fit: contain ;
            }
            .description{
                padding-top:20px;
                font-weight: 600;
                color:var(--text-color);
            }
            .more{
                display: flex;
                justify-content: center;
                padding:20px 0;
            }
            .continue{
                padding:5px 15px;
                cursor: pointer;
                border-radius: 3px;
                color: var(--text-color);
                font-weight: 600;
                border: 1px solid var(--border-color);
                background-color: var(--content-color);
            }
            .continue:hover{
                background-color: var(--card-hover-color);
            }
        `}</style>
        </div>
    )
}