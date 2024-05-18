chart1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "config": { "background": "#5c3f25" },
    "title": {
        "text": "1990 - 2000", 
        "color": "#e3e3e3", 
        "fontSize": 20,
    },
    "data": {
        "values": [
          {"category": "MA", "value": 0.347},
          {"category": "~", "value": 0.653},
        ],
      },
    "mark": {"type": "arc", "innerRadius": 50},
    "layer": [
        {
            "mark": {"type": "arc", "innerRadius": 50},
            "encoding": {
                "theta": {"field": "value", "type": "quantitative"},
                "color": {
                    "field": "category",
                    "type": "nominal",
                    "scale": {
                        "domain": ["MA", "~"],
                        "range": ["#EFB11D", "#A69080"]
                    },
                    "legend": null
                }
            },
        },
        {
            "mark": {
                "type": "text", 
                "baseline": "middle", 
                "fontSize": 20,
                "fontWeight": "bold"
            },
            "encoding": {
                "text": { 
                    "field": "value", 
                    "type": "quantitative",
                    "format": ".1%"
                 },
                "color": {"value": "#e3e3e3"},
            },
            "transform": [{"filter": "datum.category == 'MA'"}]
        },
    ],
}

chart2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "config": { "background": "#5c3f25" },
    "title": {
        "text": "2000 - 2022", 
        "color": "#e3e3e3", 
        "fontSize": 20,
    },
    "data": {
      "values": [
        {"category": "Foreign-Born", "value": 0.63},
        {"category": "Non-Foreign-Born", "value": 0.37}
      ]
    },
    "mark": {"type": "arc", "innerRadius": 50},
    "layer": [
        {
            "mark": {"type": "arc", "innerRadius": 50},
            "encoding": {
                "theta": { "field": "value", "type": "quantitative" },
                "color": {
                    "field": "category",
                    "type": "nominal",
                    "scale": {
                        "domain": ["Foreign-Born", "Non-Foreign-Born"],
                        "range": ["#EFB11D", "#A69080"]
                    },
                    "legend": {
                        "title": null,
                        "labelFontSize": 12,
                        "labelFontWeight": "bold",
                        "labelColor": "#e3e3e3",
                    }
                },
            }
        },
        {
            "mark": {
                "type": "text", 
                "baseline": "middle", 
                "fontSize": 20,
                "fontWeight": "bold",
            },
            "encoding": {
                "text": { 
                    "field": "value", 
                    "type": "quantitative",
                    "format": ".1%"
                 },
                "color": { "value": "#e3e3e3" },
            },
            "transform": [{"filter": "datum.category == 'Foreign-Born'"}]
        },
    ]
}

vegaEmbed("#immigration-ma-donut1", chart1, {actions: false, renderer: "svg"});
vegaEmbed("#immigration-ma-donut2", chart2, {actions: false, renderer: "svg"});