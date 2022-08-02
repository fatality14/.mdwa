export function formClassName(ownClassName?: string, parentClassName?: string){
    
    if(ownClassName == parentClassName){
        return ownClassName;
    }
    
    let ret: string = '';

    if(ownClassName){
        ret += ownClassName;
    }

    if(ret.length != 0){
        ret += ' ';
    }

    if(parentClassName){
        ret += parentClassName;
    }

    return ret;
}