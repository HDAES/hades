const hotlist =[{
        type:0,
        text:'1233'
    },{
        type:0,
        text:'1233'
    },{
        type:0,
        text:'1233'
    },{
        type:0,
        text:'1233'
    },{
        type:0,
        text:'1233'
    },{
        type:0,
        text:'1233'
    }
]
export default () =>{
    return (
        <div className="hot-list" id="hotlist">
      <div className="hot-title">
        <i className="iconfont icon-wenzhang " />
        <span>热门文章</span>
      </div>
      <div className="list">
        {hotlist.map((item, index) => {
          return (
            <div className="item" key={index}>
              <span>{index + 1}</span>
              <a> {item.text}</a>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .hot-list {
          padding: 10px;
          border-radius: 5px;
          color: var(--text-color);
          background-color: var(--header-background-color);
        }
        .hot-title {
          height: 30px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
        }
        .hot-title i {
          padding: 0 10px 0 0;
          color: var(--text-color);
        }
        .hot-title span{
          font-weight: bold;
        }
        .list {
          padding-top: 10px;
        }
        .item {
          display: flex;
          padding-bottom: 12px;
        }
        .item:last-child {
          padding: 0;
        }
        .item span {
          margin-right: 10px;
          padding: 2px 10px;
          border-radius: 3px;
          background-color: var(--border-color);
        }
        .item a {
          width: 80%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: var(--text-color);
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .item a :hover {
          padding-left: 8px;
          color: var(--header-logo-color);
        }
      `}</style>
    </div>
    )
}