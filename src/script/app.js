require("../style/app.scss");
import React from "react"
import ReactDom from "react-dom"
import {Router, Route, hashHistory, IndexRedirect} from 'react-router'
import Index from "./component/Index"
import Index_Content from './component/index/Content'
import Sort from './component/sort/Sort'
import BookValume from './component/book/BookValume'
import Brand from './component/brand/Brand'
import Login from './component/login/Login'
import StoreDetail from './component/storeDetail/StoreDetail'
ReactDom.render(
	<Router history={hashHistory}>
	    <Route path="/" component={Index}>
	      <IndexRedirect to="/content" />
	      <Route path="content" component={Index_Content} />
	      <Route path="sort" component={Sort} />
	      <Route path="book_valume" component={BookValume} />
	      <Route path="brand" component={Brand} />
	      <Route path="login" component={Login} />
	    </Route>
	    <Route path="/storeDetail" component={StoreDetail}></Route>
	</Router>
	,
	document.getElementById("root")
	)