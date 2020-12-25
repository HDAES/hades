import { memo } from 'react'
export default memo(() => {
    //console.log(`${new Date()} >>>>>>>>>>>footer render`)
    return (
        <div className="footer">
            <div className="container">
                <div className="copyright">
                    <span>版权所有 © 2019 </span>
                    <a href="/">HADES</a>
                    <span>保留所有权利</span>
                    <a href="https://beian.miit.gov.cn" target="_blank">渝ICP备18007187号-1</a>
                </div>
                <div className="support">
                    <span>Powered by</span>
                    <a href="https://nextjs.org/">Next.js</a>
                    <span>Thinks for</span>
                    <a href="https://jooger.me/">jooger.me</a>
                    <span>design</span>
                </div>
            </div>
        </div>
    )
})