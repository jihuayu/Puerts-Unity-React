const Reconciler = require('react-reconciler')
const React = require('React')
import * as csharp from 'csharp'
import * as puerts from 'puerts'

const Components = {};

function deepEquals(x, y) {
    if (x === y) return true;
    const xEqual = x.Equals;
    const yEqual = y.Equals;
    if (xEqual || yEqual) {
        return x.Equals(y);
    }
    if (!(x instanceof Object) || !(y instanceof Object)) return false;
    for (var p in x) { // all x[p] in y
        if (p === 'children') continue;
        if (!deepEquals(x[p], y[p])) return false;
    }

    for (var p in y) {
        if (p === 'children') continue;
        if (!x.hasOwnProperty(p)) return false;
    }

    return true;
}

class UnityWidget {

    constructor(type, props) {
        this.type = type;
        this.callbackRemovers = {};
        try {
            this.init(type, props);
        } catch (e) {
            console.error("create " + type + " throw " + e);
        }
    }

    init(type, props) {
        console.log('init ' + type)
        if (type === 'GameObject') {
            this.nativePtr = new csharp.UnityEngine.GameObject();
        } else {
            this.myPropsWillChange = {};
            this.callBackWillAdd = {};
            for (const key in props) {
                let val = props[key];
                if (typeof val === 'function') {
                    this.callBackWillAdd[key] = val;
                } else if (key !== 'children') {
                    this.myPropsWillChange[key] = val;
                }
            }
        }
    }

    mergeComp() {
        if (this.compPtr) {
            for (let i in this.myPropsWillChange) {
                if (this.compPtr[i] !== undefined) {
                    this.compPtr[i] = this.myPropsWillChange[i];
                }
            }
            for (let i in this.callBackWillAdd) {
                this.unbind(i);
                this.bind(i, this.callBackWillAdd[i])
                this.callbackRemovers[i] = this.callBackWillAdd[i];
            }
        }
    }

    getComp(gameObject) {
        if (!this.nativePtr) {
            console.log(this.type)
            this.nativePtr = gameObject;
            let cType = csharp;
            for (let i of this.type.split('.')) {
                cType = cType[i];
            }
            this.compPtr = gameObject.AddComponent(puerts.$typeof(cType));
        }
    }

    bind(name, callback) {
        if (this.compPtr[name] !== undefined) {
            this.callbackRemovers[name] = callback;
            this.compPtr[name].AddListener(callback)
        }

    }

    update(oldProps, newProps) {
        this.myPropsWillChange = {};
        this.callBackWillAdd = {};

        let propChange = false;
        for (var key in newProps) {
            let oldProp = oldProps[key];
            let newProp = newProps[key];
            if (key !== 'children' && oldProp !== newProp) {
                if (typeof newProp === 'function') {
                    this.callBackWillAdd[key] = newProp;
                } else {
                    this.myPropsWillChange[key] = newProp;
                    propChange = true;
                }
            }
        }
        this.mergeComp();
    }

    unbind(name) {
        if (this.compPtr && this.compPtr[name] !== undefined) {
            let remover = this.callbackRemovers[name];
            this.callbackRemovers[name] = undefined;
            if (remover) {
                this.compPtr[name].RemoveListener(remover);
            }
        }
    }

    unbindAll() {
        if (this.compPtr) {
            for (var key in this.callbackRemovers) {
                if (this.compPtr[name] !== undefined) {
                    this.compPtr[name].RemoveAllListeners(remover);
                }
            }
            this.callbackRemovers = {};
        }
    }

    appendChild(child) {
        console.log("add", child.type)
        if (!child.nativePtr) {
            child.getComp(this.nativePtr);
            child.mergeComp();
        } else {
            child.nativePtr.transform.SetParent(this.nativePtr.transform)
        }
    }

    removeChild(child) {
        child.unbindAll();
        if (child.compPtr) {
            csharp.UnityEngine.Object.Destroy(child.compPtr);
        } else {
            child.nativePtr.transform.SetParent(null)
            csharp.UnityEngine.Object.Destroy(child.nativePtr);
        }
    }
}

class UnityWidgetRoot {

    constructor(nativePtr) {
        this.nativePtr = nativePtr;
    }

    appendChild(child) {
        if (!child.nativePtr) {
            child.getComp(this.nativePtr);
            child.mergeComp();
        } else {
            console.log(this.type, child.nativePtr.transform)
            child.nativePtr.transform.SetParent(this.nativePtr.transform)
        }
    }

    removeChild(child) {
        child.unbindAll();
        if (child.compPtr) {
            csharp.UnityEngine.Object.Destroy(child.compPtr);
        } else {
            child.nativePtr.transform.SetParent(null)
            csharp.UnityEngine.Object.Destroy(child.nativePtr);
        }
    }

    addToViewport(z) {
        if (!this.Added) {
            this.Added = true;
        }
    }

    removeFromViewport() {
        this.Added = false;//?????
    }

    getWidget() {
        return this.nativePtr;
    }
}

const hostConfig = {
    getRootHostContext() {
        return {};
    },
    //CanvasPanel()的parentHostContext是getRootHostContext返回的值
    getChildHostContext(parentHostContext) {

        return parentHostContext;//no use, share one
    },
    appendInitialChild(parent, child) {
        parent.appendChild(child);
    },
    appendChildToContainer(container, child) {
        container.appendChild(child);
    },
    appendChild(parent, child) {
        parent.appendChild(child);
    },
    createInstance(type, props) {
        return new UnityWidget(type, props);
    },
    createTextInstance(text) {
        return new UnityWidget("TextBlock", {Text: text});
    },
    finalizeInitialChildren() {
        return false
    },
    getPublicInstance(instance) {
        console.warn('getPublicInstance');
        return instance
    },
    now: Date.now,
    prepareForCommit() {
        //log('prepareForCommit');

    },
    resetAfterCommit(container) {
        container.addToViewport(0);

    },
    resetTextContent() {
        console.error('resetTextContent not implemented!');
    },
    shouldSetTextContent(type, props) {
        return false
    },

    commitTextUpdate(textInstance, oldText, newText) {
        if (oldText !== newText) {
            textInstance.update({}, {Text: newText})
        }
    },

    //return false表示不更新，真值将会出现到commitUpdate的updatePayload里头
    prepareUpdate(instance, type, oldProps, newProps) {
        try {
            return !deepEquals(oldProps, newProps);
        } catch (e) {
            console.error(e.message);
            return true;
        }
    },
    commitUpdate(instance, updatePayload, type, oldProps, newProps) {
        try {
            instance.update(oldProps, newProps);
        } catch (e) {
            console.error("commitUpdate fail!, " + e);
        }
    },
    removeChildFromContainer(container, child) {
        container.removeChild(child);
    },
    removeChild(parent, child) {
        parent.removeChild(child);
    },

    //useSyncScheduling: true,
    supportsMutation: true,
    isPrimaryRenderer: true,
    supportsPersistence: false,
    supportsHydration: false,

    shouldDeprioritizeSubtree: undefined,
    setTimeout: undefined,
    clearTimeout: undefined,
    cancelDeferredCallback: undefined,
    noTimeout: undefined,
    scheduleDeferredCallback: undefined,
}

export const reconciler = Reconciler(hostConfig)
let root = new UnityWidgetRoot(csharp.Script.o);
export const container = reconciler.createContainer(root, false, false);
