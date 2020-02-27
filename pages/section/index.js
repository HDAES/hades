import axios from 'axios'
import Api from '../../static/mock/api'
import api from '../../lib/api'
import Layout from '../../components/layout/Layout'
import Header from './header'
import ArticleList from '../../components/pubilc/ArticleList'
import Nav from './nav'
function about({section}) {
    return (
        <Layout saying={section.saying}>
            <div className="section">
                <Header head={section.sectionList}/>
                <div className="container">
                    <Nav navlist={section.sectionSecondList}/>

                    <ArticleList articlelist={section.articleList}/>
                </div>
                
            </div>
            <style jsx>{`
            .section .container{
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
            console.log(res.data.data)
            section=res.data.data
        }
    })
    return { section }
}

export default about;


