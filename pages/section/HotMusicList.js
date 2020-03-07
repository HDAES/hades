import { Pagination, message } from 'antd'
import { useState  } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import api from '../../lib/api'
const SIZE = 20;

function HotMusicList({list,audioStatus,audio}){
    const [page,setPage] = useState(1)

    //添加播放音乐
    function addMusic(item){
        const name=item.name;
        const artist=item.ar[0].name
        const theme='#ebd0c2'
        const cover=item.al.picUrl
        axios({
            url:api.musicdetails,
            method:'POST',
            data:{id:item.id,type:0}, 
        }).then((res) =>{
            if(res.data.code ==200){
                ap.list.clear()
                const audioDetails={
                    name,
                    artist,
                    theme,
                    cover,
                    lrc:res.data.data.musicLrc,
                    url:res.data.data.url,
                    musicComment:res.data.data.musicComment
                }
                window.ap.list.add([audioDetails])
                ap.volume(0.1, true);
                ap.play()
                audioStatus(true)
                audio(audioDetails)
                message.success('已添加到播放列表');
            }else{
                message.error('添加失败，稍后再试！');
            }
        })
    }

    return(
        <div className="hot-music-list">
            <div className="title">热门音乐</div>
            <div className='source'>--网易云音乐热歌榜</div>
            <div className="list">
                {
                   list.playlist.tracks.slice((page-1)*SIZE,SIZE*page).map((item,index)=>{
                   return   <div key={index} className="item" onClick={()=>addMusic(item)}>
                                 <span>{index+1}</span>
                                 <div className="name">{item.name}</div>
                             </div>
                   })
                }
            </div>
            <Pagination 
                style={{textAlign:'right'}} 
                size="small"
                pageSize={SIZE}
                total={ list.playlist.tracks.length}
                onChange={(e)=>setPage(e)}
            />
            <style jsx>{`
                .hot-music-list{
                    width:320px;
                    padding-bottom:20px;
                    background-color: var(--header-background-color);
                }
                .source{
                    text-align: right;
                    padding-right: 20px;
                    font-size: 12px;
                    color: var(--text-color);
                }
                .hot-music-list .title{
                    padding:20px 20px 0 20px;
                    font-size: 18px;
                    color: red;
                    font-weight: bold;
                }
                .list{
                    padding:20px;
                }
                .item{
                    display: flex;
                    cursor: pointer;
                    padding-bottom: 9px;
                    font-weight: 500;    
                }
                .item span{
                    padding-right: 15px;
                    color:  var(--header-logo-color);
                }
                .item .name{
                    color: var(--text-color);
                    transition: all .7s;
                }
                .item .name:hover{
                    color: #8080FF;
                    padding-left: 10px; 
                }
            `}</style>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
	audioStatus(status) {
		dispatch({type:'AUDIOSTATUS',status:status})
    },
    audio(audio){
        dispatch({type:'AUDIO',audio})
    }
})


export default connect('',mapDispatchToProps)(HotMusicList)

