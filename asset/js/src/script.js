const mes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho"];
let categ = ["Receitas", "Dispesas", "Outros"];

const ctx = document.getElementById("grafico1");
let dadosSaldo = [1512, 1400, 1200, 1375, 900, 1475]
let dadosDispesa = [1247, 1115, 1300, 975, 3000, 1400]

new Chart(ctx, {
    type: "line",
    data: {
        labels: mes,
        datasets: [
            {
                label: "Saldo",
                data: dadosSaldo,
                borderColor: "green",
                backgroundColor: "rgb(0, 255, 34, 0.2)",
                fill: true,
            },
            {
                label: "Despesa",
                data: dadosDispesa,
                borderColor: "red",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
                fill: true,
            },
        ],
    },

    options: {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                modde: "nearest",
                intersect: false,
            },
            legend: {
                display: false,
                position: "bottom",
                labels: {
                    color: "white",
                    usePointStyle: true,
                    boxWidth: 15,
                    font: {
                        size: 14,
                    },
                },
            },
        },
        elements: {
            line: {
                borderWidth: 2,
                tension: 0.4,
            },
            point: {
                redius: 5,
            },
        },
        hove: {
            mode: "nearest",
            intercet: true,
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 20,
                bottom: 10,
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "white",
                },
            },
            y: {
                ticks: {
                    color: "white",
                },
                beginAtZero: true,
            },
        },
    },
});

const ctx2 = document.getElementById("graficoLateral");
let receita = 250;
let dispesa = 175;
let outros = 800;

new Chart(ctx2, {
    type: "doughnut",
    data: {
        labels: categ,
        datasets: [
            {
                label: "Distribuição de Vendas",
                data: [receita, dispesa, outros],
                backgroundColor: ["rgba(75, 192, 192, 0.7)", "rgba(255, 99, 132, 0.7)", "rgba(255, 206, 86, 0.7)"],
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        cutout: "70%",
        rotation: Math.PI,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    color: "white",
                    usePointStyle: true,
                    boxWidth: 15,
                    font: {
                        size: 14,
                    },
                },
            },
        },
        tooltip: {
            enabled: true,
            mode: "nearest", // Seleciona o ponto mais próximo
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

const saldos = array.forEach(dadosSaldo => {
    let resultado = dadosSaldo - dadosDispesa
    return resultado
});