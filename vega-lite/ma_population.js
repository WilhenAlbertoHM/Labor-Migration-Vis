chart = {
    "height": 400,
    "width": {
      "step": 70
    },
    "config": {
        "background": "#5c3f25" ,
        "view": {
          "continuousHeight": 300,
          "continuousWidth": 300,
          "stroke": "transparent"
        }
      },
    "description": "Enrollment duration (in months) of all Oncology years with different colors.",
    "data": {
      "values": [
        {"year": 2010, "population-percent-chg": 0.000, "population": 631016},
        {"year": 2011, "population-percent-chg": 0.029, "population": 649272},
        {"year": 2012, "population-percent-chg": 0.068, "population": 673885},
        {"year": 2013, "population-percent-chg": 0.115, "population": 703697},
        {"year": 2014, "population-percent-chg": 0.157, "population": 730094},
        {"year": 2015, "population-percent-chg": 0.201, "population": 757948},
        {"year": 2016, "population-percent-chg": 0.236, "population": 779696},
        {"year": 2017, "population-percent-chg": 0.286, "population": 811292},
        {"year": 2018, "population-percent-chg": 0.342, "population": 846780},
        {"year": 2019, "population-percent-chg": 0.353, "population": 853735},
        {"year": 2020, "population-percent-chg": 0.312, "population": 828140},
        {"year": 2021, "population-percent-chg": 0.422, "population": 891350},
        {"year": 2022, "population-percent-chg": 0.444, "population": 911038},
      ]
    },
    "mark": {
        "type": "line",
        "point": {
            "fill": "#f4a261"
        },
        "tooltip": true,
        "size": 8,
    },
    "encoding": {
        "x": {
            "field": "year",
            "type": "ordinal",
            "title": null,
            "axis": {
                "labelColor": "#e3e3e3",
                "labelFontSize": 20,
                "labelFontWeight": "bold",
                "labelAngle": 0,
            }
        },
        "y": {
            "field": "population-percent-chg",
            "type": "quantitative",
            "title": null,
            "axis": {
                "labelColor": "#e3e3e3",
                "labelFontSize": 20,
                "labelFontWeight": "bold",
                "tickCount": 5,
                "grid": false,
                "format": ".0%"
            }
        },
        "color": {
            "value": "#f4a261",
        },
        "tooltip": [
            {"content": "encoding"},
            {
                "field": "year",
                "type": "ordinal",
                "title": "Year"
            },
            {
                "field": "population",
                "type": "quantitative",
                "title": "Hispanic Population",
                "format": ",d"
            },
            {
              "field": "population-percent-chg", 
              "type": "quantitative",
              "title": "Percent Growth", 
              "format": ".1%"
            }
          ],
    }
  }

vegaEmbed("#pop-growth-graph", chart, {"actions": false, "renderer": "svg"});
  