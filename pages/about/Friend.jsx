import { useState} from 'react';
import axios from 'axios'
import { Modal, Button, Form, Input, Icon, message, Avatar } from 'antd'

export default Form.create({})( ({form, linkList}) => {
    const [visible,setVisible] = useState(false)
    const {getFieldDecorator} = form

    function handleSubmit(){
        let { nickname,email,link} = form.getFieldsValue()
        if(nickname == undefined || email == undefined || link == undefined){
            message.error('请完善信息');
        }else{
            axios.post(api.applyLink,form.getFieldsValue()).then( res =>{
                console.log(res)
                if(res.status ==200 && res.data.code == 200){
                    message.success(res.data.message);
                    setVisible(false)
                }
            })
        }
    }

    function toFriend(link){
        window.open(link)
    }
  return (
    <div className="friend">
      <div className="title">friend</div>
      <div className="fc" onClick={()=>setVisible(true)}>申请友链</div>

        <div className="link-list">
            { 
                linkList.map( (item,index) =>{
                    return (
                        <div className="link-item" key={index} onClick={()=>toFriend(item.link)}>
                            {
                                item.avatar? <Avatar size="large"  src={item.avatar} >USER</Avatar>:
                                <Avatar size="large" icon='user' >USER</Avatar>
                            }
                            <div className="name-intr">
                                <div className="name">{item.nickname}</div>
                                <div className="lable">{item.intr}</div>
                            </div>
                        </div>
                    )
                })
            }
          
        </div>


      <Modal
          visible={visible}
          title="友链申请" 
          onCancel={() =>setVisible(false)}
          footer={[
            <Button key="back" onClick={() =>setVisible(false)}>
              取消
            </Button>,
            <Button key="submit" type="primary" onClick={handleSubmit}>
              申请
            </Button>
          ]}
        >
          <Form  style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'space-between'}}>
              <Form.Item style={{flexBasis: '32%'}}>
                    {
                        getFieldDecorator('nickname')(
                            <Input 
                                
                                prefix={<Icon type="user" />}
                                placeholder="昵称：(必填)"/>
                        )
                    }
              </Form.Item>
              <Form.Item style={{flexBasis: '32%'}}>
                    {
                        getFieldDecorator('email')(
                            <Input 
                                
                                prefix={<Icon type="mail" />}
                                placeholder="邮箱：(必填)"/>
                        )
                    }
              </Form.Item>
              <Form.Item style={{flexBasis: '32%'}}>
                    {
                        getFieldDecorator('link')(
                            <Input 
                                
                                prefix={<Icon type="global" />}
                                placeholder="站点：(必填)"/>
                        )
                    }
              </Form.Item>
              <Form.Item style={{flexBasis: '80%'}}>
                    {
                        getFieldDecorator('intr')(
                            <Input.TextArea 
                                placeholder="简介：(选填)"/>
                        )
                    }
              </Form.Item>
          </Form>
        </Modal>
      <style jsx>{`
        .friend {
          margin-top: 20px;
          padding-bottom:20px;
          border-radius: 5px;
          background-color: var(--header-background-color);
        }
        .title {
          padding: 20px 0 10px;
          text-align: center;
          font-size: 24px;
          font-family: "Damion";
          color: var(--text-color);
        }
        .fc{
          text-align: center;
          cursor: pointer;
          transition: all .3s;
        }
        .fc:hover{
          text-decoration: underline;
          transform: translateX(5px);
          font-style: italic;
        }
        .link-list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding:20px 20px 0 20px;
        }
        .link-item{
            display: flex;
            flex-direction: row;
            flex-basis: 32%;
            background-color: var(--content-color);
            margin-bottom:20px;
            padding:10px ;
            cursor: pointer;
            transition: all .3s;
        }
        .link-item:hover{
            background-color: var(--border-color);
        }
        .name-intr{
            margin-left:20px;
        }
        .name{
            font-weight: bold;
            color: var(--text-color);
        }
        .lable{
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            width:80px;
        }
      `}</style>
    </div>
  );
})