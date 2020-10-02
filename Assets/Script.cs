using System.Collections;
using System.Collections.Generic;
using Puerts;
using UnityEngine;

public class Script : MonoBehaviour
{
    public static GameObject o;
    void Start()
    {
        o = gameObject;
        JsEnv jsEnv = new JsEnv();
        jsEnv.Eval("require('./index')");
    }
    
}
