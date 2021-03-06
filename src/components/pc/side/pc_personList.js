import React from 'react';
import {Icon} from 'antd';
import PCItem from 'Components/pc/side/pc_item';

class PCPersonList extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        return (
            <div className="personList">
                <div>
                    <span><strong>{this.props.title}</strong></span>
                    {
                        this.props.showMoreUrl?
                            <span className="showMore">
                                <a className="a-style" href={this.props.showMoreUrl}>查看更多<Icon type="right" /></a>
                            </span>
                        :''
                    }    
                </div>
                <div className="underline"></div>
                <div>
                    {   
                        this.props.itemList?
                            this.props.itemList.map((item,index) => {
                                return (
                                    <PCItem key={index} userId={item.userId} name={item.name} description={item.description} headSrc={item.headSrc} />
                                )
                            })
                        :''
                    }         
                </div>
            </div>
        )
    }
}

export default PCPersonList;