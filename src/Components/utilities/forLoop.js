
export function loop(value,it){
    const data = []
    // console.log(it);
    for(var i=0;i<Math.round(it);i++){
        data.push(value);
    }
    return data;
}
