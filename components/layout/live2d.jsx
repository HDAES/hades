import { Component,memo } from 'react'

 class  Live2d extends Component{
    
    componentDidMount(){
        L2Dwidget.init({ "model": { jsonPath:
            　　"http://live2d.xl686.com/koharu/assets/koharu.model.json",
            　　"scale": 1 }, "display": { "position": "left", "width": 150, "height": 300,
            　　"hOffset": -20, "vOffset": -40 }, "mobile": { "show": true, "scale": 0.5 },
            　　"react": { "opacityDefault": 0.7, "opacityOnHover": 0.2 } 
        });
        console.log(`
_______              _    _          _____  ______  _____ 
|_   _( )            | |  | |   /\\  |  __ \|  ____|/ ____|
  | | |/ _ __ ___    | |__| |  /  \\ | |  | | |__  | (___  
  | |   | '_ ' _ \\   |  __  | / /\\  | |  | |  __|  \___ \ 
 _| |_  | | | | | |  | |  | |/ /__\\ \| |__| | |____ ____) |
|_____| |_| |_| |_|  |_|  |_/_/    \\|____/|______|_____/ 

        同学，恭喜你喜提彩蛋

通过这个博客网站，能够在你学习和工作中带来有用的帮助......
        `)
    }
    render(){
        console.log(`${new Date()} >>>>>>>>>>>live2d render`)
        return (
            <div></div>
        )
    }
}

export default memo(Live2d);


