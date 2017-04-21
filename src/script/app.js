require("../style/app.scss");
import React from "react"
import ReactDom from "react-dom"
import {Router, Route, hashHistory, IndexRedirect} from 'react-router'
import Index from "./comnent/Index"
import Board from './comnent/boardList/board'
import Search from './comnent/search/Search'

ReactDom.render(
	<Router history={hashHistory}>
	    <Route path="/" component={Index}>
	      <IndexRedirect to="/board" />
	      <Route path="board" component={Board} />
	      <Route path="search" component={Search} />
	    </Route>
	</Router>
	,
	document.getElementById("root")
	)