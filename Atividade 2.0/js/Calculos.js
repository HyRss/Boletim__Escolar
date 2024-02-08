let alunos = [];

function BoletimEscolar() {
    let nomeAluno = document.getElementById("nomeAluno").value;
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;
    let n4 = document.getElementById("n4").value;
    
    let media = (n1 + n2 + n3 + n4) / 4;
    //let menorNota = Math.min(n1, n2, n3, n4);
    //let maiorNota = Math.max(n1, n2, n3, n4);
    let situacao;

    if (media >= 70) {
        situacao = "Aprovado";
    } else if (media >= 50 && media < 70) {
        situacao = "Recuperação";
    } else if (media >= 40 && media < 60) {
        situacao = "Reprovado";
    } else 
        situacao = "Reprovado";

        alunos.push({
            nome: nomeAluno,
            nota1: n1,
            nota2: n2,
            nota3: n3,
            nota4: n4,
            media: media,
            situacao: situacao
        });
    
        exibirResultados();
    }
