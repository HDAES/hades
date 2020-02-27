import { useState, useEffect } from "react";

const plan =[{
        content:'小目标，一个亿'
    },{
        content:'小目标，二个亿'
    },{
        content:'小目标，三个亿'
    }
]
export default () =>{
    const [scroll, setScroll] = useState(0);
    function up() {
      setScroll(e => {
        if (e < 50*(plan.length-1)) {
          return e + 50;
        } else {
          return 0;
        }
      });
    }
  
    function down() {
      setScroll(e => {
        if (e > 0) {
          return e - 50;
        } else {
          return 50*(plan.length-1);
        }
      });
    }
  
    useEffect(() => {
      let timer = setInterval(() => {
        up();
      }, 5000);
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="scroll-card">
        <i className="iconfont icon-sound card-icon" />
        <ul style={{ top: "-" + scroll + "px" }}>
          {plan.map((item, index) => (
            <li key={index}>
              <span>{item.content}</span>
            </li>
          ))}
        </ul>
        <div className="scroll-control">
          <i className="iconfont icon-31shouqi" onClick={up} />
          <i className="iconfont icon-31xiala" onClick={down} />
        </div>
  
        <style jsx>{`
          .scroll-card {
            position: relative;
            margin-top: 20px;
            width: 100%;
            height: 50px;
            border-radius: 5px;
            background-color: var(--header-background-color);
            overflow: hidden;
            font-family: Damion, cursive, Helvetica Neue For Number, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
          }
          .card-icon {
            line-height: 50px;
            width: 5%;
            color: var(--header-logo-color);
            font-size: 24px;
            text-align: center;
            display: block;
          }
          ul {
            position: absolute;
            width: 95%;
            transition: top 0.5s;
          }
          li {
            display: flex;
            justify-content: space-between;
            height: 50px;
            padding: 0 10px;
            line-height: 50px;
            color: var(--header-logo-color);
            overflow: hidden;
          }
          .scroll-control {
            position: absolute;
            width: 5%;
            left: 95%;
            top: 0;
            display: flex;
            flex-direction: column;
          }
          .scroll-control i {
            height: 25px;
            line-height: 25px;
            text-align: center;
            color: var(--text-color);
          }
          .scroll-control i:hover {
            color: var(--header-logo-color);
          }
        `}</style>
      </div>
    );
}