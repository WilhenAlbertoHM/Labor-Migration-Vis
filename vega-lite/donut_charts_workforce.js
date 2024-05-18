chart = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "config": { "background": "#865D36" },
    "data": {
        "values": [
          {"category": "MA", "value": 0.63},
          {"category": "~", "value": 0.37},
        ],
      },
    "layer": [
        {
            "mark": {"type": "arc", "outerRadius": 120, "innerRadius": 50},
            "encoding": {
                "theta": {"field": "value", "type": "quantitative"},
                "color": {
                    "field": "category",
                    "type": "nominal",
                    "scale": {
                        "domain": ["MA", "~"],
                        "range": ["#AFD275", "#A69080"]
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

chart1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "config": { "background": "#865D36" },
    "title": {
        "text": "Build. & Grounds, Clean. & Maint.",
        "color": "#e3e3e3", 
        "fontSize": 20,
    },
    "data": {
        "values": [
          {"category": "MA", "value": 0.118},
          {"category": "~", "value": 0.882},
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
                        "range": ["#AFD275", "#A69080"]
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
    "config": { "background": "#865D36" },
    "title": {
        "text": "Food Preparation & Service", 
        "color": "#e3e3e3", 
        "fontSize": 20,
    },
    "data": {
      "values": [
        {"category": "MA", "value": 0.108},
        {"category": "~", "value": 0.892},
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
                        "domain": ["MA", "~"],
                        "range": ["#AFD275", "#A69080"]
                    },
                    "legend": null
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
            "transform": [{"filter": "datum.category == 'MA'"}]
        },
    ]
}

chart3 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "config": { "background": "#865D36" },
    "title": {
        "text": "Office & Admin. Support", 
        "color": "#e3e3e3", 
        "fontSize": 20,
    },
    "data": {
      "values": [
        {"category": "MA", "value": 0.106},
        {"category": "~", "value": 0.894},
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
                        "domain": ["MA", "~"],
                        "range": ["#AFD275", "#A69080"]
                    },
                    "legend": null
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
            "transform": [{"filter": "datum.category == 'MA'"}]
        },
    ]
}

chart4 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "config": { "background": "#865D36" },
    "title": {
        "text": "Production", 
        "color": "#e3e3e3", 
        "fontSize": 20,
    },
    "data": {
      "values": [
        {"category": "MA", "value": 0.078},
        {"category": "~", "value": 0.922},
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
                        "domain": ["MA", "~"],
                        "range": ["#FFE400", "#A69080"]
                    },
                    "legend": null
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
            "transform": [{"filter": "datum.category == 'MA'"}]
        },
    ]
}

chart5 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "config": { "background": "#865D36" },
    "title": {
        "text": "Sales", 
        "color": "#e3e3e3", 
        "fontSize": 20,
    },
    "data": {
      "values": [
        {"category": "MA", "value": 0.077},
        {"category": "~", "value": 0.923},
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
                        "domain": ["MA", "~"],
                        "range": ["#FFE400", "#A69080"]
                    },
                    "legend": null
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
            "transform": [{"filter": "datum.category == 'MA'"}]
        },
    ]
}

chart6 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "config": { "background": "#865D36" },
    "title": {
        "text": "Transport. & Material Moving", 
        "color": "#e3e3e3", 
        "fontSize": 20,
    },
    "data": {
      "values": [
        {"category": "MA", "value": 0.072},
        {"category": "~", "value": 0.928},
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
                        "domain": ["MA", "~"],
                        "range": ["#FFE400", "#A69080"]
                    },
                    "legend": null
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
            "transform": [{"filter": "datum.category == 'MA'"}]
        },
    ]
}

chart7 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "config": { "background": "#865D36" },
    "title": {
        "text": "Construction", 
        "color": "#e3e3e3", 
        "fontSize": 20,
    },
    "data": {
      "values": [
        {"category": "MA", "value": 0.071},
        {"category": "~", "value": 0.929},
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
                        "domain": ["MA", "~"],
                        "range": ["#FFE400", "#A69080"]
                    },
                    "legend": null
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
            "transform": [{"filter": "datum.category == 'MA'"}]
        },
    ]
}

vegaEmbed("#workforce-donut", chart, {actions: false, renderer: "svg"});
vegaEmbed("#workforce-donut1", chart1, {actions: false, renderer: "svg"});
vegaEmbed("#workforce-donut2", chart2, {actions: false, renderer: "svg"});
vegaEmbed("#workforce-donut3", chart3, {actions: false, renderer: "svg"});
vegaEmbed("#workforce-donut4", chart4, {actions: false, renderer: "svg"});
vegaEmbed("#workforce-donut5", chart5, {actions: false, renderer: "svg"});
vegaEmbed("#workforce-donut6", chart6, {actions: false, renderer: "svg"});
vegaEmbed("#workforce-donut7", chart7, {actions: false, renderer: "svg"});