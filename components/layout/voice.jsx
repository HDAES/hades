import React, { useEffect,memo } from 'react'
import './layout.less'
import { init } from 'ityped'
import { connect } from 'react-redux'


function Voice({audioStatus,audio,say}){
  useEffect( ()=>{
    const text = document.querySelector('#text')
    const source = document.querySelector('#source')
    init(text, { showCursor: false, disableBackTyping:true, strings: [say.text] }) 
    init(source, { showCursor: false, disableBackTyping:true, strings: [say.author]})
  },[])

  return (
    <div className="voice">
      {
        JSON.stringify(audio) == "{}" && audioStatus==false ?
          <><p className="text" id="text"></p><p className="source" id="source"></p> </> :null
    }
     </div>
  )

}

const mapStateToProps = (state) =>({
  audioStatus:state.pubilc.audioStatus,
  audio:state.pubilc.audio
})
export default connect(mapStateToProps)(memo(Voice))
