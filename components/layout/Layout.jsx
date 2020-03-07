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
//import { Scrollbars } from 'react-custom-scrollbars'
import ParticlesBg from './ParticlesBg'
import { connect } from 'react-redux'


function Layout({theme,children,saying,toTop,routerPush}){

    const [minHeight,setMinHeight] = useState(false)
    const [loadingStatus,setLoadingStatus] = useState(false)
    //const [theme,setTheme] = useState(true)
    //const ScrollbarsRef = useRef(null);

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
        window.addEventListener('scroll', onScroll);
        return () =>{
            window.removeEventListener('scroll', onScroll);
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
    function onScroll(){
        if(window.scrollY>320){
            toTop(true)
        }else if(window.scrollY<320){
            toTop(false)
        }
    }


    return (
        <div className={theme?'light-theme':'dark-theme'}>
            {
                loadingStatus?<Loading/>:''
            }
            
            <Header/>
            <div className="main" style={{minHeight:minHeight}}>
           
                <div className="container">
                    {children}
                </div>
            </div>
            <Righrbar />
            <Voice say={saying}/>
            <Footer/>
            <Click/>
            <Live2d/>
        </div>
    )
}

const mapStateToProps = (state) =>({
    theme: state.pubilc.theme,
})

const mapDispatchToProps = (dispatch) => ({
	toTop(totop) {
		dispatch({type:'TOTOP',toTop:totop})
    },
    routerPush(){
        dispatch({type:'ROUTER'})
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Layout)

