import React from 'react'
import ReactApexcharts from 'react-apexcharts';
import '../../../style/chart.css';
export default function TotalViewChart() {
    const options={
      

    "chart": {
        "animations": {
            "enabled": false,
            "easing": "swing"
        },
        "background": "#fff",
        "foreColor": "#373D3F",
        "fontFamily": "Roboto",
        "height": 250,
        "id": "BVBtR",
        "toolbar": {
            "show": false
        },
        "type": "bar",
        "width": 400
    },
    "plotOptions": {
        "bar": {
            "columnWidth": "92%",
            "dataLabels": {
                "position": "center"
            }
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
        "axisBorder": {
            "show": false
        },
        "axisTicks": {
            "show": false
        },
        "title": {
            "style": {
                "fontWeight": 700
            }
        }
    },
    "theme": {
        "palette": "palette4"
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
                    "series": [
                        {
                            "name": "Column"
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
                        "id": "BVBtR"
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
                    "globals": {
                        "chartID": "BVBtR",
                        "cuid": "tw5nablol",
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
                        "clientX": 981,
                        "clientY": 402,
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
                            },
                            "yaxis": [
                                null
                            ]
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
                        "radialSize": 85.70731707317074,
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
                                        "d": "M 1.0228407434316775 188L 1.0228407434316775 141Q 1.0228407434316775 141 1.0228407434316775 141L 22.548177842360275 141Q 22.548177842360275 141 22.548177842360275 141L 22.548177842360275 141L 22.548177842360275 188L 22.548177842360275 188z"
                                    },
                                    {
                                        "d": "M 26.593859329223633 188L 26.593859329223633 94Q 26.593859329223633 94 26.593859329223633 94L 48.119196428152236 94Q 48.119196428152236 94 48.119196428152236 94L 48.119196428152236 94L 48.119196428152236 188L 48.119196428152236 188z"
                                    },
                                    {
                                        "d": "M 52.16487791501559 188L 52.16487791501559 47Q 52.16487791501559 47 52.16487791501559 47L 73.69021501394418 47Q 73.69021501394418 47 73.69021501394418 47L 73.69021501394418 47L 73.69021501394418 188L 73.69021501394418 188z"
                                    },
                                    {
                                        "d": "M 77.73589650080754 188L 77.73589650080754 0Q 77.73589650080754 0 77.73589650080754 0L 99.26123359973614 0Q 99.26123359973614 0 99.26123359973614 0L 99.26123359973614 0L 99.26123359973614 188L 99.26123359973614 188z"
                                    },
                                    {
                                        "d": "M 103.3069150865995 188L 103.3069150865995 47Q 103.3069150865995 47 103.3069150865995 47L 124.8322521855281 47Q 124.8322521855281 47 124.8322521855281 47L 124.8322521855281 47L 124.8322521855281 188L 124.8322521855281 188z"
                                    },
                                    {
                                        "d": "M 128.87793367239146 188L 128.87793367239146 94Q 128.87793367239146 94 128.87793367239146 94L 150.40327077132005 94Q 150.40327077132005 94 150.40327077132005 94L 150.40327077132005 94L 150.40327077132005 188L 150.40327077132005 188z"
                                    },
                                    {
                                        "d": "M 154.44895225818343 188L 154.44895225818343 70.5Q 154.44895225818343 70.5 154.44895225818343 70.5L 175.974289357112 70.5Q 175.974289357112 70.5 175.974289357112 70.5L 175.974289357112 70.5L 175.974289357112 188L 175.974289357112 188z"
                                    },
                                    {
                                        "d": "M 180.0199708439754 188L 180.0199708439754 117.5Q 180.0199708439754 117.5 180.0199708439754 117.5L 201.54530794290397 117.5Q 201.54530794290397 117.5 201.54530794290397 117.5L 201.54530794290397 117.5L 201.54530794290397 188L 201.54530794290397 188z"
                                    },
                                    {
                                        "d": "M 205.59098942976735 188L 205.59098942976735 141Q 205.59098942976735 141 205.59098942976735 141L 227.11632652869594 141Q 227.11632652869594 141 227.11632652869594 141L 227.11632652869594 141L 227.11632652869594 188L 227.11632652869594 188z"
                                    },
                                    {
                                        "d": "M 231.1620080155593 188L 231.1620080155593 103.4Q 231.1620080155593 103.4 231.1620080155593 103.4L 252.6873451144879 103.4Q 252.6873451144879 103.4 252.6873451144879 103.4L 252.6873451144879 103.4L 252.6873451144879 188L 252.6873451144879 188z"
                                    },
                                    {
                                        "d": "M 256.73302660135124 188L 256.73302660135124 84.6Q 256.73302660135124 84.6 256.73302660135124 84.6L 278.25836370027986 84.6Q 278.25836370027986 84.6 278.25836370027986 84.6L 278.25836370027986 84.6L 278.25836370027986 188L 278.25836370027986 188z"
                                    },
                                    {
                                        "d": "M 282.3040451871432 188L 282.3040451871432 56.400000000000006Q 282.3040451871432 56.400000000000006 282.3040451871432 56.400000000000006L 303.8293822860718 56.400000000000006Q 303.8293822860718 56.400000000000006 303.8293822860718 56.400000000000006L 303.8293822860718 56.400000000000006L 303.8293822860718 188L 303.8293822860718 188z"
                                    },
                                    {
                                        "d": "M 307.8750637729351 188L 307.8750637729351 103.4Q 307.8750637729351 103.4 307.8750637729351 103.4L 329.4004008718637 103.4Q 329.4004008718637 103.4 329.4004008718637 103.4L 329.4004008718637 103.4L 329.4004008718637 188L 329.4004008718637 188z"
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
                        "gridWidth": 332.4232416152954,
                        "gridHeight": 188,
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
                            "lastHoverTime": 1683479769853,
                            "xyRatios": {
                                "yRatio": [
                                    0.2127659574468085
                                ],
                                "invertedYRatio": 0.1203285299957785,
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
                            "xaxisOffY": 189,
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
                                25.571018585791954,
                                51.14203717158391,
                                76.71305575737586,
                                102.28407434316782,
                                127.85509292895978,
                                153.42611151475174,
                                178.9971301005437,
                                204.56814868633566,
                                230.13916727212762,
                                255.71018585791958,
                                281.28120444371154,
                                306.8522230295035,
                                332.4232416152954
                            ],
                            "dataPointsDividedHeight": 14.461538461538462,
                            "dataPointsDividedWidth": 25.571018585791954,
                            "tooltipTitle": {},
                            "legendLabels": {},
                            "ttItems": [
                                {}
                            ],
                            "seriesBound": {
                                "x": 838.1767578125,
                                "y": 282.6000061035156,
                                "width": 332.4232482910156,
                                "height": 187,
                                "top": 282.6000061035156,
                                "right": 1170.6000061035156,
                                "bottom": 469.6000061035156,
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
                                12.785509292895977,
                                63.92754646447989,
                                89.49856505027184,
                                115.0695836360638,
                                140.64060222185577,
                                166.21162080764773,
                                191.7826393934397,
                                217.35365797923166,
                                242.92467656502362,
                                268.49569515081555,
                                294.0667137366075,
                                319.6377323223994,
                                345.20875090819135
                            ]
                        ],
                        "seriesYvalues": [
                            [
                                141,
                                94,
                                47,
                                0,
                                47,
                                94,
                                70.5,
                                117.5,
                                141,
                                103.4,
                                84.6,
                                56.400000000000006,
                                103.4
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
                            0.2127659574468085
                        ],
                        "logYRange": [
                            null
                        ],
                        "disableZoomIn": false,
                        "disableZoomOut": false
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
                        "y": 505.6000061035156,
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
                    "defaultSize": 188,
                    "centerY": 94,
                    "centerX": 166.2116208076477,
                    "fullAngle": 360,
                    "initialAngle": 0,
                    "donutSize": 55.709756097560984,
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
                    "invertedYRatio": 0.1203285299957785,
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
                    "invertedYRatio": 0.1203285299957785,
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
                    "xDivision": 25.571018585791954
                },
                "timeScale": {
                    "timeScaleArray": [
                        {
                            "position": 0.650590314796432,
                            "value": 12,
                            "unit": "month",
                            "year": 2001,
                            "month": 0,
                            "day": 1
                        },
                        {
                            "position": 3.7734238258193056,
                            "value": 2,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 2
                        },
                        {
                            "position": 6.896257336842179,
                            "value": 3,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 3
                        },
                        {
                            "position": 10.019090847865053,
                            "value": 4,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 4
                        },
                        {
                            "position": 13.141924358887927,
                            "value": 5,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 5
                        },
                        {
                            "position": 16.264757869910802,
                            "value": 6,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 6
                        },
                        {
                            "position": 19.387591380933678,
                            "value": 7,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 7
                        },
                        {
                            "position": 22.510424891956553,
                            "value": 8,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 8
                        },
                        {
                            "position": 25.63325840297943,
                            "value": 9,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 9
                        },
                        {
                            "position": 28.756091914002305,
                            "value": 10,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 10
                        },
                        {
                            "position": 31.87892542502518,
                            "value": 11,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 11
                        },
                        {
                            "position": 35.001758936048056,
                            "value": 12,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 12
                        },
                        {
                            "position": 38.12459244707093,
                            "value": 13,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 13
                        },
                        {
                            "position": 41.24742595809381,
                            "value": 14,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 14
                        },
                        {
                            "position": 44.37025946911668,
                            "value": 15,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 15
                        },
                        {
                            "position": 47.49309298013956,
                            "value": 16,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 16
                        },
                        {
                            "position": 50.61592649116243,
                            "value": 17,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 17
                        },
                        {
                            "position": 53.73876000218531,
                            "value": 18,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 18
                        },
                        {
                            "position": 56.861593513208184,
                            "value": 19,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 19
                        },
                        {
                            "position": 59.98442702423106,
                            "value": 20,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 20
                        },
                        {
                            "position": 63.107260535253936,
                            "value": 21,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 21
                        },
                        {
                            "position": 66.2300940462768,
                            "value": 22,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 22
                        },
                        {
                            "position": 69.35292755729968,
                            "value": 23,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 23
                        },
                        {
                            "position": 72.47576106832256,
                            "value": 24,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 24
                        },
                        {
                            "position": 75.59859457934543,
                            "value": 25,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 25
                        },
                        {
                            "position": 78.7214280903683,
                            "value": 26,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 26
                        },
                        {
                            "position": 81.84426160139118,
                            "value": 27,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 27
                        },
                        {
                            "position": 84.96709511241406,
                            "value": 28,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 28
                        },
                        {
                            "position": 88.08992862343693,
                            "value": 29,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 29
                        },
                        {
                            "position": 91.21276213445981,
                            "value": 30,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 30
                        },
                        {
                            "position": 94.33559564548268,
                            "value": 31,
                            "unit": "day",
                            "year": 2001,
                            "month": 0,
                            "day": 31
                        },
                        {
                            "position": 97.45842915650556,
                            "value": 1,
                            "unit": "month",
                            "year": 2001,
                            "month": 1,
                            "day": 1
                        },
                        {
                            "position": 100.58126266752843,
                            "value": 2,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 2
                        },
                        {
                            "position": 103.70409617855131,
                            "value": 3,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 3
                        },
                        {
                            "position": 106.82692968957419,
                            "value": 4,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 4
                        },
                        {
                            "position": 109.94976320059706,
                            "value": 5,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 5
                        },
                        {
                            "position": 113.07259671161994,
                            "value": 6,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 6
                        },
                        {
                            "position": 116.19543022264281,
                            "value": 7,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 7
                        },
                        {
                            "position": 119.31826373366569,
                            "value": 8,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 8
                        },
                        {
                            "position": 122.44109724468856,
                            "value": 9,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 9
                        },
                        {
                            "position": 125.56393075571144,
                            "value": 10,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 10
                        },
                        {
                            "position": 128.68676426673431,
                            "value": 11,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 11
                        },
                        {
                            "position": 131.80959777775718,
                            "value": 12,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 12
                        },
                        {
                            "position": 134.93243128878004,
                            "value": 13,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 13
                        },
                        {
                            "position": 138.0552647998029,
                            "value": 14,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 14
                        },
                        {
                            "position": 141.17809831082576,
                            "value": 15,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 15
                        },
                        {
                            "position": 144.30093182184862,
                            "value": 16,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 16
                        },
                        {
                            "position": 147.42376533287148,
                            "value": 17,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 17
                        },
                        {
                            "position": 150.54659884389434,
                            "value": 18,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 18
                        },
                        {
                            "position": 153.6694323549172,
                            "value": 19,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 19
                        },
                        {
                            "position": 156.79226586594007,
                            "value": 20,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 20
                        },
                        {
                            "position": 159.91509937696293,
                            "value": 21,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 21
                        },
                        {
                            "position": 163.0379328879858,
                            "value": 22,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 22
                        },
                        {
                            "position": 166.16076639900865,
                            "value": 23,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 23
                        },
                        {
                            "position": 169.2835999100315,
                            "value": 24,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 24
                        },
                        {
                            "position": 172.40643342105437,
                            "value": 25,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 25
                        },
                        {
                            "position": 175.52926693207723,
                            "value": 26,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 26
                        },
                        {
                            "position": 178.6521004431001,
                            "value": 27,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 27
                        },
                        {
                            "position": 181.77493395412296,
                            "value": 28,
                            "unit": "day",
                            "year": 2001,
                            "month": 1,
                            "day": 28
                        },
                        {
                            "position": 184.89776746514582,
                            "value": 2,
                            "unit": "month",
                            "year": 2001,
                            "month": 2,
                            "day": 2
                        },
                        {
                            "position": 188.02060097616868,
                            "value": 2,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 2
                        },
                        {
                            "position": 191.14343448719154,
                            "value": 3,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 3
                        },
                        {
                            "position": 194.2662679982144,
                            "value": 4,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 4
                        },
                        {
                            "position": 197.38910150923726,
                            "value": 5,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 5
                        },
                        {
                            "position": 200.51193502026013,
                            "value": 6,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 6
                        },
                        {
                            "position": 203.634768531283,
                            "value": 7,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 7
                        },
                        {
                            "position": 206.75760204230585,
                            "value": 8,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 8
                        },
                        {
                            "position": 209.8804355533287,
                            "value": 9,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 9
                        },
                        {
                            "position": 213.00326906435157,
                            "value": 10,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 10
                        },
                        {
                            "position": 216.12610257537443,
                            "value": 11,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 11
                        },
                        {
                            "position": 219.2489360863973,
                            "value": 12,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 12
                        },
                        {
                            "position": 222.37176959742015,
                            "value": 13,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 13
                        },
                        {
                            "position": 225.49460310844302,
                            "value": 14,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 14
                        },
                        {
                            "position": 228.61743661946588,
                            "value": 15,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 15
                        },
                        {
                            "position": 231.74027013048874,
                            "value": 16,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 16
                        },
                        {
                            "position": 234.8631036415116,
                            "value": 17,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 17
                        },
                        {
                            "position": 237.98593715253446,
                            "value": 18,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 18
                        },
                        {
                            "position": 241.10877066355732,
                            "value": 19,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 19
                        },
                        {
                            "position": 244.23160417458018,
                            "value": 20,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 20
                        },
                        {
                            "position": 247.35443768560305,
                            "value": 21,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 21
                        },
                        {
                            "position": 250.4772711966259,
                            "value": 22,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 22
                        },
                        {
                            "position": 253.60010470764877,
                            "value": 23,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 23
                        },
                        {
                            "position": 256.72293821867163,
                            "value": 24,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 24
                        },
                        {
                            "position": 259.8457717296945,
                            "value": 25,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 25
                        },
                        {
                            "position": 262.96860524071735,
                            "value": 26,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 26
                        },
                        {
                            "position": 266.0914387517402,
                            "value": 27,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 27
                        },
                        {
                            "position": 269.2142722627631,
                            "value": 28,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 28
                        },
                        {
                            "position": 272.33710577378594,
                            "value": 29,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 29
                        },
                        {
                            "position": 275.4599392848088,
                            "value": 30,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 30
                        },
                        {
                            "position": 278.58277279583166,
                            "value": 31,
                            "unit": "day",
                            "year": 2001,
                            "month": 2,
                            "day": 31
                        },
                        {
                            "position": 281.7056063068545,
                            "value": 3,
                            "unit": "month",
                            "year": 2001,
                            "month": 3,
                            "day": 3
                        }
                    ],
                    "utc": true,
                    "tickInterval": "months_days"
                }
            }
        }
    ]
}
    
  return (
    <ReactApexcharts options={options} series={options.series} type="bar" />
   
  )
}
