let n = 5;
let solution = "";
let comparacao = n;

for (let i = 0; i < n; i +=1){             
    for (let j = 0; j <= n; j += 1){
        if (j < comparacao) {
            solution = solution + " ";
        }
        else {
            solution = solution + "*";
        }
    }
    console.log(solution);
    solution = "";
    comparacao = comparacao - 1;

}


