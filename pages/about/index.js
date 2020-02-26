import Layout from '../../components/layout/Layout'
import Me from './Me'
import Map from './Map'
import Contacts from './Contacts '
import Friend from './Friend'
import { Avatar } from 'antd'

export default () => {
    return (
        <Layout>
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
            color: var(--text-color);
        }
        .about-container{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .me-friend{
            width: 700px;
        }
        .des-map{
            width: 360px;
        }
        `}</style>
        </Layout>    
    )
}


  