import { useEffect,useState } from 'react'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import '../../static/css/details.css'
import { Skeleton } from 'antd'
export default ({content}) => {

    const [loading,setLoading] = useState(true)
    const [html,setHtml] = useState(content)
    useEffect( ()=>{
        setTimeout(()=>{
          myFuction()
        },100)
         
      },[])
      
     
    const myFuction = async ()=>{
        let newhtml =await marked(content)
        setHtml(newhtml)
        setLoading(false)
        //console.log(tocify.render())
    }

    marked.setOptions({
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
      }); 
   

    return (
        <div className="markdown-content" >
            
            <Skeleton loading={loading} active  paragraph={{ rows: 10 }}>
                <div className="detailed-content"  
                    dangerouslySetInnerHTML = {{__html:html}}  >
                </div>
            </Skeleton>
            <style jsx>{`
                .markdown-content{
                    background-color:var(--header-background-color);
                    padding:20px;
                    border-radius: 5px;
                } 

            `}</style>
        </div>
    )
}