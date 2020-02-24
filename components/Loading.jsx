import { Spin } from 'antd';
export default () =>(
    <div className="loading">
        <Spin />
        <style jsx>{`
            .loading{
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 999;
                background-color: rgba(0,0,0,.2);
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `}</style>
    </div>
)