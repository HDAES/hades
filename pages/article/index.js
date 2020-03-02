import axios from 'axios'
import api from '../../lib/api'
import Layout from '../../components/layout/Layout'
import Section from '../../components/pubilc/Section'
import ReactMarkdown from './ReactMarkdown'
import Router from 'next/router'
import Nav from './nav'
function Article({article}){

    return (
        <Layout saying={article.saying}>
            <div style={{display:'flex',justifyContent:'space-between'}} >
                <div style={{width:740}}>
                    { article.details.length>0? <ReactMarkdown content={article.details[0].context}/>:null}
                </div>
                <div style={{width:320}}>
                    <div className='left-fixed'>
                        { article.details.length>0?<Nav article={article.details[0].context}/> :null}
                        <Section sectionList={article.sectionList}/>
                        
                    </div>
                </div>
            </div>
        </Layout>
            
    )
}

// 异步获取数据
Article.getInitialProps = async (ctx) => {
    let article = {}
    await axios.post(api.articledetails,ctx.query).then(res => {
        if (res.status == 200) {
            article= res.data.data   
            //console.log(article)
        }
    })

    return { article }
}


export default Article; 