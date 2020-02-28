import React from 'react'
import createStore from '../store/index'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

const getOrcreateStore = (initialState) => {
  if (isServer) {
    return createStore(initialState)
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = createStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}

export default Comp => {
  class WithReduxApp extends React.Component {
    constructor(props) {
      super(props)
      this.reduxStore = getOrcreateStore(props.initialReduxState)
    }

    render() {
      const { Component, pageProps, ...rest } = this.props
      // console.log(Component, pageProps)

      if (pageProps) {
        pageProps.test = '123'
      }
      
      return (
        <Comp 
          Component={Component} 
          pageProps={pageProps} 
          {...rest} 
          reduxStore={this.reduxStore}
        />
      )
    }
  }

  
  WithReduxApp.getInitialProps = async ctx => {

    // 这是一个方法， 无论在客户端还是服务端 每次调用这个方法，结束后都会销毁
    
    let reduxStore

    reduxStore = getOrcreateStore()
    
    ctx.reduxStore = reduxStore

    let appProps = {}
    if (typeof Comp.getInitialProps === 'function') {
      appProps = await Comp.getInitialProps(ctx)
    }

    return {
      ...appProps,
      initialReduxState: reduxStore.getState()
    }
  }
  return WithReduxApp
}