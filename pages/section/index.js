import { useState } from 'react'
import axios from 'axios'
import { withRouter } from 'next/router'
import api from '../../lib/api'
import Layout from '../../components/layout/Layout'
import Header from './header'
import ArticleList from '../../components/pubilc/ArticleList'
import Nav from './nav'
import Music from './Music'


function section({section,router}) {

   

    const [list,setList] = useState(section.articleList)
    // 修改分类
    function changeNav(sid){
        //获取二级分类id
        // setList([])
        axios.post(api.sectionList,{sid:sid,section:router.query.section}).then(res=>{
            console.log(sid)
            if(res.status == 200){
                setList(res.data.data.articleList)
                
            }
        })  
    }

    return (
        <Layout saying={section.saying}>
            <div className="section">
                {
                    router.query.section !=4? 
                        <>
                        <Header head={section.sectionList}/>
                        <div style={{display:'flex',alignItems:'flex-start'}}>
                            <Nav navlist={section.sectionSecondList} changeNav={changeNav}/>
                            <ArticleList articleList={list}/>
                        </div></>
                    : <Music section={section}/>
                }   
            </div>
        </Layout>
    )
}

// 异步获取数据
section.getInitialProps = async (ctx) => {
    let section = {}

    if(ctx.query.section!='4'){
        await axios.post(api.sectionData,ctx.query).then(res => {
            if (res.status == 200) {
                section= res.data.data   
            }
        })
    }else{
        await axios.get(api.music).then(res => {
            if (res.status == 200) {
                section= res.data.data   
            }
        })
    }
    

    return { section }
}

export default  withRouter(section);


