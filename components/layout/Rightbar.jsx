import { memo , useEffect} from 'react'
import './layout.less'
import { init } from 'ityped'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'

 function  Rightbar({theme,changeTheme,toTop,router,audioStatus,changeAudioStatus,audio}){
    // console.log(`${new Date()} >>>>>>>>>>>rightbar render`)

    // 控制播放暂停
    function control(){
        if(window.ap){
            changeAudioStatus(!audioStatus)
            if(audioStatus){
                window.ap.pause()
            }else if(!audioStatus){
                window.ap.play()
            }
            
        }
    }
    return (
        <div className="rightbar">
            {
                !audioStatus && JSON.stringify(audio) == "{}"?
                <div className="card-item" onClick={()=>{router.push('/section?section=4')}}>
                    <i className="iconfont icon-yinle" />
                </div>:
                 <div className="card-item" onClick={control}>
                    <i className={audioStatus?'iconfont  icon-bofang on-play':'iconfont  icon-bofang'} />
                </div>
            }
            <div className="card-item"  onClick={()=>changeTheme()}> 
                <i className= {theme?'iconfont icon-yejianmoshi':'iconfont icon-taiyang-copy'} />
            </div>
            <div className="card-item-last" style={{height: toTop?"36px":0}} onClick={()=>window.scrollTo(0, 0)}> 
                <i className="iconfont icon-31huidaodingbu" />
            </div>
            {
                JSON.stringify(audio) != "{}" && audio.musicComment.length>0?
                <HotComments hotComments={audio.musicComment} songName={audio.name}/>:null
            }
            
        </div>
    )
}

const mapStateToProps = (state) =>({
    theme: state.pubilc.theme,
    toTop:state.pubilc.toTop,
    audioStatus:state.pubilc.audioStatus,
    audio:state.pubilc.audio
})

const mapDispatchToProps = (dispatch) => ({
	changeTheme() {
		dispatch({type:'CHANGEIHEME'})
    },
    changeAudioStatus(status) {
		dispatch({type:'AUDIOSTATUS',status:status})
    },
})


export default  memo(connect(mapStateToProps,mapDispatchToProps)(withRouter(Rightbar)))

// 热评
function HotComments({hotComments,songName}){

    useEffect(()=>{
        const index= parseInt(Math.random() * (hotComments.length))
        const text = document.querySelector('#hot-text')
        text.innerHTML = ''
        init(text,
            { showCursor: false, backDelay:  15000,backSpeed:30,typeSpeed: 100,disableBackTyping:true, 
            strings:[hotComments[index].content+`。 Author ——${hotComments[index].user.nickname}《${songName}》` ] }
            )
        //init(source,{ showCursor: false, disableBackTyping:true, strings:sourceArr})
    },[songName])

    return (
        <div className="hot-comments-container">
            <div className="hot-comments-title">热评：</div>
            <div className="hot-comments">
                <p className="hot-text" id="hot-text"></p>
                <p className="hot-source" id="hot-source"></p>
            </div>
            <style jsx>{`
                .hot-comments-container{
                    position: fixed;
                    top: 70px;
                    left:0px;
                    font-family:Damion,cursive,Helvetica Neue For Number,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
                }
                .hot-comments-title{
                    padding:0 0 5px 20px;
                    color: var(--header-logo-color);
                    font-size: 18px;
                    font-weight: bold;
                }
                .hot-comments{
                    writing-mode: vertical-lr;
                    font-size: 16px;
                    user-select: text;
                    transition: all .3s ease;
                    color: var(--text-color);
                }
                .hot-text{
                        max-height: 500px;
                }
                .hot-source{
                    height: max-content;
                }   
            `}</style>
    </div>)
}