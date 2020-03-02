import { useState, useEffect, useMemo, useRef } from 'react'
import Router from 'next/router'
import Header from './Header'
import Footer from './Footer'
import Righrbar from './Rightbar'
import Voice from './voice'
import Loading from '../Loading'
import Click from './ClickHeart'
import Live2d from './live2d'
import './layout.less'
import { Scrollbars } from 'react-custom-scrollbars'
import ParticlesBg from './ParticlesBg'
import { connect } from 'react-redux'


function Layout({theme,children,saying,toTop,routerPush,footer}){

    const [minHeight,setMinHeight] = useState(false)
    const [loadingStatus,setLoadingStatus] = useState(false)
    const [showToTop,setShowToTop] = useState(false)
    //const [theme,setTheme] = useState(true)
    const ScrollbarsRef = useRef(null);

    //设置loading状态为true
    function setTrue(){
        setLoadingStatus(true)
    }
     //false
    function setFalse(){
        routerPush()
        setLoadingStatus(false)
    }
    useEffect(()=>{
        Router.events.on('routeChangeStart',setTrue)
        Router.events.on('routeChangeComplete',setFalse)
        Router.events.on('routeChangeError',setFalse)
        return () =>{
            Router.events.off('routeChangeStart',setTrue)
            Router.events.off('routeChangeComplete',setFalse)
            Router.events.off('routeChangeError',setFalse)
            window.removeEventListener('click',()=>{
                console.log('取消监听事件')
            });
        }
    },[loadingStatus])
    
    useEffect(()=>{
        setMinHeight(document.documentElement.clientHeight-67)
    },[true])

    //监听滚动条
    function onScroll(e){
        if(e.target.scrollTop>363){
            setShowToTop(true) 
            if(!showToTop){
                toTop()
            }
        }else if(showToTop&&e.target.scrollTop<363){
            setShowToTop(false) 
            if(showToTop){
                toTop()
            }
        }
    }

    // 回到顶部
    const MemoToTop = useMemo(() =>()=>{ScrollbarsRef.current.scrollToTop()},[loadingStatus])
    // 改变主题
    //const MemoChangeTheme = useMemo(()=>()=>{ setTheme((e)=>!e)},[loadingStatus])
    return (
        <div className={theme?'light-theme':'dark-theme'}>
            {
                loadingStatus?<Loading/>:''
            }
            <Scrollbars onScroll={onScroll} autoHide universal ref={ScrollbarsRef}>
                <Header/>
                <div className="main" style={{minHeight:minHeight}}>
                    <div className="container">
                        {children}
                    </div>
                </div>
                <Righrbar  showToTop={showToTop} MemoToTop={MemoToTop}/>
                <Voice say={saying}/>
                { footer?<Footer/>:null}
                <Click/>
                <Live2d/>
            </Scrollbars>
        </div>
    )
}

const mapStateToProps = (state) =>({
    theme: state.pubilc.theme,
    footer:state.pubilc.showFooter
})

const mapDispatchToProps = (dispatch) => ({
	toTop() {
		dispatch({type:'TOTOP'})
    },
    routerPush(){
        dispatch({type:'ROUTER'})
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Layout)

