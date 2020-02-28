import axios from 'axios'
import { withRouter } from 'next/router'
import api from '../../lib/api'
import Layout from '../../components/layout/Layout'
import Header from './header'
import ArchiveList from './archiveList'
import HotList from '../../components/pubilc/HotList'

function Archive({archive}) {


        
    

    return (
        <Layout saying={archive.saying}>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:10}}>
                <div className="left"> 
                    <Header length={archive.archivelist.length} />
                    <ArchiveList archiveList={archive.archivelist}/>
                </div>
                <div className="right">
                    <HotList/>
                </div>
            </div>
            
            <style jsx>{`
            .left{
                width:740px;
                background-color: var(--header-background-color);
            }
            .right{
                width:320px;
            }
            `}</style>
        </Layout>
    )
}

// 异步获取数据
Archive.getInitialProps = async (ctx) => {
    let archive = {}
    await axios.get(api.archive).then(res => {
        if (res.status == 200) {
            archive= res.data.data   
        }
    })

    return { archive }
}

export default  withRouter(Archive);


