import * as React from "react";

const jsx = require('./jsx')
import {GridLayout, Text, TextButton} from "./comp";
import * as csharp from "csharp";


class Template extends React.Component<{},{ list: number }> {
    constructor(props) {
        super(props);
        this.state = {
            list: 2
        };
    }
    render() {
        return (
            <GridLayout cellSize={new csharp.UnityEngine.Vector2(50,50)}>
                <Text text={this.state.list.toString()}/>
                <TextButton text={"+1"} onClick={()=>{this.setState((s,p)=>{return{list:s.list+1}})}}/>
                <TextButton text={"+5"} onClick={()=>{this.setState((s,p)=>{return{list:s.list+5}})}}/>
                <TextButton text={"-2"} onClick={()=>{this.setState((s,p)=>{return{list:s.list-2}})}}/>
            </GridLayout>
        );
    }
}

jsx.reconciler.updateContainer(<Template/>,jsx.container, null,()=>{});
