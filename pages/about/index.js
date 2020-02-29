import axios from 'axios'
import api from '../../lib/api'
import Layout from '../../components/layout/Layout'
import Me from './Me'
import Map from './Map'
import Contacts from './Contacts '
import Friend from './Friend'
import { Avatar } from 'antd'

function about({say}){
    return (
        <Layout saying={say.saying}>
            <div className="about">
                <div className="avatar">
                    <Avatar size={68} icon="user" src="http://qiniu.xl686.com/avatar.png?v=0512" />
                    <div className="name">hades·xl </div>
                    <span className="nick">I long for money ! ! !</span>
                </div>
                <div className="about-container">
                    <div className="me-friend">
                        <Me/>
                        <Friend linkList={[]}/>
                    </div>
                    <div className="des-map">
                        <Contacts/>
                        <Map/>
                    </div>
                </div>
            </div>
        <style jsx>{`
        .avatar{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 30px 0; 
        }
        .name {
            font-family: Damion;
            font-size: 36px;
            color: var(--header-logo-color);
        }
        .nick {
            padding: 5px 0;
            font-size: 16px;
            font-weight: 500;
            color: var(--text-color);
        }
        .about-container{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .me-friend{
            width: var(--left-width);
        }
        .des-map{
            width: var(--right-width);
        }
        `}</style>
        </Layout>    
    )
}

// 异步获取数据
about.getInitialProps  = async (ctx) =>{
    let say = { }
    //获取首页数据
    await axios.get(api.saying).then( res =>{
        if(res.status == 200 ){
            console.log(res.data.data)
            say = res.data.data
        }
    })

    return { say }
}

export default about;


  