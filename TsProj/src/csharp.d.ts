
declare module 'csharp' {
    interface $Ref<T> {}
    
    type $Extension<T1, T2> = {
        [P in keyof T2] : T2[P] extends (obj:T1, ...args: infer P) => infer R ? (...args: P) => R : never;
    }
    
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            
            set_Item(index: number, value: T):void;
        }
    }
    
    interface $Task<T> {}
    
    namespace UnityEngine {
        class Font extends UnityEngine.Object {
            public material: UnityEngine.Material;
            public fontNames: System.Array$1<string>;
            public dynamic: boolean;
            public ascent: number;
            public fontSize: number;
            public characterInfo: System.Array$1<UnityEngine.CharacterInfo>;
            public lineHeight: number;
            public constructor();
            public constructor(name: string);
            public static add_textureRebuilt(value: System.Action$1<UnityEngine.Font>):void;
            public static remove_textureRebuilt(value: System.Action$1<UnityEngine.Font>):void;
            public static CreateDynamicFontFromOSFont(fontname: string, size: number):UnityEngine.Font;
            public static CreateDynamicFontFromOSFont(fontnames: System.Array$1<string>, size: number):UnityEngine.Font;
            public static GetMaxVertsForString(str: string):number;
            public HasCharacter(c: System.Char):boolean;
            public static GetOSInstalledFontNames():System.Array$1<string>;
            public static GetPathsToOSFonts():System.Array$1<string>;
            public GetCharacterInfo(ch: System.Char, info: $Ref<UnityEngine.CharacterInfo>, size: number, style: UnityEngine.FontStyle):boolean;
            public GetCharacterInfo(ch: System.Char, info: $Ref<UnityEngine.CharacterInfo>, size: number):boolean;
            public GetCharacterInfo(ch: System.Char, info: $Ref<UnityEngine.CharacterInfo>):boolean;
            public RequestCharactersInTexture(characters: string, size: number, style: UnityEngine.FontStyle):void;
            public RequestCharactersInTexture(characters: string, size: number):void;
            public RequestCharactersInTexture(characters: string):void;
            
        }
        class Object extends System.Object {
            
        }
        class Material extends UnityEngine.Object {
            
        }
        class CharacterInfo extends System.ValueType {
            
        }
        enum FontStyle { Normal = 0, Bold = 1, Italic = 2, BoldAndItalic = 3 }
        class Vector2 extends System.ValueType {
            public x: number;
            public y: number;
            public static kEpsilon: number;
            public static kEpsilonNormalSqrt: number;
            public normalized: UnityEngine.Vector2;
            public magnitude: number;
            public sqrMagnitude: number;
            public static zero: UnityEngine.Vector2;
            public static one: UnityEngine.Vector2;
            public static up: UnityEngine.Vector2;
            public static down: UnityEngine.Vector2;
            public static left: UnityEngine.Vector2;
            public static right: UnityEngine.Vector2;
            public static positiveInfinity: UnityEngine.Vector2;
            public static negativeInfinity: UnityEngine.Vector2;
            public constructor(x: number, y: number);
            public get_Item(index: number):number;
            public set_Item(index: number, value: number):void;
            public Set(newX: number, newY: number):void;
            public static Lerp(a: UnityEngine.Vector2, b: UnityEngine.Vector2, t: number):UnityEngine.Vector2;
            public static LerpUnclamped(a: UnityEngine.Vector2, b: UnityEngine.Vector2, t: number):UnityEngine.Vector2;
            public static MoveTowards(current: UnityEngine.Vector2, target: UnityEngine.Vector2, maxDistanceDelta: number):UnityEngine.Vector2;
            public static Scale(a: UnityEngine.Vector2, b: UnityEngine.Vector2):UnityEngine.Vector2;
            public Scale(scale: UnityEngine.Vector2):void;
            public Normalize():void;
            public ToString():string;
            public ToString(format: string):string;
            public GetHashCode():number;
            public Equals(other: any):boolean;
            public Equals(other: UnityEngine.Vector2):boolean;
            public static Reflect(inDirection: UnityEngine.Vector2, inNormal: UnityEngine.Vector2):UnityEngine.Vector2;
            public static Perpendicular(inDirection: UnityEngine.Vector2):UnityEngine.Vector2;
            public static Dot(lhs: UnityEngine.Vector2, rhs: UnityEngine.Vector2):number;
            public static Angle(from: UnityEngine.Vector2, to: UnityEngine.Vector2):number;
            public static SignedAngle(from: UnityEngine.Vector2, to: UnityEngine.Vector2):number;
            public static Distance(a: UnityEngine.Vector2, b: UnityEngine.Vector2):number;
            public static ClampMagnitude(vector: UnityEngine.Vector2, maxLength: number):UnityEngine.Vector2;
            public static SqrMagnitude(a: UnityEngine.Vector2):number;
            public SqrMagnitude():number;
            public static Min(lhs: UnityEngine.Vector2, rhs: UnityEngine.Vector2):UnityEngine.Vector2;
            public static Max(lhs: UnityEngine.Vector2, rhs: UnityEngine.Vector2):UnityEngine.Vector2;
            public static SmoothDamp(current: UnityEngine.Vector2, target: UnityEngine.Vector2, currentVelocity: $Ref<UnityEngine.Vector2>, smoothTime: number, maxSpeed: number):UnityEngine.Vector2;
            public static SmoothDamp(current: UnityEngine.Vector2, target: UnityEngine.Vector2, currentVelocity: $Ref<UnityEngine.Vector2>, smoothTime: number):UnityEngine.Vector2;
            public static SmoothDamp(current: UnityEngine.Vector2, target: UnityEngine.Vector2, currentVelocity: $Ref<UnityEngine.Vector2>, smoothTime: number, maxSpeed: number, deltaTime: number):UnityEngine.Vector2;
            public static op_Addition(a: UnityEngine.Vector2, b: UnityEngine.Vector2):UnityEngine.Vector2;
            public static op_Subtraction(a: UnityEngine.Vector2, b: UnityEngine.Vector2):UnityEngine.Vector2;
            public static op_Multiply(a: UnityEngine.Vector2, b: UnityEngine.Vector2):UnityEngine.Vector2;
            public static op_Division(a: UnityEngine.Vector2, b: UnityEngine.Vector2):UnityEngine.Vector2;
            public static op_UnaryNegation(a: UnityEngine.Vector2):UnityEngine.Vector2;
            public static op_Multiply(a: UnityEngine.Vector2, d: number):UnityEngine.Vector2;
            public static op_Multiply(d: number, a: UnityEngine.Vector2):UnityEngine.Vector2;
            public static op_Division(a: UnityEngine.Vector2, d: number):UnityEngine.Vector2;
            public static op_Equality(lhs: UnityEngine.Vector2, rhs: UnityEngine.Vector2):boolean;
            public static op_Inequality(lhs: UnityEngine.Vector2, rhs: UnityEngine.Vector2):boolean;
            public static op_Implicit(v: UnityEngine.Vector3):UnityEngine.Vector2;
            public static op_Implicit(v: UnityEngine.Vector2):UnityEngine.Vector3;
            
        }
        class Vector3 extends System.ValueType {
            
        }
        
    }
    namespace System {
        class Object {
            
        }
        class Void extends System.ValueType {
            
        }
        class ValueType extends System.Object {
            
        }
        type Action$1<T> = (obj: T) => void;
        type MulticastDelegate = (...args:any[]) => any;
        var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
        class Delegate extends System.Object {
            
        }
        class String extends System.Object {
            
        }
        class Array extends System.Object {
            
        }
        class Boolean extends System.ValueType {
            
        }
        class Int32 extends System.ValueType {
            
        }
        class Char extends System.ValueType {
            
        }
        class Enum extends System.ValueType {
            
        }
        class Single extends System.ValueType {
            
        }
        
    }
    namespace UnityEngine.Font {
        type FontTextureRebuildCallback = () => void;
        var FontTextureRebuildCallback: {new (func: () => void): FontTextureRebuildCallback;}
        
    }
    
}