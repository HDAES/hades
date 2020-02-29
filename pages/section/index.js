import { useState } from 'react'
import axios from 'axios'
import { withRouter } from 'next/router'
import api from '../../lib/api'
import Layout from '../../components/layout/Layout'
import Header from './header'
import ArticleList from '../../components/pubilc/ArticleList'
import Nav from './nav'

function about({section,router}) {
    const [list,setList] = useState(section.articleList)

    // 修改分类
    function changeNav(sid){
        //获取二级分类id
        // setList([])
        axios.post(api.sectionList,{sid:sid,section:router.query.section}).then(res=>{
            if(res.status == 200){
                setList(res.data.data.articleList)
                //console.log(res.data.data.articleList)
            }
        })  
    }
    return (
        <Layout saying={section.saying}>
            <div className="section">
                <Header head={section.sectionList}/>
                <div className="section-container">
                    <Nav navlist={section.sectionSecondList} changeNav={changeNav}/>
                    <ArticleList articleList={list}/>
                </div>
                
            </div>
            <style jsx>{`
            .section-container{
                display: flex;
                align-items: flex-start;
            }
            
            `}</style>
        </Layout>
    )
}

// 异步获取数据
about.getInitialProps = async (ctx) => {
    let section = {}
    await axios.post(api.sectionData,ctx.query).then(res => {
        if (res.status == 200) {
            section= res.data.data   
        }
    })

    return { section }
}

export default  withRouter(about);


