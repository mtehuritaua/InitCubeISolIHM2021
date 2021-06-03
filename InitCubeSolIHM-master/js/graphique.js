class Graphique {
    constructor(idBalise,type, source, grandeur, unite) {
        //console.log("instanciation du graphique de type "+type+" de la source "+source);
        this.idBalise = idBalise;
        this.type = type;
        this.source = source;
        this.grandeur = grandeur;
        this.unite = unite;
        //console.log("<canvas id=\"graphique"+this.type+this.source+this.grandeur+"\"></canvas>");
        $("#"+idBalise).append("<div class=\"graphe\"><canvas id=\"graphique"+this.type+this.source+this.grandeur+"\"></canvas></div>");
        //console.log("graphique"+this.type+this.source)+this.grandeur;
        let identifiant = "graphique"+this.type+this.source+this.grandeur;
        this.ctx = document.getElementById(identifiant).getContext('2d');//$("#graphique"+type+source).getContext("2d");
        this.chart = new Chart(this.ctx,
            {
                type: 'line',
                data: { 
                    datasets: [{
                        label: this.type+" - "+this.source+" - "+this.grandeur+" en "+this.unite,
                        fill: false,
                        borderColor: this.dynamicColors()
                    }],
                },
                options: {
                    responsive: true,
                    aspectRatio: 1.4,
                    scales: {
                        xAxes: [{
                            display: true,
                            type: 'time',
                            time: {
                                // round: 'day'                                                                                                                                                                            
                                tooltipFormat: 'DD-MM-YYYY HH:mm',
                                displayFormats: {
                                    second: 'HH:mm:ss',
                                    minute: 'HH:mm',
                                    hour: 'HH'
                                }
                            },
                            distribution: 'linear',
                            bounds: 'ticks',
                            ticks: {
                                source: 'auto'
                            }
                        }]
                    }
                }
            });
    }

    ajouterMesure(date, mesure) {
        this.chart.data.labels.push(date);
        this.chart.data.datasets.forEach((dataset) => {
            dataset.data.push(mesure);
        });
        this.chart.update();
    }

    dynamicColors() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
}