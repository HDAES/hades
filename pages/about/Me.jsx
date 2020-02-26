import { memo } from 'react'

export default memo(() => {
    const meList = [
        {
            icon: "icon-wo",
            color: "#49A9EE",
            text:
                "95后，热衷于新技术的学习和探讨"
        },
        {
            icon: "icon-53a6f8971e74b",
            color: "rgb(219, 150, 21)",
            text: "React，Vue，Antd ，Egg ，Flutter..."
        },
        {
            icon: "icon-xihuan1",
            color: "#F46E65",
            text: "音乐，韩剧，乒乓，LOL，PUBG，Dota自走棋..."
        },
        {
            icon: "icon-biaoqian2",
            color: "#3DB8C1",
            text: "轻微强迫症，像素眼，音乐热爱者，韩剧爱好者..."
        },
        {
            icon: "icon-locationicon",
            color: "#948AEC",
            text: "中国·重庆"
        }
    ];
    return (
        <div className="me">
            <div className="title">It's me</div>
            <ul>
                {meList.map((item, index) => (
                    <li key={index}>
                        <i
                            className={`${item.icon} iconfont`}
                            style={{ color: item.color }}
                        ></i>
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
            <style jsx>{`
            .me {
                border-radius: 5px;
                background-color: var(--header-background-color);
            }
            .title {
                padding: 20px 0;
                text-align: center;
                font-size: 24px;
                font-family: "Damion";
                color: var(--text-color);
            }
            ul {
                padding: 0 50px;
            }
            li {
                display: flex;
                align-items: center;
                padding-bottom: 20px;
            }
            li i {
                padding-right: 15px;
                font-size: 18px;
            }
            li span {
                color: var(--text-color);
            }
            `}</style>
        </div>
    )
})
