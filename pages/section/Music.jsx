import { useState} from 'react'
import { Icon,Pagination} from 'antd'
import  dynamic  from 'next/dynamic'
import HotMusicList from './HotMusicList'
import Router from 'next/router'
const ReactAplayer = dynamic(import('react-aplayer'),{ ssr: false})
const DPlayer = dynamic(import('react-dplayer'),{ ssr: false})



function Music({section}){
    return (
        <div className="recommend">
            <div className="left">
                <RecommendHeader head={section.sectionList}/>
                <MusicList musicList={section.musicList}/>
            </div>
            <HotMusicList list={section.hotlist}/>
            <style jsx>{`
                .recommend{
                    display: flex;
                    align-items: flex-start;
                    justify-Content:space-between;
                    height:100%;
                }
                .left{
                    width:740px;
                    background-color: var(--header-background-color);
                }
            `}</style>
        </div>
    )
}

export default Music

// 推荐头部
function RecommendHeader({head}){
    return (
        <div className="recommend-header">
            <i className={`iconfont ${head[0].icon}`} />
            <div className="title">{head[0].name}</div>
            <div className="totol">
                共推荐<span>{head[0].length}</span>首音乐
            </div>
            <style jsx>{`
        .recommend-header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px 0;
            width:100%;
            border-bottom: 1px solid var(--border-color);
        }
        .recommend-header i {
            font-size: 36px;
            color: var(--text-color);
        }
        .recommend-header .title {
            padding: 5px 0;
            font-size: 1.1rem;
            font-weight: bold;
            color: var(--keyword-color);
        }
        .totol {
            padding: 5px 0;
        }
        .totol span {
            padding: 0 5px;
            color: var(--keyword-color);
        }
        `}</style>
        </div>
    )
}



function  MusicList({musicList}){

    const SIZE= 5;
   
    const [ap,setAp] = useState()
    const [mvUrl,setMvUrl] = useState('')
    const [page,setPage] = useState(1)

    function play(item){
          const auto = {
            name:item.name,
            artist:item.artists,
            url:item.url,
            cover:item.picUrl,
            theme: '#ebd0c2',
            lrc:item.lyric
          }
          ap.list.add([auto])
          ap.toggle()
    }
      

    return( <div>
        <div className="music-list">
            {
                musicList.slice((page-1)*SIZE,SIZE*page).map((item,index)=>{
                    return (
                        <div className="item" key={item.id}>
                            <div className="serial-image">
                                <span className="serial">{item.id}</span>
                                <img className="pic" src={item.picUrl} alt={item.name}/>
                            </div>
                            <div className="song">
                                <div className="name">{item.name}</div>
                                <div className="info">
                                    <div className="singer">
                                        <i className="iconfont icon icon-geshou"></i>
                                        <span>{item.artists}</span>
                                    </div>
                                    <div className="album">
                                        <i className="iconfont icon icon-zhuanji-xuanzhong"></i>
                                        <span>{item.album}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="play">
                                <div onClick={()=>play(item)}><i className="iconfont icon-bofang"></i></div>
                                <div onClick={()=>setMvUrl(item.mvUrl)}><i className="iconfont icon-mv"></i></div>
                            </div>
                        </div>
                    )
                })
            }
            <Pagination 
                style={{padding:'10px 50px 30px 0',textAlign:'right'}} 
                size="small"
                pageSize={SIZE}
                total={musicList.length}
                onChange={(e)=>setPage(e)}
            />
            <ReactAplayer style={{bottom:'60px!important'}}  lrcType={2} onInit={(ap)=>{setAp(ap);window.ap=ap} } />
            { 
                mvUrl.length>0?<Mv url={mvUrl} closeMv={()=>setMvUrl('')}/>:null
            }
            
            <style jsx>{`
                .music-list{
                    padding:20px;
                    min-height:540px;
                }
                .item{
                    display: flex;
                    align-items: center;
                    padding-bottom:20px;
                }
                .serial-image{
                    display: flex;
                    align-items: center;
                }
                .serial{
                    padding-right:20px;
                    font-size:24px;
                    color: var(--header-logo-color);
                }
                .serial-image .pic{
                    width:80px;
                    height:80px;
                }
                .song{
                    flex:1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding-left:20px;
                }
                .name{
                    font-size:20px;
                    padding-bottom:10px;
                    color: var(--header-logo-color);
                }
                .info{
                    display: flex;
                    align-items: center;
                }
                .info .singer, .info .album{
                    font-size:16px;
                    color: var(--text-color);
                }
                .info .singer span{
                    padding:0 20px 0 5px;
                }
                .info .album span{
                    padding-left:5px;
                }
                .play{
                    margin-left:auto;
                    display: flex;
                    color: var(--header-logo-color);
                }
                .play .iconfont{
                    font-size:24px;
                    padding:10px;
                    cursor: pointer;
                }
                
            `}</style>
        </div>
        
    </div>
    )
}

function Mv({url,closeMv}){
    return (
        <div className="mv">
            <div className="close-btn" onClick={()=>closeMv()}>
                <div className="btn">
                    <Icon style={{ fontSize:36}}  type="close"/>
                </div>
            </div>
            <DPlayer style={{width:1000,height:700}}
                options={{
                    video:{url}
                }}
            />
            <style jsx>{`
            .mv{
                position: fixed;
                top: 0;
                left:0;
                bottom: 0;
                width: 100%;
                background-color: rgba(0, 0, 0, .7);
                z-index:999;
                display: flex;
                justify-content: center;
                padding-top:100px;
            }
            .close-btn{
                position: fixed;
                top: 0;
                right: 0;
                width: 0;
                height: 0;
                border-top: 100px solid #FFFFFF;
                border-left: 100px solid transparent; 
                z-index:9
            }
            .btn{
                position: fixed;
                top: 10px;
                right: 10px;
                z-index:999;

            }
            `}</style>
        </div>
    )
}