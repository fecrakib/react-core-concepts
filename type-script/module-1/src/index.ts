
interface DictionaryInterface<K,V> 
{

set(key:K,value:V):void;
get(key:K):V|undefined;
has(key:K):boolean;
remove(key:K):void;
size():number;
keys():K[];
values():V[];

}
class Dictionary<K,V>implements DictionaryInterface<K,V>{
    private items:Map<K,V>=new Map();
    set(key: K, value: V): void {
        this.items.set(key,value);
    }
    get(key: K): V | undefined {
        return this.items.get(key);
    }
    has(key: K): boolean {
        return this.items.has(key);
    }
    remove(key: K): void {
         this.items.delete(key);

    }
    size(): number {
        return this.items.size;
    }
    keys(): K[] {
        return Array.from(this.items.keys())
    }
    values(): V[] {
        return Array.from(this.items.values())
    }
}

const dictionary=new Dictionary<number,string>();
dictionary.set(1,"One");
dictionary.set(2,"Two");
dictionary.set(3,"Three");
console.log("Dictionary size:",dictionary.size());
console.log("Dictionary Values:",dictionary.values())