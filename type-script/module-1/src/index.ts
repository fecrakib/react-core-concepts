interface DictionaryTnterface<k,v>{
    set(key:k,value:v):void;
    get(key:k):v |undefined;
    has(key:k):boolean;
    remove(key:k):void;
    size():number;
    keys():k[];
    values():v[];
}

class Dictionary <k,v> implements DictionaryTnterface<k,v>{
    private items:Map<k,v>=new Map();
    set(key: k, value: v): void {
        this.items.set(key,value);
    }
    get(key: k): v | undefined {
        this..
    }
}