
const defaultState = {
    theme:true,
    toTop:false,
    audioStatus:false,  //音频播放状态
    audio:{}
}

// 纯函数
export default (state = defaultState, action) => {
	switch (action.type) {
        // 主题
		case 'CHANGEIHEME':
			return {
				...state,
				theme: !state.theme
            }
        case 'TOTOP':
            return {
                ...state,
                toTop : action.toTop
            }
        case 'AUDIOSTATUS':
            return {
                ...state,
                audioStatus : action.status
            }
        case 'AUDIO': 
            return {
                ...state,
                audio : action.audio
            }
		default:
			return state
	}

}