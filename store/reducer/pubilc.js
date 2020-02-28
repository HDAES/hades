
const defaultState = {
    say: {},
    theme:true,
    section:[],
    articleList:[],
    articleLength:0
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
		default:
			return state
	}

}