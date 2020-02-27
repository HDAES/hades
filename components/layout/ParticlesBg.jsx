import { Component,memo } from 'react'
import dynamic from 'next/dynamic'
import './layout.less'
const ParticlesBg = dynamic(import('particles-bg'),{ ssr: false})

class Particles extends Component{

    constructor(props) {
        super(props);
        this.state = {
            config: {
                num: [4, 7],
                rps: 0.1,
                radius: [5, 40],
                life: [1.5, 3],
                v: [0.5, 1],
                tha: [-40, 40],
                alpha: [0.6, 0],
                scale: [.1, 0.4],
                position: "all",
                color: ["random", "#8080FF"],
                cross: "dead",
                // emitter: "follow",
                random: 15,
            }
        };
    }


    render(){
        //console.log(`${new Date()} >>>>>>>>>>>ParticlesBg render`)
        const config = this.state.config
        return (
            <div className="background">
                <ParticlesBg   type="custom" bg={true} config={config}/>
            </div>
        )
    }

}


export default memo(Particles);