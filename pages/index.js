import Head from 'next/head'
import axios from 'axios'
import api from '../lib/api'
import Layout from '../components/layout/Layout'
import Section from '../components/index/Section'
import Plan from '../components/index/Plan'
import HotList from '../components/pubilc/HotList'
import Tags from '../components/pubilc/Tags'
import ArticleList from '../components/pubilc/ArticleList'
import { connect } from 'react-redux'


function  Index({indexData,totop}){
  return (
    <Layout saying={indexData.saying}>
      <div style={{display:'flex',justifyContent:'space-between'}} >
        <div style={{width:740}}>
            <Section section={indexData.sectionList}/>
            <Plan/>
            <ArticleList articleList={indexData.articleList}/>
        </div>
        <div style={{width:320}}>
            <HotList hotlist={indexData.hotList}/>
            <div className={totop?'left-fixed':''}> 
              <Tags tags={indexData.tags}/>
            </div>
        </div>
      </div>
    </Layout>
  )
}

// 异步获取数据
Index.getInitialProps  = async (ctx) =>{
 
  let indexData={}
  await axios.get(api.indexData).then( res =>{
    if(res.status == 200 ){
     
     indexData = res.data.data
     //console.log(indexData)
    }
  })
  
  return {indexData}
}


const mapStateToProps = (state) =>({
	totop: state.pubilc.toTop
})
export default connect(mapStateToProps)(Index);
