import { memo } from 'react'
import './layout.less'
import { connect } from 'react-redux'

 function  Rightbar({theme,changeTheme,showToTop,MemoToTop}){
    // console.log(`${new Date()} >>>>>>>>>>>rightbar render`)

    return (
        <div className="rightbar">
            <div className="card-item">
                <i className="iconfont icon-yinle" />
            </div>
            <div className="card-item"  onClick={()=>changeTheme()}> 
                <i className= {theme?'iconfont icon-yejianmoshi':'iconfont icon-taiyang-copy'} />
            </div>
            <div className="card-item-last" style={{height: showToTop?"36px":0}} onClick={()=>MemoToTop()}> 
                <i className="iconfont icon-31huidaodingbu" />
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>({
	theme: state.pubilc.theme
})

const mapDispatchToProps = (dispatch) => ({
	changeTheme() {
		dispatch({type:'CHANGEIHEME'})
	}
})


export default  memo(connect(mapStateToProps,mapDispatchToProps)(Rightbar))