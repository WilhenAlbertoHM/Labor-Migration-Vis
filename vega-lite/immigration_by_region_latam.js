chart = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "height": {
      "step": 50,
    },
    "width": 1000,
    "config": {
        "background": "#5c3f25",
        "view": {
          "continuousHeight": 300,
          "continuousWidth": 300,
          "stroke": "transparent"
        }
      },
    "data": {
      "values": [
        {"region": "China", "percentage": 0.122}, 
        {"region": "Dominican Republic", "percentage": 0.120},
        {"region": "Haiti", "percentage": 0.096},
        {"region": "Vietnam", "percentage": 0.046},
        {"region": "El Salvador", "percentage": 0.044},
        {"region": "Cabo Verde", "percentage": 0.043},
        {"region": "Colombia", "percentage": 0.039}, 
        {"region": "Jamaica", "percentage": 0.037},
        {"region": "India", "percentage": 0.032},
        {"region": "Brazil", "percentage": 0.022},
      ]
    },
    "mark": "bar",
    "encoding": {
        "y": {
            "field": "region", 
            "type": "nominal", 
            "axis": { 
                "labelAngle": 0,
                "labelFontSize": 18,
                "labelFontWeight": "bold",
                "labelColor": "#e3e3e3",
            },
            "sort": "-x",
            "title": "",
        },
        "x": {
            "field": "percentage", 
            "type": "quantitative",
            "axis": { 
                "title": "", 
                "format": "%",
                "labelFontSize": 18,
                "labelFontWeight": "bold",
                "tickCount": 5,
                "labelColor": "#e3e3e3",
                "grid": false,
            },
        },
        "color": {
            "field": "region",
            "type": "nominal",
            "scale": {
              "domain": ["China", "Dominican Republic", "Haiti", "Vietnam", "El Salvador", "Cabo Verde", "Colombia", "Jamaica", "India", "Brazil"],
              "range": ["#A69080", "#FFA323", "#FFA323", "#A69080", "#FFA323", "#A69080", "#FFA323", "#A69080", "#A69080", "#FFA323"]
            },
            "legend": null
        },
        "tooltip": [
          {"content": "encoding"},
          {
            "field": "region",  
            "title": "Region"
          },
          {
            "field": "percentage", 
            "type": "quantitative",
            "title": "Percentage", 
            "format": ".1%"
          },
        ],
    },
}

vegaEmbed("#immigration-pctg-region-latam-chart", chart, {actions: false, renderer: "svg"});