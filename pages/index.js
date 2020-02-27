import Head from 'next/head'
import axios from 'axios'
import api from '../lib/api'
import Api from '../static/mock/api'
import Layout from '../components/layout/Layout'
import Section from '../components/index/Section'
import Plan from '../components/index/Plan'
import HotList from '../components/pubilc/HotList'
import ArticleList from '../components/pubilc/ArticleList'

function Index({indexData}){
  return (
    
    <Layout saying={indexData.saying}>
      <div className="index">
        <div className="left">
            <Section section={indexData.sectionList}/>
            <Plan/>
            <ArticleList articlelist={indexData.articleList}/>
        </div>
        <div className="right">
            <HotList/>
        </div>
      </div>
      
      <style jsx>{`
        .index{
          display: flex;
          justify-content: space-between;
        }
        .left{
          width:740px;
        }
        .right{
          width:320px;
        }
      `}</style>
    </Layout>
  )
}

// 异步获取数据
Index.getInitialProps  = async (ctx) =>{
 
  let indexData={}

  await axios.get(api.indexData).then( res =>{
    if(res.status == 200 ){
     indexData = res.data.data
    }
  })
  return {indexData}
}

export default Index;
