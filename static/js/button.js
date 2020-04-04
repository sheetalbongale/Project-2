function drawMap(data) {
    
        var button_layer_1_height = 1.12
        var button_layer_2_height = 1.0
        var annotation_offset = 0.04
    
        let plotData = [
        {
            type: "choropleth",
            locationmode: "USA-states",
            locations: data.map(e => e.abbr),
            z: data.map(e => parseInt(e.yearly_barrels)),
            text: data.map(e => e.state),
            z: z_data,
            type:'surface',
            colorscale:'Viridis'
        }]

        var updatemenus = [
        {
            buttons: [
                {
                    args: ['type', 'surface'],
                    label: '3D Surface',
                    method: 'restyle'
                },
                {
                    args: ['type', 'heatmap'],
                    label:'Heatmap',
                    method:'restyle'
                },
                {
                    args: ['type', 'contour'],
                    label:'Contour',
                    method:'restyle'
                }
            ],
            direction: 'left',
            pad: {'r': 10, 't': 10},
            showactive: true,
            type: 'buttons',
            x: 0.15,
            xanchor: 'left',
            y: button_layer_2_height,
            yanchor: 'top'
        },
        {
            buttons: [
                {
                    args: ['reversescale', true],
                    label: 'Reverse',
                    method: 'restyle'
                },
                {
                    args: ['reversescale', false],
                    label:'Undo Reverse',
                    method:'restyle'
                }
            ],
            direction: 'down',
            pad: {'r': 10, 't': 10},
            showactive: true,
            type: 'dropdown',
            x: 0.56,
            xanchor: 'left',
            y: button_layer_2_height,
            yanchor: 'top'
        },
        {
            buttons: [
                {
                    args: [{'contours.showlines':false, 'type':'contour'}],
                    label: 'Hide lines',
                    method: 'restyle'
                },
                {
                    args: [{'contours.showlines':true, 'type':'contour'}],
                    label:'Show lines',
                    method:'restyle'
                }
            ],
            direction: 'down',
            pad: {'r': 10, 't': 10},
            showactive: true,
            type: 'dropdown',
            x: 0.78,
            xanchor: 'left',
            y: button_layer_2_height,
            yanchor: 'top'
        },
        {
            buttons: [
                {
                    args: ['colorscale', 'Viridis'],
                    label: 'Viridis',
                    method: 'restyle'
                },
                {
                    args: ['colorscale', 'Electric'],
                    label:'Electric',
                    method:'restyle'
                },
                {
                    args: ['colorscale', 'Earth'],
                    label:'Earth',
                    method:'restyle'
                },
                {
                    args: ['colorscale', 'Hot'],
                    label:'Hot',
                    method:'restyle'
                },
                {
                    args: ['colorscale', 'Jet'],
                    label:'Jet',
                    method:'restyle'
                },
                {
                    args: ['colorscale', 'Portland'],
                    label:'Portland',
                    method:'restyle'
                },
                {
                    args: ['colorscale', 'Rainbow'],
                    label:'Rainbow',
                    method:'restyle'
                },
                {
                    args: ['colorscale', 'Blackbody'],
                    label:'Blackbody',
                    method:'restyle'
                },

                {
                    args: ['colorscale', 'Cividis'],
                    label:'Cividis',
                    method:'restyle'
                }
            ],
            direction: 'left',
            pad: {'r': 10, 't': 10},
            showactive: true,
            type: 'buttons',
            x: 0.15,
            xanchor: 'left',
            y: button_layer_1_height,
            yanchor: 'top'
        },
    ]

    var annotations = [
        {
        text: 'Trace type:',
        x: 0,
        y: button_layer_2_height - annotation_offset,
        yref: 'paper',
        align: 'left',
        showarrow: false
        },
        {
        text: 'Colorscale:',
        x: 0,
        y: button_layer_1_height - annotation_offset,
        yref: 'paper',
        align: 'left',
        showarrow: false
        },
    ]

    var layout = {
        margin: {t: 0, b: 0, l: 0, r: 0},
        updatemenus: updatemenus,
        annotations: annotations,
        scene: {
            xaxis:{
                gridcolor: 'rgb(255, 255, 255)',
                zerolinecolor: 'rgb(255, 255, 255)',
                showbackground: true,
                backgroundcolor:'rgb(230, 230,230)'
            },
            yaxis: {
                gridcolor: 'rgb(255, 255, 255)',
                zerolinecolor: 'rgb(255, 255, 255)',
                showbackground: true,
                backgroundcolor: 'rgb(230, 230, 230)'
            },
            zaxis: {
                gridcolor: 'rgb(255, 255, 255)',
                zerolinecolor: 'rgb(255, 255, 255)',
                showbackground: true,
                backgroundcolor: 'rgb(230, 230,230)'
            },
            aspectratio: {x: 1, y: 1, z: 0.7},
            aspectmode: 'manual'
    }
    }


    Plotly.newPlot("myDiv", plotData, layout);

    });

function init() {

    d3.json(`/state_data`).then(data => {
        console.log("Heat Map")
    
        drawMap(data);
    })
}

init();