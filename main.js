let notas = [];

let quantidadeAlunos;
let contador = 0;

let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

let soma = 0;

quantidadeAlunos = Number(prompt("Quantos alunos tem na turma?"));

do {
    notas[contador] = Number(prompt("Digite a nota do aluno " + (contador + 1) + ":"));

    soma = soma + notas[contador];

    if (notas[contador] >= 7) {
        console.log("Aluno " + (contador + 1) + ": Aprovado");
        aprovados++;
    }
    else if (notas[contador] >= 5) {
        console.log("Aluno " + (contador + 1) + ": Recuperação");
        recuperacao++;
    }
    else {
        console.log("Aluno " + (contador + 1) + ": Reprovado");
        reprovados++;
    }

    contador++;

} while (contador < quantidadeAlunos);

let media = soma / quantidadeAlunos;

console.log("Resultado Final:.");
console.log("Aprovados: " + aprovados);
console.log("Recuperação: " + recuperacao);
console.log("Reprovados: " + reprovados);
console.log("Média da turma: " + media.toFixed(2));


alert(
    "RESULTADO FINAL\n\n" +
    "Aprovados: " + aprovados + "\n" +
    "Recuperação: " + recuperacao + "\n" +
    "Reprovados: " + reprovados + "\n" +
    "Média da turma: " + media.toFixed(2)
);