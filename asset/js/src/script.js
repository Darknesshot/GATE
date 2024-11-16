const mes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho"];

const ctx = document.getElementById("grafico1");

new Chart(ctx, {
    type: "line",
    data: {
        labels: mes,
        datasets: [
            {
                label: "Saldo",
                data: [12, 19, 3, 5, 2, 3],
                borderColor: "green",
                backgroundColor: "rgb(0, 255, 34, 0.2)",
                fill: true,
            },
            {
                label: "Despesa",
                data: [13, 5, 4, 10, 6, 2],
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

new Chart(ctx2, {
    type: "doughnut",
    data: {
        labels: mes,
        datasets: [
            {
                label: "Distribuição de Vendas",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    "rgba(75, 192, 192, 0.7)",
                    "rgba(255, 99, 132, 0.7)",
                    "rgba(255, 206, 86, 0.7)",
                    "rgba(54, 162, 235, 0.7)",
                    "rgba(126, 40, 237, 0.7)",
                    "rgba(230, 30, 130, 0.7)",
                ],
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
