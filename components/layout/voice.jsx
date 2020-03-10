import React, { useEffect,memo } from 'react'
import './layout.less'
import { init } from 'ityped'



function Voice({say}){
  useEffect( ()=>{
    const text = document.querySelector('#text')
    const source = document.querySelector('#source')
    init(text, { showCursor: false, disableBackTyping:true, strings: [say.text] }) 
    init(source, { showCursor: false, disableBackTyping:true, strings: [say.author]})
  },[])

  return (
    <div className="voice">
      <p className="text" id="text"></p><p className="source" id="source"></p> 
     </div>
  )

}


export default (memo(Voice))
