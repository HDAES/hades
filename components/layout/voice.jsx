import React, { Component,memo } from 'react'
import './layout.less'
import { init } from 'ityped'

class Voice extends Component {
  constructor(props) {
    super(props)
  }
  
    componentDidMount(){
        const text = document.querySelector('#text')
        init(text, { showCursor: false, disableBackTyping:true, strings: [this.props.say.text] })
        const source = document.querySelector('#source')
        init(source, { showCursor: false, disableBackTyping:true, strings: [this.props.say.author]})
      }
      render(){
        //console.log(`${new Date()} >>>>>>>>>>>Voice render`)
        return (
            <div className="voice">
                <p className="text" id="text"></p>
                <p className="source" id="source"></p>
            </div>
        )
      }
}

export default memo(Voice)
