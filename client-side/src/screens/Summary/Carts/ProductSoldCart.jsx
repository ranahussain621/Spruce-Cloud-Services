import React from 'react'
import ReactApexcharts from 'react-apexcharts';
import '../../../style/chart.css';
export default function ProductSoldCart() {
  const options={
    "chart": {
        "animations": {
            "enabled": false,
            "easing": "swing"
        },
        "background": "#fff",
        "foreColor": "#373D3F",
        "fontFamily": "Roboto",
        "height": 189,
        "id": "BVBtR",
        "toolbar": {
            "show": false
        },
        "type": "bar",
        "width": 353
    },
    "plotOptions": {
        "bar": {
            "columnWidth": "92%"
        },
        "radialBar": {
            "hollow": {
                "background": "#fff"
            },
            "dataLabels": {
                "name": {},
                "value": {},
                "total": {}
            }
        },
        "pie": {
            "donut": {
                "labels": {
                    "name": {},
                    "value": {},
                    "total": {}
                }
            }
        }
    },
    "dataLabels": {
        "enabled": false,
        "style": {
            "fontWeight": 700
        }
    },
    "grid": {
        "show": false,
        "padding": {
            "right": 25,
            "left": 15
        }
    },
    "legend": {
        "fontSize": 14,
        "offsetY": 0,
        "markers": {
            "shape": "square",
            "size": 8
        },
        "itemMargin": {
            "vertical": 0
        }
    },
    "series": [
        {
            "name": "Column",
            "data": [
                {
                    "x": "Item 1",
                    "y": 10
                },
                {
                    "x": "Item 2",
                    "y": 20
                },
                {
                    "x": "Item 3",
                    "y": 30
                },
                {
                    "x": "Item 4",
                    "y": 40
                },
                {
                    "x": "Item 5",
                    "y": "30"
                },
                {
                    "x": "item 6",
                    "y": "20"
                },
                {
                    "x": "item 7",
                    "y": "25"
                },
                {
                    "x": "Item 8",
                    "y": "15"
                },
                {
                    "x": "Item 9",
                    "y": 10
                },
                {
                    "x": "Item 10",
                    "y": "18"
                },
                {
                    "x": "Item 11",
                    "y": "22"
                },
                {
                    "x": "Item 12",
                    "y": "28"
                },
                {
                    "x": "Item 13",
                    "y": "18"
                }
            ]
        }
    ],
    "tooltip": {
        "shared": false,
        "intersect": true
    },
    "xaxis": {
        "labels": {
            "show": false,
            "trim": true,
            "style": {}
        },
        "axisBorder": {
            "show": false
        },
        "axisTicks": {
            "show": false
        },
        "tickPlacement": "between",
        "title": {
            "style": {
                "fontWeight": 700
            }
        },
        "tooltip": {
            "enabled": false
        }
    },
    "yaxis": {
        "tickAmount": 5,
        "labels": {
            "style": {}
        },
        "title": {
            "style": {
                "fontWeight": 700
            }
        }
    },
    "theme": {
        "palette": "palette2"
    },
    "_chartInstances": [
        {
            "id": "X9eLf",
            "chart": {
                "opts": {
                    "series": [
                        {
                            "name": "Radar",
                            "data": [
                                {
                                    "x": "Item 1",
                                    "y": 40
                                },
                                {
                                    "x": "Item 2",
                                    "y": 50
                                },
                                {
                                    "x": "Item 3",
                                    "y": 30
                                },
                                {
                                    "x": "Item 4",
                                    "y": 40
                                },
                                {
                                    "x": "Item 5",
                                    "y": 70
                                }
                            ]
                        }
                    ],
                    "annotations": {
                        "position": "front",
                        "yaxis": [],
                        "xaxis": [],
                        "points": []
                    },
                    "chart": {
                        "type": "radar",
                        "background": "",
                        "foreColor": "#333",
                        "offsetX": 0,
                        "offsetY": 0,
                        "toolbar": {
                            "show": false
                        },
                        "animations": {
                            "enabled": false
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 2,
                            "left": 2,
                            "blur": 4,
                            "color": "#000",
                            "opacity": 0.35
                        },
                        "fontFamily": "Roboto",
                        "height": 250,
                        "width": 300,
                        "id": "X9eLf"
                    },
                    "plotOptions": {
                        "bar": {
                            "horizontal": false,
                            "columnWidth": "70%",
                            "barHeight": "70%",
                            "distributed": false,
                            "borderRadius": 10,
                            "colors": {
                                "ranges": [],
                                "backgroundBarColors": [],
                                "backgroundBarOpacity": 1
                            },
                            "dataLabels": {
                                "position": "top"
                            }
                        },
                        "heatmap": {
                            "radius": 2,
                            "enableShades": true,
                            "shadeIntensity": 0.5
                        },
                        "radialBar": {
                            "startAngle": 0,
                            "endAngle": 360,
                            "offsetX": 0,
                            "offsetY": 0,
                            "hollow": {
                                "margin": 5,
                                "size": "50%",
                                "background": "#fff",
                                "position": "front",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "track": {
                                "show": true,
                                "background": "#f2f2f2",
                                "strokeWidth": "97%",
                                "opacity": 1,
                                "margin": 5,
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "dataLabels": {
                                "show": true,
                                "name": {
                                    "show": true,
                                    "fontSize": 16,
                                    "offsetY": 0
                                },
                                "value": {
                                    "show": true,
                                    "fontSize": 14,
                                    "offsetY": 16
                                },
                                "total": {
                                    "show": false,
                                    "label": "Total",
                                    "fontSize": 16
                                }
                            }
                        },
                        "pie": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "dataLabels": {
                                "offset": 0
                            },
                            "donut": {
                                "size": "65%",
                                "labels": {
                                    "show": false,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "offsetY": -10
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 20,
                                        "offsetY": 10
                                    },
                                    "total": {
                                        "show": false,
                                        "showAlways": false,
                                        "label": "Total",
                                        "fontSize": 16
                                    }
                                }
                            }
                        },
                        "radar": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "polygons": {
                                "strokeColors": "#e8e8e8",
                                "connectorColors": "#e8e8e8",
                                "fill": {}
                            }
                        }
                    },
                    "theme": {
                        "mode": "light",
                        "palette": "palette4"
                    },
                    "dataLabels": {
                        "enabled": false,
                        "textAnchor": "middle",
                        "offsetX": 0,
                        "offsetY": 0,
                        "style": {
                            "fontSize": 12,
                            "fontWeight": 700
                        },
                        "background": {
                            "enabled": true,
                            "foreColor": "#fff",
                            "borderRadius": 2,
                            "padding": 4,
                            "opacity": 0.9,
                            "borderWidth": 1,
                            "borderColor": "#fff"
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 1,
                            "left": 1,
                            "blur": 1,
                            "color": "#000",
                            "opacity": 0.45
                        }
                    },
                    "markers": {
                        "size": 0,
                        "strokeColors": "#fff",
                        "strokeWidth": 2,
                        "strokeOpacity": 0.9,
                        "strokeDashArray": 0,
                        "fillOpacity": 1,
                        "shape": "circle",
                        "radius": 2,
                        "offsetX": 0,
                        "offsetY": 0,
                        "hover": {}
                    },
                    "xaxis": {
                        "type": "category",
                        "offsetX": 0,
                        "offsetY": 0,
                        "position": "bottom",
                        "labels": {
                            "show": true,
                            "rotate": -45,
                            "rotateAlways": false,
                            "trim": true,
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 400
                            }
                        },
                        "axisBorder": {
                            "show": true,
                            "color": "#e0e0e0"
                        },
                        "axisTicks": {
                            "show": true,
                            "color": "#e0e0e0"
                        },
                        "title": {
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700
                            }
                        },
                        "crosshairs": {
                            "show": true,
                            "width": 1,
                            "position": "back",
                            "opacity": 0.9,
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1
                            },
                            "fill": {
                                "type": "solid",
                                "color": "#B1B9C4",
                                "gradient": {
                                    "colorFrom": "#D8E3F0",
                                    "colorTo": "#BED1E6",
                                    "opacityFrom": 0.4,
                                    "opacityTo": 0.5
                                }
                            },
                            "dropShadow": {
                                "enabled": false,
                                "left": 0,
                                "top": 0,
                                "blur": 1,
                                "opacity": 0.4
                            }
                        },
                        "convertedCatToNumeric": false
                    },
                    "yaxis": [
                        {
                            "show": true,
                            "showAlways": false,
                            "showForNullSeries": true,
                            "opposite": false,
                            "reversed": false,
                            "logarithmic": false,
                            "logBase": 10,
                            "forceNiceScale": false,
                            "floating": false,
                            "labels": {
                                "show": true,
                                "minWidth": 0,
                                "maxWidth": 160,
                                "offsetX": 0,
                                "offsetY": 6,
                                "rotate": 0,
                                "padding": 20,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                }
                            },
                            "axisBorder": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "title": {
                                "rotate": -90,
                                "offsetY": 0,
                                "offsetX": 0,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetX": 0
                            },
                            "crosshairs": {
                                "show": true,
                                "position": "front",
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 0
                                }
                            }
                        }
                    ],
                    "grid": {
                        "show": false,
                        "borderColor": "#e0e0e0",
                        "strokeDashArray": 0,
                        "position": "back",
                        "xaxis": {
                            "lines": {
                                "show": false
                            }
                        },
                        "yaxis": {
                            "lines": {
                                "show": true
                            }
                        },
                        "row": {
                            "opacity": 0.5
                        },
                        "column": {
                            "opacity": 0.5
                        },
                        "padding": {
                            "top": 0,
                            "right": 25,
                            "bottom": 0,
                            "left": 15
                        }
                    },
                    "stroke": {
                        "show": true,
                        "curve": "smooth",
                        "lineCap": "butt",
                        "width": 2,
                        "dashArray": 0
                    },
                    "fill": {
                        "type": "solid",
                        "opacity": 0.2,
                        "gradient": {
                            "shade": "dark",
                            "type": "horizontal",
                            "shadeIntensity": 0.5,
                            "inverseColors": true,
                            "opacityFrom": 1,
                            "opacityTo": 1,
                            "stops": [
                                0,
                                50,
                                100
                            ],
                            "colorStops": []
                        },
                        "pattern": {
                            "style": "squares",
                            "width": 6,
                            "height": 6,
                            "strokeWidth": 2
                        }
                    },
                    "legend": {
                        "show": true,
                        "showForSingleSeries": false,
                        "floating": false,
                        "position": "bottom",
                        "horizontalAlign": "center",
                        "fontSize": 14,
                        "fontWeight": 400,
                        "offsetX": -20,
                        "offsetY": 0,
                        "labels": {
                            "useSeriesColors": false
                        },
                        "markers": {
                            "width": 12,
                            "height": 12,
                            "strokeWidth": 0,
                            "strokeColor": "#fff",
                            "radius": 12
                        },
                        "itemMargin": {
                            "horizontal": 5,
                            "vertical": 0
                        },
                        "onItemClick": {
                            "toggleDataSeries": true
                        },
                        "onItemHover": {
                            "highlightDataSeries": true
                        }
                    }
                },
                "w": {
                    "config": {
                        "annotations": {
                            "position": "front",
                            "texts": [],
                            "images": [],
                            "shapes": []
                        },
                        "chart": {
                            "animations": {
                                "enabled": false,
                                "easing": "easeinout",
                                "speed": 800,
                                "animateGradually": {
                                    "delay": 150,
                                    "enabled": true
                                },
                                "dynamicAnimation": {
                                    "enabled": true,
                                    "speed": 350
                                }
                            },
                            "background": "",
                            "locales": [
                                {
                                    "name": "en",
                                    "options": {
                                        "months": [
                                            "January",
                                            "February",
                                            "March",
                                            "April",
                                            "May",
                                            "June",
                                            "July",
                                            "August",
                                            "September",
                                            "October",
                                            "November",
                                            "December"
                                        ],
                                        "shortMonths": [
                                            "Jan",
                                            "Feb",
                                            "Mar",
                                            "Apr",
                                            "May",
                                            "Jun",
                                            "Jul",
                                            "Aug",
                                            "Sep",
                                            "Oct",
                                            "Nov",
                                            "Dec"
                                        ],
                                        "days": [
                                            "Sunday",
                                            "Monday",
                                            "Tuesday",
                                            "Wednesday",
                                            "Thursday",
                                            "Friday",
                                            "Saturday"
                                        ],
                                        "shortDays": [
                                            "Sun",
                                            "Mon",
                                            "Tue",
                                            "Wed",
                                            "Thu",
                                            "Fri",
                                            "Sat"
                                        ],
                                        "toolbar": {
                                            "exportToSVG": "Download SVG",
                                            "exportToPNG": "Download PNG",
                                            "exportToCSV": "Download CSV",
                                            "menu": "Menu",
                                            "selection": "Selection",
                                            "selectionZoom": "Selection Zoom",
                                            "zoomIn": "Zoom In",
                                            "zoomOut": "Zoom Out",
                                            "pan": "Panning",
                                            "reset": "Reset Zoom"
                                        }
                                    }
                                }
                            ],
                            "defaultLocale": "en",
                            "dropShadow": {
                                "enabled": false,
                                "top": 2,
                                "left": 2,
                                "blur": 4,
                                "color": "#000",
                                "opacity": 0.35
                            },
                            "events": {},
                            "foreColor": "#333",
                            "fontFamily": "Roboto",
                            "height": 250,
                            "parentHeightOffset": 15,
                            "redrawOnParentResize": true,
                            "redrawOnWindowResize": true,
                            "id": "X9eLf",
                            "offsetX": 0,
                            "offsetY": 0,
                            "selection": {
                                "enabled": false,
                                "type": "x",
                                "fill": {
                                    "color": "#24292e",
                                    "opacity": 0.1
                                },
                                "stroke": {
                                    "width": 1,
                                    "color": "#24292e",
                                    "opacity": 0.4,
                                    "dashArray": 3
                                },
                                "xaxis": {},
                                "yaxis": {}
                            },
                            "sparkline": {
                                "enabled": false
                            },
                            "brush": {
                                "enabled": false,
                                "autoScaleYaxis": true
                            },
                            "stacked": false,
                            "stackType": "normal",
                            "toolbar": {
                                "show": false,
                                "offsetX": 0,
                                "offsetY": 0,
                                "tools": {
                                    "download": true,
                                    "selection": false,
                                    "zoom": false,
                                    "zoomin": false,
                                    "zoomout": false,
                                    "pan": false,
                                    "reset": false,
                                    "customIcons": []
                                },
                                "export": {
                                    "csv": {
                                        "columnDelimiter": ",",
                                        "headerCategory": "category",
                                        "headerValue": "value"
                                    },
                                    "png": {},
                                    "svg": {}
                                },
                                "autoSelected": "zoom"
                            },
                            "type": "radar",
                            "width": 300,
                            "zoom": {
                                "enabled": true,
                                "type": "x",
                                "autoScaleYaxis": false,
                                "zoomedArea": {
                                    "fill": {
                                        "color": "#90CAF9",
                                        "opacity": 0.4
                                    },
                                    "stroke": {
                                        "color": "#0D47A1",
                                        "opacity": 0.4,
                                        "width": 1
                                    }
                                }
                            }
                        },
                        "plotOptions": {
                            "area": {
                                "fillTo": "origin"
                            },
                            "bar": {
                                "horizontal": false,
                                "columnWidth": "70%",
                                "barHeight": "70%",
                                "distributed": false,
                                "borderRadius": 10,
                                "rangeBarOverlap": true,
                                "rangeBarGroupRows": false,
                                "colors": {
                                    "backgroundBarOpacity": 1,
                                    "backgroundBarRadius": 0
                                },
                                "dataLabels": {
                                    "position": "top",
                                    "maxItems": 100,
                                    "hideOverflowingLabels": true,
                                    "orientation": "horizontal"
                                }
                            },
                            "bubble": {},
                            "candlestick": {
                                "colors": {
                                    "upward": "#00B746",
                                    "downward": "#EF403C"
                                },
                                "wick": {
                                    "useFillColor": true
                                }
                            },
                            "boxPlot": {
                                "colors": {
                                    "upper": "#00E396",
                                    "lower": "#008FFB"
                                }
                            },
                            "heatmap": {
                                "radius": 2,
                                "enableShades": true,
                                "shadeIntensity": 0.5,
                                "reverseNegativeShade": false,
                                "distributed": false,
                                "useFillColorAsStroke": false,
                                "colorScale": {
                                    "inverse": false,
                                    "ranges": []
                                }
                            },
                            "treemap": {
                                "enableShades": true,
                                "shadeIntensity": 0.5,
                                "distributed": false,
                                "reverseNegativeShade": false,
                                "useFillColorAsStroke": false,
                                "colorScale": {
                                    "inverse": false,
                                    "ranges": []
                                }
                            },
                            "radialBar": {
                                "inverseOrder": false,
                                "startAngle": 0,
                                "endAngle": 360,
                                "offsetX": 0,
                                "offsetY": 0,
                                "hollow": {
                                    "margin": 5,
                                    "size": "50%",
                                    "background": "#fff",
                                    "imageWidth": 150,
                                    "imageHeight": 150,
                                    "imageOffsetX": 0,
                                    "imageOffsetY": 0,
                                    "imageClipped": true,
                                    "position": "front",
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "track": {
                                    "show": true,
                                    "background": "#f2f2f2",
                                    "strokeWidth": "97%",
                                    "opacity": 1,
                                    "margin": 5,
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "dataLabels": {
                                    "show": true,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "fontWeight": 600,
                                        "offsetY": 0
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 14,
                                        "fontWeight": 400,
                                        "offsetY": 16
                                    },
                                    "total": {
                                        "show": false,
                                        "label": "Total",
                                        "fontSize": 16,
                                        "fontWeight": 600
                                    }
                                }
                            },
                            "pie": {
                                "customScale": 1,
                                "offsetX": 0,
                                "offsetY": 0,
                                "startAngle": 0,
                                "endAngle": 360,
                                "expandOnClick": true,
                                "dataLabels": {
                                    "offset": 0,
                                    "minAngleToShowLabel": 10
                                },
                                "donut": {
                                    "size": "65%",
                                    "labels": {
                                        "show": false,
                                        "name": {
                                            "show": true,
                                            "fontSize": 16,
                                            "fontWeight": 600,
                                            "offsetY": -10
                                        },
                                        "value": {
                                            "show": true,
                                            "fontSize": 20,
                                            "fontWeight": 400,
                                            "offsetY": 10
                                        },
                                        "total": {
                                            "show": false,
                                            "showAlways": false,
                                            "label": "Total",
                                            "fontSize": 16,
                                            "fontWeight": 400
                                        }
                                    }
                                }
                            },
                            "polarArea": {
                                "rings": {
                                    "strokeWidth": 1,
                                    "strokeColor": "#e8e8e8"
                                },
                                "spokes": {
                                    "strokeWidth": 1,
                                    "connectorColors": "#e8e8e8"
                                }
                            },
                            "radar": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "polygons": {
                                    "strokeWidth": 1,
                                    "strokeColors": "#e8e8e8",
                                    "connectorColors": "#e8e8e8",
                                    "fill": {}
                                }
                            }
                        },
                        "dataLabels": {
                            "enabled": false,
                            "textAnchor": "middle",
                            "distributed": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700
                            },
                            "background": {
                                "enabled": true,
                                "foreColor": "#fff",
                                "borderRadius": 2,
                                "padding": 4,
                                "opacity": 0.9,
                                "borderWidth": 1,
                                "borderColor": "#fff",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 1,
                                    "left": 1,
                                    "blur": 1,
                                    "color": "#000",
                                    "opacity": 0.45
                                }
                            },
                            "dropShadow": {
                                "enabled": false,
                                "top": 1,
                                "left": 1,
                                "blur": 1,
                                "color": "#000",
                                "opacity": 0.45
                            }
                        },
                        "fill": {
                            "type": "solid",
                            "opacity": 0.2,
                            "gradient": {
                                "shade": "dark",
                                "type": "horizontal",
                                "shadeIntensity": 0.5,
                                "inverseColors": true,
                                "opacityFrom": 1,
                                "opacityTo": 1
                            },
                            "image": {
                                "src": []
                            },
                            "pattern": {
                                "style": "squares",
                                "width": 6,
                                "height": 6,
                                "strokeWidth": 2
                            }
                        },
                        "forecastDataPoints": {
                            "count": 0,
                            "fillOpacity": 0.5,
                            "dashArray": 4
                        },
                        "grid": {
                            "show": false,
                            "borderColor": "#e0e0e0",
                            "strokeDashArray": 0,
                            "position": "back",
                            "xaxis": {
                                "lines": {
                                    "show": false
                                }
                            },
                            "yaxis": {
                                "lines": {
                                    "show": true
                                }
                            },
                            "row": {
                                "opacity": 0.5
                            },
                            "column": {
                                "opacity": 0.5
                            },
                            "padding": {
                                "top": 0,
                                "right": 25,
                                "bottom": 0,
                                "left": 15
                            }
                        },
                        "labels": [],
                        "legend": {
                            "show": true,
                            "showForSingleSeries": false,
                            "showForNullSeries": true,
                            "showForZeroSeries": true,
                            "floating": false,
                            "position": "bottom",
                            "horizontalAlign": "center",
                            "inverseOrder": false,
                            "fontSize": 14,
                            "fontWeight": 400,
                            "offsetX": -20,
                            "offsetY": 0,
                            "customLegendItems": [],
                            "labels": {
                                "useSeriesColors": false
                            },
                            "markers": {
                                "width": 12,
                                "height": 12,
                                "strokeWidth": 0,
                                "strokeColor": "#fff",
                                "radius": 12,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "itemMargin": {
                                "horizontal": 5,
                                "vertical": 0
                            },
                            "onItemClick": {
                                "toggleDataSeries": true
                            },
                            "onItemHover": {
                                "highlightDataSeries": true
                            }
                        },
                        "markers": {
                            "discrete": [],
                            "size": 0,
                            "strokeColors": "#fff",
                            "strokeWidth": 2,
                            "strokeOpacity": 0.9,
                            "strokeDashArray": 0,
                            "fillOpacity": 1,
                            "shape": "circle",
                            "width": 8,
                            "height": 8,
                            "radius": 2,
                            "offsetX": 0,
                            "offsetY": 0,
                            "showNullDataPoints": true,
                            "hover": {
                                "sizeOffset": 3
                            }
                        },
                        "noData": {
                            "align": "center",
                            "verticalAlign": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": "14px"
                            }
                        },
                        "responsive": [],
                        "states": {
                            "normal": {
                                "filter": {
                                    "type": "none",
                                    "value": 0
                                }
                            },
                            "hover": {
                                "filter": {
                                    "type": "lighten",
                                    "value": 0.1
                                }
                            },
                            "active": {
                                "allowMultipleDataPointsSelection": false,
                                "filter": {
                                    "type": "darken",
                                    "value": 0.5
                                }
                            }
                        },
                        "title": {
                            "align": "left",
                            "margin": 5,
                            "offsetX": 0,
                            "offsetY": 0,
                            "floating": false,
                            "style": {
                                "fontSize": "14px",
                                "fontWeight": 900
                            }
                        },
                        "subtitle": {
                            "align": "left",
                            "margin": 5,
                            "offsetX": 0,
                            "offsetY": 30,
                            "floating": false,
                            "style": {
                                "fontSize": "12px",
                                "fontWeight": 400
                            }
                        },
                        "stroke": {
                            "show": true,
                            "curve": "smooth",
                            "lineCap": "butt",
                            "width": 2,
                            "dashArray": 0
                        },
                        "tooltip": {
                            "enabled": true,
                            "shared": false,
                            "followCursor": true,
                            "intersect": true,
                            "inverseOrder": false,
                            "fillSeriesColor": false,
                            "theme": "light",
                            "style": {
                                "fontSize": "12px"
                            },
                            "onDatasetHover": {
                                "highlightDataSeries": false
                            },
                            "x": {
                                "show": true,
                                "format": "dd MMM"
                            },
                            "y": {
                                "title": {}
                            },
                            "z": {
                                "title": "Size: "
                            },
                            "marker": {
                                "show": true
                            },
                            "items": {
                                "display": "flex"
                            },
                            "fixed": {
                                "enabled": false,
                                "position": "topRight",
                                "offsetX": 0,
                                "offsetY": 0
                            }
                        },
                        "xaxis": {
                            "type": "category",
                            "categories": [],
                            "convertedCatToNumeric": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "labels": {
                                "show": true,
                                "rotate": -45,
                                "rotateAlways": false,
                                "hideOverlappingLabels": true,
                                "trim": true,
                                "maxHeight": 120,
                                "showDuplicates": true,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                },
                                "offsetX": 0,
                                "offsetY": 0,
                                "datetimeUTC": true,
                                "datetimeFormatter": {
                                    "year": "yyyy",
                                    "month": "MMM 'yy",
                                    "day": "dd MMM",
                                    "hour": "HH:mm",
                                    "minute": "HH:mm:ss",
                                    "second": "HH:mm:ss"
                                }
                            },
                            "axisBorder": {
                                "show": true,
                                "color": "#e0e0e0",
                                "width": "100%",
                                "height": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": true,
                                "color": "#e0e0e0",
                                "height": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "tickPlacement": "on",
                            "floating": false,
                            "position": "bottom",
                            "title": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "crosshairs": {
                                "show": true,
                                "width": 1,
                                "position": "back",
                                "opacity": 0.9,
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 3
                                },
                                "fill": {
                                    "type": "solid",
                                    "color": "#B1B9C4",
                                    "gradient": {
                                        "colorFrom": "#D8E3F0",
                                        "colorTo": "#BED1E6",
                                        "stops": [
                                            0,
                                            100
                                        ],
                                        "opacityFrom": 0.4,
                                        "opacityTo": 0.5
                                    }
                                },
                                "dropShadow": {
                                    "enabled": false,
                                    "left": 0,
                                    "top": 0,
                                    "blur": 1,
                                    "opacity": 0.4
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "12px"
                                }
                            }
                        },
                        "theme": {
                            "mode": "light",
                            "palette": "palette4",
                            "monochrome": {
                                "enabled": false,
                                "color": "#008FFB",
                                "shadeTo": "light",
                                "shadeIntensity": 0.65
                            }
                        }
                    },
                    "globals": {
                        "chartID": "X9eLf",
                        "cuid": "wbn8g3e3",
                        "events": {
                            "beforeMount": [],
                            "mounted": [],
                            "updated": [],
                            "clicked": [],
                            "selection": [],
                            "dataPointSelection": [],
                            "zoomed": [],
                            "scrolled": []
                        },
                        "colors": [
                            "#4ecdc4",
                            "#c7f464",
                            "#81D4FA",
                            "#fd6a6a",
                            "#546E7A"
                        ],
                        "clientX": 956,
                        "clientY": 356,
                        "fill": {
                            "colors": [
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A"
                            ]
                        },
                        "stroke": {},
                        "dataLabels": {
                            "style": {}
                        },
                        "radarPolygons": {
                            "fill": {
                                "colors": [
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none"
                                ]
                            }
                        },
                        "markers": {
                            "size": [
                                0,
                                0
                            ],
                            "largestSize": 0
                        },
                        "animationEnded": true,
                        "isDirty": true,
                        "isExecCalled": false,
                        "initialConfig": {},
                        "initialSeries": [
                            {
                                "name": "Radar",
                                "data": [
                                    {
                                        "x": "Item 1",
                                        "y": 40
                                    },
                                    {
                                        "x": "Item 2",
                                        "y": 50
                                    },
                                    {
                                        "x": "Item 3",
                                        "y": 30
                                    },
                                    {
                                        "x": "Item 4",
                                        "y": 40
                                    },
                                    {
                                        "x": "Item 5",
                                        "y": 70
                                    }
                                ]
                            }
                        ],
                        "lastXAxis": {
                            "type": "category",
                            "categories": [],
                            "convertedCatToNumeric": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "labels": {
                                "show": true,
                                "rotate": -45,
                                "rotateAlways": false,
                                "hideOverlappingLabels": true,
                                "trim": true,
                                "maxHeight": 120,
                                "showDuplicates": true,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                },
                                "offsetX": 0,
                                "offsetY": 0,
                                "datetimeUTC": true,
                                "datetimeFormatter": {
                                    "year": "yyyy",
                                    "month": "MMM 'yy",
                                    "day": "dd MMM",
                                    "hour": "HH:mm",
                                    "minute": "HH:mm:ss",
                                    "second": "HH:mm:ss"
                                }
                            },
                            "axisBorder": {
                                "show": true,
                                "color": "#e0e0e0",
                                "width": "100%",
                                "height": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": true,
                                "color": "#e0e0e0",
                                "height": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "tickPlacement": "on",
                            "floating": false,
                            "position": "bottom",
                            "title": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "crosshairs": {
                                "show": true,
                                "width": 1,
                                "position": "back",
                                "opacity": 0.9,
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 3
                                },
                                "fill": {
                                    "type": "solid",
                                    "color": "#B1B9C4",
                                    "gradient": {
                                        "colorFrom": "#D8E3F0",
                                        "colorTo": "#BED1E6",
                                        "stops": [
                                            0,
                                            100
                                        ],
                                        "opacityFrom": 0.4,
                                        "opacityTo": 0.5
                                    }
                                },
                                "dropShadow": {
                                    "enabled": false,
                                    "left": 0,
                                    "top": 0,
                                    "blur": 1,
                                    "opacity": 0.4
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "12px"
                                }
                            }
                        },
                        "lastYAxis": [
                            {
                                "show": true,
                                "showAlways": false,
                                "showForNullSeries": true,
                                "opposite": false,
                                "reversed": false,
                                "logarithmic": false,
                                "logBase": 10,
                                "forceNiceScale": false,
                                "floating": false,
                                "labels": {
                                    "show": true,
                                    "minWidth": 0,
                                    "maxWidth": 160,
                                    "offsetX": 0,
                                    "offsetY": 6,
                                    "rotate": 0,
                                    "padding": 20,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 400,
                                        "cssClass": ""
                                    }
                                },
                                "axisBorder": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 1,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "axisTicks": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 6,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "title": {
                                    "rotate": -90,
                                    "offsetY": 0,
                                    "offsetX": 0,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 700,
                                        "cssClass": ""
                                    }
                                },
                                "tooltip": {
                                    "enabled": false,
                                    "offsetX": 0
                                },
                                "crosshairs": {
                                    "show": true,
                                    "position": "front",
                                    "stroke": {
                                        "color": "#b6b6b6",
                                        "width": 1,
                                        "dashArray": 0
                                    }
                                }
                            }
                        ],
                        "columnSeries": null,
                        "labels": [
                            "Item 1",
                            "Item 2",
                            "Item 3",
                            "Item 4",
                            "Item 5"
                        ],
                        "timescaleLabels": [],
                        "noLabelsProvided": false,
                        "allSeriesCollapsed": false,
                        "collapsedSeries": [],
                        "collapsedSeriesIndices": [],
                        "ancillaryCollapsedSeries": [],
                        "ancillaryCollapsedSeriesIndices": [],
                        "risingSeries": [],
                        "dataFormatXNumeric": false,
                        "capturedSeriesIndex": -1,
                        "capturedDataPointIndex": -1,
                        "selectedDataPoints": [],
                        "goldenPadding": 35,
                        "invalidLogScale": false,
                        "ignoreYAxisIndexes": [],
                        "yAxisSameScaleIndices": [],
                        "maxValsInArrayIndex": 0,
                        "radialSize": 81.8048780487805,
                        "zoomEnabled": true,
                        "panEnabled": false,
                        "selectionEnabled": false,
                        "yaxis": null,
                        "mousedown": false,
                        "lastClientPosition": {},
                        "yValueDecimal": 0,
                        "total": 0,
                        "SVGNS": "http://www.w3.org/2000/svg",
                        "svgWidth": 300,
                        "svgHeight": 250,
                        "noData": false,
                        "locale": {
                            "toolbar": {
                                "exportToSVG": "Download SVG",
                                "exportToPNG": "Download PNG",
                                "exportToCSV": "Download CSV",
                                "menu": "Menu",
                                "selection": "Selection",
                                "selectionZoom": "Selection Zoom",
                                "zoomIn": "Zoom In",
                                "zoomOut": "Zoom Out",
                                "pan": "Panning",
                                "reset": "Reset Zoom"
                            }
                        },
                        "dom": {
                            "baseEl": {
                                "_prevClass": "X9eLf"
                            },
                            "elWrap": {},
                            "Paper": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "svg",
                                "_defs": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "defs"
                                }
                            },
                            "elGraphical": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elAnnotations": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elLegendWrap": {},
                            "elGridRectMask": {},
                            "elGridRectMarkerMask": {},
                            "elForecastMask": {},
                            "elNonForecastMask": {},
                            "elGridRect": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            },
                            "elGridRectMarker": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            }
                        },
                        "memory": {
                            "methodsToExec": []
                        },
                        "shouldAnimate": true,
                        "skipLastTimelinelabel": false,
                        "skipFirstTimelinelabel": false,
                        "delayedElements": [
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            }
                        ],
                        "axisCharts": true,
                        "isDataXYZ": false,
                        "resized": true,
                        "resizeTimer": null,
                        "comboCharts": false,
                        "dataChanged": false,
                        "previousPaths": [],
                        "allSeriesHasEqualX": true,
                        "pointsArray": [],
                        "dataLabelsRects": [],
                        "lastDrawnDataLabelsIndexes": [
                            [
                                0,
                                0
                            ],
                            [
                                1,
                                1
                            ],
                            [
                                2,
                                2
                            ],
                            [
                                3,
                                3
                            ],
                            [
                                4,
                                4
                            ]
                        ],
                        "hasNullValues": false,
                        "easing": "<>",
                        "zoomed": false,
                        "gridWidth": 260,
                        "gridHeight": 180,
                        "rotateXLabels": false,
                        "defaultLabels": false,
                        "yLabelFormatters": [
                            null
                        ],
                        "LINE_HEIGHT_RATIO": 1.618,
                        "xAxisLabelsHeight": 10,
                        "xAxisLabelsWidth": 0,
                        "yAxisLabelsWidth": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "translateX": 17,
                        "translateY": 30,
                        "translateYAxisX": [
                            -16
                        ],
                        "yAxisWidths": [],
                        "translateXAxisY": -4,
                        "translateXAxisX": 0,
                        "tooltip": {
                            "tooltipUtil": {},
                            "tooltipLabels": {
                                "tooltipUtil": {}
                            },
                            "tooltipPosition": {},
                            "marker": {
                                "tooltipPosition": {}
                            },
                            "intersect": {},
                            "axesTooltip": {},
                            "showOnIntersect": true,
                            "showTooltipTitle": true,
                            "fixedTooltip": false,
                            "xaxisTooltip": null,
                            "yaxisTTEls": null,
                            "isBarShared": false,
                            "lastHoverTime": 1683473784844,
                            "xyRatios": {
                                "yRatio": [
                                    0.4444444444444444
                                ],
                                "invertedYRatio": 0.3076923076923077,
                                "zRatio": null,
                                "xRatio": null,
                                "initialXRatio": null,
                                "invertedXRatio": null,
                                "baseLineInvertedY": 0.1,
                                "baseLineY": [
                                    0
                                ],
                                "baseLineX": 0
                            },
                            "isXAxisTooltipEnabled": false,
                            "yaxisTooltips": [
                                false
                            ],
                            "allTooltipSeriesGroups": [],
                            "xaxisOffY": 181,
                            "yaxisOffX": 1,
                            "yaxisTooltip": {},
                            "yaxisTooltipText": [
                                {}
                            ],
                            "xcrosshairsWidth": 1,
                            "ycrosshairs": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "ycrosshairsHidden": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "xAxisTicksPositions": [
                                52,
                                104,
                                156,
                                208,
                                260
                            ],
                            "dataPointsDividedHeight": 36,
                            "dataPointsDividedWidth": 52,
                            "tooltipTitle": {},
                            "legendLabels": {},
                            "ttItems": [
                                {}
                            ],
                            "seriesBound": {
                                "x": 0,
                                "y": 0,
                                "width": 0,
                                "height": 0,
                                "top": 0,
                                "right": 0,
                                "bottom": 0,
                                "left": 0
                            }
                        },
                        "series": [
                            [
                                40,
                                50,
                                30,
                                40,
                                70
                            ]
                        ],
                        "seriesCandleO": [],
                        "seriesCandleH": [],
                        "seriesCandleM": [],
                        "seriesCandleL": [],
                        "seriesCandleC": [],
                        "seriesRangeStart": [],
                        "seriesRangeEnd": [],
                        "seriesRangeBar": [],
                        "seriesPercent": [
                            [
                                100,
                                100,
                                100,
                                100,
                                100
                            ]
                        ],
                        "seriesGoals": [
                            [
                                null,
                                null,
                                null,
                                null,
                                null
                            ]
                        ],
                        "seriesX": [
                            null
                        ],
                        "seriesZ": [
                            []
                        ],
                        "seriesNames": [
                            "Radar"
                        ],
                        "seriesTotals": [
                            230
                        ],
                        "seriesLog": [],
                        "seriesColors": [
                            null
                        ],
                        "stackedSeriesTotals": [
                            40,
                            50,
                            30,
                            40,
                            70
                        ],
                        "seriesXvalues": [
                            []
                        ],
                        "seriesYvalues": [
                            []
                        ],
                        "categoryLabels": [],
                        "selectionResizeTimer": null,
                        "isXNumeric": false,
                        "xaxisLabelsCount": 0,
                        "isMultiLineX": false,
                        "isMultipleYAxis": false,
                        "maxY": 80,
                        "minY": 0,
                        "minYArr": [
                            0
                        ],
                        "maxYArr": [
                            80
                        ],
                        "maxX": -1.7976931348623157e+308,
                        "minX": 1.7976931348623157e+308,
                        "initialMaxX": -1.7976931348623157e+308,
                        "initialMinX": 1.7976931348623157e+308,
                        "maxDate": 0,
                        "minDate": 1.7976931348623157e+308,
                        "minZ": 1.7976931348623157e+308,
                        "maxZ": -1.7976931348623157e+308,
                        "minXDiff": 1.7976931348623157e+308,
                        "yAxisScale": [
                            {
                                "result": [
                                    80,
                                    60,
                                    40,
                                    20,
                                    0
                                ],
                                "niceMin": 0,
                                "niceMax": 80
                            }
                        ],
                        "xAxisScale": null,
                        "xAxisTicksPositions": [],
                        "yLabelsCoords": [
                            {
                                "width": 10,
                                "index": 0
                            }
                        ],
                        "yTitleCoords": [
                            {
                                "width": 0,
                                "index": 0
                            }
                        ],
                        "barPadForNumericAxis": 0,
                        "padHorizontal": 0,
                        "xRange": null,
                        "yRange": [
                            80
                        ],
                        "zRange": null,
                        "dataPoints": 5,
                        "xTickAmount": 0,
                        "xyCharts": false,
                        "isBarHorizontal": false,
                        "chartClass": ".apexchartsX9eLf",
                        "comboBarCount": 0,
                        "isRangeBar": false,
                        "xAxisHeight": 10
                    }
                },
                "publicMethods": [
                    "updateOptions",
                    "updateSeries",
                    "appendData",
                    "appendSeries",
                    "toggleSeries",
                    "showSeries",
                    "hideSeries",
                    "setLocale",
                    "resetSeries",
                    "zoomX",
                    "toggleDataPointSelection",
                    "dataURI",
                    "addXaxisAnnotation",
                    "addYaxisAnnotation",
                    "addPointAnnotation",
                    "clearAnnotations",
                    "removeAnnotation",
                    "paper",
                    "destroy"
                ],
                "eventList": [
                    "click",
                    "mousedown",
                    "mousemove",
                    "mouseleave",
                    "touchstart",
                    "touchmove",
                    "touchleave",
                    "mouseup",
                    "touchend"
                ],
                "animations": {},
                "axes": {},
                "core": {},
                "config": {
                    "opts": {}
                },
                "data": {
                    "coreUtils": {},
                    "fallbackToCategory": true,
                    "activeSeriesIndex": 0
                },
                "grid": {
                    "xaxisLabels": [
                        "Item 1",
                        "Item 2",
                        "Item 3",
                        "Item 4",
                        "Item 5"
                    ],
                    "axesUtils": {},
                    "isRangeBar": 0,
                    "elg": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesH": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesV": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    }
                },
                "graphics": {},
                "coreUtils": {},
                "crosshairs": {},
                "events": {},
                "exports": {},
                "localization": {},
                "options": {
                    "yAxis": {
                        "show": true,
                        "showAlways": false,
                        "showForNullSeries": true,
                        "opposite": false,
                        "reversed": false,
                        "logarithmic": false,
                        "logBase": 10,
                        "forceNiceScale": false,
                        "floating": false,
                        "labels": {
                            "show": true,
                            "minWidth": 0,
                            "maxWidth": 160,
                            "offsetX": 0,
                            "offsetY": 0,
                            "rotate": 0,
                            "padding": 20,
                            "style": {
                                "colors": [],
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": ""
                            }
                        },
                        "axisBorder": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 1,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "axisTicks": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 6,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "title": {
                            "rotate": -90,
                            "offsetY": 0,
                            "offsetX": 0,
                            "style": {
                                "fontSize": "11px",
                                "fontWeight": 900,
                                "cssClass": ""
                            }
                        },
                        "tooltip": {
                            "enabled": false,
                            "offsetX": 0
                        },
                        "crosshairs": {
                            "show": true,
                            "position": "front",
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1,
                                "dashArray": 0
                            }
                        }
                    },
                    "pointAnnotation": {
                        "x": 0,
                        "y": null,
                        "yAxisIndex": 0,
                        "seriesIndex": 0,
                        "marker": {
                            "size": 4,
                            "fillColor": "#fff",
                            "strokeWidth": 2,
                            "strokeColor": "#333",
                            "shape": "circle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "radius": 2,
                            "cssClass": ""
                        },
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        },
                        "customSVG": {
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "image": {
                            "width": 20,
                            "height": 20,
                            "offsetX": 0,
                            "offsetY": 0
                        }
                    },
                    "yAxisAnnotation": {
                        "y": 0,
                        "y2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "width": "100%",
                        "yAxisIndex": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "end",
                            "position": "right",
                            "offsetX": 0,
                            "offsetY": -3,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "xAxisAnnotation": {
                        "x": 0,
                        "x2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "orientation": "vertical",
                            "position": "top",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "text": {
                        "x": 0,
                        "y": 0,
                        "text": "",
                        "textAnchor": "start",
                        "fontSize": "13px",
                        "fontWeight": 400,
                        "appendTo": ".apexcharts-annotations",
                        "backgroundColor": "transparent",
                        "borderColor": "#c2c2c2",
                        "borderRadius": 0,
                        "borderWidth": 0,
                        "paddingLeft": 4,
                        "paddingRight": 4,
                        "paddingTop": 2,
                        "paddingBottom": 2
                    }
                },
                "responsive": {},
                "series": {
                    "legendInactiveClass": "legend-mouseover-inactive"
                },
                "theme": {
                    "isColorFn": false,
                    "isHeatmapDistributed": false,
                    "isBarDistributed": false
                },
                "formatters": {
                    "tooltipKeyFormat": "dd MMM"
                },
                "titleSubtitle": {},
                "legend": {
                    "isBarsDistributed": false,
                    "legendHelpers": {}
                },
                "toolbar": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308
                },
                "dimensions": {
                    "lgRect": {
                        "x": 0,
                        "y": 0,
                        "height": 0,
                        "width": 0
                    },
                    "yAxisWidth": 15,
                    "yAxisWidthLeft": 15,
                    "yAxisWidthRight": 0,
                    "xAxisHeight": 10,
                    "isSparkline": false,
                    "dimHelpers": {},
                    "dimYAxis": {},
                    "dimXAxis": {},
                    "dimGrid": {},
                    "lgWidthForSideLegends": 0,
                    "xPadRight": 0,
                    "xPadLeft": 0,
                    "xAxisWidth": 0
                },
                "updateHelpers": {},
                "zoomPanSelection": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308,
                    "dragged": false,
                    "graphics": {},
                    "eventList": [
                        "mousedown",
                        "mouseleave",
                        "mousemove",
                        "touchstart",
                        "touchmove",
                        "mouseup",
                        "touchend"
                    ],
                    "clientX": 0,
                    "clientY": 0,
                    "startX": 0,
                    "endX": 0,
                    "dragX": 0,
                    "startY": 0,
                    "endY": 0,
                    "dragY": 0,
                    "moveDirection": "none"
                },
                "pie": {
                    "chartType": "radar",
                    "initialAnim": false,
                    "dynamicAnim": false,
                    "animBeginArr": [
                        0
                    ],
                    "animDur": 0,
                    "defaultSize": 180,
                    "centerY": 90,
                    "centerX": 130,
                    "fullAngle": 360,
                    "initialAngle": 0,
                    "donutSize": 53.17317073170732,
                    "maxY": 0,
                    "sliceLabels": [],
                    "sliceSizes": [],
                    "prevSectorAngleArr": []
                },
                "rangeBar": {
                    "isHorizontal": false,
                    "strokeWidth": 2,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xRatio": null,
                    "initialXRatio": null,
                    "invertedXRatio": null,
                    "invertedYRatio": 0.3076923076923077,
                    "baseLineInvertedY": 0.1,
                    "yaxisIndex": 0,
                    "seriesLen": 0,
                    "barHelpers": {}
                },
                "annotations": {
                    "graphics": {},
                    "helpers": {},
                    "xAxisAnnotations": {},
                    "yAxisAnnotations": {},
                    "pointsAnnotations": {},
                    "xDivision": 52
                }
            }
        },
        {
            "id": "5YKmP",
            "chart": {
                "opts": {
                    "series": [
                        {
                            "name": "Area",
                            "data": [
                                {
                                    "x": "Jan",
                                    "y": "22"
                                },
                                {
                                    "x": "Feb",
                                    "y": 40
                                },
                                {
                                    "x": "Mar",
                                    "y": 28
                                },
                                {
                                    "x": "Apr",
                                    "y": 51
                                },
                                {
                                    "x": "May",
                                    "y": 42
                                },
                                {
                                    "x": "Jun",
                                    "y": 56
                                }
                            ]
                        }
                    ],
                    "annotations": {
                        "position": "front",
                        "yaxis": [],
                        "xaxis": [],
                        "points": []
                    },
                    "chart": {
                        "type": "area",
                        "background": "transparent",
                        "foreColor": "#333",
                        "offsetX": 0,
                        "offsetY": 0,
                        "toolbar": {
                            "show": false
                        },
                        "animations": {
                            "enabled": false
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 2,
                            "left": 2,
                            "blur": 9,
                            "color": "#000",
                            "opacity": 0.45
                        },
                        "fontFamily": "Roboto",
                        "height": 250,
                        "width": 480,
                        "id": "5YKmP"
                    },
                    "plotOptions": {
                        "bar": {
                            "horizontal": false,
                            "columnWidth": "70%",
                            "barHeight": "70%",
                            "distributed": false,
                            "borderRadius": 10,
                            "colors": {
                                "ranges": [],
                                "backgroundBarColors": [],
                                "backgroundBarOpacity": 1
                            },
                            "dataLabels": {
                                "position": "top"
                            }
                        },
                        "heatmap": {
                            "radius": 2,
                            "enableShades": true,
                            "shadeIntensity": 0.5
                        },
                        "radialBar": {
                            "startAngle": 0,
                            "endAngle": 360,
                            "offsetX": 0,
                            "offsetY": 0,
                            "hollow": {
                                "margin": 5,
                                "size": "50%",
                                "background": "#fff",
                                "position": "front",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "track": {
                                "show": true,
                                "background": "#f2f2f2",
                                "strokeWidth": "97%",
                                "opacity": 1,
                                "margin": 5,
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "dataLabels": {
                                "show": true,
                                "name": {
                                    "show": true,
                                    "fontSize": 16,
                                    "offsetY": 0
                                },
                                "value": {
                                    "show": true,
                                    "fontSize": 14,
                                    "offsetY": 16
                                },
                                "total": {
                                    "show": false,
                                    "label": "Total",
                                    "fontSize": 16
                                }
                            }
                        },
                        "pie": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "dataLabels": {
                                "offset": 0
                            },
                            "donut": {
                                "size": "65%",
                                "labels": {
                                    "show": false,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "offsetY": -10
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 20,
                                        "offsetY": 10
                                    },
                                    "total": {
                                        "show": false,
                                        "showAlways": false,
                                        "label": "Total",
                                        "fontSize": 16
                                    }
                                }
                            }
                        },
                        "radar": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "polygons": {
                                "strokeColors": "#e8e8e8",
                                "connectorColors": "#e8e8e8",
                                "fill": {}
                            }
                        }
                    },
                    "theme": {
                        "mode": "light",
                        "palette": "palette4"
                    },
                    "dataLabels": {
                        "enabled": false,
                        "textAnchor": "middle",
                        "offsetX": 0,
                        "offsetY": 0,
                        "style": {
                            "fontSize": 12,
                            "fontWeight": 700
                        },
                        "background": {
                            "enabled": true,
                            "foreColor": "#fff",
                            "borderRadius": 2,
                            "padding": 4,
                            "opacity": 0.9,
                            "borderWidth": 1,
                            "borderColor": "#fff"
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 1,
                            "left": 1,
                            "blur": 1,
                            "color": "#000",
                            "opacity": 0.45
                        }
                    },
                    "markers": {
                        "size": 0,
                        "strokeColors": "#fff",
                        "strokeWidth": 2,
                        "strokeOpacity": 0.9,
                        "strokeDashArray": 0,
                        "fillOpacity": 1,
                        "shape": "circle",
                        "radius": 2,
                        "offsetX": 0,
                        "offsetY": 0,
                        "hover": {}
                    },
                    "xaxis": {
                        "type": "numeric",
                        "offsetX": 0,
                        "offsetY": 5,
                        "position": "bottom",
                        "labels": {
                            "show": true,
                            "rotate": -45,
                            "rotateAlways": false,
                            "trim": true,
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 400,
                                "cssClass": ""
                            },
                            "hideOverlappingLabels": true,
                            "maxHeight": 120,
                            "showDuplicates": true,
                            "datetimeUTC": true,
                            "datetimeFormatter": {
                                "year": "yyyy",
                                "month": "MMM 'yy",
                                "day": "dd MMM",
                                "hour": "HH:mm",
                                "minute": "HH:mm:ss",
                                "second": "HH:mm:ss"
                            }
                        },
                        "axisBorder": {
                            "show": true,
                            "color": "#e0e0e0",
                            "width": "100%",
                            "height": 1,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "axisTicks": {
                            "show": true,
                            "color": "#e0e0e0",
                            "height": 6,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "title": {
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700,
                                "cssClass": ""
                            },
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "crosshairs": {
                            "show": true,
                            "width": 1,
                            "position": "back",
                            "opacity": 0.9,
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1,
                                "dashArray": 3
                            },
                            "fill": {
                                "type": "solid",
                                "color": "#B1B9C4",
                                "gradient": {
                                    "colorFrom": "#D8E3F0",
                                    "colorTo": "#BED1E6",
                                    "opacityFrom": 0.4,
                                    "opacityTo": 0.5,
                                    "stops": [
                                        0,
                                        100
                                    ]
                                }
                            },
                            "dropShadow": {
                                "enabled": false,
                                "left": 0,
                                "top": 0,
                                "blur": 1,
                                "opacity": 0.4
                            }
                        },
                        "convertedCatToNumeric": false,
                        "categories": [],
                        "tickAmount": "dataPoints",
                        "tickPlacement": "on",
                        "floating": false,
                        "tooltip": {
                            "enabled": true,
                            "offsetY": 0,
                            "style": {
                                "fontSize": "12px"
                            }
                        }
                    },
                    "yaxis": [
                        {
                            "show": true,
                            "showAlways": false,
                            "showForNullSeries": true,
                            "opposite": false,
                            "reversed": false,
                            "logarithmic": false,
                            "logBase": 10,
                            "tickAmount": 5,
                            "forceNiceScale": false,
                            "floating": false,
                            "labels": {
                                "show": true,
                                "minWidth": 0,
                                "maxWidth": 160,
                                "offsetX": 0,
                                "offsetY": 0,
                                "rotate": 0,
                                "padding": 20,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                }
                            },
                            "axisBorder": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "title": {
                                "rotate": -90,
                                "offsetY": 0,
                                "offsetX": 0,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetX": 0
                            },
                            "crosshairs": {
                                "show": true,
                                "position": "front",
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 0
                                }
                            }
                        }
                    ],
                    "grid": {
                        "show": true,
                        "borderColor": "#E1E1E1",
                        "strokeDashArray": 0,
                        "position": "back",
                        "xaxis": {
                            "lines": {
                                "show": false
                            }
                        },
                        "yaxis": {
                            "lines": {
                                "show": true
                            }
                        },
                        "row": {
                            "opacity": 0.4
                        },
                        "column": {
                            "opacity": 0.5
                        },
                        "padding": {
                            "top": 15,
                            "right": 12,
                            "bottom": 8,
                            "left": 15
                        }
                    },
                    "stroke": {
                        "show": true,
                        "curve": "smooth",
                        "lineCap": "butt",
                        "width": 4,
                        "dashArray": 0
                    },
                    "fill": {
                        "type": "solid",
                        "opacity": 0.3,
                        "gradient": {
                            "shade": "dark",
                            "type": "horizontal",
                            "shadeIntensity": 0.5,
                            "inverseColors": true,
                            "opacityFrom": 1,
                            "opacityTo": 1,
                            "stops": [
                                0,
                                50,
                                100
                            ],
                            "colorStops": []
                        },
                        "pattern": {
                            "style": "squares",
                            "width": 6,
                            "height": 6,
                            "strokeWidth": 2
                        }
                    },
                    "legend": {
                        "show": true,
                        "showForSingleSeries": false,
                        "floating": false,
                        "position": "bottom",
                        "horizontalAlign": "center",
                        "fontSize": 14,
                        "fontWeight": 400,
                        "offsetX": -20,
                        "offsetY": 0,
                        "labels": {
                            "useSeriesColors": false
                        },
                        "markers": {
                            "width": 12,
                            "height": 12,
                            "strokeWidth": 0,
                            "strokeColor": "#fff",
                            "radius": 12
                        },
                        "itemMargin": {
                            "horizontal": 5,
                            "vertical": 0
                        },
                        "onItemClick": {
                            "toggleDataSeries": true
                        },
                        "onItemHover": {
                            "highlightDataSeries": true
                        }
                    }
                },
                "w": {
                    "config": {
                        "annotations": {
                            "position": "front",
                            "texts": [],
                            "images": [],
                            "shapes": []
                        },
                        "chart": {
                            "animations": {
                                "enabled": false,
                                "easing": "easeinout",
                                "speed": 800,
                                "animateGradually": {
                                    "delay": 150,
                                    "enabled": true
                                },
                                "dynamicAnimation": {
                                    "enabled": true,
                                    "speed": 350
                                }
                            },
                            "background": "transparent",
                            "locales": [
                                null
                            ],
                            "defaultLocale": "en",
                            "dropShadow": {
                                "enabled": false,
                                "top": 2,
                                "left": 2,
                                "blur": 9,
                                "color": "#000",
                                "opacity": 0.45
                            },
                            "events": {},
                            "foreColor": "#333",
                            "fontFamily": "Roboto",
                            "height": 250,
                            "parentHeightOffset": 15,
                            "redrawOnParentResize": true,
                            "redrawOnWindowResize": true,
                            "id": "5YKmP",
                            "offsetX": 0,
                            "offsetY": 0,
                            "selection": {
                                "enabled": false,
                                "type": "x",
                                "fill": {
                                    "color": "#24292e",
                                    "opacity": 0.1
                                },
                                "stroke": {
                                    "width": 1,
                                    "color": "#24292e",
                                    "opacity": 0.4,
                                    "dashArray": 3
                                },
                                "xaxis": {},
                                "yaxis": {}
                            },
                            "sparkline": {
                                "enabled": false
                            },
                            "brush": {
                                "enabled": false,
                                "autoScaleYaxis": true
                            },
                            "stacked": false,
                            "stackType": "normal",
                            "toolbar": {
                                "show": false,
                                "offsetX": 0,
                                "offsetY": 0,
                                "tools": {
                                    "download": true,
                                    "selection": false,
                                    "zoom": false,
                                    "zoomin": false,
                                    "zoomout": false,
                                    "pan": false,
                                    "reset": false,
                                    "customIcons": []
                                },
                                "export": {
                                    "csv": {
                                        "columnDelimiter": ",",
                                        "headerCategory": "category",
                                        "headerValue": "value"
                                    },
                                    "png": {},
                                    "svg": {}
                                },
                                "autoSelected": "zoom"
                            },
                            "type": "area",
                            "width": 480,
                            "zoom": {
                                "enabled": true,
                                "type": "x",
                                "autoScaleYaxis": false,
                                "zoomedArea": {
                                    "fill": {
                                        "color": "#90CAF9",
                                        "opacity": 0.4
                                    },
                                    "stroke": {
                                        "color": "#0D47A1",
                                        "opacity": 0.4,
                                        "width": 1
                                    }
                                }
                            }
                        },
                        "plotOptions": {
                            "area": {
                                "fillTo": "origin"
                            },
                            "bar": {
                                "horizontal": false,
                                "columnWidth": "70%",
                                "barHeight": "70%",
                                "distributed": false,
                                "borderRadius": 10,
                                "rangeBarOverlap": true,
                                "rangeBarGroupRows": false,
                                "colors": {
                                    "backgroundBarOpacity": 1,
                                    "backgroundBarRadius": 0
                                },
                                "dataLabels": {
                                    "position": "top",
                                    "maxItems": 100,
                                    "hideOverflowingLabels": true,
                                    "orientation": "horizontal"
                                }
                            },
                            "bubble": {},
                            "candlestick": {
                                "colors": {
                                    "upward": "#00B746",
                                    "downward": "#EF403C"
                                },
                                "wick": {
                                    "useFillColor": true
                                }
                            },
                            "boxPlot": {
                                "colors": {
                                    "upper": "#00E396",
                                    "lower": "#008FFB"
                                }
                            },
                            "heatmap": {
                                "radius": 2,
                                "enableShades": true,
                                "shadeIntensity": 0.5,
                                "reverseNegativeShade": false,
                                "distributed": false,
                                "useFillColorAsStroke": false,
                                "colorScale": {
                                    "inverse": false,
                                    "ranges": []
                                }
                            },
                            "treemap": {
                                "enableShades": true,
                                "shadeIntensity": 0.5,
                                "distributed": false,
                                "reverseNegativeShade": false,
                                "useFillColorAsStroke": false,
                                "colorScale": {
                                    "inverse": false,
                                    "ranges": []
                                }
                            },
                            "radialBar": {
                                "inverseOrder": false,
                                "startAngle": 0,
                                "endAngle": 360,
                                "offsetX": 0,
                                "offsetY": 0,
                                "hollow": {
                                    "margin": 5,
                                    "size": "50%",
                                    "background": "#fff",
                                    "imageWidth": 150,
                                    "imageHeight": 150,
                                    "imageOffsetX": 0,
                                    "imageOffsetY": 0,
                                    "imageClipped": true,
                                    "position": "front",
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "track": {
                                    "show": true,
                                    "background": "#f2f2f2",
                                    "strokeWidth": "97%",
                                    "opacity": 1,
                                    "margin": 5,
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "dataLabels": {
                                    "show": true,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "fontWeight": 600,
                                        "offsetY": 0
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 14,
                                        "fontWeight": 400,
                                        "offsetY": 16
                                    },
                                    "total": {
                                        "show": false,
                                        "label": "Total",
                                        "fontSize": 16,
                                        "fontWeight": 600
                                    }
                                }
                            },
                            "pie": {
                                "customScale": 1,
                                "offsetX": 0,
                                "offsetY": 0,
                                "startAngle": 0,
                                "endAngle": 360,
                                "expandOnClick": true,
                                "dataLabels": {
                                    "offset": 0,
                                    "minAngleToShowLabel": 10
                                },
                                "donut": {
                                    "size": "65%",
                                    "labels": {
                                        "show": false,
                                        "name": {
                                            "show": true,
                                            "fontSize": 16,
                                            "fontWeight": 600,
                                            "offsetY": -10
                                        },
                                        "value": {
                                            "show": true,
                                            "fontSize": 20,
                                            "fontWeight": 400,
                                            "offsetY": 10
                                        },
                                        "total": {
                                            "show": false,
                                            "showAlways": false,
                                            "label": "Total",
                                            "fontSize": 16,
                                            "fontWeight": 400
                                        }
                                    }
                                }
                            },
                            "polarArea": {
                                "rings": {
                                    "strokeWidth": 1,
                                    "strokeColor": "#e8e8e8"
                                },
                                "spokes": {
                                    "strokeWidth": 1,
                                    "connectorColors": "#e8e8e8"
                                }
                            },
                            "radar": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "polygons": {
                                    "strokeWidth": 1,
                                    "strokeColors": "#e8e8e8",
                                    "connectorColors": "#e8e8e8",
                                    "fill": {}
                                }
                            }
                        },
                        "dataLabels": {
                            "enabled": false,
                            "textAnchor": "middle",
                            "distributed": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700
                            },
                            "background": {
                                "enabled": true,
                                "foreColor": "#fff",
                                "borderRadius": 2,
                                "padding": 4,
                                "opacity": 0.9,
                                "borderWidth": 1,
                                "borderColor": "#fff",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 1,
                                    "left": 1,
                                    "blur": 1,
                                    "color": "#000",
                                    "opacity": 0.45
                                }
                            },
                            "dropShadow": {
                                "enabled": false,
                                "top": 1,
                                "left": 1,
                                "blur": 1,
                                "color": "#000",
                                "opacity": 0.45
                            }
                        },
                        "fill": {
                            "type": "solid",
                            "opacity": 0.3,
                            "gradient": {
                                "shade": "dark",
                                "type": "horizontal",
                                "shadeIntensity": 0.5,
                                "inverseColors": true,
                                "opacityFrom": 1,
                                "opacityTo": 1
                            },
                            "image": {
                                "src": []
                            },
                            "pattern": {
                                "style": "squares",
                                "width": 6,
                                "height": 6,
                                "strokeWidth": 2
                            }
                        },
                        "forecastDataPoints": {
                            "count": 0,
                            "fillOpacity": 0.5,
                            "dashArray": 4
                        },
                        "grid": {
                            "show": true,
                            "borderColor": "#E1E1E1",
                            "strokeDashArray": 0,
                            "position": "back",
                            "xaxis": {
                                "lines": {
                                    "show": false
                                }
                            },
                            "yaxis": {
                                "lines": {
                                    "show": true
                                }
                            },
                            "row": {
                                "opacity": 0.4
                            },
                            "column": {
                                "opacity": 0.5
                            },
                            "padding": {
                                "top": 15,
                                "right": 12,
                                "bottom": 8,
                                "left": 15
                            }
                        },
                        "labels": [],
                        "legend": {
                            "show": true,
                            "showForSingleSeries": false,
                            "showForNullSeries": true,
                            "showForZeroSeries": true,
                            "floating": false,
                            "position": "bottom",
                            "horizontalAlign": "center",
                            "inverseOrder": false,
                            "fontSize": 14,
                            "fontWeight": 400,
                            "offsetX": -20,
                            "offsetY": 0,
                            "customLegendItems": [],
                            "labels": {
                                "useSeriesColors": false
                            },
                            "markers": {
                                "width": 12,
                                "height": 12,
                                "strokeWidth": 0,
                                "strokeColor": "#fff",
                                "radius": 12,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "itemMargin": {
                                "horizontal": 5,
                                "vertical": 0
                            },
                            "onItemClick": {
                                "toggleDataSeries": true
                            },
                            "onItemHover": {
                                "highlightDataSeries": true
                            }
                        },
                        "markers": {
                            "discrete": [],
                            "size": 0,
                            "strokeColors": "#fff",
                            "strokeWidth": 2,
                            "strokeOpacity": 0.9,
                            "strokeDashArray": 0,
                            "fillOpacity": 1,
                            "shape": "circle",
                            "width": 8,
                            "height": 8,
                            "radius": 2,
                            "offsetX": 0,
                            "offsetY": 0,
                            "showNullDataPoints": true,
                            "hover": {
                                "sizeOffset": 6
                            }
                        },
                        "noData": {
                            "align": "center",
                            "verticalAlign": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": "14px"
                            }
                        },
                        "responsive": [],
                        "states": {
                            "normal": {
                                "filter": {
                                    "type": "none",
                                    "value": 0
                                }
                            },
                            "hover": {
                                "filter": {
                                    "type": "lighten",
                                    "value": 0.1
                                }
                            },
                            "active": {
                                "allowMultipleDataPointsSelection": false,
                                "filter": {
                                    "type": "darken",
                                    "value": 0.5
                                }
                            }
                        },
                        "title": {
                            "align": "left",
                            "margin": 5,
                            "offsetX": 0,
                            "offsetY": 0,
                            "floating": false,
                            "style": {
                                "fontSize": "14px",
                                "fontWeight": 900
                            }
                        },
                        "subtitle": {
                            "align": "left",
                            "margin": 5,
                            "offsetX": 0,
                            "offsetY": 30,
                            "floating": false,
                            "style": {
                                "fontSize": "12px",
                                "fontWeight": 400
                            }
                        },
                        "stroke": {
                            "show": true,
                            "curve": "smooth",
                            "lineCap": "butt",
                            "width": 4,
                            "dashArray": 0
                        },
                        "tooltip": {
                            "enabled": true,
                            "shared": true,
                            "followCursor": false,
                            "intersect": false,
                            "inverseOrder": false,
                            "fillSeriesColor": false,
                            "theme": "light",
                            "style": {
                                "fontSize": "12px"
                            },
                            "onDatasetHover": {
                                "highlightDataSeries": false
                            },
                            "x": {
                                "show": true,
                                "format": "dd MMM"
                            },
                            "y": {
                                "title": {}
                            },
                            "z": {
                                "title": "Size: "
                            },
                            "marker": {
                                "show": true
                            },
                            "items": {
                                "display": "flex"
                            },
                            "fixed": {
                                "enabled": false,
                                "position": "topRight",
                                "offsetX": 0,
                                "offsetY": 0
                            }
                        },
                        "xaxis": {
                            "type": "numeric",
                            "convertedCatToNumeric": false,
                            "offsetX": 0,
                            "offsetY": 5,
                            "labels": {
                                "show": true,
                                "rotate": -45,
                                "rotateAlways": false,
                                "hideOverlappingLabels": true,
                                "trim": true,
                                "maxHeight": 120,
                                "showDuplicates": true,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                },
                                "offsetX": 0,
                                "offsetY": 0,
                                "datetimeUTC": true,
                                "datetimeFormatter": {
                                    "year": "yyyy",
                                    "month": "MMM 'yy",
                                    "day": "dd MMM",
                                    "hour": "HH:mm",
                                    "minute": "HH:mm:ss",
                                    "second": "HH:mm:ss"
                                }
                            },
                            "axisBorder": {
                                "show": true,
                                "color": "#e0e0e0",
                                "width": "100%",
                                "height": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": true,
                                "color": "#e0e0e0",
                                "height": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "tickAmount": "dataPoints",
                            "tickPlacement": "on",
                            "floating": false,
                            "position": "bottom",
                            "title": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "crosshairs": {
                                "show": true,
                                "width": 1,
                                "position": "back",
                                "opacity": 0.9,
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 3
                                },
                                "fill": {
                                    "type": "solid",
                                    "color": "#B1B9C4",
                                    "gradient": {
                                        "colorFrom": "#D8E3F0",
                                        "colorTo": "#BED1E6",
                                        "opacityFrom": 0.4,
                                        "opacityTo": 0.5
                                    }
                                },
                                "dropShadow": {
                                    "enabled": false,
                                    "left": 0,
                                    "top": 0,
                                    "blur": 1,
                                    "opacity": 0.4
                                }
                            },
                            "tooltip": {
                                "enabled": true,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "12px"
                                }
                            }
                        },
                        "theme": {
                            "mode": "light",
                            "palette": "palette4",
                            "monochrome": {
                                "enabled": false,
                                "color": "#008FFB",
                                "shadeTo": "light",
                                "shadeIntensity": 0.65
                            }
                        }
                    },
                    "globals": {
                        "chartID": "5YKmP",
                        "cuid": "n9cxlnhul",
                        "events": {
                            "beforeMount": [],
                            "mounted": [],
                            "updated": [],
                            "clicked": [],
                            "selection": [],
                            "dataPointSelection": [],
                            "zoomed": [],
                            "scrolled": []
                        },
                        "colors": [
                            "#4ecdc4",
                            "#c7f464",
                            "#81D4FA",
                            "#fd6a6a",
                            "#546E7A"
                        ],
                        "clientX": 1242,
                        "clientY": 416,
                        "fill": {
                            "colors": [
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A"
                            ]
                        },
                        "stroke": {},
                        "dataLabels": {
                            "style": {}
                        },
                        "radarPolygons": {
                            "fill": {
                                "colors": [
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none"
                                ]
                            }
                        },
                        "markers": {
                            "size": [
                                0,
                                0
                            ],
                            "largestSize": 0
                        },
                        "animationEnded": true,
                        "isDirty": true,
                        "isExecCalled": false,
                        "initialConfig": {},
                        "initialSeries": [
                            {
                                "name": "Area",
                                "data": [
                                    {
                                        "x": "Jan",
                                        "y": "22"
                                    },
                                    {
                                        "x": "Feb",
                                        "y": 40
                                    },
                                    {
                                        "x": "Mar",
                                        "y": 28
                                    },
                                    {
                                        "x": "Apr",
                                        "y": 51
                                    },
                                    {
                                        "x": "May",
                                        "y": 42
                                    },
                                    {
                                        "x": "Jun",
                                        "y": 56
                                    }
                                ]
                            }
                        ],
                        "lastXAxis": {
                            "type": "numeric",
                            "categories": [],
                            "convertedCatToNumeric": false,
                            "offsetX": 0,
                            "offsetY": 5,
                            "labels": {
                                "show": true,
                                "rotate": -45,
                                "rotateAlways": false,
                                "hideOverlappingLabels": true,
                                "trim": true,
                                "maxHeight": 120,
                                "showDuplicates": true,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                },
                                "offsetX": 0,
                                "offsetY": 0,
                                "datetimeUTC": true,
                                "datetimeFormatter": {
                                    "year": "yyyy",
                                    "month": "MMM 'yy",
                                    "day": "dd MMM",
                                    "hour": "HH:mm",
                                    "minute": "HH:mm:ss",
                                    "second": "HH:mm:ss"
                                }
                            },
                            "axisBorder": {
                                "show": true,
                                "color": "#e0e0e0",
                                "width": "100%",
                                "height": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": true,
                                "color": "#e0e0e0",
                                "height": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "tickAmount": "dataPoints",
                            "tickPlacement": "on",
                            "floating": false,
                            "position": "bottom",
                            "title": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "crosshairs": {
                                "show": true,
                                "width": 1,
                                "position": "back",
                                "opacity": 0.9,
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 3
                                },
                                "fill": {
                                    "type": "solid",
                                    "color": "#B1B9C4",
                                    "gradient": {
                                        "colorFrom": "#D8E3F0",
                                        "colorTo": "#BED1E6",
                                        "stops": [
                                            0,
                                            100
                                        ],
                                        "opacityFrom": 0.4,
                                        "opacityTo": 0.5
                                    }
                                },
                                "dropShadow": {
                                    "enabled": false,
                                    "left": 0,
                                    "top": 0,
                                    "blur": 1,
                                    "opacity": 0.4
                                }
                            },
                            "tooltip": {
                                "enabled": true,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "12px"
                                }
                            }
                        },
                        "lastYAxis": [
                            {
                                "show": true,
                                "showAlways": false,
                                "showForNullSeries": true,
                                "opposite": false,
                                "reversed": false,
                                "logarithmic": false,
                                "logBase": 10,
                                "tickAmount": 5,
                                "forceNiceScale": false,
                                "floating": false,
                                "labels": {
                                    "show": true,
                                    "minWidth": 0,
                                    "maxWidth": 160,
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "rotate": 0,
                                    "padding": 20,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 400,
                                        "cssClass": ""
                                    }
                                },
                                "axisBorder": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 1,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "axisTicks": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 6,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "title": {
                                    "rotate": -90,
                                    "offsetY": 0,
                                    "offsetX": 0,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 700,
                                        "cssClass": ""
                                    }
                                },
                                "tooltip": {
                                    "enabled": false,
                                    "offsetX": 0
                                },
                                "crosshairs": {
                                    "show": true,
                                    "position": "front",
                                    "stroke": {
                                        "color": "#b6b6b6",
                                        "width": 1,
                                        "dashArray": 0
                                    }
                                }
                            }
                        ],
                        "columnSeries": null,
                        "labels": [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun"
                        ],
                        "timescaleLabels": [],
                        "noLabelsProvided": false,
                        "allSeriesCollapsed": false,
                        "collapsedSeries": [],
                        "collapsedSeriesIndices": [],
                        "ancillaryCollapsedSeries": [],
                        "ancillaryCollapsedSeriesIndices": [],
                        "risingSeries": [],
                        "dataFormatXNumeric": false,
                        "capturedSeriesIndex": -1,
                        "capturedDataPointIndex": -1,
                        "selectedDataPoints": [],
                        "goldenPadding": 35,
                        "invalidLogScale": false,
                        "ignoreYAxisIndexes": [],
                        "yAxisSameScaleIndices": [],
                        "maxValsInArrayIndex": 0,
                        "radialSize": 75.78048780487805,
                        "zoomEnabled": true,
                        "panEnabled": false,
                        "selectionEnabled": false,
                        "yaxis": null,
                        "mousedown": false,
                        "lastClientPosition": {},
                        "yValueDecimal": 0,
                        "total": 0,
                        "SVGNS": "http://www.w3.org/2000/svg",
                        "svgWidth": 480,
                        "svgHeight": 250,
                        "noData": false,
                        "locale": {
                            "toolbar": {
                                "exportToSVG": "Download SVG",
                                "exportToPNG": "Download PNG",
                                "exportToCSV": "Download CSV",
                                "menu": "Menu",
                                "selection": "Selection",
                                "selectionZoom": "Selection Zoom",
                                "zoomIn": "Zoom In",
                                "zoomOut": "Zoom Out",
                                "pan": "Panning",
                                "reset": "Reset Zoom"
                            }
                        },
                        "dom": {
                            "baseEl": {
                                "_prevClass": "5YKmP"
                            },
                            "elWrap": {},
                            "Paper": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "svg",
                                "_defs": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "defs"
                                }
                            },
                            "elGraphical": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elAnnotations": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elLegendWrap": {},
                            "elGridRectMask": {},
                            "elGridRectMarkerMask": {},
                            "elForecastMask": {},
                            "elNonForecastMask": {},
                            "elGridRect": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            },
                            "elGridRectMarker": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            }
                        },
                        "memory": {
                            "methodsToExec": []
                        },
                        "shouldAnimate": true,
                        "skipLastTimelinelabel": false,
                        "skipFirstTimelinelabel": false,
                        "delayedElements": [
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            }
                        ],
                        "axisCharts": true,
                        "isDataXYZ": false,
                        "resized": true,
                        "resizeTimer": null,
                        "comboCharts": false,
                        "dataChanged": false,
                        "previousPaths": [],
                        "allSeriesHasEqualX": true,
                        "pointsArray": [
                            [
                                [
                                    43.8,
                                    165.82222222222225
                                ],
                                [
                                    131.39999999999998,
                                    93.02222222222224
                                ],
                                [
                                    218.99999999999997,
                                    141.55555555555557
                                ],
                                [
                                    306.59999999999997,
                                    48.53333333333336
                                ],
                                [
                                    394.19999999999993,
                                    84.93333333333337
                                ],
                                [
                                    481.79999999999995,
                                    28.31111111111113
                                ]
                            ]
                        ],
                        "dataLabelsRects": [],
                        "lastDrawnDataLabelsIndexes": [],
                        "hasNullValues": false,
                        "easing": "<>",
                        "zoomed": false,
                        "gridWidth": 438,
                        "gridHeight": 182,
                        "rotateXLabels": false,
                        "defaultLabels": false,
                        "yLabelFormatters": [
                            null
                        ],
                        "LINE_HEIGHT_RATIO": 1.618,
                        "xAxisLabelsHeight": 10,
                        "xAxisLabelsWidth": 0,
                        "yAxisLabelsWidth": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "translateX": 30,
                        "translateY": 45,
                        "translateYAxisX": [
                            -3
                        ],
                        "yAxisWidths": [],
                        "translateXAxisY": -4,
                        "translateXAxisX": 0,
                        "tooltip": {
                            "tooltipUtil": {},
                            "tooltipLabels": {
                                "tooltipUtil": {}
                            },
                            "tooltipPosition": {},
                            "marker": {
                                "tooltipPosition": {}
                            },
                            "intersect": {},
                            "axesTooltip": {},
                            "showOnIntersect": false,
                            "showTooltipTitle": true,
                            "fixedTooltip": false,
                            "xaxisTooltip": {},
                            "yaxisTTEls": null,
                            "isBarShared": true,
                            "lastHoverTime": 1683478634563,
                            "xyRatios": {
                                "yRatio": [
                                    0.24725274725274726
                                ],
                                "invertedYRatio": 0.10273972602739725,
                                "zRatio": null,
                                "xRatio": null,
                                "initialXRatio": null,
                                "invertedXRatio": null,
                                "baseLineInvertedY": -175.20000000000002,
                                "baseLineY": [
                                    -72.8
                                ],
                                "baseLineX": 0
                            },
                            "isXAxisTooltipEnabled": true,
                            "yaxisTooltips": [
                                false
                            ],
                            "allTooltipSeriesGroups": [],
                            "xaxisOffY": 183,
                            "xaxisTooltipText": {},
                            "yaxisOffX": 1,
                            "yaxisTooltip": {},
                            "yaxisTooltipText": [
                                {}
                            ],
                            "xcrosshairsWidth": 1,
                            "ycrosshairs": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "ycrosshairsHidden": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "xAxisTicksPositions": [
                                73,
                                146,
                                219,
                                292,
                                365,
                                438
                            ],
                            "dataPointsDividedHeight": 30.333333333333332,
                            "dataPointsDividedWidth": 73,
                            "tooltipTitle": {},
                            "legendLabels": {},
                            "ttItems": [
                                {}
                            ],
                            "seriesBound": {
                                "x": 0,
                                "y": 0,
                                "width": 0,
                                "height": 0,
                                "top": 0,
                                "right": 0,
                                "bottom": 0,
                                "left": 0
                            }
                        },
                        "series": [
                            [
                                22,
                                40,
                                28,
                                51,
                                42,
                                56
                            ]
                        ],
                        "seriesCandleO": [],
                        "seriesCandleH": [],
                        "seriesCandleM": [],
                        "seriesCandleL": [],
                        "seriesCandleC": [],
                        "seriesRangeStart": [],
                        "seriesRangeEnd": [],
                        "seriesRangeBar": [],
                        "seriesPercent": [
                            [
                                100,
                                100,
                                100,
                                100,
                                100,
                                100
                            ]
                        ],
                        "seriesGoals": [
                            [
                                null,
                                null,
                                null,
                                null,
                                null,
                                null
                            ]
                        ],
                        "seriesX": [
                            null
                        ],
                        "seriesZ": [
                            []
                        ],
                        "seriesNames": [
                            "Area"
                        ],
                        "seriesTotals": [
                            239
                        ],
                        "seriesLog": [
                            null
                        ],
                        "seriesColors": [
                            null
                        ],
                        "stackedSeriesTotals": [
                            22,
                            40,
                            28,
                            51,
                            42,
                            56
                        ],
                        "seriesXvalues": [
                            [
                                43.8,
                                131.39999999999998,
                                218.99999999999997,
                                306.59999999999997,
                                394.19999999999993,
                                481.79999999999995
                            ]
                        ],
                        "seriesYvalues": [
                            [
                                165.82222222222225,
                                93.02222222222224,
                                141.55555555555557,
                                48.53333333333336,
                                84.93333333333337,
                                28.31111111111113
                            ]
                        ],
                        "categoryLabels": [],
                        "selectionResizeTimer": null,
                        "isXNumeric": false,
                        "xaxisLabelsCount": 6,
                        "isMultiLineX": false,
                        "isMultipleYAxis": false,
                        "maxY": 63,
                        "minY": 18,
                        "minYArr": [
                            18
                        ],
                        "maxYArr": [
                            63
                        ],
                        "maxX": -1.7976931348623157e+308,
                        "minX": 1.7976931348623157e+308,
                        "initialMaxX": -1.7976931348623157e+308,
                        "initialMinX": 1.7976931348623157e+308,
                        "maxDate": 0,
                        "minDate": 1.7976931348623157e+308,
                        "minZ": 1.7976931348623157e+308,
                        "maxZ": -1.7976931348623157e+308,
                        "minXDiff": 1.7976931348623157e+308,
                        "yAxisScale": [
                            {
                                "result": [
                                    18,
                                    27,
                                    36,
                                    45,
                                    54,
                                    63
                                ],
                                "niceMin": 18,
                                "niceMax": 63
                            }
                        ],
                        "xAxisScale": null,
                        "xAxisTicksPositions": [],
                        "yLabelsCoords": [
                            {
                                "width": 10,
                                "index": 0
                            }
                        ],
                        "yTitleCoords": [
                            {
                                "width": 0,
                                "index": 0
                            }
                        ],
                        "barPadForNumericAxis": 0,
                        "padHorizontal": 0,
                        "xRange": null,
                        "yRange": [
                            45
                        ],
                        "zRange": null,
                        "dataPoints": 6,
                        "xTickAmount": 0,
                        "xyCharts": true,
                        "isBarHorizontal": false,
                        "chartClass": ".apexcharts5YKmP",
                        "comboBarCount": 0,
                        "isRangeBar": false,
                        "xAxisHeight": 10,
                        "hasNegs": true,
                        "yLogRatio": [
                            0.24725274725274726
                        ],
                        "logYRange": [
                            null
                        ]
                    }
                },
                "publicMethods": [
                    "updateOptions",
                    "updateSeries",
                    "appendData",
                    "appendSeries",
                    "toggleSeries",
                    "showSeries",
                    "hideSeries",
                    "setLocale",
                    "resetSeries",
                    "zoomX",
                    "toggleDataPointSelection",
                    "dataURI",
                    "addXaxisAnnotation",
                    "addYaxisAnnotation",
                    "addPointAnnotation",
                    "clearAnnotations",
                    "removeAnnotation",
                    "paper",
                    "destroy"
                ],
                "eventList": [
                    "click",
                    "mousedown",
                    "mousemove",
                    "mouseleave",
                    "touchstart",
                    "touchmove",
                    "touchleave",
                    "mouseup",
                    "touchend"
                ],
                "animations": {},
                "axes": {},
                "core": {},
                "config": {
                    "opts": {}
                },
                "data": {
                    "coreUtils": {},
                    "fallbackToCategory": true,
                    "activeSeriesIndex": 0
                },
                "grid": {
                    "xaxisLabels": [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun"
                    ],
                    "axesUtils": {},
                    "isRangeBar": 0,
                    "elg": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesH": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesV": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    }
                },
                "graphics": {},
                "coreUtils": {},
                "crosshairs": {},
                "events": {},
                "exports": {},
                "localization": {},
                "options": {
                    "yAxis": {
                        "show": true,
                        "showAlways": false,
                        "showForNullSeries": true,
                        "opposite": false,
                        "reversed": false,
                        "logarithmic": false,
                        "logBase": 10,
                        "forceNiceScale": false,
                        "floating": false,
                        "labels": {
                            "show": true,
                            "minWidth": 0,
                            "maxWidth": 160,
                            "offsetX": 0,
                            "offsetY": 0,
                            "rotate": 0,
                            "padding": 20,
                            "style": {
                                "colors": [],
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": ""
                            }
                        },
                        "axisBorder": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 1,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "axisTicks": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 6,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "title": {
                            "rotate": -90,
                            "offsetY": 0,
                            "offsetX": 0,
                            "style": {
                                "fontSize": "11px",
                                "fontWeight": 900,
                                "cssClass": ""
                            }
                        },
                        "tooltip": {
                            "enabled": false,
                            "offsetX": 0
                        },
                        "crosshairs": {
                            "show": true,
                            "position": "front",
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1,
                                "dashArray": 0
                            }
                        }
                    },
                    "pointAnnotation": {
                        "x": 0,
                        "y": null,
                        "yAxisIndex": 0,
                        "seriesIndex": 0,
                        "marker": {
                            "size": 4,
                            "fillColor": "#fff",
                            "strokeWidth": 2,
                            "strokeColor": "#333",
                            "shape": "circle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "radius": 2,
                            "cssClass": ""
                        },
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        },
                        "customSVG": {
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "image": {
                            "width": 20,
                            "height": 20,
                            "offsetX": 0,
                            "offsetY": 0
                        }
                    },
                    "yAxisAnnotation": {
                        "y": 0,
                        "y2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "width": "100%",
                        "yAxisIndex": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "end",
                            "position": "right",
                            "offsetX": 0,
                            "offsetY": -3,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "xAxisAnnotation": {
                        "x": 0,
                        "x2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "orientation": "vertical",
                            "position": "top",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "text": {
                        "x": 0,
                        "y": 0,
                        "text": "",
                        "textAnchor": "start",
                        "fontSize": "13px",
                        "fontWeight": 400,
                        "appendTo": ".apexcharts-annotations",
                        "backgroundColor": "transparent",
                        "borderColor": "#c2c2c2",
                        "borderRadius": 0,
                        "borderWidth": 0,
                        "paddingLeft": 4,
                        "paddingRight": 4,
                        "paddingTop": 2,
                        "paddingBottom": 2
                    }
                },
                "responsive": {},
                "series": {
                    "legendInactiveClass": "legend-mouseover-inactive"
                },
                "theme": {
                    "isColorFn": false,
                    "isHeatmapDistributed": false,
                    "isBarDistributed": false
                },
                "formatters": {
                    "tooltipKeyFormat": "dd MMM"
                },
                "titleSubtitle": {},
                "legend": {
                    "isBarsDistributed": false,
                    "legendHelpers": {}
                },
                "toolbar": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308
                },
                "dimensions": {
                    "lgRect": {
                        "x": 0,
                        "y": 0,
                        "height": 0,
                        "width": 0
                    },
                    "yAxisWidth": 15,
                    "yAxisWidthLeft": 15,
                    "yAxisWidthRight": 0,
                    "xAxisHeight": 10,
                    "isSparkline": false,
                    "dimHelpers": {},
                    "dimYAxis": {},
                    "dimXAxis": {},
                    "dimGrid": {},
                    "lgWidthForSideLegends": 0,
                    "xPadRight": 0,
                    "xPadLeft": 0,
                    "xAxisWidth": 0
                },
                "updateHelpers": {},
                "zoomPanSelection": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308,
                    "dragged": false,
                    "graphics": {},
                    "eventList": [
                        "mousedown",
                        "mouseleave",
                        "mousemove",
                        "touchstart",
                        "touchmove",
                        "mouseup",
                        "touchend"
                    ],
                    "clientX": 0,
                    "clientY": 0,
                    "startX": 0,
                    "endX": 0,
                    "dragX": 0,
                    "startY": 0,
                    "endY": 0,
                    "dragY": 0,
                    "moveDirection": "none"
                },
                "pie": {
                    "chartType": "area",
                    "initialAnim": false,
                    "dynamicAnim": false,
                    "animBeginArr": [
                        0
                    ],
                    "animDur": 0,
                    "defaultSize": 182,
                    "centerY": 91,
                    "centerX": 219,
                    "fullAngle": 360,
                    "initialAngle": 0,
                    "donutSize": 49.25731707317073,
                    "maxY": 0,
                    "sliceLabels": [],
                    "sliceSizes": [],
                    "prevSectorAngleArr": []
                },
                "rangeBar": {
                    "isHorizontal": false,
                    "strokeWidth": 4,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xRatio": null,
                    "initialXRatio": null,
                    "invertedXRatio": null,
                    "invertedYRatio": 0.10273972602739725,
                    "baseLineInvertedY": -175.20000000000002,
                    "yaxisIndex": 0,
                    "seriesLen": 0,
                    "barHelpers": {}
                },
                "annotations": {
                    "graphics": {},
                    "helpers": {},
                    "xAxisAnnotations": {},
                    "yAxisAnnotations": {},
                    "pointsAnnotations": {},
                    "xDivision": 73
                }
            }
        },
        {
            "id": "Cy2RA",
            "chart": {
                "opts": {
                    "series": [
                        {
                            "name": "Bar",
                            "data": [
                                {
                                    "x": "Item 1",
                                    "y": 10
                                },
                                {
                                    "x": "Item 2",
                                    "y": 20
                                },
                                {
                                    "x": "Item 3",
                                    "y": 30
                                },
                                {
                                    "x": "Item 4",
                                    "y": 40
                                }
                            ]
                        }
                    ],
                    "annotations": {
                        "position": "front",
                        "yaxis": [],
                        "xaxis": [],
                        "points": []
                    },
                    "chart": {
                        "type": "bar",
                        "background": "",
                        "foreColor": "#333",
                        "offsetX": 0,
                        "offsetY": 0,
                        "toolbar": {
                            "show": false
                        },
                        "animations": {
                            "enabled": false
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 2,
                            "left": 2,
                            "blur": 4,
                            "color": "#000",
                            "opacity": 0.35
                        },
                        "fontFamily": "Roboto",
                        "height": 230,
                        "width": 400,
                        "id": "Cy2RA"
                    },
                    "plotOptions": {
                        "bar": {
                            "horizontal": true,
                            "columnWidth": "70%",
                            "barHeight": "70%",
                            "distributed": false,
                            "borderRadius": 10,
                            "colors": {
                                "ranges": [],
                                "backgroundBarColors": [],
                                "backgroundBarOpacity": 1
                            },
                            "dataLabels": {
                                "position": "top"
                            }
                        },
                        "heatmap": {
                            "radius": 2,
                            "enableShades": true,
                            "shadeIntensity": 0.5
                        },
                        "radialBar": {
                            "startAngle": 0,
                            "endAngle": 360,
                            "offsetX": 0,
                            "offsetY": 0,
                            "hollow": {
                                "margin": 5,
                                "size": "50%",
                                "background": "#fff",
                                "position": "front",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "track": {
                                "show": true,
                                "background": "#f2f2f2",
                                "strokeWidth": "97%",
                                "opacity": 1,
                                "margin": 5,
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "dataLabels": {
                                "show": true,
                                "name": {
                                    "show": true,
                                    "fontSize": 16,
                                    "offsetY": 0
                                },
                                "value": {
                                    "show": true,
                                    "fontSize": 14,
                                    "offsetY": 16
                                },
                                "total": {
                                    "show": false,
                                    "label": "Total",
                                    "fontSize": 16
                                }
                            }
                        },
                        "pie": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "dataLabels": {
                                "offset": 0
                            },
                            "donut": {
                                "size": "65%",
                                "labels": {
                                    "show": false,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "offsetY": -10
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 20,
                                        "offsetY": 10
                                    },
                                    "total": {
                                        "show": false,
                                        "showAlways": false,
                                        "label": "Total",
                                        "fontSize": 16
                                    }
                                }
                            }
                        },
                        "radar": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "polygons": {
                                "strokeColors": "#e8e8e8",
                                "connectorColors": "#e8e8e8",
                                "fill": {}
                            }
                        }
                    },
                    "theme": {
                        "mode": "light",
                        "palette": "palette4"
                    },
                    "dataLabels": {
                        "enabled": true,
                        "textAnchor": "middle",
                        "offsetX": -2,
                        "offsetY": -3,
                        "style": {
                            "fontSize": 12,
                            "fontWeight": 700,
                            "colors": [
                                "#fff"
                            ]
                        },
                        "background": {
                            "enabled": false,
                            "foreColor": "#fff",
                            "borderRadius": 2,
                            "padding": 4,
                            "opacity": 0.9,
                            "borderWidth": 1,
                            "borderColor": "#fff"
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 1,
                            "left": 1,
                            "blur": 1,
                            "color": "#000",
                            "opacity": 0.45
                        }
                    },
                    "markers": {
                        "size": 0,
                        "strokeColors": "#fff",
                        "strokeWidth": 2,
                        "strokeOpacity": 0.9,
                        "strokeDashArray": 0,
                        "fillOpacity": 1,
                        "shape": "circle",
                        "radius": 2,
                        "offsetX": 0,
                        "offsetY": 0,
                        "hover": {}
                    },
                    "yaxis": [
                        {
                            "show": true,
                            "showAlways": false,
                            "showForNullSeries": true,
                            "opposite": false,
                            "reversed": false,
                            "logarithmic": false,
                            "logBase": 10,
                            "forceNiceScale": false,
                            "floating": false,
                            "labels": {
                                "show": true,
                                "minWidth": 0,
                                "maxWidth": 160,
                                "offsetX": 0,
                                "offsetY": 0,
                                "rotate": 0,
                                "padding": 20,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                }
                            },
                            "axisBorder": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "title": {
                                "rotate": -90,
                                "offsetY": 0,
                                "offsetX": 0,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetX": 0
                            },
                            "crosshairs": {
                                "show": true,
                                "position": "front",
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 0
                                }
                            }
                        }
                    ],
                    "grid": {
                        "show": true,
                        "borderColor": "#e0e0e0",
                        "strokeDashArray": 0,
                        "position": "back"
                    },
                    "stroke": {
                        "show": true,
                        "curve": "smooth",
                        "lineCap": "butt",
                        "width": 2,
                        "dashArray": 0
                    },
                    "fill": {
                        "type": "solid",
                        "opacity": 0.85,
                        "gradient": {
                            "shade": "dark",
                            "type": "horizontal",
                            "shadeIntensity": 0.5,
                            "inverseColors": true,
                            "opacityFrom": 1,
                            "opacityTo": 1,
                            "stops": [
                                0,
                                50,
                                100
                            ],
                            "colorStops": []
                        },
                        "pattern": {
                            "style": "squares",
                            "width": 6,
                            "height": 6,
                            "strokeWidth": 2
                        }
                    },
                    "legend": {
                        "show": true,
                        "showForSingleSeries": false,
                        "floating": false,
                        "position": "bottom",
                        "horizontalAlign": "center",
                        "fontSize": 14,
                        "fontWeight": 400,
                        "offsetX": -20,
                        "offsetY": 0,
                        "labels": {
                            "useSeriesColors": false
                        },
                        "markers": {
                            "width": 12,
                            "height": 12,
                            "strokeWidth": 0,
                            "strokeColor": "#fff",
                            "radius": 12
                        },
                        "itemMargin": {
                            "horizontal": 5,
                            "vertical": 0
                        },
                        "onItemClick": {
                            "toggleDataSeries": true
                        },
                        "onItemHover": {
                            "highlightDataSeries": true
                        }
                    }
                },
                "w": {
                    "config": {
                        "annotations": {
                            "position": "front",
                            "texts": [],
                            "images": [],
                            "shapes": []
                        },
                        "chart": {
                            "animations": {
                                "enabled": false,
                                "easing": "swing",
                                "speed": 800,
                                "animateGradually": {
                                    "delay": 150,
                                    "enabled": true
                                },
                                "dynamicAnimation": {
                                    "enabled": true,
                                    "speed": 350
                                }
                            },
                            "background": "",
                            "locales": [
                                null
                            ],
                            "defaultLocale": "en",
                            "dropShadow": {
                                "enabled": false,
                                "top": 2,
                                "left": 2,
                                "blur": 4,
                                "color": "#000",
                                "opacity": 0.35
                            },
                            "events": {},
                            "foreColor": "#333",
                            "fontFamily": "Roboto",
                            "height": 230,
                            "parentHeightOffset": 15,
                            "redrawOnParentResize": true,
                            "redrawOnWindowResize": true,
                            "id": "Cy2RA",
                            "offsetX": 0,
                            "offsetY": 0,
                            "selection": {
                                "enabled": false,
                                "type": "x",
                                "fill": {
                                    "color": "#24292e",
                                    "opacity": 0.1
                                },
                                "stroke": {
                                    "width": 1,
                                    "color": "#24292e",
                                    "opacity": 0.4,
                                    "dashArray": 3
                                },
                                "xaxis": {},
                                "yaxis": {}
                            },
                            "sparkline": {
                                "enabled": false
                            },
                            "brush": {
                                "enabled": false,
                                "autoScaleYaxis": true
                            },
                            "stacked": false,
                            "stackType": "normal",
                            "toolbar": {
                                "show": false,
                                "offsetX": 0,
                                "offsetY": 0,
                                "tools": {
                                    "download": true,
                                    "selection": false,
                                    "zoom": false,
                                    "zoomin": false,
                                    "zoomout": false,
                                    "pan": false,
                                    "reset": false,
                                    "customIcons": []
                                },
                                "export": {
                                    "csv": {
                                        "columnDelimiter": ",",
                                        "headerCategory": "category",
                                        "headerValue": "value"
                                    },
                                    "png": {},
                                    "svg": {}
                                },
                                "autoSelected": "zoom"
                            },
                            "type": "bar",
                            "width": 400,
                            "zoom": {
                                "enabled": false,
                                "type": "x",
                                "autoScaleYaxis": false,
                                "zoomedArea": {
                                    "fill": {
                                        "color": "#90CAF9",
                                        "opacity": 0.4
                                    },
                                    "stroke": {
                                        "color": "#0D47A1",
                                        "opacity": 0.4,
                                        "width": 1
                                    }
                                }
                            }
                        },
                        "plotOptions": {
                            "area": {
                                "fillTo": "origin"
                            },
                            "bar": {
                                "horizontal": true,
                                "columnWidth": "70%",
                                "barHeight": "70%",
                                "distributed": false,
                                "borderRadius": 10,
                                "rangeBarOverlap": true,
                                "rangeBarGroupRows": false,
                                "colors": {
                                    "backgroundBarOpacity": 1,
                                    "backgroundBarRadius": 0
                                },
                                "dataLabels": {
                                    "position": "top",
                                    "maxItems": 100,
                                    "hideOverflowingLabels": true,
                                    "orientation": "horizontal"
                                }
                            },
                            "bubble": {},
                            "candlestick": {
                                "colors": {
                                    "upward": "#00B746",
                                    "downward": "#EF403C"
                                },
                                "wick": {
                                    "useFillColor": true
                                }
                            },
                            "boxPlot": {
                                "colors": {
                                    "upper": "#00E396",
                                    "lower": "#008FFB"
                                }
                            },
                            "heatmap": {
                                "radius": 2,
                                "enableShades": true,
                                "shadeIntensity": 0.5,
                                "reverseNegativeShade": false,
                                "distributed": false,
                                "useFillColorAsStroke": false,
                                "colorScale": {
                                    "inverse": false,
                                    "ranges": []
                                }
                            },
                            "treemap": {
                                "enableShades": true,
                                "shadeIntensity": 0.5,
                                "distributed": false,
                                "reverseNegativeShade": false,
                                "useFillColorAsStroke": false,
                                "colorScale": {
                                    "inverse": false,
                                    "ranges": []
                                }
                            },
                            "radialBar": {
                                "inverseOrder": false,
                                "startAngle": 0,
                                "endAngle": 360,
                                "offsetX": 0,
                                "offsetY": 0,
                                "hollow": {
                                    "margin": 5,
                                    "size": "50%",
                                    "background": "#fff",
                                    "imageWidth": 150,
                                    "imageHeight": 150,
                                    "imageOffsetX": 0,
                                    "imageOffsetY": 0,
                                    "imageClipped": true,
                                    "position": "front",
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "track": {
                                    "show": true,
                                    "background": "#f2f2f2",
                                    "strokeWidth": "97%",
                                    "opacity": 1,
                                    "margin": 5,
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "dataLabels": {
                                    "show": true,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "fontWeight": 600,
                                        "offsetY": 0
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 14,
                                        "fontWeight": 400,
                                        "offsetY": 16
                                    },
                                    "total": {
                                        "show": false,
                                        "label": "Total",
                                        "fontSize": 16,
                                        "fontWeight": 600
                                    }
                                }
                            },
                            "pie": {
                                "customScale": 1,
                                "offsetX": 0,
                                "offsetY": 0,
                                "startAngle": 0,
                                "endAngle": 360,
                                "expandOnClick": true,
                                "dataLabels": {
                                    "offset": 0,
                                    "minAngleToShowLabel": 10
                                },
                                "donut": {
                                    "size": "65%",
                                    "labels": {
                                        "show": false,
                                        "name": {
                                            "show": true,
                                            "fontSize": 16,
                                            "fontWeight": 600,
                                            "offsetY": -10
                                        },
                                        "value": {
                                            "show": true,
                                            "fontSize": 20,
                                            "fontWeight": 400,
                                            "offsetY": 10
                                        },
                                        "total": {
                                            "show": false,
                                            "showAlways": false,
                                            "label": "Total",
                                            "fontSize": 16,
                                            "fontWeight": 400
                                        }
                                    }
                                }
                            },
                            "polarArea": {
                                "rings": {
                                    "strokeWidth": 1,
                                    "strokeColor": "#e8e8e8"
                                },
                                "spokes": {
                                    "strokeWidth": 1,
                                    "connectorColors": "#e8e8e8"
                                }
                            },
                            "radar": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "polygons": {
                                    "strokeWidth": 1,
                                    "strokeColors": "#e8e8e8",
                                    "connectorColors": "#e8e8e8",
                                    "fill": {}
                                }
                            }
                        },
                        "dataLabels": {
                            "enabled": true,
                            "textAnchor": "middle",
                            "distributed": false,
                            "offsetX": -2,
                            "offsetY": -3,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700
                            },
                            "background": {
                                "enabled": false,
                                "foreColor": "#fff",
                                "borderRadius": 2,
                                "padding": 4,
                                "opacity": 0.9,
                                "borderWidth": 1,
                                "borderColor": "#fff",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 1,
                                    "left": 1,
                                    "blur": 1,
                                    "color": "#000",
                                    "opacity": 0.45
                                }
                            },
                            "dropShadow": {
                                "enabled": false,
                                "top": 1,
                                "left": 1,
                                "blur": 1,
                                "color": "#000",
                                "opacity": 0.45
                            }
                        },
                        "fill": {
                            "type": "solid",
                            "opacity": 0.85,
                            "gradient": {
                                "shade": "dark",
                                "type": "horizontal",
                                "shadeIntensity": 0.5,
                                "inverseColors": true,
                                "opacityFrom": 1,
                                "opacityTo": 1
                            },
                            "image": {
                                "src": []
                            },
                            "pattern": {
                                "style": "squares",
                                "width": 6,
                                "height": 6,
                                "strokeWidth": 2
                            }
                        },
                        "forecastDataPoints": {
                            "count": 0,
                            "fillOpacity": 0.5,
                            "dashArray": 4
                        },
                        "grid": {
                            "show": true,
                            "borderColor": "#e0e0e0",
                            "strokeDashArray": 0,
                            "position": "back",
                            "xaxis": {
                                "lines": {
                                    "show": false
                                }
                            },
                            "yaxis": {
                                "lines": {
                                    "show": true
                                }
                            },
                            "row": {
                                "opacity": 0.5
                            },
                            "column": {
                                "opacity": 0.5
                            },
                            "padding": {
                                "top": 0,
                                "right": 25,
                                "bottom": 0,
                                "left": 15
                            }
                        },
                        "labels": [],
                        "legend": {
                            "show": true,
                            "showForSingleSeries": false,
                            "showForNullSeries": true,
                            "showForZeroSeries": true,
                            "floating": false,
                            "position": "bottom",
                            "horizontalAlign": "center",
                            "inverseOrder": false,
                            "fontSize": 14,
                            "fontWeight": 400,
                            "offsetX": -20,
                            "offsetY": 0,
                            "customLegendItems": [],
                            "labels": {
                                "useSeriesColors": false
                            },
                            "markers": {
                                "width": 12,
                                "height": 12,
                                "strokeWidth": 0,
                                "strokeColor": "#fff",
                                "radius": 12,
                                "offsetX": 0,
                                "offsetY": 0,
                                "shape": "square",
                                "size": 8
                            },
                            "itemMargin": {
                                "horizontal": 5,
                                "vertical": 0
                            },
                            "onItemClick": {
                                "toggleDataSeries": true
                            },
                            "onItemHover": {
                                "highlightDataSeries": true
                            }
                        },
                        "markers": {
                            "discrete": [],
                            "size": 0,
                            "strokeColors": "#fff",
                            "strokeWidth": 2,
                            "strokeOpacity": 0.9,
                            "strokeDashArray": 0,
                            "fillOpacity": 1,
                            "shape": "circle",
                            "width": 8,
                            "height": 8,
                            "radius": 2,
                            "offsetX": 0,
                            "offsetY": 0,
                            "showNullDataPoints": true,
                            "hover": {
                                "sizeOffset": 3
                            }
                        },
                        "noData": {
                            "align": "center",
                            "verticalAlign": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": "14px"
                            }
                        },
                        "responsive": [],
                        "states": {
                            "normal": {
                                "filter": {
                                    "type": "none",
                                    "value": 0
                                }
                            },
                            "hover": {
                                "filter": {
                                    "type": "lighten",
                                    "value": 0.1
                                }
                            },
                            "active": {
                                "allowMultipleDataPointsSelection": false,
                                "filter": {
                                    "type": "darken",
                                    "value": 0.5
                                }
                            }
                        },
                        "title": {
                            "align": "left",
                            "margin": 5,
                            "offsetX": 0,
                            "offsetY": 0,
                            "floating": false,
                            "style": {
                                "fontSize": "14px",
                                "fontWeight": 900
                            }
                        },
                        "subtitle": {
                            "align": "left",
                            "margin": 5,
                            "offsetX": 0,
                            "offsetY": 30,
                            "floating": false,
                            "style": {
                                "fontSize": "12px",
                                "fontWeight": 400
                            }
                        },
                        "stroke": {
                            "show": true,
                            "curve": "smooth",
                            "lineCap": "butt",
                            "width": 2,
                            "dashArray": 0
                        },
                        "tooltip": {
                            "enabled": true,
                            "shared": false,
                            "followCursor": false,
                            "intersect": true,
                            "inverseOrder": false,
                            "fillSeriesColor": false,
                            "theme": "light",
                            "style": {
                                "fontSize": "12px"
                            },
                            "onDatasetHover": {
                                "highlightDataSeries": false
                            },
                            "x": {
                                "show": true,
                                "format": "dd MMM"
                            },
                            "y": {
                                "title": {}
                            },
                            "z": {
                                "title": "Size: "
                            },
                            "marker": {
                                "show": true
                            },
                            "items": {
                                "display": "flex"
                            },
                            "fixed": {
                                "enabled": false,
                                "position": "topRight",
                                "offsetX": 0,
                                "offsetY": 0
                            }
                        },
                        "xaxis": {
                            "type": "category",
                            "categories": [],
                            "convertedCatToNumeric": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "labels": {
                                "show": true,
                                "rotate": -45,
                                "rotateAlways": false,
                                "hideOverlappingLabels": true,
                                "trim": true,
                                "maxHeight": 120,
                                "showDuplicates": true,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                },
                                "offsetX": 0,
                                "offsetY": 0,
                                "datetimeUTC": true,
                                "datetimeFormatter": {
                                    "year": "yyyy",
                                    "month": "MMM 'yy",
                                    "day": "dd MMM",
                                    "hour": "HH:mm",
                                    "minute": "HH:mm:ss",
                                    "second": "HH:mm:ss"
                                }
                            },
                            "axisBorder": {
                                "show": true,
                                "color": "#e0e0e0",
                                "width": "100%",
                                "height": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": true,
                                "color": "#e0e0e0",
                                "height": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "tickPlacement": "between",
                            "floating": false,
                            "position": "bottom",
                            "title": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "crosshairs": {
                                "show": true,
                                "width": 1,
                                "position": "back",
                                "opacity": 0.9,
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 3
                                },
                                "fill": {
                                    "type": "solid",
                                    "color": "#B1B9C4",
                                    "gradient": {
                                        "colorFrom": "#D8E3F0",
                                        "colorTo": "#BED1E6",
                                        "stops": [
                                            0,
                                            100
                                        ],
                                        "opacityFrom": 0.4,
                                        "opacityTo": 0.5
                                    }
                                },
                                "dropShadow": {
                                    "enabled": false,
                                    "left": 0,
                                    "top": 0,
                                    "blur": 1,
                                    "opacity": 0.4
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "12px"
                                }
                            }
                        },
                        "theme": {
                            "mode": "light",
                            "palette": "palette4",
                            "monochrome": {
                                "enabled": false,
                                "color": "#008FFB",
                                "shadeTo": "light",
                                "shadeIntensity": 0.65
                            }
                        }
                    },
                    "globals": {
                        "chartID": "Cy2RA",
                        "cuid": "ywwg2tnu",
                        "events": {
                            "beforeMount": [],
                            "mounted": [],
                            "updated": [],
                            "clicked": [],
                            "selection": [],
                            "dataPointSelection": [],
                            "zoomed": [],
                            "scrolled": []
                        },
                        "colors": [
                            "#4ecdc4",
                            "#c7f464",
                            "#81D4FA",
                            "#fd6a6a",
                            "#546E7A"
                        ],
                        "clientX": 961,
                        "clientY": 446,
                        "fill": {
                            "colors": [
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A"
                            ]
                        },
                        "stroke": {},
                        "dataLabels": {
                            "style": {
                                "colors": [
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff"
                                ]
                            }
                        },
                        "radarPolygons": {
                            "fill": {
                                "colors": [
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none"
                                ]
                            }
                        },
                        "markers": {
                            "size": [
                                0,
                                0
                            ],
                            "largestSize": 0
                        },
                        "animationEnded": true,
                        "isDirty": true,
                        "isExecCalled": false,
                        "initialConfig": {},
                        "initialSeries": [
                            {
                                "name": "Bar",
                                "data": [
                                    {
                                        "x": "Item 1",
                                        "y": 10
                                    },
                                    {
                                        "x": "Item 2",
                                        "y": 20
                                    },
                                    {
                                        "x": "Item 3",
                                        "y": 30
                                    },
                                    {
                                        "x": "Item 4",
                                        "y": 40
                                    }
                                ]
                            }
                        ],
                        "lastXAxis": {
                            "type": "category",
                            "categories": [],
                            "convertedCatToNumeric": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "labels": {
                                "show": true,
                                "rotate": -45,
                                "rotateAlways": false,
                                "hideOverlappingLabels": true,
                                "trim": true,
                                "maxHeight": 120,
                                "showDuplicates": true,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                },
                                "offsetX": 0,
                                "offsetY": 0,
                                "datetimeUTC": true,
                                "datetimeFormatter": {
                                    "year": "yyyy",
                                    "month": "MMM 'yy",
                                    "day": "dd MMM",
                                    "hour": "HH:mm",
                                    "minute": "HH:mm:ss",
                                    "second": "HH:mm:ss"
                                }
                            },
                            "axisBorder": {
                                "show": true,
                                "color": "#e0e0e0",
                                "width": "100%",
                                "height": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": true,
                                "color": "#e0e0e0",
                                "height": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "tickPlacement": "between",
                            "floating": false,
                            "position": "bottom",
                            "title": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "crosshairs": {
                                "show": true,
                                "width": 1,
                                "position": "back",
                                "opacity": 0.9,
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 3
                                },
                                "fill": {
                                    "type": "solid",
                                    "color": "#B1B9C4",
                                    "gradient": {
                                        "colorFrom": "#D8E3F0",
                                        "colorTo": "#BED1E6",
                                        "stops": [
                                            0,
                                            100
                                        ],
                                        "opacityFrom": 0.4,
                                        "opacityTo": 0.5
                                    }
                                },
                                "dropShadow": {
                                    "enabled": false,
                                    "left": 0,
                                    "top": 0,
                                    "blur": 1,
                                    "opacity": 0.4
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "12px"
                                }
                            }
                        },
                        "lastYAxis": [
                            {
                                "show": true,
                                "showAlways": false,
                                "showForNullSeries": true,
                                "opposite": false,
                                "reversed": false,
                                "logarithmic": false,
                                "logBase": 10,
                                "forceNiceScale": false,
                                "floating": false,
                                "labels": {
                                    "show": true,
                                    "minWidth": 0,
                                    "maxWidth": 160,
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "rotate": 0,
                                    "padding": 20,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 400,
                                        "cssClass": ""
                                    }
                                },
                                "axisBorder": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 1,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "axisTicks": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 6,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "title": {
                                    "rotate": -90,
                                    "offsetY": 0,
                                    "offsetX": 0,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 700,
                                        "cssClass": ""
                                    }
                                },
                                "tooltip": {
                                    "enabled": false,
                                    "offsetX": 0
                                },
                                "crosshairs": {
                                    "show": true,
                                    "position": "front",
                                    "stroke": {
                                        "color": "#b6b6b6",
                                        "width": 1,
                                        "dashArray": 0
                                    }
                                }
                            }
                        ],
                        "columnSeries": null,
                        "labels": [
                            "Item 1",
                            "Item 2",
                            "Item 3",
                            "Item 4"
                        ],
                        "timescaleLabels": [],
                        "noLabelsProvided": false,
                        "allSeriesCollapsed": false,
                        "collapsedSeries": [],
                        "collapsedSeriesIndices": [],
                        "ancillaryCollapsedSeries": [],
                        "ancillaryCollapsedSeriesIndices": [],
                        "risingSeries": [],
                        "dataFormatXNumeric": false,
                        "capturedSeriesIndex": -1,
                        "capturedDataPointIndex": -1,
                        "selectedDataPoints": [],
                        "goldenPadding": 35,
                        "invalidLogScale": false,
                        "ignoreYAxisIndexes": [],
                        "yAxisSameScaleIndices": [],
                        "maxValsInArrayIndex": 0,
                        "radialSize": 84.2439024390244,
                        "zoomEnabled": false,
                        "panEnabled": false,
                        "selectionEnabled": false,
                        "yaxis": null,
                        "mousedown": false,
                        "lastClientPosition": {},
                        "yValueDecimal": 0,
                        "total": 0,
                        "SVGNS": "http://www.w3.org/2000/svg",
                        "svgWidth": 400,
                        "svgHeight": 230,
                        "noData": false,
                        "locale": {
                            "toolbar": {
                                "exportToSVG": "Download SVG",
                                "exportToPNG": "Download PNG",
                                "exportToCSV": "Download CSV",
                                "menu": "Menu",
                                "selection": "Selection",
                                "selectionZoom": "Selection Zoom",
                                "zoomIn": "Zoom In",
                                "zoomOut": "Zoom Out",
                                "pan": "Panning",
                                "reset": "Reset Zoom"
                            }
                        },
                        "dom": {
                            "baseEl": {
                                "_prevClass": "Cy2RA"
                            },
                            "elWrap": {},
                            "Paper": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "svg",
                                "_defs": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "defs"
                                }
                            },
                            "elGraphical": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elAnnotations": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elLegendWrap": {},
                            "elGridRectMask": {},
                            "elGridRectMarkerMask": {},
                            "elForecastMask": {},
                            "elNonForecastMask": {},
                            "elGridRect": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            },
                            "elGridRectMarker": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            }
                        },
                        "memory": {
                            "methodsToExec": []
                        },
                        "shouldAnimate": true,
                        "skipLastTimelinelabel": false,
                        "skipFirstTimelinelabel": false,
                        "delayedElements": [
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            }
                        ],
                        "axisCharts": true,
                        "isDataXYZ": false,
                        "resized": true,
                        "resizeTimer": null,
                        "comboCharts": false,
                        "dataChanged": false,
                        "previousPaths": [],
                        "allSeriesHasEqualX": true,
                        "pointsArray": [],
                        "dataLabelsRects": [
                            [
                                {
                                    "x": 82.35,
                                    "y": 17.125,
                                    "width": 0,
                                    "height": 0
                                },
                                {
                                    "x": 168.6,
                                    "y": 63.375,
                                    "width": 0,
                                    "height": 0
                                },
                                {
                                    "x": 254.85000000000002,
                                    "y": 109.625,
                                    "width": 0,
                                    "height": 0
                                },
                                {
                                    "x": 341.1,
                                    "y": 155.875,
                                    "width": 0,
                                    "height": 0
                                }
                            ]
                        ],
                        "lastDrawnDataLabelsIndexes": [
                            [
                                0,
                                1,
                                2,
                                3,
                                0,
                                1,
                                2,
                                3
                            ]
                        ],
                        "hasNullValues": false,
                        "zoomed": false,
                        "gridWidth": 345,
                        "gridHeight": 185,
                        "rotateXLabels": false,
                        "defaultLabels": false,
                        "yLabelFormatters": [
                            null
                        ],
                        "LINE_HEIGHT_RATIO": 1.618,
                        "xAxisLabelsHeight": 10,
                        "xAxisLabelsWidth": 0,
                        "yAxisLabelsWidth": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "translateX": 30,
                        "translateY": 30,
                        "translateYAxisX": [
                            -3
                        ],
                        "yAxisWidths": [],
                        "translateXAxisY": -8,
                        "translateXAxisX": 0,
                        "tooltip": {
                            "tooltipUtil": {},
                            "tooltipLabels": {
                                "tooltipUtil": {}
                            },
                            "tooltipPosition": {},
                            "marker": {
                                "tooltipPosition": {}
                            },
                            "intersect": {},
                            "axesTooltip": {},
                            "showOnIntersect": true,
                            "showTooltipTitle": true,
                            "fixedTooltip": false,
                            "xaxisTooltip": null,
                            "yaxisTTEls": null,
                            "isBarShared": false,
                            "lastHoverTime": 1683478646352,
                            "xyRatios": {
                                "yRatio": [
                                    0.21621621621621623
                                ],
                                "invertedYRatio": 0.11594202898550725,
                                "zRatio": null,
                                "xRatio": null,
                                "initialXRatio": null,
                                "invertedXRatio": null,
                                "baseLineInvertedY": 0.1,
                                "baseLineY": [
                                    0
                                ],
                                "baseLineX": 0
                            },
                            "isXAxisTooltipEnabled": false,
                            "yaxisTooltips": [
                                false
                            ],
                            "allTooltipSeriesGroups": [],
                            "xaxisOffY": 186,
                            "yaxisOffX": 1,
                            "yaxisTooltip": {},
                            "yaxisTooltipText": [
                                {}
                            ],
                            "xcrosshairsWidth": 0,
                            "ycrosshairs": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "ycrosshairsHidden": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "xAxisTicksPositions": [
                                86.25,
                                172.5,
                                258.75,
                                345
                            ],
                            "dataPointsDividedHeight": 46.25,
                            "dataPointsDividedWidth": 86.25,
                            "tooltipTitle": {},
                            "legendLabels": {},
                            "ttItems": [
                                {}
                            ],
                            "seriesBound": {
                                "x": 0,
                                "y": 0,
                                "width": 0,
                                "height": 0,
                                "top": 0,
                                "right": 0,
                                "bottom": 0,
                                "left": 0
                            }
                        },
                        "series": [
                            [
                                10,
                                20,
                                30,
                                40
                            ]
                        ],
                        "seriesCandleO": [],
                        "seriesCandleH": [],
                        "seriesCandleM": [],
                        "seriesCandleL": [],
                        "seriesCandleC": [],
                        "seriesRangeStart": [],
                        "seriesRangeEnd": [],
                        "seriesRangeBar": [],
                        "seriesPercent": [
                            [
                                100,
                                100,
                                100,
                                100
                            ]
                        ],
                        "seriesGoals": [
                            [
                                null,
                                null,
                                null,
                                null
                            ]
                        ],
                        "seriesX": [
                            null
                        ],
                        "seriesZ": [
                            []
                        ],
                        "seriesNames": [
                            "Bar"
                        ],
                        "seriesTotals": [
                            100
                        ],
                        "seriesLog": [
                            null
                        ],
                        "seriesColors": [
                            null
                        ],
                        "stackedSeriesTotals": [
                            10,
                            20,
                            30,
                            40
                        ],
                        "seriesXvalues": [
                            [
                                null,
                                258.85,
                                388.225,
                                517.6
                            ]
                        ],
                        "seriesYvalues": [
                            [
                                53.1875,
                                99.4375,
                                145.6875,
                                191.9375
                            ]
                        ],
                        "categoryLabels": [],
                        "selectionResizeTimer": null,
                        "isXNumeric": false,
                        "xaxisLabelsCount": 0,
                        "isMultiLineX": false,
                        "isMultipleYAxis": false,
                        "maxY": 40,
                        "minY": 0,
                        "minYArr": [
                            0
                        ],
                        "maxYArr": [
                            40
                        ],
                        "maxX": -1.7976931348623157e+308,
                        "minX": 1.7976931348623157e+308,
                        "initialMaxX": -1.7976931348623157e+308,
                        "initialMinX": 1.7976931348623157e+308,
                        "maxDate": 0,
                        "minDate": 1.7976931348623157e+308,
                        "minZ": 1.7976931348623157e+308,
                        "maxZ": -1.7976931348623157e+308,
                        "minXDiff": 1.7976931348623157e+308,
                        "yAxisScale": [
                            {
                                "result": [
                                    0,
                                    10,
                                    20,
                                    30,
                                    40
                                ],
                                "niceMin": 0,
                                "niceMax": 40
                            }
                        ],
                        "xAxisScale": null,
                        "xAxisTicksPositions": [],
                        "yLabelsCoords": [
                            {
                                "width": 0,
                                "index": 0
                            }
                        ],
                        "yTitleCoords": [
                            {
                                "width": 0,
                                "index": 0
                            }
                        ],
                        "barPadForNumericAxis": 0,
                        "padHorizontal": 0,
                        "xRange": null,
                        "yRange": [
                            40
                        ],
                        "zRange": null,
                        "dataPoints": 4,
                        "xTickAmount": 4,
                        "xyCharts": true,
                        "isBarHorizontal": true,
                        "chartClass": ".apexchartsCy2RA",
                        "comboBarCount": 0,
                        "isRangeBar": false,
                        "xAxisHeight": 10,
                        "yLogRatio": [
                            0.21621621621621623
                        ],
                        "logYRange": [
                            null
                        ]
                    }
                },
                "publicMethods": [
                    "updateOptions",
                    "updateSeries",
                    "appendData",
                    "appendSeries",
                    "toggleSeries",
                    "showSeries",
                    "hideSeries",
                    "setLocale",
                    "resetSeries",
                    "zoomX",
                    "toggleDataPointSelection",
                    "dataURI",
                    "addXaxisAnnotation",
                    "addYaxisAnnotation",
                    "addPointAnnotation",
                    "clearAnnotations",
                    "removeAnnotation",
                    "paper",
                    "destroy"
                ],
                "eventList": [
                    "click",
                    "mousedown",
                    "mousemove",
                    "mouseleave",
                    "touchstart",
                    "touchmove",
                    "touchleave",
                    "mouseup",
                    "touchend"
                ],
                "animations": {},
                "axes": {},
                "core": {},
                "config": {
                    "opts": {}
                },
                "data": {
                    "coreUtils": {},
                    "fallbackToCategory": true,
                    "activeSeriesIndex": 0
                },
                "grid": {
                    "xaxisLabels": [
                        "Item 1",
                        "Item 2",
                        "Item 3",
                        "Item 4"
                    ],
                    "axesUtils": {},
                    "isRangeBar": 0,
                    "elg": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesH": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesV": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    }
                },
                "graphics": {},
                "coreUtils": {},
                "crosshairs": {},
                "events": {},
                "exports": {},
                "localization": {},
                "options": {
                    "yAxis": {
                        "show": true,
                        "showAlways": false,
                        "showForNullSeries": true,
                        "opposite": false,
                        "reversed": false,
                        "logarithmic": false,
                        "logBase": 10,
                        "forceNiceScale": false,
                        "floating": false,
                        "labels": {
                            "show": true,
                            "minWidth": 0,
                            "maxWidth": 160,
                            "offsetX": 0,
                            "offsetY": 0,
                            "rotate": 0,
                            "padding": 20,
                            "style": {
                                "colors": [],
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": ""
                            }
                        },
                        "axisBorder": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 1,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "axisTicks": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 6,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "title": {
                            "rotate": -90,
                            "offsetY": 0,
                            "offsetX": 0,
                            "style": {
                                "fontSize": "11px",
                                "fontWeight": 900,
                                "cssClass": ""
                            }
                        },
                        "tooltip": {
                            "enabled": false,
                            "offsetX": 0
                        },
                        "crosshairs": {
                            "show": true,
                            "position": "front",
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1,
                                "dashArray": 0
                            }
                        }
                    },
                    "pointAnnotation": {
                        "x": 0,
                        "y": null,
                        "yAxisIndex": 0,
                        "seriesIndex": 0,
                        "marker": {
                            "size": 4,
                            "fillColor": "#fff",
                            "strokeWidth": 2,
                            "strokeColor": "#333",
                            "shape": "circle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "radius": 2,
                            "cssClass": ""
                        },
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        },
                        "customSVG": {
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "image": {
                            "width": 20,
                            "height": 20,
                            "offsetX": 0,
                            "offsetY": 0
                        }
                    },
                    "yAxisAnnotation": {
                        "y": 0,
                        "y2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "width": "100%",
                        "yAxisIndex": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "end",
                            "position": "right",
                            "offsetX": 0,
                            "offsetY": -3,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "xAxisAnnotation": {
                        "x": 0,
                        "x2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "orientation": "vertical",
                            "position": "top",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "text": {
                        "x": 0,
                        "y": 0,
                        "text": "",
                        "textAnchor": "start",
                        "fontSize": "13px",
                        "fontWeight": 400,
                        "appendTo": ".apexcharts-annotations",
                        "backgroundColor": "transparent",
                        "borderColor": "#c2c2c2",
                        "borderRadius": 0,
                        "borderWidth": 0,
                        "paddingLeft": 4,
                        "paddingRight": 4,
                        "paddingTop": 2,
                        "paddingBottom": 2
                    }
                },
                "responsive": {},
                "series": {
                    "legendInactiveClass": "legend-mouseover-inactive"
                },
                "theme": {
                    "isColorFn": false,
                    "isHeatmapDistributed": false,
                    "isBarDistributed": false
                },
                "formatters": {
                    "tooltipKeyFormat": "dd MMM"
                },
                "titleSubtitle": {},
                "legend": {
                    "isBarsDistributed": false,
                    "legendHelpers": {}
                },
                "toolbar": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308
                },
                "dimensions": {
                    "lgRect": {
                        "x": 0,
                        "y": 0,
                        "height": 0,
                        "width": 0
                    },
                    "yAxisWidth": 15,
                    "yAxisWidthLeft": 10,
                    "yAxisWidthRight": 0,
                    "xAxisHeight": 10,
                    "isSparkline": false,
                    "dimHelpers": {},
                    "dimYAxis": {},
                    "dimXAxis": {},
                    "dimGrid": {},
                    "lgWidthForSideLegends": 0,
                    "xPadRight": 0,
                    "xPadLeft": 0,
                    "xAxisWidth": 0
                },
                "updateHelpers": {},
                "zoomPanSelection": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308,
                    "dragged": false,
                    "graphics": {},
                    "eventList": [
                        "mousedown",
                        "mouseleave",
                        "mousemove",
                        "touchstart",
                        "touchmove",
                        "mouseup",
                        "touchend"
                    ],
                    "clientX": 0,
                    "clientY": 0,
                    "startX": 0,
                    "endX": 0,
                    "dragX": 0,
                    "startY": 0,
                    "endY": 0,
                    "dragY": 0,
                    "moveDirection": "none"
                },
                "pie": {
                    "chartType": "bar",
                    "initialAnim": false,
                    "dynamicAnim": false,
                    "animBeginArr": [
                        0
                    ],
                    "animDur": 0,
                    "defaultSize": 185,
                    "centerY": 92.5,
                    "centerX": 172.5,
                    "fullAngle": 360,
                    "initialAngle": 0,
                    "donutSize": 54.75853658536585,
                    "maxY": 0,
                    "sliceLabels": [],
                    "sliceSizes": [],
                    "prevSectorAngleArr": []
                },
                "rangeBar": {
                    "isHorizontal": true,
                    "strokeWidth": 2,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xRatio": null,
                    "initialXRatio": null,
                    "invertedXRatio": null,
                    "invertedYRatio": 0.11594202898550725,
                    "baseLineInvertedY": 0.1,
                    "yaxisIndex": 0,
                    "seriesLen": 0,
                    "barHelpers": {}
                },
                "bar": {
                    "isHorizontal": true,
                    "strokeWidth": 2,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xRatio": null,
                    "initialXRatio": null,
                    "invertedXRatio": null,
                    "invertedYRatio": 0.11594202898550725,
                    "baseLineInvertedY": 0.1,
                    "yaxisIndex": 0,
                    "seriesLen": 1,
                    "barHelpers": {},
                    "totalItems": 4,
                    "visibleI": 0,
                    "visibleItems": 4,
                    "zeroSerieses": [],
                    "radiusOnSeriesNumber": 0,
                    "isReversed": false
                },
                "annotations": {
                    "graphics": {},
                    "invertAxis": true,
                    "helpers": {},
                    "xAxisAnnotations": {
                        "invertAxis": true
                    },
                    "yAxisAnnotations": {},
                    "pointsAnnotations": {},
                    "xDivision": 86.25
                }
            }
        },
        {
            "id": "e7PU1",
            "chart": {
                "opts": {
                    "series": [
                        {
                            "name": "Column",
                            "data": [
                                {
                                    "x": "Item 1",
                                    "y": 10
                                },
                                {
                                    "x": "Item 2",
                                    "y": 20
                                },
                                {
                                    "x": "Item 3",
                                    "y": 30
                                },
                                {
                                    "x": "Item 4",
                                    "y": 40
                                },
                                {
                                    "x": "",
                                    "y": 10
                                }
                            ]
                        },
                        {
                            "name": "series-2",
                            "data": [
                                {
                                    "x": "Item 1",
                                    "y": null
                                },
                                {
                                    "x": "Item 2",
                                    "y": null
                                },
                                {
                                    "x": "Item 3",
                                    "y": null
                                },
                                {
                                    "x": "Item 4",
                                    "y": null
                                },
                                {
                                    "x": "",
                                    "y": 10
                                }
                            ]
                        }
                    ],
                    "annotations": {
                        "position": "front",
                        "yaxis": [],
                        "xaxis": [],
                        "points": []
                    },
                    "chart": {
                        "type": "bar",
                        "background": "",
                        "foreColor": "#333",
                        "offsetX": 0,
                        "offsetY": 0,
                        "toolbar": {
                            "show": false
                        },
                        "animations": {
                            "enabled": false
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 2,
                            "left": 2,
                            "blur": 4,
                            "color": "#000",
                            "opacity": 0.35
                        },
                        "fontFamily": "Roboto",
                        "height": 250,
                        "width": 400,
                        "id": "e7PU1"
                    },
                    "plotOptions": {
                        "bar": {
                            "horizontal": false,
                            "columnWidth": "70%",
                            "barHeight": "70%",
                            "distributed": false,
                            "borderRadius": 10,
                            "colors": {
                                "ranges": [],
                                "backgroundBarColors": [],
                                "backgroundBarOpacity": 1
                            },
                            "dataLabels": {
                                "position": "top"
                            }
                        },
                        "heatmap": {
                            "radius": 2,
                            "enableShades": true,
                            "shadeIntensity": 0.5
                        },
                        "radialBar": {
                            "startAngle": 0,
                            "endAngle": 360,
                            "offsetX": 0,
                            "offsetY": 0,
                            "hollow": {
                                "margin": 5,
                                "size": "50%",
                                "background": "#fff",
                                "position": "front",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "track": {
                                "show": true,
                                "background": "#f2f2f2",
                                "strokeWidth": "97%",
                                "opacity": 1,
                                "margin": 5,
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "dataLabels": {
                                "show": true,
                                "name": {
                                    "show": true,
                                    "fontSize": 16,
                                    "offsetY": 0
                                },
                                "value": {
                                    "show": true,
                                    "fontSize": 14,
                                    "offsetY": 16
                                },
                                "total": {
                                    "show": false,
                                    "label": "Total",
                                    "fontSize": 16
                                }
                            }
                        },
                        "pie": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "dataLabels": {
                                "offset": 0
                            },
                            "donut": {
                                "size": "65%",
                                "labels": {
                                    "show": false,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "offsetY": -10
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 20,
                                        "offsetY": 10
                                    },
                                    "total": {
                                        "show": false,
                                        "showAlways": false,
                                        "label": "Total",
                                        "fontSize": 16
                                    }
                                }
                            }
                        },
                        "radar": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "polygons": {
                                "strokeColors": "#e8e8e8",
                                "connectorColors": "#e8e8e8",
                                "fill": {}
                            }
                        }
                    },
                    "theme": {
                        "mode": "light",
                        "palette": "palette4"
                    },
                    "dataLabels": {
                        "enabled": false,
                        "textAnchor": "middle",
                        "offsetX": 0,
                        "offsetY": 0,
                        "style": {
                            "fontSize": 12,
                            "fontWeight": 700
                        },
                        "background": {
                            "enabled": true,
                            "foreColor": "#fff",
                            "borderRadius": 2,
                            "padding": 4,
                            "opacity": 0.9,
                            "borderWidth": 1,
                            "borderColor": "#fff"
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 1,
                            "left": 1,
                            "blur": 1,
                            "color": "#000",
                            "opacity": 0.45
                        }
                    },
                    "markers": {
                        "size": 0,
                        "strokeColors": "#fff",
                        "strokeWidth": 2,
                        "strokeOpacity": 0.9,
                        "strokeDashArray": 0,
                        "fillOpacity": 1,
                        "shape": "circle",
                        "radius": 2,
                        "offsetX": 0,
                        "offsetY": 0,
                        "hover": {}
                    },
                    "yaxis": [
                        {
                            "show": true,
                            "showAlways": false,
                            "showForNullSeries": true,
                            "opposite": false,
                            "reversed": false,
                            "logarithmic": false,
                            "logBase": 10,
                            "tickAmount": 5,
                            "forceNiceScale": false,
                            "floating": false,
                            "labels": {
                                "show": true,
                                "minWidth": 0,
                                "maxWidth": 160,
                                "offsetX": 0,
                                "offsetY": 0,
                                "rotate": 0,
                                "padding": 20,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                }
                            },
                            "axisBorder": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "title": {
                                "rotate": -90,
                                "offsetY": 0,
                                "offsetX": 0,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetX": 0
                            },
                            "crosshairs": {
                                "show": true,
                                "position": "front",
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 0
                                }
                            }
                        }
                    ],
                    "stroke": {
                        "show": true,
                        "curve": "smooth",
                        "lineCap": "butt",
                        "width": 2,
                        "dashArray": 0
                    },
                    "fill": {
                        "type": "solid",
                        "opacity": 0.85,
                        "gradient": {
                            "shade": "dark",
                            "type": "horizontal",
                            "shadeIntensity": 0.5,
                            "inverseColors": true,
                            "opacityFrom": 1,
                            "opacityTo": 1,
                            "stops": [
                                0,
                                50,
                                100
                            ],
                            "colorStops": []
                        },
                        "pattern": {
                            "style": "squares",
                            "width": 6,
                            "height": 6,
                            "strokeWidth": 2
                        }
                    },
                    "legend": {
                        "show": true,
                        "showForSingleSeries": false,
                        "floating": false,
                        "position": "bottom",
                        "horizontalAlign": "center",
                        "fontSize": 14,
                        "fontWeight": 400,
                        "offsetX": -20,
                        "offsetY": 0,
                        "labels": {
                            "useSeriesColors": false
                        },
                        "markers": {
                            "width": 12,
                            "height": 12,
                            "strokeWidth": 0,
                            "strokeColor": "#fff",
                            "radius": 12
                        },
                        "itemMargin": {
                            "horizontal": 5,
                            "vertical": 0
                        },
                        "onItemClick": {
                            "toggleDataSeries": true
                        },
                        "onItemHover": {
                            "highlightDataSeries": true
                        }
                    }
                },
                "w": {
                    "config": {
                        "annotations": {
                            "position": "front",
                            "texts": [],
                            "images": [],
                            "shapes": []
                        },
                        "chart": {
                            "animations": {
                                "enabled": false,
                                "easing": "swing",
                                "speed": 800,
                                "animateGradually": {
                                    "delay": 150,
                                    "enabled": true
                                },
                                "dynamicAnimation": {
                                    "enabled": true,
                                    "speed": 350
                                }
                            },
                            "background": "",
                            "locales": [
                                null
                            ],
                            "defaultLocale": "en",
                            "dropShadow": {
                                "enabled": false,
                                "top": 2,
                                "left": 2,
                                "blur": 4,
                                "color": "#000",
                                "opacity": 0.35
                            },
                            "events": {},
                            "foreColor": "#333",
                            "fontFamily": "Roboto",
                            "height": 143,
                            "parentHeightOffset": 15,
                            "redrawOnParentResize": true,
                            "redrawOnWindowResize": true,
                            "id": "e7PU1",
                            "offsetX": 0,
                            "offsetY": 0,
                            "selection": {
                                "enabled": false,
                                "type": "x",
                                "fill": {
                                    "color": "#24292e",
                                    "opacity": 0.1
                                },
                                "stroke": {
                                    "width": 1,
                                    "color": "#24292e",
                                    "opacity": 0.4,
                                    "dashArray": 3
                                },
                                "xaxis": {},
                                "yaxis": {}
                            },
                            "sparkline": {
                                "enabled": false
                            },
                            "brush": {
                                "enabled": false,
                                "autoScaleYaxis": true
                            },
                            "stacked": false,
                            "stackType": "normal",
                            "toolbar": {
                                "show": false,
                                "offsetX": 0,
                                "offsetY": 0,
                                "tools": {
                                    "download": true,
                                    "selection": false,
                                    "zoom": false,
                                    "zoomin": false,
                                    "zoomout": false,
                                    "pan": false,
                                    "reset": false,
                                    "customIcons": []
                                },
                                "export": {
                                    "csv": {
                                        "columnDelimiter": ",",
                                        "headerCategory": "category",
                                        "headerValue": "value"
                                    },
                                    "png": {},
                                    "svg": {}
                                },
                                "autoSelected": "zoom"
                            },
                            "type": "bar",
                            "width": 231,
                            "zoom": {
                                "enabled": true,
                                "type": "x",
                                "autoScaleYaxis": false,
                                "zoomedArea": {
                                    "fill": {
                                        "color": "#90CAF9",
                                        "opacity": 0.4
                                    },
                                    "stroke": {
                                        "color": "#0D47A1",
                                        "opacity": 0.4,
                                        "width": 1
                                    }
                                }
                            }
                        },
                        "plotOptions": {
                            "area": {
                                "fillTo": "origin"
                            },
                            "bar": {
                                "horizontal": false,
                                "columnWidth": "20%",
                                "barHeight": "70%",
                                "distributed": false,
                                "borderRadius": 0,
                                "rangeBarOverlap": true,
                                "rangeBarGroupRows": false,
                                "colors": {
                                    "backgroundBarOpacity": 1,
                                    "backgroundBarRadius": 0
                                },
                                "dataLabels": {
                                    "position": "top",
                                    "maxItems": 100,
                                    "hideOverflowingLabels": true,
                                    "orientation": "horizontal"
                                }
                            },
                            "bubble": {},
                            "candlestick": {
                                "colors": {
                                    "upward": "#00B746",
                                    "downward": "#EF403C"
                                },
                                "wick": {
                                    "useFillColor": true
                                }
                            },
                            "boxPlot": {
                                "colors": {
                                    "upper": "#00E396",
                                    "lower": "#008FFB"
                                }
                            },
                            "heatmap": {
                                "radius": 2,
                                "enableShades": true,
                                "shadeIntensity": 0.5,
                                "reverseNegativeShade": false,
                                "distributed": false,
                                "useFillColorAsStroke": false,
                                "colorScale": {
                                    "inverse": false,
                                    "ranges": []
                                }
                            },
                            "treemap": {
                                "enableShades": true,
                                "shadeIntensity": 0.5,
                                "distributed": false,
                                "reverseNegativeShade": false,
                                "useFillColorAsStroke": false,
                                "colorScale": {
                                    "inverse": false,
                                    "ranges": []
                                }
                            },
                            "radialBar": {
                                "inverseOrder": false,
                                "startAngle": 0,
                                "endAngle": 360,
                                "offsetX": 0,
                                "offsetY": 0,
                                "hollow": {
                                    "margin": 5,
                                    "size": "50%",
                                    "background": "#fff",
                                    "imageWidth": 150,
                                    "imageHeight": 150,
                                    "imageOffsetX": 0,
                                    "imageOffsetY": 0,
                                    "imageClipped": true,
                                    "position": "front",
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "track": {
                                    "show": true,
                                    "background": "#f2f2f2",
                                    "strokeWidth": "97%",
                                    "opacity": 1,
                                    "margin": 5,
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "dataLabels": {
                                    "show": true,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "fontWeight": 600,
                                        "offsetY": 0
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 14,
                                        "fontWeight": 400,
                                        "offsetY": 16
                                    },
                                    "total": {
                                        "show": false,
                                        "label": "Total",
                                        "fontSize": 16,
                                        "fontWeight": 600
                                    }
                                }
                            },
                            "pie": {
                                "customScale": 1,
                                "offsetX": 0,
                                "offsetY": 0,
                                "startAngle": 0,
                                "endAngle": 360,
                                "expandOnClick": true,
                                "dataLabels": {
                                    "offset": 0,
                                    "minAngleToShowLabel": 10
                                },
                                "donut": {
                                    "size": "65%",
                                    "labels": {
                                        "show": false,
                                        "name": {
                                            "show": true,
                                            "fontSize": 16,
                                            "fontWeight": 600,
                                            "offsetY": -10
                                        },
                                        "value": {
                                            "show": true,
                                            "fontSize": 20,
                                            "fontWeight": 400,
                                            "offsetY": 10
                                        },
                                        "total": {
                                            "show": false,
                                            "showAlways": false,
                                            "label": "Total",
                                            "fontSize": 16,
                                            "fontWeight": 400
                                        }
                                    }
                                }
                            },
                            "polarArea": {
                                "rings": {
                                    "strokeWidth": 1,
                                    "strokeColor": "#e8e8e8"
                                },
                                "spokes": {
                                    "strokeWidth": 1,
                                    "connectorColors": "#e8e8e8"
                                }
                            },
                            "radar": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "polygons": {
                                    "strokeWidth": 1,
                                    "strokeColors": "#e8e8e8",
                                    "connectorColors": "#e8e8e8",
                                    "fill": {}
                                }
                            }
                        },
                        "dataLabels": {
                            "enabled": false,
                            "textAnchor": "middle",
                            "distributed": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700
                            },
                            "background": {
                                "enabled": true,
                                "foreColor": "#fff",
                                "borderRadius": 2,
                                "padding": 4,
                                "opacity": 0.9,
                                "borderWidth": 1,
                                "borderColor": "#fff",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 1,
                                    "left": 1,
                                    "blur": 1,
                                    "color": "#000",
                                    "opacity": 0.45
                                }
                            },
                            "dropShadow": {
                                "enabled": false,
                                "top": 1,
                                "left": 1,
                                "blur": 1,
                                "color": "#000",
                                "opacity": 0.45
                            }
                        },
                        "fill": {
                            "type": "solid",
                            "opacity": 0.8,
                            "gradient": {
                                "shade": "dark",
                                "type": "horizontal",
                                "shadeIntensity": 0.5,
                                "inverseColors": true,
                                "opacityFrom": 1,
                                "opacityTo": 1
                            },
                            "image": {
                                "src": []
                            },
                            "pattern": {
                                "style": "squares",
                                "width": 6,
                                "height": 6,
                                "strokeWidth": 2
                            }
                        },
                        "forecastDataPoints": {
                            "count": 0,
                            "fillOpacity": 0.5,
                            "dashArray": 4
                        },
                        "grid": {
                            "show": true,
                            "borderColor": "#e0e0e0",
                            "strokeDashArray": 0,
                            "position": "back",
                            "xaxis": {
                                "lines": {
                                    "show": false
                                }
                            },
                            "yaxis": {
                                "lines": {
                                    "show": true
                                }
                            },
                            "row": {
                                "opacity": 0.5
                            },
                            "column": {
                                "opacity": 0.5
                            },
                            "padding": {
                                "top": 0,
                                "right": 25,
                                "bottom": 0,
                                "left": 15
                            }
                        },
                        "labels": [],
                        "legend": {
                            "show": true,
                            "showForSingleSeries": false,
                            "showForNullSeries": true,
                            "showForZeroSeries": true,
                            "floating": false,
                            "position": "bottom",
                            "horizontalAlign": "center",
                            "inverseOrder": false,
                            "fontSize": 14,
                            "fontWeight": 400,
                            "offsetX": -20,
                            "offsetY": 3,
                            "customLegendItems": [],
                            "labels": {
                                "useSeriesColors": false
                            },
                            "markers": {
                                "width": 12,
                                "height": 12,
                                "strokeWidth": 0,
                                "strokeColor": "#fff",
                                "radius": 12,
                                "offsetX": 0,
                                "offsetY": 0,
                                "shape": "square",
                                "size": 8
                            },
                            "itemMargin": {
                                "horizontal": 5,
                                "vertical": 0
                            },
                            "onItemClick": {
                                "toggleDataSeries": true
                            },
                            "onItemHover": {
                                "highlightDataSeries": true
                            }
                        },
                        "markers": {
                            "discrete": [],
                            "size": 0,
                            "strokeColors": "#fff",
                            "strokeWidth": 2,
                            "strokeOpacity": 0.9,
                            "strokeDashArray": 0,
                            "fillOpacity": 1,
                            "shape": "circle",
                            "width": 8,
                            "height": 8,
                            "radius": 2,
                            "offsetX": 0,
                            "offsetY": 0,
                            "showNullDataPoints": true,
                            "hover": {
                                "sizeOffset": 3
                            }
                        },
                        "noData": {
                            "align": "center",
                            "verticalAlign": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": "14px"
                            }
                        },
                        "responsive": [],
                        "series": [
                            {
                                "name": "Column"
                            },
                            {
                                "name": "series-2"
                            }
                        ],
                        "states": {
                            "normal": {
                                "filter": {
                                    "type": "none",
                                    "value": 0
                                }
                            },
                            "hover": {
                                "filter": {
                                    "type": "lighten",
                                    "value": 0.1
                                }
                            },
                            "active": {
                                "allowMultipleDataPointsSelection": false,
                                "filter": {
                                    "type": "darken",
                                    "value": 0.5
                                }
                            }
                        },
                        "title": {
                            "align": "left",
                            "margin": 5,
                            "offsetX": 0,
                            "offsetY": 0,
                            "floating": false,
                            "style": {
                                "fontSize": "14px",
                                "fontWeight": 900
                            }
                        },
                        "subtitle": {
                            "align": "left",
                            "margin": 5,
                            "offsetX": 0,
                            "offsetY": 30,
                            "floating": false,
                            "style": {
                                "fontSize": "12px",
                                "fontWeight": 400
                            }
                        },
                        "stroke": {
                            "show": true,
                            "curve": "smooth",
                            "lineCap": "butt",
                            "width": 2,
                            "dashArray": 0
                        },
                        "tooltip": {
                            "enabled": true,
                            "shared": false,
                            "followCursor": false,
                            "intersect": true,
                            "inverseOrder": false,
                            "fillSeriesColor": false,
                            "theme": "light",
                            "style": {
                                "fontSize": "12px"
                            },
                            "onDatasetHover": {
                                "highlightDataSeries": false
                            },
                            "x": {
                                "show": true,
                                "format": "dd MMM"
                            },
                            "y": {
                                "title": {}
                            },
                            "z": {
                                "title": "Size: "
                            },
                            "marker": {
                                "show": true
                            },
                            "items": {
                                "display": "flex"
                            },
                            "fixed": {
                                "enabled": false,
                                "position": "topRight",
                                "offsetX": 0,
                                "offsetY": 0
                            }
                        },
                        "xaxis": {
                            "type": "category",
                            "categories": [],
                            "convertedCatToNumeric": false,
                            "offsetX": 0,
                            "offsetY": -25,
                            "labels": {
                                "show": true,
                                "rotate": -138,
                                "rotateAlways": false,
                                "hideOverlappingLabels": true,
                                "trim": true,
                                "maxHeight": 120,
                                "showDuplicates": true,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                },
                                "offsetX": 2,
                                "offsetY": 8,
                                "datetimeUTC": true,
                                "datetimeFormatter": {
                                    "year": "yyyy",
                                    "month": "MMM 'yy",
                                    "day": "dd MMM",
                                    "hour": "HH:mm",
                                    "minute": "HH:mm:ss",
                                    "second": "HH:mm:ss"
                                }
                            },
                            "axisBorder": {
                                "show": true,
                                "color": "#e0e0e0",
                                "width": "100%",
                                "height": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": true,
                                "color": "#e0e0e0",
                                "height": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "tickPlacement": "between",
                            "floating": false,
                            "position": "bottom",
                            "title": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "crosshairs": {
                                "show": true,
                                "width": 1,
                                "position": "back",
                                "opacity": 0.9,
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 3
                                },
                                "fill": {
                                    "type": "solid",
                                    "color": "#B1B9C4",
                                    "gradient": {
                                        "colorFrom": "#D8E3F0",
                                        "colorTo": "#BED1E6",
                                        "stops": [
                                            0,
                                            100
                                        ],
                                        "opacityFrom": 0.4,
                                        "opacityTo": 0.5
                                    }
                                },
                                "dropShadow": {
                                    "enabled": false,
                                    "left": 0,
                                    "top": 0,
                                    "blur": 1,
                                    "opacity": 0.4
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "12px"
                                }
                            }
                        },
                        "yaxis": [
                            {
                                "show": true,
                                "showAlways": false,
                                "showForNullSeries": true,
                                "opposite": false,
                                "reversed": false,
                                "logarithmic": false,
                                "logBase": 10,
                                "tickAmount": 5,
                                "forceNiceScale": false,
                                "floating": false,
                                "labels": {
                                    "show": true,
                                    "minWidth": 0,
                                    "maxWidth": 160,
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "rotate": 0,
                                    "padding": 20,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 400,
                                        "cssClass": ""
                                    }
                                },
                                "axisBorder": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 1,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "axisTicks": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 6,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "title": {
                                    "rotate": -90,
                                    "offsetY": 0,
                                    "offsetX": 0,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 700,
                                        "cssClass": ""
                                    }
                                },
                                "tooltip": {
                                    "enabled": false,
                                    "offsetX": 0
                                },
                                "crosshairs": {
                                    "show": true,
                                    "position": "front",
                                    "stroke": {
                                        "color": "#b6b6b6",
                                        "width": 1,
                                        "dashArray": 0
                                    }
                                }
                            }
                        ],
                        "theme": {
                            "mode": "light",
                            "palette": "palette4",
                            "monochrome": {
                                "enabled": false,
                                "color": "#008FFB",
                                "shadeTo": "light",
                                "shadeIntensity": 0.65
                            }
                        }
                    },
                    "globals": {
                        "chartID": "e7PU1",
                        "cuid": "ogwkejvv",
                        "events": {
                            "beforeMount": [],
                            "mounted": [],
                            "updated": [],
                            "clicked": [],
                            "selection": [],
                            "dataPointSelection": [],
                            "zoomed": [],
                            "scrolled": []
                        },
                        "colors": [
                            "#4ecdc4",
                            "#c7f464",
                            "#81D4FA",
                            "#fd6a6a",
                            "#546E7A"
                        ],
                        "clientX": 1018,
                        "clientY": 384,
                        "fill": {
                            "colors": [
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A",
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A"
                            ]
                        },
                        "stroke": {},
                        "dataLabels": {
                            "style": {}
                        },
                        "radarPolygons": {
                            "fill": {
                                "colors": [
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none"
                                ]
                            }
                        },
                        "markers": {
                            "size": [
                                0,
                                0,
                                0
                            ],
                            "largestSize": 0
                        },
                        "animationEnded": true,
                        "isDirty": true,
                        "isExecCalled": false,
                        "initialConfig": {},
                        "initialSeries": [
                            {
                                "name": "Column",
                                "data": [
                                    {
                                        "x": "Item 1",
                                        "y": 10
                                    },
                                    {
                                        "x": "Item 2",
                                        "y": 20
                                    },
                                    {
                                        "x": "Item 3",
                                        "y": 30
                                    },
                                    {
                                        "x": "Item 4",
                                        "y": 40
                                    },
                                    {
                                        "x": "",
                                        "y": 10
                                    }
                                ]
                            },
                            {
                                "name": "series-2",
                                "data": [
                                    {
                                        "x": "Item 1",
                                        "y": null
                                    },
                                    {
                                        "x": "Item 2",
                                        "y": null
                                    },
                                    {
                                        "x": "Item 3",
                                        "y": null
                                    },
                                    {
                                        "x": "Item 4",
                                        "y": null
                                    },
                                    {
                                        "x": "",
                                        "y": 10
                                    }
                                ]
                            }
                        ],
                        "lastXAxis": [],
                        "lastYAxis": [],
                        "columnSeries": null,
                        "labels": [
                            "Item 1",
                            "Item 2",
                            "Item 3",
                            "Item 4",
                            ""
                        ],
                        "timescaleLabels": [],
                        "noLabelsProvided": false,
                        "allSeriesCollapsed": false,
                        "collapsedSeries": [],
                        "collapsedSeriesIndices": [],
                        "ancillaryCollapsedSeries": [],
                        "ancillaryCollapsedSeriesIndices": [],
                        "risingSeries": [],
                        "dataFormatXNumeric": false,
                        "capturedSeriesIndex": -1,
                        "capturedDataPointIndex": -1,
                        "selectedDataPoints": [],
                        "goldenPadding": 35,
                        "invalidLogScale": false,
                        "ignoreYAxisIndexes": [],
                        "yAxisSameScaleIndices": [],
                        "maxValsInArrayIndex": 0,
                        "radialSize": 41.804878048780495,
                        "zoomEnabled": true,
                        "panEnabled": false,
                        "selectionEnabled": false,
                        "yaxis": null,
                        "mousedown": false,
                        "lastClientPosition": {},
                        "yValueDecimal": 0,
                        "total": 0,
                        "SVGNS": "http://www.w3.org/2000/svg",
                        "svgWidth": 231,
                        "svgHeight": 143,
                        "noData": false,
                        "locale": {
                            "toolbar": {
                                "exportToSVG": "Download SVG",
                                "exportToPNG": "Download PNG",
                                "exportToCSV": "Download CSV",
                                "menu": "Menu",
                                "selection": "Selection",
                                "selectionZoom": "Selection Zoom",
                                "zoomIn": "Zoom In",
                                "zoomOut": "Zoom Out",
                                "pan": "Panning",
                                "reset": "Reset Zoom"
                            }
                        },
                        "dom": {
                            "baseEl": {
                                "_prevClass": "e7PU1"
                            },
                            "elWrap": {},
                            "Paper": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "svg",
                                "_defs": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "defs"
                                }
                            },
                            "elGraphical": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elAnnotations": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elLegendWrap": {},
                            "elGridRectMask": {},
                            "elGridRectMarkerMask": {},
                            "elForecastMask": {},
                            "elNonForecastMask": {},
                            "elGridRect": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            },
                            "elGridRectMarker": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            },
                            "elLegendForeign": {}
                        },
                        "memory": {
                            "methodsToExec": []
                        },
                        "shouldAnimate": true,
                        "skipLastTimelinelabel": false,
                        "skipFirstTimelinelabel": false,
                        "delayedElements": [
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            }
                        ],
                        "axisCharts": true,
                        "isDataXYZ": false,
                        "resized": true,
                        "resizeTimer": null,
                        "comboCharts": false,
                        "dataChanged": false,
                        "previousPaths": [
                            {
                                "type": "bar",
                                "paths": [
                                    {
                                        "d": "M 16.34232416152954 57.70079907417298L 16.34232416152954 43.27559930562973Q 16.34232416152954 43.27559930562973 16.34232416152954 43.27559930562973L 18.427905201911926 43.27559930562973Q 18.427905201911926 43.27559930562973 18.427905201911926 43.27559930562973L 18.427905201911926 43.27559930562973L 18.427905201911926 57.70079907417298L 18.427905201911926 57.70079907417298z"
                                    },
                                    {
                                        "d": "M 57.19813456535339 57.70079907417298L 57.19813456535339 28.85039953708649Q 57.19813456535339 28.85039953708649 57.19813456535339 28.85039953708649L 59.28371560573578 28.85039953708649Q 59.28371560573578 28.85039953708649 59.28371560573578 28.85039953708649L 59.28371560573578 28.85039953708649L 59.28371560573578 57.70079907417298L 59.28371560573578 57.70079907417298z"
                                    },
                                    {
                                        "d": "M 98.05394496917725 57.70079907417298L 98.05394496917725 14.425199768543244Q 98.05394496917725 14.425199768543244 98.05394496917725 14.425199768543244L 100.13952600955963 14.425199768543244Q 100.13952600955963 14.425199768543244 100.13952600955963 14.425199768543244L 100.13952600955963 14.425199768543244L 100.13952600955963 57.70079907417298L 100.13952600955963 57.70079907417298z"
                                    },
                                    {
                                        "d": "M 138.9097553730011 57.70079907417298L 138.9097553730011 0Q 138.9097553730011 0 138.9097553730011 0L 140.99533641338348 0Q 140.99533641338348 0 140.99533641338348 0L 140.99533641338348 0L 140.99533641338348 57.70079907417298L 140.99533641338348 57.70079907417298z"
                                    }
                                ],
                                "realIndex": "0"
                            },
                            {
                                "type": "bar",
                                "paths": [
                                    {
                                        "d": "M 20.427905201911926 57.70079907417298L 20.427905201911926 57.70079907417298Q 20.427905201911926 57.70079907417298 20.427905201911926 57.70079907417298L 24.513486242294313 57.70079907417298Q 24.513486242294313 57.70079907417298 24.513486242294313 57.70079907417298L 24.513486242294313 57.70079907417298L 24.513486242294313 57.70079907417298L 24.513486242294313 57.70079907417298z"
                                    },
                                    {
                                        "d": "M 61.28371560573578 57.70079907417298L 61.28371560573578 57.70079907417298Q 61.28371560573578 57.70079907417298 61.28371560573578 57.70079907417298L 65.36929664611816 57.70079907417298Q 65.36929664611816 57.70079907417298 65.36929664611816 57.70079907417298L 65.36929664611816 57.70079907417298L 65.36929664611816 57.70079907417298L 65.36929664611816 57.70079907417298z"
                                    },
                                    {
                                        "d": "M 102.13952600955963 57.70079907417298L 102.13952600955963 57.70079907417298Q 102.13952600955963 57.70079907417298 102.13952600955963 57.70079907417298L 106.22510704994201 57.70079907417298Q 106.22510704994201 57.70079907417298 106.22510704994201 57.70079907417298L 106.22510704994201 57.70079907417298L 106.22510704994201 57.70079907417298L 106.22510704994201 57.70079907417298z"
                                    },
                                    {
                                        "d": "M 142.99533641338348 57.70079907417298L 142.99533641338348 57.70079907417298Q 142.99533641338348 57.70079907417298 142.99533641338348 57.70079907417298L 147.08091745376586 57.70079907417298Q 147.08091745376586 57.70079907417298 147.08091745376586 57.70079907417298L 147.08091745376586 57.70079907417298L 147.08091745376586 57.70079907417298L 147.08091745376586 57.70079907417298z"
                                    }
                                ],
                                "realIndex": "1"
                            }
                        ],
                        "allSeriesHasEqualX": true,
                        "pointsArray": [],
                        "dataLabelsRects": [],
                        "lastDrawnDataLabelsIndexes": [
                            [
                                0,
                                1,
                                2,
                                3,
                                0,
                                1,
                                2,
                                3
                            ]
                        ],
                        "hasNullValues": true,
                        "zoomed": false,
                        "gridWidth": 176,
                        "gridHeight": 98,
                        "rotateXLabels": false,
                        "defaultLabels": false,
                        "yLabelFormatters": [
                            null
                        ],
                        "LINE_HEIGHT_RATIO": 1.618,
                        "xAxisLabelsHeight": 10,
                        "xAxisLabelsWidth": 0,
                        "yAxisLabelsWidth": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "translateX": 30,
                        "translateY": 30,
                        "translateYAxisX": [
                            -3
                        ],
                        "yAxisWidths": [],
                        "translateXAxisY": 4,
                        "translateXAxisX": 2,
                        "tooltip": {
                            "tooltipUtil": {},
                            "tooltipLabels": {
                                "tooltipUtil": {}
                            },
                            "tooltipPosition": {},
                            "marker": {
                                "tooltipPosition": {}
                            },
                            "intersect": {},
                            "axesTooltip": {},
                            "showOnIntersect": true,
                            "showTooltipTitle": true,
                            "fixedTooltip": false,
                            "xaxisTooltip": null,
                            "yaxisTTEls": null,
                            "isBarShared": false,
                            "lastHoverTime": 1683479187047,
                            "xyRatios": {
                                "yRatio": [
                                    0.40816326530612246
                                ],
                                "invertedYRatio": 0.22727272727272727,
                                "zRatio": null,
                                "xRatio": null,
                                "initialXRatio": null,
                                "invertedXRatio": null,
                                "baseLineInvertedY": 0.1,
                                "baseLineY": [
                                    0
                                ],
                                "baseLineX": 0
                            },
                            "isXAxisTooltipEnabled": false,
                            "yaxisTooltips": [
                                false
                            ],
                            "allTooltipSeriesGroups": [],
                            "xaxisOffY": 99,
                            "yaxisOffX": 1,
                            "yaxisTooltip": {},
                            "yaxisTooltipText": [
                                {}
                            ],
                            "xcrosshairsWidth": 1,
                            "ycrosshairs": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "ycrosshairsHidden": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "xAxisTicksPositions": [
                                35.2,
                                70.4,
                                105.60000000000001,
                                140.8,
                                176
                            ],
                            "dataPointsDividedHeight": 19.6,
                            "dataPointsDividedWidth": 35.2,
                            "tooltipTitle": {},
                            "legendLabels": {
                                "0": {},
                                "1": {}
                            },
                            "ttItems": [
                                {},
                                {}
                            ],
                            "seriesBound": {
                                "x": 0,
                                "y": 0,
                                "width": 0,
                                "height": 0,
                                "top": 0,
                                "right": 0,
                                "bottom": 0,
                                "left": 0
                            }
                        },
                        "series": [
                            [
                                10,
                                20,
                                30,
                                40,
                                10
                            ],
                            [
                                null,
                                null,
                                null,
                                null,
                                10
                            ]
                        ],
                        "seriesCandleO": [],
                        "seriesCandleH": [],
                        "seriesCandleM": [],
                        "seriesCandleL": [],
                        "seriesCandleC": [],
                        "seriesRangeStart": [],
                        "seriesRangeEnd": [],
                        "seriesRangeBar": [],
                        "seriesPercent": [
                            [
                                100,
                                100,
                                100,
                                100,
                                50
                            ],
                            [
                                0,
                                0,
                                0,
                                0,
                                50
                            ]
                        ],
                        "seriesGoals": [
                            [
                                null,
                                null,
                                null,
                                null,
                                null
                            ],
                            [
                                null,
                                null,
                                null,
                                null,
                                null
                            ]
                        ],
                        "seriesX": [
                            null,
                            [
                                "Item 1",
                                "Item 2",
                                "Item 3",
                                "Item 4",
                                ""
                            ]
                        ],
                        "seriesZ": [
                            [],
                            []
                        ],
                        "seriesNames": [
                            "Column",
                            "series-2"
                        ],
                        "seriesTotals": [
                            110,
                            10
                        ],
                        "seriesLog": [
                            null,
                            null
                        ],
                        "seriesColors": [
                            null,
                            null
                        ],
                        "stackedSeriesTotals": [
                            10,
                            20,
                            30,
                            40,
                            20
                        ],
                        "seriesXvalues": [
                            [
                                15.840000000000002,
                                86.24000000000001,
                                121.44000000000001,
                                156.64,
                                191.83999999999997
                            ],
                            [
                                15.840000000000002,
                                86.24000000000001,
                                121.44000000000001,
                                156.64,
                                191.83999999999997
                            ]
                        ],
                        "seriesYvalues": [
                            [
                                73.5,
                                49,
                                24.5,
                                0,
                                73.5
                            ],
                            [
                                98,
                                98,
                                98,
                                98,
                                73.5
                            ]
                        ],
                        "categoryLabels": [],
                        "selectionResizeTimer": null,
                        "isXNumeric": false,
                        "xaxisLabelsCount": 4,
                        "isMultiLineX": false,
                        "isMultipleYAxis": false,
                        "maxY": 40,
                        "minY": 0,
                        "minYArr": [
                            0
                        ],
                        "maxYArr": [
                            40
                        ],
                        "maxX": -1.7976931348623157e+308,
                        "minX": 1.7976931348623157e+308,
                        "initialMaxX": -1.7976931348623157e+308,
                        "initialMinX": 1.7976931348623157e+308,
                        "maxDate": 0,
                        "minDate": 1.7976931348623157e+308,
                        "minZ": 1.7976931348623157e+308,
                        "maxZ": -1.7976931348623157e+308,
                        "minXDiff": 1.7976931348623157e+308,
                        "yAxisScale": [
                            {
                                "result": [
                                    0,
                                    10,
                                    20,
                                    30,
                                    40
                                ],
                                "niceMin": 0,
                                "niceMax": 40
                            }
                        ],
                        "xAxisScale": null,
                        "xAxisTicksPositions": [],
                        "yLabelsCoords": [
                            {
                                "width": 10,
                                "index": 0
                            }
                        ],
                        "yTitleCoords": [
                            {
                                "width": 0,
                                "index": 0
                            }
                        ],
                        "barPadForNumericAxis": 0,
                        "padHorizontal": 0,
                        "xRange": null,
                        "yRange": [
                            40
                        ],
                        "zRange": null,
                        "dataPoints": 5,
                        "xTickAmount": 0,
                        "xyCharts": true,
                        "isBarHorizontal": false,
                        "chartClass": ".apexchartse7PU1",
                        "comboBarCount": 0,
                        "isRangeBar": false,
                        "xAxisHeight": 10,
                        "yLogRatio": [
                            0.40816326530612246
                        ],
                        "logYRange": [
                            null
                        ]
                    }
                },
                "publicMethods": [
                    "updateOptions",
                    "updateSeries",
                    "appendData",
                    "appendSeries",
                    "toggleSeries",
                    "showSeries",
                    "hideSeries",
                    "setLocale",
                    "resetSeries",
                    "zoomX",
                    "toggleDataPointSelection",
                    "dataURI",
                    "addXaxisAnnotation",
                    "addYaxisAnnotation",
                    "addPointAnnotation",
                    "clearAnnotations",
                    "removeAnnotation",
                    "paper",
                    "destroy"
                ],
                "eventList": [
                    "click",
                    "mousedown",
                    "mousemove",
                    "mouseleave",
                    "touchstart",
                    "touchmove",
                    "touchleave",
                    "mouseup",
                    "touchend"
                ],
                "animations": {},
                "axes": {},
                "core": {},
                "config": {
                    "opts": {}
                },
                "data": {
                    "coreUtils": {},
                    "fallbackToCategory": true,
                    "activeSeriesIndex": 0
                },
                "grid": {
                    "xaxisLabels": [
                        "Item 1",
                        "Item 2",
                        "Item 3",
                        "Item 4",
                        ""
                    ],
                    "axesUtils": {},
                    "isRangeBar": 0,
                    "elg": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesH": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesV": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    }
                },
                "graphics": {},
                "coreUtils": {},
                "crosshairs": {},
                "events": {},
                "exports": {},
                "localization": {},
                "options": {
                    "yAxis": {
                        "show": true,
                        "showAlways": false,
                        "showForNullSeries": true,
                        "opposite": false,
                        "reversed": false,
                        "logarithmic": false,
                        "logBase": 10,
                        "forceNiceScale": false,
                        "floating": false,
                        "labels": {
                            "show": true,
                            "minWidth": 0,
                            "maxWidth": 160,
                            "offsetX": 0,
                            "offsetY": 0,
                            "rotate": 0,
                            "padding": 20,
                            "style": {
                                "colors": [],
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": ""
                            }
                        },
                        "axisBorder": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 1,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "axisTicks": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 6,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "title": {
                            "rotate": -90,
                            "offsetY": 0,
                            "offsetX": 0,
                            "style": {
                                "fontSize": "11px",
                                "fontWeight": 900,
                                "cssClass": ""
                            }
                        },
                        "tooltip": {
                            "enabled": false,
                            "offsetX": 0
                        },
                        "crosshairs": {
                            "show": true,
                            "position": "front",
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1,
                                "dashArray": 0
                            }
                        }
                    },
                    "pointAnnotation": {
                        "x": 0,
                        "y": null,
                        "yAxisIndex": 0,
                        "seriesIndex": 0,
                        "marker": {
                            "size": 4,
                            "fillColor": "#fff",
                            "strokeWidth": 2,
                            "strokeColor": "#333",
                            "shape": "circle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "radius": 2,
                            "cssClass": ""
                        },
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        },
                        "customSVG": {
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "image": {
                            "width": 20,
                            "height": 20,
                            "offsetX": 0,
                            "offsetY": 0
                        }
                    },
                    "yAxisAnnotation": {
                        "y": 0,
                        "y2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "width": "100%",
                        "yAxisIndex": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "end",
                            "position": "right",
                            "offsetX": 0,
                            "offsetY": -3,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "xAxisAnnotation": {
                        "x": 0,
                        "x2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "orientation": "vertical",
                            "position": "top",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "text": {
                        "x": 0,
                        "y": 0,
                        "text": "",
                        "textAnchor": "start",
                        "fontSize": "13px",
                        "fontWeight": 400,
                        "appendTo": ".apexcharts-annotations",
                        "backgroundColor": "transparent",
                        "borderColor": "#c2c2c2",
                        "borderRadius": 0,
                        "borderWidth": 0,
                        "paddingLeft": 4,
                        "paddingRight": 4,
                        "paddingTop": 2,
                        "paddingBottom": 2
                    }
                },
                "responsive": {},
                "series": {
                    "legendInactiveClass": "legend-mouseover-inactive"
                },
                "theme": {
                    "isColorFn": false,
                    "isHeatmapDistributed": false,
                    "isBarDistributed": false
                },
                "formatters": {
                    "tooltipKeyFormat": "dd MMM"
                },
                "titleSubtitle": {},
                "legend": {
                    "isBarsDistributed": false,
                    "legendHelpers": {}
                },
                "toolbar": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308
                },
                "dimensions": {
                    "lgRect": {
                        "x": 0,
                        "y": 0,
                        "height": 0,
                        "width": 0
                    },
                    "yAxisWidth": 15,
                    "yAxisWidthLeft": 15,
                    "yAxisWidthRight": 0,
                    "xAxisHeight": 10,
                    "isSparkline": false,
                    "dimHelpers": {},
                    "dimYAxis": {},
                    "dimXAxis": {},
                    "dimGrid": {},
                    "lgWidthForSideLegends": 0,
                    "xPadRight": 0,
                    "xPadLeft": 0,
                    "xAxisWidth": 0
                },
                "updateHelpers": {},
                "zoomPanSelection": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308,
                    "dragged": false,
                    "graphics": {},
                    "eventList": [
                        "mousedown",
                        "mouseleave",
                        "mousemove",
                        "touchstart",
                        "touchmove",
                        "mouseup",
                        "touchend"
                    ],
                    "clientX": 0,
                    "clientY": 0,
                    "startX": 0,
                    "endX": 0,
                    "dragX": 0,
                    "startY": 0,
                    "endY": 0,
                    "dragY": 0,
                    "moveDirection": "none"
                },
                "pie": {
                    "chartType": "bar",
                    "initialAnim": false,
                    "dynamicAnim": false,
                    "animBeginArr": [
                        0
                    ],
                    "animDur": 0,
                    "defaultSize": 98,
                    "centerY": 49,
                    "centerX": 88,
                    "fullAngle": 360,
                    "initialAngle": 0,
                    "donutSize": 27.173170731707323,
                    "maxY": 0,
                    "sliceLabels": [],
                    "sliceSizes": [],
                    "prevSectorAngleArr": []
                },
                "rangeBar": {
                    "isHorizontal": false,
                    "strokeWidth": 2,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xRatio": null,
                    "initialXRatio": null,
                    "invertedXRatio": null,
                    "invertedYRatio": 0.22727272727272727,
                    "baseLineInvertedY": 0.1,
                    "yaxisIndex": 0,
                    "seriesLen": 0,
                    "barHelpers": {}
                },
                "bar": {
                    "isHorizontal": false,
                    "strokeWidth": 2,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xRatio": null,
                    "initialXRatio": null,
                    "invertedXRatio": null,
                    "invertedYRatio": 0.22727272727272727,
                    "baseLineInvertedY": 0.1,
                    "yaxisIndex": 0,
                    "seriesLen": 2,
                    "barHelpers": {},
                    "totalItems": 10,
                    "visibleI": 1,
                    "visibleItems": 5,
                    "zeroSerieses": [],
                    "radiusOnSeriesNumber": 1,
                    "isReversed": false
                },
                "annotations": {
                    "graphics": {},
                    "helpers": {},
                    "xAxisAnnotations": {},
                    "yAxisAnnotations": {},
                    "pointsAnnotations": {},
                    "xDivision": 35.2
                }
            }
        },
        {
            "id": "BVBtR",
            "chart": {
                "opts": {
                    "annotations": {
                        "position": "front",
                        "yaxis": [],
                        "xaxis": [],
                        "points": []
                    },
                    "chart": {
                        "type": "bar",
                        "background": "#fff",
                        "foreColor": "#373D3F",
                        "offsetX": 0,
                        "offsetY": 0,
                        "toolbar": {
                            "show": false
                        },
                        "animations": {
                            "enabled": false
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 2,
                            "left": 2,
                            "blur": 4,
                            "color": "#000",
                            "opacity": 0.35
                        },
                        "fontFamily": "Roboto",
                        "height": 189,
                        "width": 353,
                        "id": "BVBtR"
                    },
                    "plotOptions": {
                        "bar": {
                            "horizontal": false,
                            "columnWidth": "92%",
                            "barHeight": "70%",
                            "distributed": false,
                            "borderRadius": 0,
                            "colors": {
                                "ranges": [],
                                "backgroundBarColors": [],
                                "backgroundBarOpacity": 1
                            },
                            "dataLabels": {
                                "position": "top"
                            }
                        },
                        "heatmap": {
                            "radius": 2,
                            "enableShades": true,
                            "shadeIntensity": 0.5
                        },
                        "radialBar": {
                            "startAngle": 0,
                            "endAngle": 360,
                            "offsetX": 0,
                            "offsetY": 0,
                            "hollow": {
                                "margin": 5,
                                "size": "50%",
                                "background": "#fff",
                                "position": "front",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "track": {
                                "show": true,
                                "background": "#f2f2f2",
                                "strokeWidth": "97%",
                                "opacity": 1,
                                "margin": 5,
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "dataLabels": {
                                "show": true,
                                "name": {
                                    "show": true,
                                    "fontSize": 16,
                                    "offsetY": 0
                                },
                                "value": {
                                    "show": true,
                                    "fontSize": 14,
                                    "offsetY": 16
                                },
                                "total": {
                                    "show": false,
                                    "label": "Total",
                                    "fontSize": 16
                                }
                            }
                        },
                        "pie": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "dataLabels": {
                                "offset": 0
                            },
                            "donut": {
                                "size": "65%",
                                "labels": {
                                    "show": false,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "offsetY": -10
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 20,
                                        "offsetY": 10
                                    },
                                    "total": {
                                        "show": false,
                                        "showAlways": false,
                                        "label": "Total",
                                        "fontSize": 16
                                    }
                                }
                            }
                        },
                        "radar": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "polygons": {
                                "strokeColors": "#e8e8e8",
                                "connectorColors": "#e8e8e8",
                                "fill": {}
                            }
                        }
                    },
                    "theme": {
                        "mode": "light",
                        "palette": "palette1"
                    },
                    "dataLabels": {
                        "enabled": false,
                        "textAnchor": "middle",
                        "offsetX": 0,
                        "offsetY": 0,
                        "style": {
                            "fontSize": 12,
                            "fontWeight": 700
                        },
                        "background": {
                            "enabled": true,
                            "foreColor": "#fff",
                            "borderRadius": 2,
                            "padding": 4,
                            "opacity": 0.9,
                            "borderWidth": 1,
                            "borderColor": "#fff"
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 1,
                            "left": 1,
                            "blur": 1,
                            "color": "#000",
                            "opacity": 0.45
                        }
                    },
                    "markers": {
                        "size": 0,
                        "strokeColors": "#fff",
                        "strokeWidth": 2,
                        "strokeOpacity": 0.9,
                        "strokeDashArray": 0,
                        "fillOpacity": 1,
                        "shape": "circle",
                        "radius": 2,
                        "offsetX": 0,
                        "offsetY": 0,
                        "hover": {}
                    },
                    "xaxis": {
                        "type": "category",
                        "offsetX": 0,
                        "offsetY": 0,
                        "position": "bottom",
                        "labels": {
                            "show": false,
                            "rotate": -45,
                            "rotateAlways": false,
                            "trim": true,
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 400,
                                "cssClass": ""
                            },
                            "hideOverlappingLabels": true,
                            "maxHeight": 120,
                            "showDuplicates": true,
                            "datetimeUTC": true,
                            "datetimeFormatter": {
                                "year": "yyyy",
                                "month": "MMM 'yy",
                                "day": "dd MMM",
                                "hour": "HH:mm",
                                "minute": "HH:mm:ss",
                                "second": "HH:mm:ss"
                            }
                        },
                        "axisBorder": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": "100%",
                            "height": 1,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "axisTicks": {
                            "show": false,
                            "color": "#e0e0e0",
                            "height": 6,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "title": {
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700,
                                "cssClass": ""
                            },
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "crosshairs": {
                            "show": true,
                            "width": 1,
                            "position": "back",
                            "opacity": 0.9,
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1,
                                "dashArray": 3
                            },
                            "fill": {
                                "type": "solid",
                                "color": "#B1B9C4",
                                "gradient": {
                                    "colorFrom": "#D8E3F0",
                                    "colorTo": "#BED1E6",
                                    "opacityFrom": 0.4,
                                    "opacityTo": 0.5,
                                    "stops": [
                                        0,
                                        100
                                    ]
                                }
                            },
                            "dropShadow": {
                                "enabled": false,
                                "left": 0,
                                "top": 0,
                                "blur": 1,
                                "opacity": 0.4
                            }
                        },
                        "convertedCatToNumeric": false,
                        "categories": [],
                        "tickPlacement": "between",
                        "floating": false,
                        "tooltip": {
                            "enabled": false,
                            "offsetY": 0,
                            "style": {
                                "fontSize": "12px"
                            }
                        }
                    },
                    "yaxis": [
                        null
                    ],
                    "grid": {
                        "show": false,
                        "borderColor": "#e0e0e0",
                        "strokeDashArray": 0,
                        "position": "back",
                        "xaxis": {
                            "lines": {
                                "show": false
                            }
                        },
                        "yaxis": {
                            "lines": {
                                "show": true
                            }
                        },
                        "row": {
                            "opacity": 0.5
                        },
                        "column": {
                            "opacity": 0.5
                        },
                        "padding": {
                            "top": 0,
                            "right": 25,
                            "bottom": 0,
                            "left": 15
                        }
                    },
                    "stroke": {
                        "show": true,
                        "curve": "smooth",
                        "lineCap": "butt",
                        "width": 2,
                        "dashArray": 0
                    },
                    "fill": {
                        "type": "solid",
                        "opacity": 0.85,
                        "gradient": {
                            "shade": "dark",
                            "type": "horizontal",
                            "shadeIntensity": 0.5,
                            "inverseColors": true,
                            "opacityFrom": 1,
                            "opacityTo": 1,
                            "stops": [
                                0,
                                50,
                                100
                            ],
                            "colorStops": []
                        },
                        "pattern": {
                            "style": "squares",
                            "width": 6,
                            "height": 6,
                            "strokeWidth": 2
                        }
                    },
                    "legend": {
                        "show": true,
                        "showForSingleSeries": false,
                        "floating": false,
                        "position": "bottom",
                        "horizontalAlign": "center",
                        "fontSize": 14,
                        "fontWeight": 400,
                        "offsetX": -20,
                        "offsetY": 0,
                        "labels": {
                            "useSeriesColors": false
                        },
                        "markers": {
                            "width": 12,
                            "height": 12,
                            "strokeWidth": 0,
                            "strokeColor": "#fff",
                            "radius": 12
                        },
                        "itemMargin": {
                            "horizontal": 5,
                            "vertical": 0
                        },
                        "onItemClick": {
                            "toggleDataSeries": true
                        },
                        "onItemHover": {
                            "highlightDataSeries": true
                        }
                    }
                },
                "w": {
                    "globals": {
                        "chartID": "BVBtR",
                        "cuid": "57aefyxz",
                        "events": {
                            "beforeMount": [],
                            "mounted": [],
                            "updated": [],
                            "clicked": [],
                            "selection": [],
                            "dataPointSelection": [],
                            "zoomed": [],
                            "scrolled": []
                        },
                        "colors": [
                            "#3f51b5",
                            "#03a9f4",
                            "#4caf50",
                            "#f9ce1d",
                            "#FF9800"
                        ],
                        "clientX": 906,
                        "clientY": 529,
                        "fill": {
                            "colors": [
                                "#3f51b5",
                                "#03a9f4",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800",
                                "#3f51b5",
                                "#03a9f4",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800",
                                "#3f51b5",
                                "#03a9f4",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800",
                                "#3f51b5",
                                "#03a9f4",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800",
                                "#3f51b5",
                                "#03a9f4",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800",
                                "#3f51b5",
                                "#03a9f4",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800",
                                "#3f51b5",
                                "#03a9f4",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800",
                                "#3f51b5",
                                "#03a9f4",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800",
                                "#3f51b5",
                                "#03a9f4",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800",
                                "#3f51b5",
                                "#03a9f4",
                                "#4caf50",
                                "#f9ce1d",
                                "#FF9800"
                            ]
                        },
                        "stroke": {},
                        "dataLabels": {
                            "style": {}
                        },
                        "radarPolygons": {
                            "fill": {
                                "colors": [
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none"
                                ]
                            }
                        },
                        "markers": {
                            "size": [
                                0,
                                0
                            ],
                            "largestSize": 0
                        },
                        "animationEnded": true,
                        "isDirty": true,
                        "isExecCalled": false,
                        "initialConfig": {
                            "annotations": {
                                "position": "front",
                                "texts": [],
                                "images": [],
                                "shapes": []
                            },
                            "fill": {
                                "type": "solid",
                                "opacity": 0.85,
                                "gradient": {
                                    "shade": "dark",
                                    "type": "horizontal",
                                    "shadeIntensity": 0.5,
                                    "inverseColors": true,
                                    "opacityFrom": 1,
                                    "opacityTo": 1
                                },
                                "image": {
                                    "src": []
                                },
                                "pattern": {
                                    "style": "squares",
                                    "width": 6,
                                    "height": 6,
                                    "strokeWidth": 2
                                }
                            },
                            "forecastDataPoints": {
                                "count": 0,
                                "fillOpacity": 0.5,
                                "dashArray": 4
                            },
                            "labels": [],
                            "markers": {
                                "discrete": [],
                                "size": 0,
                                "strokeColors": "#fff",
                                "strokeWidth": 2,
                                "strokeOpacity": 0.9,
                                "strokeDashArray": 0,
                                "fillOpacity": 1,
                                "shape": "circle",
                                "width": 8,
                                "height": 8,
                                "radius": 2,
                                "offsetX": 0,
                                "offsetY": 0,
                                "showNullDataPoints": true,
                                "hover": {
                                    "sizeOffset": 3
                                }
                            },
                            "noData": {
                                "align": "center",
                                "verticalAlign": "middle",
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "14px"
                                }
                            },
                            "responsive": [],
                            "states": {
                                "normal": {
                                    "filter": {
                                        "type": "none",
                                        "value": 0
                                    }
                                },
                                "hover": {
                                    "filter": {
                                        "type": "lighten",
                                        "value": 0.1
                                    }
                                },
                                "active": {
                                    "allowMultipleDataPointsSelection": false,
                                    "filter": {
                                        "type": "darken",
                                        "value": 0.5
                                    }
                                }
                            },
                            "title": {
                                "align": "left",
                                "margin": 5,
                                "offsetX": 0,
                                "offsetY": 0,
                                "floating": false,
                                "style": {
                                    "fontSize": "14px",
                                    "fontWeight": 900
                                }
                            },
                            "subtitle": {
                                "align": "left",
                                "margin": 5,
                                "offsetX": 0,
                                "offsetY": 30,
                                "floating": false,
                                "style": {
                                    "fontSize": "12px",
                                    "fontWeight": 400
                                }
                            },
                            "stroke": {
                                "show": true,
                                "curve": "smooth",
                                "lineCap": "butt",
                                "width": 2,
                                "dashArray": 0
                            }
                        },
                        "initialSeries": [
                            {
                                "name": "Column",
                                "data": [
                                    {
                                        "x": "Item 1",
                                        "y": 10
                                    },
                                    {
                                        "x": "Item 2",
                                        "y": 20
                                    },
                                    {
                                        "x": "Item 3",
                                        "y": 30
                                    },
                                    {
                                        "x": "Item 4",
                                        "y": 40
                                    },
                                    {
                                        "x": "Item 5",
                                        "y": "30"
                                    },
                                    {
                                        "x": "item 6",
                                        "y": "20"
                                    },
                                    {
                                        "x": "item 7",
                                        "y": "25"
                                    },
                                    {
                                        "x": "Item 8",
                                        "y": "15"
                                    },
                                    {
                                        "x": "Item 9",
                                        "y": 10
                                    },
                                    {
                                        "x": "Item 10",
                                        "y": "18"
                                    },
                                    {
                                        "x": "Item 11",
                                        "y": "22"
                                    },
                                    {
                                        "x": "Item 12",
                                        "y": "28"
                                    },
                                    {
                                        "x": "Item 13",
                                        "y": "18"
                                    }
                                ]
                            }
                        ],
                        "lastXAxis": [],
                        "lastYAxis": [],
                        "columnSeries": null,
                        "labels": [
                            "Item 1",
                            "Item 2",
                            "Item 3",
                            "Item 4",
                            "Item 5",
                            "item 6",
                            "item 7",
                            "Item 8",
                            "Item 9",
                            "Item 10",
                            "Item 11",
                            "Item 12",
                            "Item 13"
                        ],
                        "timescaleLabels": [],
                        "noLabelsProvided": false,
                        "allSeriesCollapsed": false,
                        "collapsedSeries": [],
                        "collapsedSeriesIndices": [],
                        "ancillaryCollapsedSeries": [],
                        "ancillaryCollapsedSeriesIndices": [],
                        "risingSeries": [],
                        "dataFormatXNumeric": false,
                        "capturedSeriesIndex": -1,
                        "capturedDataPointIndex": -1,
                        "selectedDataPoints": [],
                        "goldenPadding": 35,
                        "invalidLogScale": false,
                        "ignoreYAxisIndexes": [],
                        "yAxisSameScaleIndices": [],
                        "maxValsInArrayIndex": 0,
                        "radialSize": 55.95121951219513,
                        "zoomEnabled": true,
                        "panEnabled": false,
                        "selectionEnabled": false,
                        "yaxis": null,
                        "mousedown": false,
                        "lastClientPosition": {},
                        "yValueDecimal": 0,
                        "total": 0,
                        "SVGNS": "http://www.w3.org/2000/svg",
                        "svgWidth": 353,
                        "svgHeight": 189,
                        "noData": false,
                        "locale": {
                            "toolbar": {
                                "exportToSVG": "Download SVG",
                                "exportToPNG": "Download PNG",
                                "exportToCSV": "Download CSV",
                                "menu": "Menu",
                                "selection": "Selection",
                                "selectionZoom": "Selection Zoom",
                                "zoomIn": "Zoom In",
                                "zoomOut": "Zoom Out",
                                "pan": "Panning",
                                "reset": "Reset Zoom"
                            }
                        },
                        "dom": {
                            "baseEl": {
                                "_prevClass": "BVBtR"
                            },
                            "elWrap": {},
                            "Paper": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "svg",
                                "_defs": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "defs"
                                }
                            },
                            "elGraphical": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elAnnotations": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elLegendWrap": {},
                            "elGridRectMask": {},
                            "elGridRectMarkerMask": {},
                            "elForecastMask": {},
                            "elNonForecastMask": {},
                            "elGridRect": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            },
                            "elGridRectMarker": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            }
                        },
                        "memory": {
                            "methodsToExec": []
                        },
                        "shouldAnimate": true,
                        "skipLastTimelinelabel": false,
                        "skipFirstTimelinelabel": false,
                        "delayedElements": [
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            }
                        ],
                        "axisCharts": true,
                        "isDataXYZ": false,
                        "resized": true,
                        "resizeTimer": null,
                        "comboCharts": false,
                        "dataChanged": true,
                        "previousPaths": [
                            {
                                "type": "bar",
                                "paths": [
                                    {
                                        "d": "M 0.8782253588162945 127L 0.8782253588162945 95.25Q 0.8782253588162945 95.25 0.8782253588162945 95.25L 19.077408611591046 95.25Q 19.077408611591046 95.25 19.077408611591046 95.25L 19.077408611591046 95.25L 19.077408611591046 127L 19.077408611591046 127z"
                                    },
                                    {
                                        "d": "M 22.833859329223635 127L 22.833859329223635 63.5Q 22.833859329223635 63.5 22.833859329223635 63.5L 41.03304258199839 63.5Q 41.03304258199839 63.5 41.03304258199839 63.5L 41.03304258199839 63.5L 41.03304258199839 127L 41.03304258199839 127z"
                                    },
                                    {
                                        "d": "M 44.789493299630976 127L 44.789493299630976 31.75Q 44.789493299630976 31.75 44.789493299630976 31.75L 62.988676552405735 31.75Q 62.988676552405735 31.75 62.988676552405735 31.75L 62.988676552405735 31.75L 62.988676552405735 127L 62.988676552405735 127z"
                                    },
                                    {
                                        "d": "M 66.74512727003832 127L 66.74512727003832 0Q 66.74512727003832 0 66.74512727003832 0L 84.94431052281308 0Q 84.94431052281308 0 84.94431052281308 0L 84.94431052281308 0L 84.94431052281308 127L 84.94431052281308 127z"
                                    },
                                    {
                                        "d": "M 88.70076124044567 127L 88.70076124044567 31.75Q 88.70076124044567 31.75 88.70076124044567 31.75L 106.89994449322043 31.75Q 106.89994449322043 31.75 106.89994449322043 31.75L 106.89994449322043 31.75L 106.89994449322043 127L 106.89994449322043 127z"
                                    },
                                    {
                                        "d": "M 110.65639521085302 127L 110.65639521085302 63.5Q 110.65639521085302 63.5 110.65639521085302 63.5L 128.85557846362778 63.5Q 128.85557846362778 63.5 128.85557846362778 63.5L 128.85557846362778 63.5L 128.85557846362778 127L 128.85557846362778 127z"
                                    },
                                    {
                                        "d": "M 132.61202918126037 127L 132.61202918126037 47.625Q 132.61202918126037 47.625 132.61202918126037 47.625L 150.81121243403513 47.625Q 150.81121243403513 47.625 150.81121243403513 47.625L 150.81121243403513 47.625L 150.81121243403513 127L 150.81121243403513 127z"
                                    },
                                    {
                                        "d": "M 154.56766315166772 127L 154.56766315166772 79.375Q 154.56766315166772 79.375 154.56766315166772 79.375L 172.76684640444248 79.375Q 172.76684640444248 79.375 172.76684640444248 79.375L 172.76684640444248 79.375L 172.76684640444248 127L 172.76684640444248 127z"
                                    },
                                    {
                                        "d": "M 176.52329712207506 127L 176.52329712207506 95.25Q 176.52329712207506 95.25 176.52329712207506 95.25L 194.72248037484982 95.25Q 194.72248037484982 95.25 194.72248037484982 95.25L 194.72248037484982 95.25L 194.72248037484982 127L 194.72248037484982 127z"
                                    },
                                    {
                                        "d": "M 198.4789310924824 127L 198.4789310924824 69.85Q 198.4789310924824 69.85 198.4789310924824 69.85L 216.67811434525717 69.85Q 216.67811434525717 69.85 216.67811434525717 69.85L 216.67811434525717 69.85L 216.67811434525717 127L 216.67811434525717 127z"
                                    },
                                    {
                                        "d": "M 220.43456506288976 127L 220.43456506288976 57.150000000000006Q 220.43456506288976 57.150000000000006 220.43456506288976 57.150000000000006L 238.63374831566452 57.150000000000006Q 238.63374831566452 57.150000000000006 238.63374831566452 57.150000000000006L 238.63374831566452 57.150000000000006L 238.63374831566452 127L 238.63374831566452 127z"
                                    },
                                    {
                                        "d": "M 242.3901990332971 127L 242.3901990332971 38.099999999999994Q 242.3901990332971 38.099999999999994 242.3901990332971 38.099999999999994L 260.58938228607184 38.099999999999994Q 260.58938228607184 38.099999999999994 260.58938228607184 38.099999999999994L 260.58938228607184 38.099999999999994L 260.58938228607184 127L 260.58938228607184 127z"
                                    },
                                    {
                                        "d": "M 264.34583300370446 127L 264.34583300370446 69.85Q 264.34583300370446 69.85 264.34583300370446 69.85L 282.5450162564792 69.85Q 282.5450162564792 69.85 282.5450162564792 69.85L 282.5450162564792 69.85L 282.5450162564792 127L 282.5450162564792 127z"
                                    }
                                ],
                                "realIndex": "0"
                            }
                        ],
                        "allSeriesHasEqualX": true,
                        "pointsArray": [],
                        "dataLabelsRects": [],
                        "lastDrawnDataLabelsIndexes": [],
                        "hasNullValues": false,
                        "zoomed": false,
                        "gridWidth": 285.4232416152954,
                        "gridHeight": 127,
                        "rotateXLabels": true,
                        "defaultLabels": false,
                        "yLabelFormatters": [
                            null
                        ],
                        "LINE_HEIGHT_RATIO": 1.618,
                        "xAxisLabelsHeight": 32,
                        "xAxisLabelsWidth": 0,
                        "yAxisLabelsWidth": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "translateX": 42.57675838470459,
                        "translateY": 30,
                        "translateYAxisX": [
                            9.57675838470459
                        ],
                        "yAxisWidths": [],
                        "translateXAxisY": 4,
                        "translateXAxisX": 0,
                        "tooltip": {
                            "tooltipUtil": {},
                            "tooltipLabels": {
                                "tooltipUtil": {}
                            },
                            "tooltipPosition": {},
                            "marker": {
                                "tooltipPosition": {}
                            },
                            "intersect": {},
                            "axesTooltip": {},
                            "showOnIntersect": true,
                            "showTooltipTitle": true,
                            "fixedTooltip": false,
                            "xaxisTooltip": null,
                            "yaxisTTEls": null,
                            "isBarShared": false,
                            "lastHoverTime": 1683534516354,
                            "xyRatios": {
                                "yRatio": [
                                    0.31496062992125984
                                ],
                                "invertedYRatio": 0.1401427570285729,
                                "zRatio": null,
                                "xRatio": null,
                                "initialXRatio": null,
                                "invertedXRatio": null,
                                "baseLineInvertedY": 0.1,
                                "baseLineY": [
                                    0
                                ],
                                "baseLineX": 0
                            },
                            "isXAxisTooltipEnabled": false,
                            "yaxisTooltips": [
                                false
                            ],
                            "allTooltipSeriesGroups": [],
                            "xaxisOffY": 128,
                            "yaxisOffX": 1,
                            "yaxisTooltip": {},
                            "yaxisTooltipText": [
                                {}
                            ],
                            "xcrosshairsWidth": 1,
                            "ycrosshairs": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "ycrosshairsHidden": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "xAxisTicksPositions": [
                                21.95563397040734,
                                43.91126794081468,
                                65.86690191122202,
                                87.82253588162936,
                                109.77816985203671,
                                131.73380382244406,
                                153.6894377928514,
                                175.64507176325876,
                                197.6007057336661,
                                219.55633970407345,
                                241.5119736744808,
                                263.4676076448881,
                                285.42324161529547
                            ],
                            "dataPointsDividedHeight": 9.76923076923077,
                            "dataPointsDividedWidth": 21.95563397040734,
                            "tooltipTitle": {},
                            "legendLabels": {},
                            "ttItems": [
                                {}
                            ],
                            "seriesBound": {
                                "x": 838.1767578125,
                                "y": 344.6000061035156,
                                "width": 285.4232482910156,
                                "height": 126,
                                "top": 344.6000061035156,
                                "right": 1123.6000061035156,
                                "bottom": 470.6000061035156,
                                "left": 838.1767578125
                            }
                        },
                        "series": [
                            [
                                10,
                                20,
                                30,
                                40,
                                30,
                                20,
                                25,
                                15,
                                10,
                                18,
                                22,
                                28,
                                18
                            ]
                        ],
                        "seriesCandleO": [],
                        "seriesCandleH": [],
                        "seriesCandleM": [],
                        "seriesCandleL": [],
                        "seriesCandleC": [],
                        "seriesRangeStart": [],
                        "seriesRangeEnd": [],
                        "seriesRangeBar": [],
                        "seriesPercent": [
                            [
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100
                            ]
                        ],
                        "seriesGoals": [
                            [
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null
                            ]
                        ],
                        "seriesX": [
                            null
                        ],
                        "seriesZ": [
                            []
                        ],
                        "seriesNames": [
                            "Column"
                        ],
                        "seriesTotals": [
                            286
                        ],
                        "seriesLog": [
                            null
                        ],
                        "seriesColors": [
                            null
                        ],
                        "stackedSeriesTotals": [
                            10,
                            20,
                            30,
                            40,
                            30,
                            20,
                            25,
                            15,
                            10,
                            18,
                            22,
                            28,
                            18
                        ],
                        "seriesXvalues": [
                            [
                                10.97781698520367,
                                54.889084926018356,
                                76.8447188964257,
                                98.80035286683305,
                                120.7559868372404,
                                142.71162080764773,
                                164.66725477805508,
                                186.62288874846243,
                                208.57852271886978,
                                230.53415668927713,
                                252.48979065968447,
                                274.44542463009185,
                                296.4010586004992
                            ]
                        ],
                        "seriesYvalues": [
                            [
                                95.25,
                                63.5,
                                31.75,
                                0,
                                31.75,
                                63.5,
                                47.625,
                                79.375,
                                95.25,
                                69.85,
                                57.150000000000006,
                                38.099999999999994,
                                69.85
                            ]
                        ],
                        "categoryLabels": [],
                        "selectionResizeTimer": null,
                        "isXNumeric": false,
                        "xaxisLabelsCount": 13,
                        "isMultiLineX": false,
                        "isMultipleYAxis": false,
                        "maxY": 40,
                        "minY": 0,
                        "minYArr": [
                            0
                        ],
                        "maxYArr": [
                            40
                        ],
                        "maxX": -1.7976931348623157e+308,
                        "minX": 1.7976931348623157e+308,
                        "initialMaxX": -1.7976931348623157e+308,
                        "initialMinX": 1.7976931348623157e+308,
                        "maxDate": 0,
                        "minDate": 1.7976931348623157e+308,
                        "minZ": 1.7976931348623157e+308,
                        "maxZ": -1.7976931348623157e+308,
                        "minXDiff": 1.7976931348623157e+308,
                        "yAxisScale": [
                            {
                                "result": [
                                    0,
                                    10,
                                    20,
                                    30,
                                    40
                                ],
                                "niceMin": 0,
                                "niceMax": 40
                            }
                        ],
                        "xAxisScale": null,
                        "xAxisTicksPositions": [],
                        "yLabelsCoords": [
                            {
                                "width": 22.57675838470459,
                                "index": 0
                            }
                        ],
                        "yTitleCoords": [
                            {
                                "width": 0,
                                "index": 0
                            }
                        ],
                        "barPadForNumericAxis": 0,
                        "padHorizontal": 0,
                        "xRange": null,
                        "yRange": [
                            40
                        ],
                        "zRange": null,
                        "dataPoints": 13,
                        "xTickAmount": 0,
                        "xyCharts": true,
                        "isBarHorizontal": false,
                        "chartClass": ".apexchartsBVBtR",
                        "comboBarCount": 0,
                        "isRangeBar": false,
                        "xAxisHeight": 32,
                        "yLogRatio": [
                            0.31496062992125984
                        ],
                        "logYRange": [
                            null
                        ]
                    }
                },
                "publicMethods": [
                    "updateOptions",
                    "updateSeries",
                    "appendData",
                    "appendSeries",
                    "toggleSeries",
                    "showSeries",
                    "hideSeries",
                    "setLocale",
                    "resetSeries",
                    "zoomX",
                    "toggleDataPointSelection",
                    "dataURI",
                    "addXaxisAnnotation",
                    "addYaxisAnnotation",
                    "addPointAnnotation",
                    "clearAnnotations",
                    "removeAnnotation",
                    "paper",
                    "destroy"
                ],
                "eventList": [
                    "click",
                    "mousedown",
                    "mousemove",
                    "mouseleave",
                    "touchstart",
                    "touchmove",
                    "touchleave",
                    "mouseup",
                    "touchend"
                ],
                "animations": {},
                "axes": {},
                "core": {},
                "config": {
                    "opts": {}
                },
                "data": {
                    "coreUtils": {},
                    "fallbackToCategory": true,
                    "activeSeriesIndex": 0
                },
                "grid": {
                    "xaxisLabels": [
                        "Item 1",
                        "Item 2",
                        "Item 3",
                        "Item 4",
                        "Item 5",
                        "item 6",
                        "item 7",
                        "Item 8",
                        "Item 9",
                        "Item 10",
                        "Item 11",
                        "Item 12",
                        "Item 13"
                    ],
                    "axesUtils": {},
                    "isRangeBar": 0,
                    "elg": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesH": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesV": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    }
                },
                "graphics": {},
                "coreUtils": {},
                "crosshairs": {},
                "events": {},
                "exports": {},
                "localization": {},
                "options": {
                    "yAxis": {
                        "show": true,
                        "showAlways": false,
                        "showForNullSeries": true,
                        "opposite": false,
                        "reversed": false,
                        "logarithmic": false,
                        "logBase": 10,
                        "forceNiceScale": false,
                        "floating": false,
                        "labels": {
                            "show": true,
                            "minWidth": 0,
                            "maxWidth": 160,
                            "offsetX": 0,
                            "offsetY": 0,
                            "rotate": 0,
                            "padding": 20,
                            "style": {
                                "colors": [],
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": ""
                            }
                        },
                        "axisBorder": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 1,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "axisTicks": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 6,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "title": {
                            "rotate": -90,
                            "offsetY": 0,
                            "offsetX": 0,
                            "style": {
                                "fontSize": "11px",
                                "fontWeight": 900,
                                "cssClass": ""
                            }
                        },
                        "tooltip": {
                            "enabled": false,
                            "offsetX": 0
                        },
                        "crosshairs": {
                            "show": true,
                            "position": "front",
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1,
                                "dashArray": 0
                            }
                        }
                    },
                    "pointAnnotation": {
                        "x": 0,
                        "y": null,
                        "yAxisIndex": 0,
                        "seriesIndex": 0,
                        "marker": {
                            "size": 4,
                            "fillColor": "#fff",
                            "strokeWidth": 2,
                            "strokeColor": "#333",
                            "shape": "circle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "radius": 2,
                            "cssClass": ""
                        },
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        },
                        "customSVG": {
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "image": {
                            "width": 20,
                            "height": 20,
                            "offsetX": 0,
                            "offsetY": 0
                        }
                    },
                    "yAxisAnnotation": {
                        "y": 0,
                        "y2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "width": "100%",
                        "yAxisIndex": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "end",
                            "position": "right",
                            "offsetX": 0,
                            "offsetY": -3,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "xAxisAnnotation": {
                        "x": 0,
                        "x2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "orientation": "vertical",
                            "position": "top",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "text": {
                        "x": 0,
                        "y": 0,
                        "text": "",
                        "textAnchor": "start",
                        "fontSize": "13px",
                        "fontWeight": 400,
                        "appendTo": ".apexcharts-annotations",
                        "backgroundColor": "transparent",
                        "borderColor": "#c2c2c2",
                        "borderRadius": 0,
                        "borderWidth": 0,
                        "paddingLeft": 4,
                        "paddingRight": 4,
                        "paddingTop": 2,
                        "paddingBottom": 2
                    }
                },
                "responsive": {},
                "series": {
                    "legendInactiveClass": "legend-mouseover-inactive"
                },
                "theme": {
                    "isColorFn": false,
                    "isHeatmapDistributed": false,
                    "isBarDistributed": false
                },
                "formatters": {
                    "tooltipKeyFormat": "dd MMM"
                },
                "titleSubtitle": {},
                "legend": {
                    "isBarsDistributed": false,
                    "legendHelpers": {}
                },
                "toolbar": {
                    "ev": {},
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308
                },
                "dimensions": {
                    "lgRect": {
                        "x": 795.6000366210938,
                        "y": 506.6000061035156,
                        "height": 0,
                        "width": 0
                    },
                    "yAxisWidth": 27.57675838470459,
                    "yAxisWidthLeft": 27.57675838470459,
                    "yAxisWidthRight": 0,
                    "xAxisHeight": 32,
                    "isSparkline": false,
                    "dimHelpers": {},
                    "dimYAxis": {},
                    "dimXAxis": {},
                    "dimGrid": {},
                    "lgWidthForSideLegends": 0,
                    "xPadRight": 0,
                    "xPadLeft": 0,
                    "xAxisWidth": 0
                },
                "updateHelpers": {},
                "zoomPanSelection": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308,
                    "dragged": false,
                    "graphics": {},
                    "eventList": [
                        "mousedown",
                        "mouseleave",
                        "mousemove",
                        "touchstart",
                        "touchmove",
                        "mouseup",
                        "touchend"
                    ],
                    "clientX": 0,
                    "clientY": 0,
                    "startX": 0,
                    "endX": 0,
                    "dragX": 0,
                    "startY": 0,
                    "endY": 0,
                    "dragY": 0,
                    "moveDirection": "none"
                },
                "pie": {
                    "chartType": "bar",
                    "initialAnim": false,
                    "dynamicAnim": false,
                    "animBeginArr": [
                        0
                    ],
                    "animDur": 0,
                    "defaultSize": 127,
                    "centerY": 63.5,
                    "centerX": 142.7116208076477,
                    "fullAngle": 360,
                    "initialAngle": 0,
                    "donutSize": 36.368292682926835,
                    "maxY": 0,
                    "sliceLabels": [],
                    "sliceSizes": [],
                    "prevSectorAngleArr": []
                },
                "rangeBar": {
                    "isHorizontal": false,
                    "strokeWidth": 2,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xRatio": null,
                    "initialXRatio": null,
                    "invertedXRatio": null,
                    "invertedYRatio": 0.1401427570285729,
                    "baseLineInvertedY": 0.1,
                    "yaxisIndex": 0,
                    "seriesLen": 0,
                    "barHelpers": {}
                },
                "bar": {
                    "isHorizontal": false,
                    "strokeWidth": 2,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xRatio": null,
                    "initialXRatio": null,
                    "invertedXRatio": null,
                    "invertedYRatio": 0.1401427570285729,
                    "baseLineInvertedY": 0.1,
                    "yaxisIndex": 0,
                    "seriesLen": 1,
                    "barHelpers": {},
                    "totalItems": 13,
                    "visibleI": 0,
                    "visibleItems": 13,
                    "zeroSerieses": [],
                    "radiusOnSeriesNumber": 0,
                    "isReversed": false
                },
                "annotations": {
                    "graphics": {},
                    "helpers": {},
                    "xAxisAnnotations": {},
                    "yAxisAnnotations": {},
                    "pointsAnnotations": {},
                    "xDivision": 21.95563397040734
                }
            }
        },
        {
            "id": "iSUns",
            "chart": {
                "opts": {
                    "series": [
                        {
                            "name": "Column 1",
                            "data": [
                                {
                                    "x": "Item 1",
                                    "y": 10
                                },
                                {
                                    "x": "Item 2",
                                    "y": 20
                                },
                                {
                                    "x": "Item 3",
                                    "y": 30
                                },
                                {
                                    "x": "Item 4",
                                    "y": 40
                                }
                            ]
                        },
                        {
                            "name": "Column 2",
                            "data": [
                                {
                                    "x": "Item 1",
                                    "y": 15
                                },
                                {
                                    "x": "Item 2",
                                    "y": 10
                                },
                                {
                                    "x": "Item 3",
                                    "y": 25
                                },
                                {
                                    "x": "Item 4",
                                    "y": 30
                                }
                            ]
                        }
                    ],
                    "annotations": {
                        "position": "front",
                        "yaxis": [],
                        "xaxis": [],
                        "points": []
                    },
                    "chart": {
                        "type": "bar",
                        "background": "",
                        "foreColor": "#333",
                        "offsetX": 0,
                        "offsetY": 0,
                        "toolbar": {
                            "show": false
                        },
                        "animations": {
                            "enabled": false
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 2,
                            "left": 2,
                            "blur": 4,
                            "color": "#000",
                            "opacity": 0.35
                        },
                        "fontFamily": "Roboto",
                        "height": 250,
                        "width": 400,
                        "stacked": true,
                        "stackType": "100%",
                        "id": "iSUns"
                    },
                    "plotOptions": {
                        "bar": {
                            "horizontal": false,
                            "columnWidth": "70%",
                            "barHeight": "70%",
                            "distributed": false,
                            "borderRadius": 10,
                            "colors": {
                                "ranges": [],
                                "backgroundBarColors": [],
                                "backgroundBarOpacity": 1
                            },
                            "dataLabels": {
                                "position": "center"
                            }
                        },
                        "heatmap": {
                            "radius": 2,
                            "enableShades": true,
                            "shadeIntensity": 0.5
                        },
                        "radialBar": {
                            "startAngle": 0,
                            "endAngle": 360,
                            "offsetX": 0,
                            "offsetY": 0,
                            "hollow": {
                                "margin": 5,
                                "size": "50%",
                                "background": "#fff",
                                "position": "front",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "track": {
                                "show": true,
                                "background": "#f2f2f2",
                                "strokeWidth": "97%",
                                "opacity": 1,
                                "margin": 5,
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "dataLabels": {
                                "show": true,
                                "name": {
                                    "show": true,
                                    "fontSize": 16,
                                    "offsetY": 0
                                },
                                "value": {
                                    "show": true,
                                    "fontSize": 14,
                                    "offsetY": 16
                                },
                                "total": {
                                    "show": false,
                                    "label": "Total",
                                    "fontSize": 16
                                }
                            }
                        },
                        "pie": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "dataLabels": {
                                "offset": 0
                            },
                            "donut": {
                                "size": "65%",
                                "labels": {
                                    "show": false,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "offsetY": -10
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 20,
                                        "offsetY": 10
                                    },
                                    "total": {
                                        "show": false,
                                        "showAlways": false,
                                        "label": "Total",
                                        "fontSize": 16
                                    }
                                }
                            }
                        },
                        "radar": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "polygons": {
                                "strokeColors": "#e8e8e8",
                                "connectorColors": "#e8e8e8",
                                "fill": {}
                            }
                        }
                    },
                    "theme": {
                        "mode": "light",
                        "palette": "palette4"
                    },
                    "dataLabels": {
                        "enabled": true,
                        "textAnchor": "middle",
                        "offsetX": 0,
                        "offsetY": 0,
                        "style": {
                            "fontSize": 12,
                            "fontWeight": 700,
                            "colors": [
                                "#fff"
                            ]
                        },
                        "background": {
                            "enabled": false,
                            "foreColor": "#fff",
                            "borderRadius": 2,
                            "padding": 4,
                            "opacity": 0.9,
                            "borderWidth": 1,
                            "borderColor": "#fff"
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 1,
                            "left": 1,
                            "blur": 1,
                            "color": "#000",
                            "opacity": 0.45
                        }
                    },
                    "markers": {
                        "size": 0,
                        "strokeColors": "#fff",
                        "strokeWidth": 2,
                        "strokeOpacity": 0.9,
                        "strokeDashArray": 0,
                        "fillOpacity": 1,
                        "shape": "circle",
                        "radius": 2,
                        "offsetX": 0,
                        "offsetY": 0,
                        "hover": {}
                    },
                    "yaxis": [
                        {
                            "show": true,
                            "showAlways": false,
                            "showForNullSeries": true,
                            "opposite": false,
                            "reversed": false,
                            "logarithmic": false,
                            "logBase": 10,
                            "tickAmount": 5,
                            "forceNiceScale": false,
                            "max": 100,
                            "min": 0,
                            "floating": false,
                            "labels": {
                                "show": true,
                                "minWidth": 0,
                                "maxWidth": 160,
                                "offsetX": 0,
                                "offsetY": 0,
                                "rotate": 0,
                                "padding": 20,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                }
                            },
                            "axisBorder": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "title": {
                                "rotate": -90,
                                "offsetY": 0,
                                "offsetX": 0,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetX": 0
                            },
                            "crosshairs": {
                                "show": true,
                                "position": "front",
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 0
                                }
                            }
                        }
                    ],
                    "stroke": {
                        "show": true,
                        "curve": "smooth",
                        "lineCap": "butt",
                        "width": 2,
                        "dashArray": 0
                    },
                    "fill": {
                        "type": "solid",
                        "opacity": 0.85,
                        "gradient": {
                            "shade": "dark",
                            "type": "horizontal",
                            "shadeIntensity": 0.5,
                            "inverseColors": true,
                            "opacityFrom": 1,
                            "opacityTo": 1,
                            "stops": [
                                0,
                                50,
                                100
                            ],
                            "colorStops": []
                        },
                        "pattern": {
                            "style": "squares",
                            "width": 6,
                            "height": 6,
                            "strokeWidth": 2
                        }
                    },
                    "legend": {
                        "show": true,
                        "showForSingleSeries": false,
                        "floating": false,
                        "position": "bottom",
                        "horizontalAlign": "center",
                        "fontSize": 14,
                        "fontWeight": 400,
                        "offsetX": -20,
                        "offsetY": 0,
                        "labels": {
                            "useSeriesColors": false
                        },
                        "markers": {
                            "width": 12,
                            "height": 12,
                            "strokeWidth": 0,
                            "strokeColor": "#fff",
                            "radius": 12
                        },
                        "itemMargin": {
                            "horizontal": 5,
                            "vertical": 0
                        },
                        "onItemClick": {
                            "toggleDataSeries": true
                        },
                        "onItemHover": {
                            "highlightDataSeries": true
                        }
                    }
                },
                "w": {
                    "config": {
                        "annotations": {
                            "position": "front",
                            "texts": [],
                            "images": [],
                            "shapes": []
                        },
                        "chart": {
                            "animations": {
                                "enabled": false,
                                "easing": "swing",
                                "speed": 800,
                                "animateGradually": {
                                    "delay": 150,
                                    "enabled": true
                                },
                                "dynamicAnimation": {
                                    "enabled": true,
                                    "speed": 350
                                }
                            },
                            "background": "",
                            "locales": [
                                null
                            ],
                            "defaultLocale": "en",
                            "dropShadow": {
                                "enabled": false,
                                "top": 2,
                                "left": 2,
                                "blur": 4,
                                "color": "#000",
                                "opacity": 0.35
                            },
                            "events": {},
                            "foreColor": "#333",
                            "fontFamily": "Roboto",
                            "height": 250,
                            "parentHeightOffset": 15,
                            "redrawOnParentResize": true,
                            "redrawOnWindowResize": true,
                            "id": "iSUns",
                            "offsetX": 0,
                            "offsetY": 0,
                            "selection": {
                                "enabled": false,
                                "type": "x",
                                "fill": {
                                    "color": "#24292e",
                                    "opacity": 0.1
                                },
                                "stroke": {
                                    "width": 1,
                                    "color": "#24292e",
                                    "opacity": 0.4,
                                    "dashArray": 3
                                },
                                "xaxis": {},
                                "yaxis": {}
                            },
                            "sparkline": {
                                "enabled": false
                            },
                            "brush": {
                                "enabled": false,
                                "autoScaleYaxis": true
                            },
                            "stacked": true,
                            "stackType": "100%",
                            "toolbar": {
                                "show": false,
                                "offsetX": 0,
                                "offsetY": 0,
                                "tools": {
                                    "download": true,
                                    "selection": false,
                                    "zoom": false,
                                    "zoomin": false,
                                    "zoomout": false,
                                    "pan": false,
                                    "reset": false,
                                    "customIcons": []
                                },
                                "export": {
                                    "csv": {
                                        "columnDelimiter": ",",
                                        "headerCategory": "category",
                                        "headerValue": "value"
                                    },
                                    "png": {},
                                    "svg": {}
                                },
                                "autoSelected": "zoom"
                            },
                            "type": "bar",
                            "width": 400,
                            "zoom": {
                                "enabled": true,
                                "type": "x",
                                "autoScaleYaxis": false,
                                "zoomedArea": {
                                    "fill": {
                                        "color": "#90CAF9",
                                        "opacity": 0.4
                                    },
                                    "stroke": {
                                        "color": "#0D47A1",
                                        "opacity": 0.4,
                                        "width": 1
                                    }
                                }
                            }
                        },
                        "plotOptions": {
                            "area": {
                                "fillTo": "origin"
                            },
                            "bar": {
                                "horizontal": false,
                                "columnWidth": "70%",
                                "barHeight": "70%",
                                "distributed": false,
                                "borderRadius": 10,
                                "rangeBarOverlap": true,
                                "rangeBarGroupRows": false,
                                "colors": {
                                    "backgroundBarOpacity": 1,
                                    "backgroundBarRadius": 0
                                },
                                "dataLabels": {
                                    "position": "center",
                                    "maxItems": 100,
                                    "hideOverflowingLabels": true,
                                    "orientation": "horizontal"
                                }
                            },
                            "bubble": {},
                            "candlestick": {
                                "colors": {
                                    "upward": "#00B746",
                                    "downward": "#EF403C"
                                },
                                "wick": {
                                    "useFillColor": true
                                }
                            },
                            "boxPlot": {
                                "colors": {
                                    "upper": "#00E396",
                                    "lower": "#008FFB"
                                }
                            },
                            "heatmap": {
                                "radius": 2,
                                "enableShades": true,
                                "shadeIntensity": 0.5,
                                "reverseNegativeShade": false,
                                "distributed": false,
                                "useFillColorAsStroke": false,
                                "colorScale": {
                                    "inverse": false,
                                    "ranges": []
                                }
                            },
                            "treemap": {
                                "enableShades": true,
                                "shadeIntensity": 0.5,
                                "distributed": false,
                                "reverseNegativeShade": false,
                                "useFillColorAsStroke": false,
                                "colorScale": {
                                    "inverse": false,
                                    "ranges": []
                                }
                            },
                            "radialBar": {
                                "inverseOrder": false,
                                "startAngle": 0,
                                "endAngle": 360,
                                "offsetX": 0,
                                "offsetY": 0,
                                "hollow": {
                                    "margin": 5,
                                    "size": "50%",
                                    "background": "#fff",
                                    "imageWidth": 150,
                                    "imageHeight": 150,
                                    "imageOffsetX": 0,
                                    "imageOffsetY": 0,
                                    "imageClipped": true,
                                    "position": "front",
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "track": {
                                    "show": true,
                                    "background": "#f2f2f2",
                                    "strokeWidth": "97%",
                                    "opacity": 1,
                                    "margin": 5,
                                    "dropShadow": {
                                        "enabled": false,
                                        "top": 0,
                                        "left": 0,
                                        "blur": 3,
                                        "color": "#000",
                                        "opacity": 0.5
                                    }
                                },
                                "dataLabels": {
                                    "show": true,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "fontWeight": 600,
                                        "offsetY": 0
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 14,
                                        "fontWeight": 400,
                                        "offsetY": 16
                                    },
                                    "total": {
                                        "show": false,
                                        "label": "Total",
                                        "fontSize": 16,
                                        "fontWeight": 600
                                    }
                                }
                            },
                            "pie": {
                                "customScale": 1,
                                "offsetX": 0,
                                "offsetY": 0,
                                "startAngle": 0,
                                "endAngle": 360,
                                "expandOnClick": true,
                                "dataLabels": {
                                    "offset": 0,
                                    "minAngleToShowLabel": 10
                                },
                                "donut": {
                                    "size": "65%",
                                    "labels": {
                                        "show": false,
                                        "name": {
                                            "show": true,
                                            "fontSize": 16,
                                            "fontWeight": 600,
                                            "offsetY": -10
                                        },
                                        "value": {
                                            "show": true,
                                            "fontSize": 20,
                                            "fontWeight": 400,
                                            "offsetY": 10
                                        },
                                        "total": {
                                            "show": false,
                                            "showAlways": false,
                                            "label": "Total",
                                            "fontSize": 16,
                                            "fontWeight": 400
                                        }
                                    }
                                }
                            },
                            "polarArea": {
                                "rings": {
                                    "strokeWidth": 1,
                                    "strokeColor": "#e8e8e8"
                                },
                                "spokes": {
                                    "strokeWidth": 1,
                                    "connectorColors": "#e8e8e8"
                                }
                            },
                            "radar": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "polygons": {
                                    "strokeWidth": 1,
                                    "strokeColors": "#e8e8e8",
                                    "connectorColors": "#e8e8e8",
                                    "fill": {}
                                }
                            }
                        },
                        "dataLabels": {
                            "enabled": true,
                            "textAnchor": "middle",
                            "distributed": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700
                            },
                            "background": {
                                "enabled": false,
                                "foreColor": "#fff",
                                "borderRadius": 2,
                                "padding": 4,
                                "opacity": 0.9,
                                "borderWidth": 1,
                                "borderColor": "#fff",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 1,
                                    "left": 1,
                                    "blur": 1,
                                    "color": "#000",
                                    "opacity": 0.45
                                }
                            },
                            "dropShadow": {
                                "enabled": false,
                                "top": 1,
                                "left": 1,
                                "blur": 1,
                                "color": "#000",
                                "opacity": 0.45
                            }
                        },
                        "fill": {
                            "type": "solid",
                            "opacity": 0.85,
                            "gradient": {
                                "shade": "dark",
                                "type": "horizontal",
                                "shadeIntensity": 0.5,
                                "inverseColors": true,
                                "opacityFrom": 1,
                                "opacityTo": 1
                            },
                            "image": {
                                "src": []
                            },
                            "pattern": {
                                "style": "squares",
                                "width": 6,
                                "height": 6,
                                "strokeWidth": 2
                            }
                        },
                        "forecastDataPoints": {
                            "count": 0,
                            "fillOpacity": 0.5,
                            "dashArray": 4
                        },
                        "grid": {
                            "show": true,
                            "borderColor": "#e0e0e0",
                            "strokeDashArray": 0,
                            "position": "back",
                            "xaxis": {
                                "lines": {
                                    "show": false
                                }
                            },
                            "yaxis": {
                                "lines": {
                                    "show": true
                                }
                            },
                            "row": {
                                "opacity": 0.5
                            },
                            "column": {
                                "opacity": 0.5
                            },
                            "padding": {
                                "top": 0,
                                "right": 25,
                                "bottom": 0,
                                "left": 15
                            }
                        },
                        "labels": [],
                        "legend": {
                            "show": true,
                            "showForSingleSeries": false,
                            "showForNullSeries": true,
                            "showForZeroSeries": true,
                            "floating": false,
                            "position": "bottom",
                            "horizontalAlign": "center",
                            "inverseOrder": false,
                            "fontSize": 14,
                            "fontWeight": 400,
                            "offsetX": -20,
                            "offsetY": 0,
                            "customLegendItems": [],
                            "labels": {
                                "useSeriesColors": false
                            },
                            "markers": {
                                "width": 12,
                                "height": 12,
                                "strokeWidth": 0,
                                "strokeColor": "#fff",
                                "radius": 12,
                                "offsetX": 0,
                                "offsetY": 0,
                                "shape": "square",
                                "size": 8
                            },
                            "itemMargin": {
                                "horizontal": 5,
                                "vertical": 0
                            },
                            "onItemClick": {
                                "toggleDataSeries": true
                            },
                            "onItemHover": {
                                "highlightDataSeries": true
                            }
                        },
                        "markers": {
                            "discrete": [],
                            "size": 0,
                            "strokeColors": "#fff",
                            "strokeWidth": 2,
                            "strokeOpacity": 0.9,
                            "strokeDashArray": 0,
                            "fillOpacity": 1,
                            "shape": "circle",
                            "width": 8,
                            "height": 8,
                            "radius": 2,
                            "offsetX": 0,
                            "offsetY": 0,
                            "showNullDataPoints": true,
                            "hover": {
                                "sizeOffset": 3
                            }
                        },
                        "noData": {
                            "align": "center",
                            "verticalAlign": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": "14px"
                            }
                        },
                        "responsive": [],
                        "states": {
                            "normal": {
                                "filter": {
                                    "type": "none",
                                    "value": 0
                                }
                            },
                            "hover": {
                                "filter": {
                                    "type": "lighten",
                                    "value": 0.1
                                }
                            },
                            "active": {
                                "allowMultipleDataPointsSelection": false,
                                "filter": {
                                    "type": "darken",
                                    "value": 0.5
                                }
                            }
                        },
                        "title": {
                            "align": "left",
                            "margin": 5,
                            "offsetX": 0,
                            "offsetY": 0,
                            "floating": false,
                            "style": {
                                "fontSize": "14px",
                                "fontWeight": 900
                            }
                        },
                        "subtitle": {
                            "align": "left",
                            "margin": 5,
                            "offsetX": 0,
                            "offsetY": 30,
                            "floating": false,
                            "style": {
                                "fontSize": "12px",
                                "fontWeight": 400
                            }
                        },
                        "stroke": {
                            "show": true,
                            "curve": "smooth",
                            "lineCap": "butt",
                            "width": 2,
                            "dashArray": 0
                        },
                        "tooltip": {
                            "enabled": true,
                            "shared": false,
                            "followCursor": false,
                            "intersect": true,
                            "inverseOrder": false,
                            "fillSeriesColor": false,
                            "theme": "light",
                            "style": {
                                "fontSize": "12px"
                            },
                            "onDatasetHover": {
                                "highlightDataSeries": false
                            },
                            "x": {
                                "show": true,
                                "format": "dd MMM"
                            },
                            "y": {
                                "title": {}
                            },
                            "z": {
                                "title": "Size: "
                            },
                            "marker": {
                                "show": true
                            },
                            "items": {
                                "display": "flex"
                            },
                            "fixed": {
                                "enabled": false,
                                "position": "topRight",
                                "offsetX": 0,
                                "offsetY": 0
                            }
                        },
                        "xaxis": {
                            "type": "category",
                            "categories": [],
                            "convertedCatToNumeric": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "labels": {
                                "show": true,
                                "rotate": -45,
                                "rotateAlways": false,
                                "hideOverlappingLabels": true,
                                "trim": true,
                                "maxHeight": 120,
                                "showDuplicates": true,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                },
                                "offsetX": 0,
                                "offsetY": 0,
                                "datetimeUTC": true,
                                "datetimeFormatter": {
                                    "year": "yyyy",
                                    "month": "MMM 'yy",
                                    "day": "dd MMM",
                                    "hour": "HH:mm",
                                    "minute": "HH:mm:ss",
                                    "second": "HH:mm:ss"
                                }
                            },
                            "axisBorder": {
                                "show": true,
                                "color": "#e0e0e0",
                                "width": "100%",
                                "height": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": true,
                                "color": "#e0e0e0",
                                "height": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "tickPlacement": "between",
                            "floating": false,
                            "position": "bottom",
                            "title": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "crosshairs": {
                                "show": true,
                                "width": 1,
                                "position": "back",
                                "opacity": 0.9,
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 3
                                },
                                "fill": {
                                    "type": "solid",
                                    "color": "#B1B9C4",
                                    "gradient": {
                                        "colorFrom": "#D8E3F0",
                                        "colorTo": "#BED1E6",
                                        "stops": [
                                            0,
                                            100
                                        ],
                                        "opacityFrom": 0.4,
                                        "opacityTo": 0.5
                                    }
                                },
                                "dropShadow": {
                                    "enabled": false,
                                    "left": 0,
                                    "top": 0,
                                    "blur": 1,
                                    "opacity": 0.4
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "12px"
                                }
                            }
                        },
                        "theme": {
                            "mode": "light",
                            "palette": "palette4",
                            "monochrome": {
                                "enabled": false,
                                "color": "#008FFB",
                                "shadeTo": "light",
                                "shadeIntensity": 0.65
                            }
                        }
                    },
                    "globals": {
                        "chartID": "iSUns",
                        "cuid": "fxoznc8t",
                        "events": {
                            "beforeMount": [],
                            "mounted": [],
                            "updated": [],
                            "clicked": [],
                            "selection": [],
                            "dataPointSelection": [],
                            "zoomed": [],
                            "scrolled": []
                        },
                        "colors": [
                            "#4ecdc4",
                            "#c7f464",
                            "#81D4FA",
                            "#fd6a6a",
                            "#546E7A"
                        ],
                        "clientX": null,
                        "clientY": null,
                        "fill": {
                            "colors": [
                                "#4ecdc4",
                                "#c7f464",
                                "#81D4FA",
                                "#fd6a6a",
                                "#546E7A"
                            ]
                        },
                        "stroke": {},
                        "dataLabels": {
                            "style": {
                                "colors": [
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff",
                                    "#fff"
                                ]
                            }
                        },
                        "radarPolygons": {
                            "fill": {
                                "colors": [
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none"
                                ]
                            }
                        },
                        "markers": {
                            "size": [
                                0,
                                0,
                                0
                            ],
                            "largestSize": 0
                        },
                        "animationEnded": true,
                        "isDirty": true,
                        "isExecCalled": false,
                        "initialConfig": {},
                        "initialSeries": [
                            {
                                "name": "Column 1",
                                "data": [
                                    {
                                        "x": "Item 1",
                                        "y": 10
                                    },
                                    {
                                        "x": "Item 2",
                                        "y": 20
                                    },
                                    {
                                        "x": "Item 3",
                                        "y": 30
                                    },
                                    {
                                        "x": "Item 4",
                                        "y": 40
                                    }
                                ]
                            },
                            {
                                "name": "Column 2",
                                "data": [
                                    {
                                        "x": "Item 1",
                                        "y": 15
                                    },
                                    {
                                        "x": "Item 2",
                                        "y": 10
                                    },
                                    {
                                        "x": "Item 3",
                                        "y": 25
                                    },
                                    {
                                        "x": "Item 4",
                                        "y": 30
                                    }
                                ]
                            }
                        ],
                        "lastXAxis": {
                            "type": "category",
                            "categories": [],
                            "convertedCatToNumeric": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "labels": {
                                "show": true,
                                "rotate": -45,
                                "rotateAlways": false,
                                "hideOverlappingLabels": true,
                                "trim": true,
                                "maxHeight": 120,
                                "showDuplicates": true,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                },
                                "offsetX": 0,
                                "offsetY": 0,
                                "datetimeUTC": true,
                                "datetimeFormatter": {
                                    "year": "yyyy",
                                    "month": "MMM 'yy",
                                    "day": "dd MMM",
                                    "hour": "HH:mm",
                                    "minute": "HH:mm:ss",
                                    "second": "HH:mm:ss"
                                }
                            },
                            "axisBorder": {
                                "show": true,
                                "color": "#e0e0e0",
                                "width": "100%",
                                "height": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": true,
                                "color": "#e0e0e0",
                                "height": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "tickPlacement": "between",
                            "floating": false,
                            "position": "bottom",
                            "title": {
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": 12,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "crosshairs": {
                                "show": true,
                                "width": 1,
                                "position": "back",
                                "opacity": 0.9,
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 3
                                },
                                "fill": {
                                    "type": "solid",
                                    "color": "#B1B9C4",
                                    "gradient": {
                                        "colorFrom": "#D8E3F0",
                                        "colorTo": "#BED1E6",
                                        "stops": [
                                            0,
                                            100
                                        ],
                                        "opacityFrom": 0.4,
                                        "opacityTo": 0.5
                                    }
                                },
                                "dropShadow": {
                                    "enabled": false,
                                    "left": 0,
                                    "top": 0,
                                    "blur": 1,
                                    "opacity": 0.4
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "12px"
                                }
                            }
                        },
                        "lastYAxis": [
                            {
                                "show": true,
                                "showAlways": false,
                                "showForNullSeries": true,
                                "opposite": false,
                                "reversed": false,
                                "logarithmic": false,
                                "logBase": 10,
                                "tickAmount": 5,
                                "forceNiceScale": false,
                                "max": 100,
                                "min": 0,
                                "floating": false,
                                "labels": {
                                    "show": true,
                                    "minWidth": 0,
                                    "maxWidth": 160,
                                    "offsetX": 0,
                                    "offsetY": 0,
                                    "rotate": 0,
                                    "padding": 20,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 400,
                                        "cssClass": ""
                                    }
                                },
                                "axisBorder": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 1,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "axisTicks": {
                                    "show": false,
                                    "color": "#e0e0e0",
                                    "width": 6,
                                    "offsetX": 0,
                                    "offsetY": 0
                                },
                                "title": {
                                    "rotate": -90,
                                    "offsetY": 0,
                                    "offsetX": 0,
                                    "style": {
                                        "fontSize": 11,
                                        "fontWeight": 700,
                                        "cssClass": ""
                                    }
                                },
                                "tooltip": {
                                    "enabled": false,
                                    "offsetX": 0
                                },
                                "crosshairs": {
                                    "show": true,
                                    "position": "front",
                                    "stroke": {
                                        "color": "#b6b6b6",
                                        "width": 1,
                                        "dashArray": 0
                                    }
                                }
                            }
                        ],
                        "columnSeries": null,
                        "labels": [
                            "Item 1",
                            "Item 2",
                            "Item 3",
                            "Item 4"
                        ],
                        "timescaleLabels": [],
                        "noLabelsProvided": false,
                        "allSeriesCollapsed": false,
                        "collapsedSeries": [],
                        "collapsedSeriesIndices": [],
                        "ancillaryCollapsedSeries": [],
                        "ancillaryCollapsedSeriesIndices": [],
                        "risingSeries": [],
                        "dataFormatXNumeric": false,
                        "capturedSeriesIndex": -1,
                        "capturedDataPointIndex": -1,
                        "selectedDataPoints": [],
                        "goldenPadding": 35,
                        "invalidLogScale": false,
                        "ignoreYAxisIndexes": [],
                        "yAxisSameScaleIndices": [],
                        "maxValsInArrayIndex": 0,
                        "radialSize": 94.00000000000001,
                        "zoomEnabled": true,
                        "panEnabled": false,
                        "selectionEnabled": false,
                        "yaxis": null,
                        "mousedown": false,
                        "lastClientPosition": {},
                        "yValueDecimal": 0,
                        "total": 0,
                        "SVGNS": "http://www.w3.org/2000/svg",
                        "svgWidth": 400,
                        "svgHeight": 250,
                        "noData": false,
                        "locale": {
                            "toolbar": {
                                "exportToSVG": "Download SVG",
                                "exportToPNG": "Download PNG",
                                "exportToCSV": "Download CSV",
                                "menu": "Menu",
                                "selection": "Selection",
                                "selectionZoom": "Selection Zoom",
                                "zoomIn": "Zoom In",
                                "zoomOut": "Zoom Out",
                                "pan": "Panning",
                                "reset": "Reset Zoom"
                            }
                        },
                        "dom": {
                            "baseEl": {
                                "_prevClass": "iSUns"
                            },
                            "elWrap": {},
                            "Paper": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "svg",
                                "_defs": {
                                    "_stroke": "#000000",
                                    "_event": null,
                                    "dom": {},
                                    "node": {},
                                    "type": "defs"
                                }
                            },
                            "elGraphical": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elAnnotations": {
                                "_stroke": "#000000",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "g"
                            },
                            "elLegendWrap": {},
                            "elLegendForeign": {},
                            "elGridRectMask": {},
                            "elGridRectMarkerMask": {},
                            "elForecastMask": {},
                            "elNonForecastMask": {},
                            "elGridRect": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            },
                            "elGridRectMarker": {
                                "_stroke": "none",
                                "_event": null,
                                "dom": {},
                                "node": {},
                                "type": "rect"
                            }
                        },
                        "memory": {
                            "methodsToExec": []
                        },
                        "shouldAnimate": true,
                        "skipLastTimelinelabel": false,
                        "skipFirstTimelinelabel": false,
                        "delayedElements": [
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "_stroke": "#000000",
                                        "_event": null,
                                        "dom": {},
                                        "type": "g"
                                    }
                                },
                                "index": 0
                            }
                        ],
                        "axisCharts": true,
                        "isDataXYZ": false,
                        "resized": true,
                        "resizeTimer": null,
                        "comboCharts": false,
                        "dataChanged": false,
                        "previousPaths": [],
                        "allSeriesHasEqualX": true,
                        "pointsArray": [],
                        "dataLabelsRects": [
                            [
                                {
                                    "x": 42.125,
                                    "y": 164,
                                    "width": 0,
                                    "height": 0
                                },
                                {
                                    "x": 128.375,
                                    "y": 136.66666666666666,
                                    "width": 0,
                                    "height": 0
                                },
                                {
                                    "x": 214.625,
                                    "y": 149.0909090909091,
                                    "width": 0,
                                    "height": 0
                                },
                                {
                                    "x": 300.875,
                                    "y": 146.42857142857142,
                                    "width": 0,
                                    "height": 0
                                }
                            ],
                            [
                                {
                                    "x": 42.125,
                                    "y": 61.5,
                                    "width": 0,
                                    "height": 0
                                },
                                {
                                    "x": 128.375,
                                    "y": 34.16666666666664,
                                    "width": 0,
                                    "height": 0
                                },
                                {
                                    "x": 214.625,
                                    "y": 46.59090909090908,
                                    "width": 0,
                                    "height": 0
                                },
                                {
                                    "x": 300.875,
                                    "y": 43.92857142857142,
                                    "width": 0,
                                    "height": 0
                                }
                            ]
                        ],
                        "lastDrawnDataLabelsIndexes": [
                            [
                                0,
                                1,
                                2,
                                3,
                                0,
                                1,
                                2,
                                3
                            ],
                            [
                                0,
                                1,
                                2,
                                3,
                                0,
                                1,
                                2,
                                3
                            ]
                        ],
                        "hasNullValues": false,
                        "zoomed": false,
                        "gridWidth": 345,
                        "gridHeight": 205,
                        "rotateXLabels": false,
                        "defaultLabels": false,
                        "yLabelFormatters": [
                            null
                        ],
                        "LINE_HEIGHT_RATIO": 1.618,
                        "xAxisLabelsHeight": 10,
                        "xAxisLabelsWidth": 0,
                        "yAxisLabelsWidth": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "translateX": 30,
                        "translateY": 30,
                        "translateYAxisX": [
                            -3
                        ],
                        "yAxisWidths": [],
                        "translateXAxisY": -4,
                        "translateXAxisX": 0,
                        "tooltip": {
                            "tooltipUtil": {},
                            "tooltipLabels": {
                                "tooltipUtil": {}
                            },
                            "tooltipPosition": {},
                            "marker": {
                                "tooltipPosition": {}
                            },
                            "intersect": {},
                            "axesTooltip": {},
                            "showOnIntersect": true,
                            "showTooltipTitle": true,
                            "fixedTooltip": false,
                            "xaxisTooltip": null,
                            "yaxisTTEls": null,
                            "isBarShared": false,
                            "lastHoverTime": 1683534179670,
                            "xyRatios": {
                                "yRatio": [
                                    0.4878048780487805
                                ],
                                "invertedYRatio": 0.2898550724637681,
                                "zRatio": null,
                                "xRatio": null,
                                "initialXRatio": null,
                                "invertedXRatio": null,
                                "baseLineInvertedY": 0.1,
                                "baseLineY": [
                                    0
                                ],
                                "baseLineX": 0
                            },
                            "isXAxisTooltipEnabled": false,
                            "yaxisTooltips": [
                                false
                            ],
                            "allTooltipSeriesGroups": [],
                            "xaxisOffY": 206,
                            "yaxisOffX": 1,
                            "yaxisTooltip": {},
                            "yaxisTooltipText": [
                                {}
                            ],
                            "xcrosshairsWidth": 1,
                            "ycrosshairs": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "ycrosshairsHidden": {
                                "instance": {
                                    "_stroke": "#b6b6b6",
                                    "_event": null,
                                    "dom": {},
                                    "type": "line"
                                }
                            },
                            "xAxisTicksPositions": [
                                86.25,
                                172.5,
                                258.75,
                                345
                            ],
                            "dataPointsDividedHeight": 51.25,
                            "dataPointsDividedWidth": 86.25,
                            "tooltipTitle": {},
                            "legendLabels": {
                                "0": {},
                                "1": {}
                            },
                            "ttItems": [
                                {},
                                {}
                            ],
                            "seriesBound": {
                                "x": 0,
                                "y": 0,
                                "width": 0,
                                "height": 0,
                                "top": 0,
                                "right": 0,
                                "bottom": 0,
                                "left": 0
                            }
                        },
                        "series": [
                            [
                                10,
                                20,
                                30,
                                40
                            ],
                            [
                                15,
                                10,
                                25,
                                30
                            ]
                        ],
                        "seriesCandleO": [],
                        "seriesCandleH": [],
                        "seriesCandleM": [],
                        "seriesCandleL": [],
                        "seriesCandleC": [],
                        "seriesRangeStart": [],
                        "seriesRangeEnd": [],
                        "seriesRangeBar": [],
                        "seriesPercent": [
                            [
                                40,
                                66.66666666666667,
                                54.54545454545455,
                                57.142857142857146
                            ],
                            [
                                60,
                                33.333333333333336,
                                45.45454545454545,
                                42.857142857142854
                            ]
                        ],
                        "seriesGoals": [
                            [
                                null,
                                null,
                                null,
                                null
                            ],
                            [
                                null,
                                null,
                                null,
                                null
                            ]
                        ],
                        "seriesX": [
                            null,
                            [
                                "Item 1",
                                "Item 2",
                                "Item 3",
                                "Item 4"
                            ]
                        ],
                        "seriesZ": [
                            [],
                            []
                        ],
                        "seriesNames": [
                            "Column 1",
                            "Column 2"
                        ],
                        "seriesTotals": [
                            100,
                            80
                        ],
                        "seriesLog": [
                            null,
                            null
                        ],
                        "seriesColors": [
                            null,
                            null
                        ],
                        "stackedSeriesTotals": [
                            25,
                            30,
                            55,
                            70
                        ],
                        "seriesXvalues": [
                            [
                                99.1875,
                                185.4375,
                                271.6875,
                                357.9375
                            ],
                            [
                                99.1875,
                                185.4375,
                                271.6875,
                                357.9375
                            ]
                        ],
                        "seriesYvalues": [
                            [
                                123,
                                68.33333333333331,
                                93.18181818181817,
                                87.85714285714285
                            ],
                            [
                                0,
                                -2.842170943040401e-14,
                                -1.4210854715202004e-14,
                                0
                            ]
                        ],
                        "categoryLabels": [],
                        "selectionResizeTimer": null,
                        "isXNumeric": false,
                        "xaxisLabelsCount": 4,
                        "isMultiLineX": false,
                        "isMultipleYAxis": false,
                        "maxY": 100,
                        "minY": 0,
                        "minYArr": [
                            0
                        ],
                        "maxYArr": [
                            100
                        ],
                        "maxX": -1.7976931348623157e+308,
                        "minX": 1.7976931348623157e+308,
                        "initialMaxX": -1.7976931348623157e+308,
                        "initialMinX": 1.7976931348623157e+308,
                        "maxDate": 0,
                        "minDate": 1.7976931348623157e+308,
                        "minZ": 1.7976931348623157e+308,
                        "maxZ": -1.7976931348623157e+308,
                        "minXDiff": 1.7976931348623157e+308,
                        "yAxisScale": [
                            {
                                "result": [
                                    0,
                                    20,
                                    40,
                                    60,
                                    80,
                                    100
                                ],
                                "niceMin": 0,
                                "niceMax": 100
                            }
                        ],
                        "xAxisScale": null,
                        "xAxisTicksPositions": [],
                        "yLabelsCoords": [
                            {
                                "width": 10,
                                "index": 0
                            }
                        ],
                        "yTitleCoords": [
                            {
                                "width": 0,
                                "index": 0
                            }
                        ],
                        "barPadForNumericAxis": 0,
                        "padHorizontal": 0,
                        "xRange": null,
                        "yRange": [
                            100
                        ],
                        "zRange": null,
                        "dataPoints": 4,
                        "xTickAmount": 0,
                        "xyCharts": true,
                        "isBarHorizontal": false,
                        "chartClass": ".apexchartsiSUns",
                        "comboBarCount": 0,
                        "isRangeBar": false,
                        "xAxisHeight": 10,
                        "yLogRatio": [
                            0.4878048780487805
                        ],
                        "logYRange": [
                            null
                        ]
                    }
                },
                "publicMethods": [
                    "updateOptions",
                    "updateSeries",
                    "appendData",
                    "appendSeries",
                    "toggleSeries",
                    "showSeries",
                    "hideSeries",
                    "setLocale",
                    "resetSeries",
                    "zoomX",
                    "toggleDataPointSelection",
                    "dataURI",
                    "addXaxisAnnotation",
                    "addYaxisAnnotation",
                    "addPointAnnotation",
                    "clearAnnotations",
                    "removeAnnotation",
                    "paper",
                    "destroy"
                ],
                "eventList": [
                    "click",
                    "mousedown",
                    "mousemove",
                    "mouseleave",
                    "touchstart",
                    "touchmove",
                    "touchleave",
                    "mouseup",
                    "touchend"
                ],
                "animations": {},
                "axes": {},
                "core": {},
                "config": {
                    "opts": {}
                },
                "data": {
                    "coreUtils": {},
                    "fallbackToCategory": true,
                    "activeSeriesIndex": 0
                },
                "grid": {
                    "xaxisLabels": [
                        "Item 1",
                        "Item 2",
                        "Item 3",
                        "Item 4"
                    ],
                    "axesUtils": {},
                    "isRangeBar": 0,
                    "elg": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesH": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    },
                    "elgridLinesV": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "node": {},
                        "type": "g"
                    }
                },
                "graphics": {},
                "coreUtils": {},
                "crosshairs": {},
                "events": {},
                "exports": {},
                "localization": {},
                "options": {
                    "yAxis": {
                        "show": true,
                        "showAlways": false,
                        "showForNullSeries": true,
                        "opposite": false,
                        "reversed": false,
                        "logarithmic": false,
                        "logBase": 10,
                        "forceNiceScale": false,
                        "floating": false,
                        "labels": {
                            "show": true,
                            "minWidth": 0,
                            "maxWidth": 160,
                            "offsetX": 0,
                            "offsetY": 0,
                            "rotate": 0,
                            "padding": 20,
                            "style": {
                                "colors": [],
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": ""
                            }
                        },
                        "axisBorder": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 1,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "axisTicks": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 6,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "title": {
                            "rotate": -90,
                            "offsetY": 0,
                            "offsetX": 0,
                            "style": {
                                "fontSize": "11px",
                                "fontWeight": 900,
                                "cssClass": ""
                            }
                        },
                        "tooltip": {
                            "enabled": false,
                            "offsetX": 0
                        },
                        "crosshairs": {
                            "show": true,
                            "position": "front",
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1,
                                "dashArray": 0
                            }
                        }
                    },
                    "pointAnnotation": {
                        "x": 0,
                        "y": null,
                        "yAxisIndex": 0,
                        "seriesIndex": 0,
                        "marker": {
                            "size": 4,
                            "fillColor": "#fff",
                            "strokeWidth": 2,
                            "strokeColor": "#333",
                            "shape": "circle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "radius": 2,
                            "cssClass": ""
                        },
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        },
                        "customSVG": {
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "image": {
                            "width": 20,
                            "height": 20,
                            "offsetX": 0,
                            "offsetY": 0
                        }
                    },
                    "yAxisAnnotation": {
                        "y": 0,
                        "y2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "width": "100%",
                        "yAxisIndex": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "end",
                            "position": "right",
                            "offsetX": 0,
                            "offsetY": -3,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "xAxisAnnotation": {
                        "x": 0,
                        "x2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "orientation": "vertical",
                            "position": "top",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "text": {
                        "x": 0,
                        "y": 0,
                        "text": "",
                        "textAnchor": "start",
                        "fontSize": "13px",
                        "fontWeight": 400,
                        "appendTo": ".apexcharts-annotations",
                        "backgroundColor": "transparent",
                        "borderColor": "#c2c2c2",
                        "borderRadius": 0,
                        "borderWidth": 0,
                        "paddingLeft": 4,
                        "paddingRight": 4,
                        "paddingTop": 2,
                        "paddingBottom": 2
                    }
                },
                "responsive": {},
                "series": {
                    "legendInactiveClass": "legend-mouseover-inactive"
                },
                "theme": {
                    "isColorFn": false,
                    "isHeatmapDistributed": false,
                    "isBarDistributed": false
                },
                "formatters": {
                    "tooltipKeyFormat": "dd MMM"
                },
                "titleSubtitle": {},
                "legend": {
                    "isBarsDistributed": false,
                    "legendHelpers": {}
                },
                "toolbar": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308
                },
                "dimensions": {
                    "lgRect": {
                        "x": 0,
                        "y": 0,
                        "height": 0,
                        "width": 0
                    },
                    "yAxisWidth": 15,
                    "yAxisWidthLeft": 15,
                    "yAxisWidthRight": 0,
                    "xAxisHeight": 10,
                    "isSparkline": false,
                    "dimHelpers": {},
                    "dimYAxis": {},
                    "dimXAxis": {},
                    "dimGrid": {},
                    "lgWidthForSideLegends": 0,
                    "xPadRight": 0,
                    "xPadLeft": 0,
                    "xAxisWidth": 0
                },
                "updateHelpers": {},
                "zoomPanSelection": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1.7976931348623157e+308,
                    "maxX": -1.7976931348623157e+308,
                    "dragged": false,
                    "graphics": {},
                    "eventList": [
                        "mousedown",
                        "mouseleave",
                        "mousemove",
                        "touchstart",
                        "touchmove",
                        "mouseup",
                        "touchend"
                    ],
                    "clientX": 0,
                    "clientY": 0,
                    "startX": 0,
                    "endX": 0,
                    "dragX": 0,
                    "startY": 0,
                    "endY": 0,
                    "dragY": 0,
                    "moveDirection": "none"
                },
                "pie": {
                    "chartType": "bar",
                    "initialAnim": false,
                    "dynamicAnim": false,
                    "animBeginArr": [
                        0
                    ],
                    "animDur": 0,
                    "defaultSize": 205,
                    "centerY": 102.5,
                    "centerX": 172.5,
                    "fullAngle": 360,
                    "initialAngle": 0,
                    "donutSize": 61.10000000000001,
                    "maxY": 0,
                    "sliceLabels": [],
                    "sliceSizes": [],
                    "prevSectorAngleArr": []
                },
                "rangeBar": {
                    "isHorizontal": false,
                    "strokeWidth": 2,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "xRatio": null,
                    "initialXRatio": null,
                    "invertedXRatio": null,
                    "invertedYRatio": 0.2898550724637681,
                    "baseLineInvertedY": 0.1,
                    "yaxisIndex": 0,
                    "seriesLen": 0,
                    "barHelpers": {}
                },
                "annotations": {
                    "graphics": {},
                    "helpers": {},
                    "xAxisAnnotations": {},
                    "yAxisAnnotations": {},
                    "pointsAnnotations": {},
                    "xDivision": 86.25
                }
            }
        }
    ]
}
  return (
   <>
     <ReactApexcharts options={options} series={options.series} type="bar" />
   </>
  )
}
