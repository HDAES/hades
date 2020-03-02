import { useState} from 'react'
import { Icon,Pagination} from 'antd'
import  dynamic  from 'next/dynamic'
const ReactAplayer = dynamic(import('react-aplayer'),{ ssr: false})
const DPlayer = dynamic(import('react-dplayer'),{ ssr: false})

import { connect } from 'react-redux'

function Music({section,footer}){
    return (
        <div className="recommend">
            <div className="left">
                <RecommendHeader head={section.sectionList}/>
                <MusicList musicList={section.musicList} footer={footer}/>
                <Pagination 
                    style={{padding:'10px 0 30px',display:'flex',justifyContent:'center'}} 
                    size="small"
                    total={section.musicList.length}
                 />
            </div>
            <div style={{width:320}}>
                1231
            </div>

            <style jsx>{`
                .recommend{
                    display: flex;
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
const mapDispatchToProps = (dispatch) => ({
	footer(bool) {
        dispatch({
            type:'FOOTER',
            footer:bool
        })
    },
})
export default connect('',mapDispatchToProps)(Music)

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



function  MusicList({musicList,footer}){

   
    const [ap,setAp] = useState()
    const [mvUrl,setMvUrl] = useState('')

      function play(item){
          const auto = {
            name:item.name,
            artist:item.artists,
            url:item.url,
            cover:item.picUrl,
            theme: '#ebd0c2',
            lrc:item.lyric
          }
          console.log(auto)
          ap.list.add([auto])
          ap.toggle()
          footer(false)
      }
      

    const list =[{
        id:1,
        songId:'1404511131',
        name:'Blueming',
        artists:'IU',
        album:'Love poem',
        mvid:10903021,
        mvUrl:'http://vodkgeyttp8.vod.126.net/cloudmusic/b3ec/core/79ca/9f4f8c52b29ade50a375f0cdb3305a0c.mp4?wsSecret=1b80c3ff07030b870d1589cebc1de20a&wsTime=1583146518',
        picUrl:'https://p1.music.126.net/2pF-tKT79yQLWfOnm49-hA==/109951164496579083.jpg',
        url:'http://m8.music.126.net/20200302174642/aa4c69f5a3c6d943e03c50c150abc3e5/ymusic/025a/0552/015b/50cdd82bb2284f70c8d7616f3507a961.mp3',
        lyric:'[by:onlyU-IU中国首站]\n[00:00.000] 作曲 : 이종훈/이채규/IU\n[00:01.000] 作词 : IU\n[00:09.06]‘뭐해?‘라는 두 글자에\n[00:11.59]‘네가 보고 싶어’ 나의 속마음을 담아 우\n[00:18.08]이모티콘 하나하나 속에\n[00:20.64]달라지는 내 미묘한 심리를 알까 우\n[00:26.93]아니 바쁘지 않아 nothing no no\n[00:31.83]잠들어 있지 않아 insomnia nia nia\n[00:35.95]지금 다른 사람과 함께이지 않아\n[00:40.81]응, 나도 너를 생각 중\n[00:45.23]우리의 네모 칸은 bloom\n[00:49.65]엄지손가락으로 장미꽃을 피워\n[00:54.18]향기에 취할 것 같아 우\n[00:58.59]오직 둘만의 비밀의 정원\n[01:03.15]I feel bloom I feel bloom I feel bloom\n[01:17.29]너에게 한 송이를 더 보내\n[01:26.28]밤샘 작업으로 업데이트\n[01:28.74]흥미로운 이 작품의 지은이 that’s me 우\n[01:35.08]어쩜 이 관계의 클라이맥스\n[01:37.79]2막으로 넘어가기엔 지금이 good timing 우\n[01:44.19]같은 맘인 걸 알아 realize la lize\n[01:48.63]말을 고르지 말아 just reply la la ly\n[01:53.07]조금 장난스러운 나의 은유에\n[01:57.76]네 해석이 궁금해\n[02:02.26]우리의 색은 gray and blue\n[02:06.48]엄지손가락으로 말풍선을 띄워\n[02:11.86]금세 터질 것 같아 우\n[02:15.57]호흡이 가빠져 어지러워\n[02:20.25]I feel blue. I feel blue. I feel blue.\n[02:34.17]너에게 가득히 채워\n[02:38.58]띄어쓰기없이보낼게사랑인것같애\n[02:42.75]백만송이장미꽃을, 나랑피워볼래?\n[02:47.23]꽃잎의 색은 우리 마음 가는 대로 칠해\n[02:52.35]시들 때도 예쁘게\n[02:56.66]우리의 네모 칸은 bloom\n[03:00.85]엄지손가락으로 장미꽃을 피워\n[03:05.63]향기에 취할 것 같아 우\n[03:09.92]오직 둘만의 비밀의 정원\n[03:14.30]I feel bloom I feel bloom I feel bloom\n[03:28.36]너에게 한 송이를 더 보내\n'
    },
    {
        id:2,
        songId:'1404511131',
        name:'Blueming',
        artists:'IU',
        album:'Love poem',
        mvid:10903021,
        mvUrl:'http://vodkgeyttp8.vod.126.net/cloudmusic/b3ec/core/79ca/9f4f8c52b29ade50a375f0cdb3305a0c.mp4?wsSecret=1b80c3ff07030b870d1589cebc1de20a&wsTime=1583146518',
        picUrl:'https://p1.music.126.net/2pF-tKT79yQLWfOnm49-hA==/109951164496579083.jpg',
        url:'http://m8.music.126.net/20200302174642/aa4c69f5a3c6d943e03c50c150abc3e5/ymusic/025a/0552/015b/50cdd82bb2284f70c8d7616f3507a961.mp3',
        lyric:'[by:onlyU-IU中国首站]\n[00:00.000] 作曲 : 이종훈/이채규/IU\n[00:01.000] 作词 : IU\n[00:09.06]‘뭐해?‘라는 두 글자에\n[00:11.59]‘네가 보고 싶어’ 나의 속마음을 담아 우\n[00:18.08]이모티콘 하나하나 속에\n[00:20.64]달라지는 내 미묘한 심리를 알까 우\n[00:26.93]아니 바쁘지 않아 nothing no no\n[00:31.83]잠들어 있지 않아 insomnia nia nia\n[00:35.95]지금 다른 사람과 함께이지 않아\n[00:40.81]응, 나도 너를 생각 중\n[00:45.23]우리의 네모 칸은 bloom\n[00:49.65]엄지손가락으로 장미꽃을 피워\n[00:54.18]향기에 취할 것 같아 우\n[00:58.59]오직 둘만의 비밀의 정원\n[01:03.15]I feel bloom I feel bloom I feel bloom\n[01:17.29]너에게 한 송이를 더 보내\n[01:26.28]밤샘 작업으로 업데이트\n[01:28.74]흥미로운 이 작품의 지은이 that’s me 우\n[01:35.08]어쩜 이 관계의 클라이맥스\n[01:37.79]2막으로 넘어가기엔 지금이 good timing 우\n[01:44.19]같은 맘인 걸 알아 realize la lize\n[01:48.63]말을 고르지 말아 just reply la la ly\n[01:53.07]조금 장난스러운 나의 은유에\n[01:57.76]네 해석이 궁금해\n[02:02.26]우리의 색은 gray and blue\n[02:06.48]엄지손가락으로 말풍선을 띄워\n[02:11.86]금세 터질 것 같아 우\n[02:15.57]호흡이 가빠져 어지러워\n[02:20.25]I feel blue. I feel blue. I feel blue.\n[02:34.17]너에게 가득히 채워\n[02:38.58]띄어쓰기없이보낼게사랑인것같애\n[02:42.75]백만송이장미꽃을, 나랑피워볼래?\n[02:47.23]꽃잎의 색은 우리 마음 가는 대로 칠해\n[02:52.35]시들 때도 예쁘게\n[02:56.66]우리의 네모 칸은 bloom\n[03:00.85]엄지손가락으로 장미꽃을 피워\n[03:05.63]향기에 취할 것 같아 우\n[03:09.92]오직 둘만의 비밀의 정원\n[03:14.30]I feel bloom I feel bloom I feel bloom\n[03:28.36]너에게 한 송이를 더 보내\n'
    },
    {
        id:3,
        songId:'1404511131',
        name:'Blueming',
        artists:'IU',
        album:'Love poem',
        mvid:10903021,
        mvUrl:'http://vodkgeyttp8.vod.126.net/cloudmusic/b3ec/core/79ca/9f4f8c52b29ade50a375f0cdb3305a0c.mp4?wsSecret=1b80c3ff07030b870d1589cebc1de20a&wsTime=1583146518',
        picUrl:'https://p1.music.126.net/2pF-tKT79yQLWfOnm49-hA==/109951164496579083.jpg',
        url:'http://m8.music.126.net/20200302174642/aa4c69f5a3c6d943e03c50c150abc3e5/ymusic/025a/0552/015b/50cdd82bb2284f70c8d7616f3507a961.mp3',
        lyric:'[by:onlyU-IU中国首站]\n[00:00.000] 作曲 : 이종훈/이채규/IU\n[00:01.000] 作词 : IU\n[00:09.06]‘뭐해?‘라는 두 글자에\n[00:11.59]‘네가 보고 싶어’ 나의 속마음을 담아 우\n[00:18.08]이모티콘 하나하나 속에\n[00:20.64]달라지는 내 미묘한 심리를 알까 우\n[00:26.93]아니 바쁘지 않아 nothing no no\n[00:31.83]잠들어 있지 않아 insomnia nia nia\n[00:35.95]지금 다른 사람과 함께이지 않아\n[00:40.81]응, 나도 너를 생각 중\n[00:45.23]우리의 네모 칸은 bloom\n[00:49.65]엄지손가락으로 장미꽃을 피워\n[00:54.18]향기에 취할 것 같아 우\n[00:58.59]오직 둘만의 비밀의 정원\n[01:03.15]I feel bloom I feel bloom I feel bloom\n[01:17.29]너에게 한 송이를 더 보내\n[01:26.28]밤샘 작업으로 업데이트\n[01:28.74]흥미로운 이 작품의 지은이 that’s me 우\n[01:35.08]어쩜 이 관계의 클라이맥스\n[01:37.79]2막으로 넘어가기엔 지금이 good timing 우\n[01:44.19]같은 맘인 걸 알아 realize la lize\n[01:48.63]말을 고르지 말아 just reply la la ly\n[01:53.07]조금 장난스러운 나의 은유에\n[01:57.76]네 해석이 궁금해\n[02:02.26]우리의 색은 gray and blue\n[02:06.48]엄지손가락으로 말풍선을 띄워\n[02:11.86]금세 터질 것 같아 우\n[02:15.57]호흡이 가빠져 어지러워\n[02:20.25]I feel blue. I feel blue. I feel blue.\n[02:34.17]너에게 가득히 채워\n[02:38.58]띄어쓰기없이보낼게사랑인것같애\n[02:42.75]백만송이장미꽃을, 나랑피워볼래?\n[02:47.23]꽃잎의 색은 우리 마음 가는 대로 칠해\n[02:52.35]시들 때도 예쁘게\n[02:56.66]우리의 네모 칸은 bloom\n[03:00.85]엄지손가락으로 장미꽃을 피워\n[03:05.63]향기에 취할 것 같아 우\n[03:09.92]오직 둘만의 비밀의 정원\n[03:14.30]I feel bloom I feel bloom I feel bloom\n[03:28.36]너에게 한 송이를 더 보내\n'
    },
    {
        id:4,
        songId:'1404511131',
        name:'Blueming',
        artists:'IU',
        album:'Love poem',
        mvid:10903021,
        mvUrl:'http://vodkgeyttp8.vod.126.net/cloudmusic/b3ec/core/79ca/9f4f8c52b29ade50a375f0cdb3305a0c.mp4?wsSecret=1b80c3ff07030b870d1589cebc1de20a&wsTime=1583146518',
        picUrl:'https://p1.music.126.net/2pF-tKT79yQLWfOnm49-hA==/109951164496579083.jpg',
        url:'http://m8.music.126.net/20200302174642/aa4c69f5a3c6d943e03c50c150abc3e5/ymusic/025a/0552/015b/50cdd82bb2284f70c8d7616f3507a961.mp3',
        lyric:'[by:onlyU-IU中国首站]\n[00:00.000] 作曲 : 이종훈/이채규/IU\n[00:01.000] 作词 : IU\n[00:09.06]‘뭐해?‘라는 두 글자에\n[00:11.59]‘네가 보고 싶어’ 나의 속마음을 담아 우\n[00:18.08]이모티콘 하나하나 속에\n[00:20.64]달라지는 내 미묘한 심리를 알까 우\n[00:26.93]아니 바쁘지 않아 nothing no no\n[00:31.83]잠들어 있지 않아 insomnia nia nia\n[00:35.95]지금 다른 사람과 함께이지 않아\n[00:40.81]응, 나도 너를 생각 중\n[00:45.23]우리의 네모 칸은 bloom\n[00:49.65]엄지손가락으로 장미꽃을 피워\n[00:54.18]향기에 취할 것 같아 우\n[00:58.59]오직 둘만의 비밀의 정원\n[01:03.15]I feel bloom I feel bloom I feel bloom\n[01:17.29]너에게 한 송이를 더 보내\n[01:26.28]밤샘 작업으로 업데이트\n[01:28.74]흥미로운 이 작품의 지은이 that’s me 우\n[01:35.08]어쩜 이 관계의 클라이맥스\n[01:37.79]2막으로 넘어가기엔 지금이 good timing 우\n[01:44.19]같은 맘인 걸 알아 realize la lize\n[01:48.63]말을 고르지 말아 just reply la la ly\n[01:53.07]조금 장난스러운 나의 은유에\n[01:57.76]네 해석이 궁금해\n[02:02.26]우리의 색은 gray and blue\n[02:06.48]엄지손가락으로 말풍선을 띄워\n[02:11.86]금세 터질 것 같아 우\n[02:15.57]호흡이 가빠져 어지러워\n[02:20.25]I feel blue. I feel blue. I feel blue.\n[02:34.17]너에게 가득히 채워\n[02:38.58]띄어쓰기없이보낼게사랑인것같애\n[02:42.75]백만송이장미꽃을, 나랑피워볼래?\n[02:47.23]꽃잎의 색은 우리 마음 가는 대로 칠해\n[02:52.35]시들 때도 예쁘게\n[02:56.66]우리의 네모 칸은 bloom\n[03:00.85]엄지손가락으로 장미꽃을 피워\n[03:05.63]향기에 취할 것 같아 우\n[03:09.92]오직 둘만의 비밀의 정원\n[03:14.30]I feel bloom I feel bloom I feel bloom\n[03:28.36]너에게 한 송이를 더 보내\n'
    },
    {
        id:5,
        songId:'1404511131',
        name:'Blueming',
        artists:'IU',
        album:'Love poem',
        mvid:10903021,
        mvUrl:'http://vodkgeyttp8.vod.126.net/cloudmusic/b3ec/core/79ca/9f4f8c52b29ade50a375f0cdb3305a0c.mp4?wsSecret=1b80c3ff07030b870d1589cebc1de20a&wsTime=1583146518',
        picUrl:'https://p1.music.126.net/2pF-tKT79yQLWfOnm49-hA==/109951164496579083.jpg',
        url:'http://m8.music.126.net/20200302174642/aa4c69f5a3c6d943e03c50c150abc3e5/ymusic/025a/0552/015b/50cdd82bb2284f70c8d7616f3507a961.mp3',
        lyric:'[by:onlyU-IU中国首站]\n[00:00.000] 作曲 : 이종훈/이채규/IU\n[00:01.000] 作词 : IU\n[00:09.06]‘뭐해?‘라는 두 글자에\n[00:11.59]‘네가 보고 싶어’ 나의 속마음을 담아 우\n[00:18.08]이모티콘 하나하나 속에\n[00:20.64]달라지는 내 미묘한 심리를 알까 우\n[00:26.93]아니 바쁘지 않아 nothing no no\n[00:31.83]잠들어 있지 않아 insomnia nia nia\n[00:35.95]지금 다른 사람과 함께이지 않아\n[00:40.81]응, 나도 너를 생각 중\n[00:45.23]우리의 네모 칸은 bloom\n[00:49.65]엄지손가락으로 장미꽃을 피워\n[00:54.18]향기에 취할 것 같아 우\n[00:58.59]오직 둘만의 비밀의 정원\n[01:03.15]I feel bloom I feel bloom I feel bloom\n[01:17.29]너에게 한 송이를 더 보내\n[01:26.28]밤샘 작업으로 업데이트\n[01:28.74]흥미로운 이 작품의 지은이 that’s me 우\n[01:35.08]어쩜 이 관계의 클라이맥스\n[01:37.79]2막으로 넘어가기엔 지금이 good timing 우\n[01:44.19]같은 맘인 걸 알아 realize la lize\n[01:48.63]말을 고르지 말아 just reply la la ly\n[01:53.07]조금 장난스러운 나의 은유에\n[01:57.76]네 해석이 궁금해\n[02:02.26]우리의 색은 gray and blue\n[02:06.48]엄지손가락으로 말풍선을 띄워\n[02:11.86]금세 터질 것 같아 우\n[02:15.57]호흡이 가빠져 어지러워\n[02:20.25]I feel blue. I feel blue. I feel blue.\n[02:34.17]너에게 가득히 채워\n[02:38.58]띄어쓰기없이보낼게사랑인것같애\n[02:42.75]백만송이장미꽃을, 나랑피워볼래?\n[02:47.23]꽃잎의 색은 우리 마음 가는 대로 칠해\n[02:52.35]시들 때도 예쁘게\n[02:56.66]우리의 네모 칸은 bloom\n[03:00.85]엄지손가락으로 장미꽃을 피워\n[03:05.63]향기에 취할 것 같아 우\n[03:09.92]오직 둘만의 비밀의 정원\n[03:14.30]I feel bloom I feel bloom I feel bloom\n[03:28.36]너에게 한 송이를 더 보내\n'
    }]

    return( 
        <div className="music-list">
            {
                musicList.map((item,index)=>{
                    return (
                        <div className="item" key={item.id}>
                            <div className="serial-image">
                                <span className="serial">{index+1}</span>
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

            <ReactAplayer style={{bottom:'60px!important'}} fixed={true} lrcType={2} onInit={(ap)=> setAp(ap)} />
            { 
                mvUrl.length>0?<Mv url={mvUrl} closeMv={()=>setMvUrl('')}/>:null
            }
            
            <style jsx>{`
                .music-list{
                    padding:20px;
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