import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import ExtendRoute from 'Routes/extendRoute';
import NotFound from 'Components/notFound';
import PCMain from 'Components/pc/pc_main';
import PCTopList from "Components/pc/pc_topList";
import PCTodoItems from 'Components/pc/todoList/pc_todoItems';
import CustomDelete from 'Components/pc/deleteFunction/customDelete';
import PCUserHome from "Components/pc/user/home";

//路由配置
const routes = [
    //首页
    {
        path: '/',
        exact: true,
        component: PCMain
    },
    //列表
    {
        path: '/list',
        exact: true,
        component: PCTopList
    },
    //用户主页
    {
        path: '/user/home',
        exact: true,
        component: PCUserHome
    },
    //代办事项
    {
        path: '/todo',
        exact: true,
        component: PCTodoItems
    },
    //删除功能
    {
        path: '/del',
        exact: true,
        component: CustomDelete
    },
];

//TODO  
// <Redirect from="/my/tologin" to="/my" />

class PCRoute extends React.Component{
    render(){
        return (
            routes.length?
                <BrowserRouter>
                    <Switch>
                        {routes.map((route, i) => (
                            <ExtendRoute key={i} {...route} />
                        ))}

                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            : ''
        )
    }
}

export default PCRoute;
