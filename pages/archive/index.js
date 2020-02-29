import axios from 'axios'
import { withRouter } from 'next/router'
import api from '../../lib/api'
import Layout from '../../components/layout/Layout'
import Header from './header'
import ArchiveList from './archiveList'
import HotList from '../../components/pubilc/HotList'
import Tags from '../../components/pubilc/Tags'
import Section from '../../components/pubilc/Section'
import { connect } from 'react-redux'

function Archive({archive,totop}) {
    return (
        <Layout saying={archive.saying}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div className="left"> 
                    <Header length={archive.archivelist.length} />
                    <ArchiveList archiveList={archive.archivelist}/>
                </div>
                <div className="right">
                    <HotList/>
                    <div className={totop?'left-fixed':''}>
                        <Section sectionList={archive.sectionList}/>
                        <Tags tags={archive.tags}/>
                    </div>
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

const mapStateToProps = (state) =>({
	totop: state.pubilc.toTop
})

export default  connect(mapStateToProps)(withRouter(Archive));


