import React, { Component,memo } from 'react'
import './layout.less'
import { init } from 'ityped'

class Voice extends Component {
    componentDidMount(){
        const text = document.querySelector('#text')
        init(text, { showCursor: false, disableBackTyping:true, strings: ['也罢就这样吧，淡看缘起缘落，有缘聚，无缘不见' ] })
        const source = document.querySelector('#source')
        init(source, { showCursor: false, disableBackTyping:true, strings: ['—— 小染《—兔先森' ] })
      }
      render(){
        console.log(`${new Date()} >>>>>>>>>>>Voice render`)
        return (
            <div className="voice">
                <p className="text" id="text"></p>
                <p className="source" id="source"></p>
            </div>
        )
      }
   
}

export default memo(Voice)
