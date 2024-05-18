chart = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "height": 350,
    "width": {
      "step": 110
    },
    "config": {
        "background": "#865D36",
        "view": {
          "continuousHeight": 300,
          "continuousWidth": 300,
          "stroke": "transparent"
        }
      },
    "data": {
      "values": [
        {"region": "Latin America", "percentage": 0.409}, 
        {"region": "Asia", "percentage": 0.303},
        {"region": "Europe", "percentage": 0.172},
        {"region": "Africa", "percentage": 0.094},
        {"region": "North America", "percentage": 0.020},
        {"region": "Oceania", "percentage": 0.003},
      ]
    },
    "mark": "bar",
    "encoding": {
        "x": {
            "field": "region", 
            "type": "nominal", 
            "axis": { 
                "labelAngle": 0,
                "labelFontSize": 18,
                "labelFontWeight": "bold",
                "labelColor": "#e3e3e3",
            },
            "sort": "-y",
            "title": "",
        },
        "y": {
            "field": "percentage", 
            "type": "quantitative",
            "axis": { 
                "title": "", 
                "format": "%",
                "labelFontSize": 18,
                "labelFontWeight": "bold",
                "tickCount": 4,
                "labelColor": "#e3e3e3",
                "grid": false
            },
        },
        "color": {
            "field": "region",
            "type": "nominal",
            "scale": {
              "domain": ["Latin America", "Asia", "Europe", "Africa", "North America", "Oceania"],
              "range": ["#EFB11D", "#FFA323", "#FF790c", "#FF590C", "#E6550D", "#E6100F"],
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

vegaEmbed("#immigration-pctg-region-chart", chart, {actions: false, renderer: "svg"});