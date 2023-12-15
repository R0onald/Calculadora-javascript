function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    const niveis = [
        { limite: 10, nome: "Ferro" },
        { limite: 20, nome: "Bronze" },
        { limite: 50, nome: "Prata" },
        { limite: 80, nome: "Ouro" },
        { limite: 90, nome: "Diamante" },
        { limite: 100, nome: "Lendário" },
        { limite: Infinity, nome: "Imortal" },
    ];

    let nivel = "Imortal"; // Valor padrão para vitórias >= 101

    for (const item of niveis) {
        if (vitorias <= item.limite) {
            nivel = item.nome;
            break;
        }
    }

    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

// Exemplo de uso
calcularNivel(25, 5);
