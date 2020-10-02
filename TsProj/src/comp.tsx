import * as React from 'react'
import {UnityEngine} from "csharp";
import * as csharp from 'csharp'

namespace Raw {
    export namespace Props {
        export type TextProps = { text?: string, font?: any }
        export type ButtonProps = { onClick?: () => void }
        export type GridLayoutGroupProps = {cellSize?: csharp.UnityEngine.Vector2 }
        export type HorizontalLayoutGroupProps = { spacing: number }

    }

    export class Text extends React.Component<Props.TextProps> {
        render() {
            return React.createElement("UnityEngine.UI.Text", this.props, undefined);
        }
    }

    export class Button extends React.Component<Props.ButtonProps> {
        render() {
            return React.createElement("UnityEngine.UI.Button", this.props, undefined);
        }
    }

    export class GridLayoutGroup extends React.Component<Raw.Props.GridLayoutGroupProps> {
        render() {
            return React.createElement("UnityEngine.UI.GridLayoutGroup", this.props, undefined);
        }
    }

    export class GameObject extends React.Component {
        render() {
            return React.createElement("GameObject", this.props);
        }
    }

}

export class TextButton extends React.Component<Raw.Props.ButtonProps & Raw.Props.TextProps> {
    render() {
        return (<Raw.GameObject>
            {React.createElement(Raw.Text, {font: UnityEngine.Font.CreateDynamicFontFromOSFont("Arial", 12), ...this.props}, undefined)}
            {React.createElement(Raw.Button, this.props, undefined)}
            {this.props.children}
        </Raw.GameObject>);
    }
}

export class GridLayout extends React.Component<Raw.Props.GridLayoutGroupProps> {
    render() {
        return (<Raw.GameObject>
            {React.createElement(Raw.GridLayoutGroup, this.props, undefined)}
            {this.props.children}
        </Raw.GameObject>);
    }
}

export class Text extends React.Component<{ text: string, font?: any }> {
    render() {
        return (<Raw.GameObject>
            {React.createElement(Raw.Text, {font: UnityEngine.Font.CreateDynamicFontFromOSFont("Arial", 12), ...this.props}, undefined)}
            {this.props.children}
        </Raw.GameObject>);
    }
}
