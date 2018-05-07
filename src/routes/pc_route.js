import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import ExtendRoute from './extendRoute';
import NotFound from '../components/notFound';
import PCMain from '../components/pc/pc_main';
import PCTopList from "../components/pc/pc_topList";

//路由配置
const routes = [
    //首页
    {
        path: '/',
        exact: true,
        component: PCMain,
    },
    //列表
    {
        path: '/list',
        exact: true,
        component: PCTopList,
    },
    //用户主页
    {
        path: '/user/home',
        exact: true,
        component: PCTopList,
    }
];

//TODO  
// <Redirect from="/my/tologin" to="/my" />

class PCRoute extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    {routes.map((route, i) => (
                        <ExtendRoute key={i} {...route} />
                    ))}

                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default PCRoute;
