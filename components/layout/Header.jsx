import { memo } from 'react'
import Link from 'next/link'
import Router, { withRouter } from 'next/router'
import { Input } from 'antd'
import './layout.less'
export default memo(withRouter((router) => {
    console.log(`${new Date()} >>>>>>>>>>>header render`)
    const routerIndex = router.route
    const navlist = [{
        index: '/',
        name: '首页'
    },
    ]
    return (
        <div className="header">
            <div className="container">
                <Link href="/">
                    <div className="logo-link">
                        <img className="logo" src="/static/images/logo.png" alt="logo" />
                        <span className="url"> xl686.com </span>
                    </div>
                </Link>
                <div className="tabs" >
                    {
                        navlist.map((item) => {
                            return (
                                <Link href={item.index} key={item.index}>
                                    <a className={ routerIndex == item.index?'tabs_active tab':'tab'} >{item.name}</a>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="search">
                    <Input.Search onSearch={value =>Router.push(`/search?keywords=`+value) } placeholder="请输入关键词"/>
                </div>
            </div>
        </div>
    )
}))