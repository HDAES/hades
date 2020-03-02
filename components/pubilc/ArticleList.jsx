import { useState } from 'react'
import Router from 'next/router'
import { Icon } from 'antd'

const PAGE_SIZE = 4;


export default ({ articleList }) => {

    const [page, setPage] = useState(1)
    function getMore() {
        setPage(page + 1)
    }
   
    return (
        <div className="article-list">
            {
                articleList.slice(0, page * PAGE_SIZE).map((item, index) => {
                    return (
                        <div key={index} className="item">
                            <div className="title" onClick={()=>Router.push({pathname: '/article',query: { id:item.id}})}>{item.title}</div>
                            <div className="info">
                                <div className="create-time">
                                    <Icon style={{ fontSize: 24, color: 'var(--text-color)' }} type="calendar" />
                                    <span className="time">{item.d_create_time.substr(0, 10)}</span>
                                </div>
                                <div className="folder" onClick={()=>Router.push({pathname: '/section',query: { section:item.f_id}})}>
                                    <Icon style={{ fontSize: 24, color: 'var(--text-color)' }} type="folder" />
                                    <span>{item.f_name}</span>
                                </div>
                                <div className="tag">
                                    <Icon style={{ fontSize: 24, color: 'var(--text-color)' }} type="tags" />
                                    <span>{item.tag}</span>
                                </div>
                            </div>
                            <div onClick={()=>Router.push({pathname: '/article',query: { id:item.id}})} className="image">
                                <img className="art-image" src={item.image} />
                            </div>
                            <div className="description">{item.description}</div>
                        </div>
                    )
                })
            }

            {
                articleList.length > PAGE_SIZE * page ?
                    <div className="more">
                        <div className="continue" onClick={getMore}>Continue</div>
                    </div> :
                    <div className="load-container">
                        <div className="boxLoading" />
                    </div>
            }

            


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
                padding-right:30px; 
                cursor: pointer;
            }
            .tag span,.folder span,.create-time span{
                padding-left:10px;
                font-weight: 500;
                color:var(--text-color);
            }
            .image{
                margin-top: 20px;
                cursor: pointer;
            }
            .art-image{
                
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


            .load-container {
                position: relative;
                width: 100px;
                height: 100px;
                margin: 0 auto;
            }
            .boxLoading {
                width: 25px;
                height: 25px;
                margin: 30px auto;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
            }
            .boxLoading:before {
                content: "";
                width: 40px;
                height: 5px;
                background: var(--header-logo-color);
                opacity: 0.1;
                position: absolute;
                top: 39px;
                left: 0;
                border-radius: 50%;
                animation: shadow 0.5s linear infinite;
            }
            .boxLoading:after {
                content: "";
                width: 25px;
                height: 25px;
                background: var(--text-color);
                animation: animate 0.5s linear infinite;
                position: absolute;
                top: 0;
                left: 5px;
                border-radius: 3px;
            }
            @keyframes animate {
                17% {
                border-bottom-right-radius: 3px;
                }
                25% {
                transform: translateY(9px) rotate(22.5deg);
                }
                50% {
                transform: translateY(18px) scale(1, 0.9) rotate(45deg);
                border-bottom-right-radius: 40px;
                }
                75% {
                transform: translateY(9px) rotate(67.5deg);
                }
                100% {
                transform: translateY(0) rotate(90deg);
                }
            }
            @keyframes shadow {
                0%,
                100% {
                transform: scale(1, 1);
                }
                50% {
                transform: scale(1.2, 1);
                }
            }
        `}</style>
        </div>
    )
}
