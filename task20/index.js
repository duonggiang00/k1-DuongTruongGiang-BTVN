function printTree(){
    let a = parseFloat(document.getElementById("n").value);
    let b = document.getElementById("character").value;
    let tree="";
    for(let i = 1; i<=a;i++){
        let line="";
        for(let j=0;j<a-i;j++){
            line+=" ";
        }
        for(let k=0;k<2*i-1;k++){
            line+=b;
        }
        tree += line + "\n";
        if(i==a){
            let trunk="";
            for(let j=0;j<a-1;j++){
                trunk+=" ";
            }trunk+=b;
            tree += trunk + "\n";
        }
        
    }document.getElementById("tree").innerHTML=tree;
    
    
}