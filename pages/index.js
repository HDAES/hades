import Head from 'next/head'
import axios from 'axios'
import Api from '../static/mock/api'
import Layout from '../components/layout/Layout'

function Index({indexData}){
  console.log(indexData)
  return (
    
    <Layout indexData={indexData}>
       <h1 style={{paddingTop:200}}>网站正在建设中。。。。。。</h1>
    </Layout>
  )
}

// 异步获取数据
Index.getInitialProps  = async (ctx) =>{
  let indexData = { }
  //获取首页数据
  await axios.get(Api.index).then( res =>{
    if(res.status == 200 ){
      console.log(res.data.data)
      indexData = res.data.data
    }
  })

  return { indexData }
}

export default Index;
