export default () =>{
    const contactsList = [
        {
          name:'GitHub',
          href:'https://github.com/HDAES',
          icon:'icon-git',
          color:"#555555"
        },{
          name:'Email',
          href:'mailto:1005710179@qq.com',
          icon:'icon-youxiang',
          color:"#FFB53C"
        },
        {
          name:'Music',
          href:'https://music.163.com/#/user/home?id=123215647',
          icon:'icon-musiccloud',
          color:"#E20000"
        },{
          name:'JueJin',
          href:'https://juejin.im/user/5bb0ab57e51d450e5767288f',
          icon:'icon-juejin',
          color:"#007FFF"
        }
    ]
    return (
        <div className="contacts">
          <div className="title">Contacts</div>
          <ul>
            {
              contactsList.map( (item,index) => {
                return (
                  <li key={index}> 
                    <a href={item.href} style={{color: item.color}} target="_blank" >
                      <i className={`${item.icon} iconfont`} />
                      <span>{item.name}</span>
                    </a>
                  </li>
                )
              })
            }
          </ul>
          <style jsx>{`
            .contacts {
              border-radius: 5px;
              background-color: var(--header-background-color);
            }
            .title {
              padding: 10px 0;
              text-align: center;
              font-size: 24px;
              font-family: "Damion";
              color: var(--text-color);
            }
            ul {
              padding: 20px 0;
              display: flex;
              list-style: none;
            }
            li {
              flex: 1;
            }
            li a {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-decoration: none;
            }
            li i {
              font-size: 24px;
            }
            li span {
              padding: 10px 0;
            }
          `}</style>
        </div>
    );
}