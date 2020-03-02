
const defaultState = {
    say: {},
    theme:true,
    section:[],
    articleList:[],
    articleLength:0,
    toTop:false,
    showFooter:true
}

// 纯函数
export default (state = defaultState, action) => {
	switch (action.type) {
        // 名言
		case 'SAYING':
			return {
				...state,
				say: action.say
            }
        // 主题
		case 'CHANGEIHEME':
			return {
				...state,
				theme: !state.theme
            }
        //  文章列表
        case 'ARTICLELIST' :
            return {
                ...state,
                articleList : action.articleList
            }
         //  文章长度
         case 'ARTICLELENGTH' :
            return {
                ...state,
                articleLength: action.articleLength
            }
        case 'SECTION':
            return {
                ...state,
                section : action.section
            }
        case 'TOTOP':
            return {
                ...state,
                toTop : !state.toTop
            }
        //跳转改变状态
        case 'ROUTER':
            return {
                ...state,
                toTop : false
            }
        //改变 底部footer
        case 'FOOTER':
            return {
                ...state,
                showFooter : action.footer
            }
		default:
			return state
	}

}