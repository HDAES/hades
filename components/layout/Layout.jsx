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



export default  ({children,saying}) =>{

    const [loadingStatus,setLoadingStatus] = useState(false)
    const [showToTop,setShowToTop] = useState(false)
    const [theme,setTheme] = useState(true)
    const ScrollbarsRef = useRef(null);

    //设置loading状态为true
    function setTrue(){
        setLoadingStatus(true)
    }
     //false
    function setFalse(){
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
    
    //监听滚动条
    function onScroll(e){
        if(e.target.scrollTop>500){
            setShowToTop(true) 
        }else if(showToTop&&e.target.scrollTop<500){
            setShowToTop(false) 
        }
    }

    // 回到顶部
    const MemoToTop = useMemo(() =>()=>{ScrollbarsRef.current.scrollToTop()},[loadingStatus])
    // 改变主题
    const MemoChangeTheme = useMemo(()=>()=>{ setTheme((e)=>!e)},[loadingStatus])
    return (
        <div className={theme?'light-theme':'dark-theme'}>
            {
                loadingStatus?<Loading/>:''
            }
            <Scrollbars onScroll={onScroll} autoHide universal ref={ScrollbarsRef}>
                <Header/>
                <div className="main">
                    <div className="container">
                        {children}
                    </div>
                </div>
                <Righrbar changeTheme={MemoChangeTheme} theme={theme} showToTop={showToTop} MemoToTop={MemoToTop}/>
                <Voice say={saying}/>
                <Footer/>
                <Click/>
                <Live2d/>
                
            </Scrollbars>
        </div>
    )
}

