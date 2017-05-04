var casing = {

    motorway  : '#505050',
    primary   : '#505050',
    secondary : '#505050',
    minor     : '#505050'
};

var fill = {

    motorway  : '#06B1CA',
    primary   : '#88C298',
    secondary : '#FFFFFF',
    minor     : '#D3D3D3',
    woodland  : '#D1F0CE',
    coast     : '#00A9CA',
    foreshore : '#FAFAEB'

};



var layers_config=[
    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "#f8f4f0"
      }
    },
    {
      "id": "landuse-residential",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "vector_layer_",
      "source-layer": "urban_region",
      "paint": {
        "fill-color": {
          "base": 1,
          "stops": [
            [
              12,
              "hsla(30, 19%, 90%, 0.4)"
            ],
            [
              16,
              "hsla(30, 19%, 90%, 0.2)"
            ]
          ]
        }
      }
    },
    {
      /** STRATEGI FORESHORE */
      "id": "foreshore_region",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "vector_layer_",
      "source-layer": "foreshore_region",
      "paint": {
        "fill-color": fill.foreshore
      }
    },
    {
      "id": "landuse-industrial",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "vector_layer_",
      "source-layer": "landuse",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ],
        [
          "==",
          "class",
          "industrial"
        ]
      ],
      "paint": {
        "fill-color": "hsla(49, 100%, 88%, 0.34)"
      }
    },
    {
      "id": "landuse-woodland",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "vector_layer_",
      "source-layer": "woodland_region",
      "paint": {
        "fill-color": fill.woodland,
        "fill-opacity": {
          "base": 1.8,
          "stops": [
            [
              9,
              0.5
            ],
            [
              12,
              0.2
            ]
          ]
        }
      }
    },
    {
      "id": "park-outline",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "vector_layer_",
      "source-layer": "park",
      "filter": [
        "==",
        "$type",
        "Polygon"
      ],
      "layout": {},
      "paint": {
        "line-color": {
          "base": 1,
          "stops": [
            [
              6,
              "hsla(96, 40%, 49%, 0.36)"
            ],
            [
              8,
              "hsla(96, 40%, 49%, 0.66)"
            ]
          ]
        },
        "line-dasharray": [
          3,
          3
        ]
      }
    },
    {
      "id": "landuse-cemetery",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "vector_layer_",
      "source-layer": "landuse",
      "filter": [
        "==",
        "class",
        "cemetery"
      ],
      "paint": {
        "fill-color": "#e0e4dd"
      }
    },
    {
      "id": "landuse-hospital",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "vector_layer_",
      "source-layer": "landuse",
      "filter": [
        "==",
        "class",
        "hospital"
      ],
      "paint": {
        "fill-color": "#fde"
      }
    },
    {
      "id": "landuse-school",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "vector_layer_",
      "source-layer": "landuse",
      "filter": [
        "==",
        "class",
        "school"
      ],
      "paint": {
        "fill-color": "#f0e8f8"
      }
    },
    {
      "id": "landuse-railway",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "vector_layer_",
      "source-layer": "landuse",
      "filter": [
        "==",
        "class",
        "railway"
      ],
      "paint": {
        "fill-color": "hsla(30, 19%, 90%, 0.4)"
      }
    },
    {
      "id": "landcover-wood",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "vector_layer_",
      "source-layer": "landcover",
      "filter": [
        "==",
        "class",
        "wood"
      ],
      "paint": {
        "fill-color": "#6a4",
        "fill-opacity": 0.1,
        "fill-outline-color": "hsla(0, 0%, 0%, 0.03)",
        "fill-antialias": {
          "base": 1,
          "stops": [
            [
              0,
              false
            ],
            [
              9,
              true
            ]
          ]
        }
      }
    },
    {
      "id": "landcover-grass",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "vector_layer_",
      "source-layer": "landcover",
      "filter": [
        "==",
        "class",
        "grass"
      ],
      "paint": {
        "fill-color": "#d8e8c8",
        "fill-opacity": 1
      }
    },
    {
      "id": "landcover-grass-park",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "vector_layer_",
      "source-layer": "park",
      "filter": [
        "==",
        "class",
        "public_park"
      ],
      "paint": {
        "fill-color": "#d8e8c8",
        "fill-opacity": 0.8
      }
    },
    {
      "id": "waterway-other",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849382550.77"
      },
      "source": "vector_layer_",
      "source-layer": "waterway",
      "filter": [
        "!in",
        "class",
        "canal",
        "river",
        "stream"
      ],
      "layout": {
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#a0c8f0",
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              13,
              0.5
            ],
            [
              20,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "waterway-stream-canal",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849382550.77"
      },
      "source": "vector_layer_",
      "source-layer": "waterway",
      "filter": [
        "in",
        "class",
        "canal",
        "stream"
      ],
      "layout": {
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#a0c8f0",
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              13,
              0.5
            ],
            [
              20,
              6
            ]
          ]
        }
      }
    },
    {
      "id": "waterway-river",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849382550.77"
      },
      "source": "vector_layer_",
      "source-layer": "river_line",
      "layout": {
        "line-cap": "round"
      },
      "minzoom" : 10,
      "paint": {
        "line-color": "#a0c8f0",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              10,
              0.8
            ],
            [
              20,
              6
            ]
          ]
        }
      }
    },
    {
      "id": "water-offset",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849382550.77"
      },
      "source": "vector_layer_",
      "source-layer": "water",
      "maxzoom": 8,
      "filter": [
        "==",
        "$type",
        "Polygon"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-opacity": 1,
        "fill-color": "#a0c8f0",
        "fill-translate": {
          "base": 1,
          "stops": [
            [
              6,
              [
                2,
                0
              ]
            ],
            [
              8,
              [
                0,
                0
              ]
            ]
          ]
        }
      }
    },
    {
      "id": "water",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849382550.77"
      },
      "source": "vector_layer_",
      "source-layer": "lakes_region",
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "hsl(210, 67%, 85%)"
      }
    },
    {
      "id": "water-pattern",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849382550.77"
      },
      "source": "vector_layer_",
      "source-layer": "lakes_region",
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-translate": [
          0,
          2.5
        ],
        "fill-pattern": "wave"
      }
    },
    {
      "id": "landcover-ice-shelf",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849382550.77"
      },
      "source": "vector_layer_",
      "source-layer": "landcover",
      "filter": [
        "==",
        "subclass",
        "ice_shelf"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#fff",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              0,
              0.9
            ],
            [
              10,
              0.3
            ]
          ]
        }
      }
    },
    {
      "id": "building",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849364238.8171"
      },
      "source": "vector_layer_",
      "source-layer": "openmap_building",
      "paint": {
        "fill-color": {
          "base": 1,
          "stops": [
            [
              15.5,
              "#f2eae2"
            ],
            [
              16,
              "#dfdbd7"
            ]
          ]
        },
        "fill-antialias": true
      }
    },
    {
      "id": "building-top",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849364238.8171"
      },
      "source": "vector_layer_",
      "source-layer": "openmap_building",
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-translate": {
          "base": 1,
          "stops": [
            [
              14,
              [
                0,
                0
              ]
            ],
            [
              16,
              [
                -2,
                -2
              ]
            ]
          ]
        },
        "fill-outline-color": "#dfdbd7",
        "fill-color": "#f2eae2",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              13,
              0
            ],
            [
              16,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-service-track-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "service",
          "track"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-dasharray": [
          0.5,
          0.25
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              1
            ],
            [
              16,
              4
            ],
            [
              20,
              11
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-minor-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "==",
          "class",
          "minor"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-opacity": {
          "stops": [
            [
              12,
              0
            ],
            [
              12.5,
              1
            ]
          ]
        },
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              0.5
            ],
            [
              13,
              1
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-secondary-tertiary-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              1.5
            ],
            [
              20,
              17
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-trunk-primary-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "primary",
          "trunk"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0.4
            ],
            [
              6,
              0.6
            ],
            [
              7,
              1.5
            ],
            [
              20,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-motorway-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway"
        ]
      ],
      "layout": {
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-dasharray": [
          0.5,
          0.25
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0.4
            ],
            [
              6,
              0.6
            ],
            [
              7,
              1.5
            ],
            [
              20,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-path",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "brunnel",
            "tunnel"
          ],
          [
            "==",
            "class",
            "path"
          ]
        ]
      ],
      "paint": {
        "line-color": "#cba",
        "line-dasharray": [
          1.5,
          0.75
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              1.2
            ],
            [
              20,
              4
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-service-track",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "service",
          "track"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15.5,
              0
            ],
            [
              16,
              2
            ],
            [
              20,
              7.5
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-minor",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "==",
          "class",
          "minor_road"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              13.5,
              0
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-secondary-tertiary",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff4c6",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              10
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-trunk-primary",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "primary",
          "trunk"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff4c6",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-motorway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway"
        ]
      ],
      "layout": {
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#ffdaa6",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-railway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "vector_layer_",
      "source-layer": "openmap_railwaytunnel",
      "paint": {
        "line-color": "#bbb",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14,
              0.4
            ],
            [
              15,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        },
        "line-dasharray": [
          2,
          2
        ]
      }
    },
    {
      "id": "aeroway-taxiway-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "aeroway",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "in",
          "class",
          "taxiway"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(153, 153, 153, 1)",
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              11,
              2
            ],
            [
              17,
              12
            ]
          ]
        },
        "line-opacity": 1
      }
    },
    {
      "id": "aeroway-runway-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "aeroway",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "in",
          "class",
          "runway"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(153, 153, 153, 1)",
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              11,
              5
            ],
            [
              17,
              55
            ]
          ]
        },
        "line-opacity": 1
      }
    },
    {
      "id": "aeroway-area",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "aeroway",
      "minzoom": 4,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ],
        [
          "in",
          "class",
          "runway",
          "taxiway"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              13,
              0
            ],
            [
              14,
              1
            ]
          ]
        },
        "fill-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "aeroway-taxiway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "aeroway",
      "minzoom": 4,
      "filter": [
        "all",
        [
          "in",
          "class",
          "taxiway"
        ],
        [
          "==",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 255, 255, 1)",
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              11,
              1
            ],
            [
              17,
              10
            ]
          ]
        },
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              11,
              0
            ],
            [
              12,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "aeroway-runway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "aeroway",
      "minzoom": 4,
      "filter": [
        "all",
        [
          "in",
          "class",
          "runway"
        ],
        [
          "==",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 255, 255, 1)",
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              11,
              4
            ],
            [
              17,
              50
            ]
          ]
        },
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              11,
              0
            ],
            [
              12,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "highway-area",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "==",
        "$type",
        "Polygon"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "hsla(0, 0%, 89%, 0.56)",
        "fill-outline-color": "#cfcdca",
        "fill-opacity": 0.9,
        "fill-antialias": false
      }
    },
    {
      "id": "highway-motorway-link-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "openmap_motorwayjunction",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway_link"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "highway-link-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "openmap_motorwayjunction",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "primary_link",
          "secondary_link",
          "tertiary_link",
          "trunk_link"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "highway-minor-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "minor_road",
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": casing.minor,
        "line-opacity": {
          "stops": [
            [
              12,
              0
            ],
            [
              12.5,
              1
            ]
          ]
        },
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              0.5
            ],
            [
              13,
              1
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "highway-secondary-tertiary-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "a_b_road",
      
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "minzoom" : 9,
      "paint": {
        "line-color": casing.secondary,
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              1.5
            ],
            [
              20,
              17
            ]
          ]
        }
      }
    },
    { /* STRATEGI ROAD CASING */
      "id": "highway-trunk-primary-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "primary",
      "minzoom": 5,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": casing.primary,
        "line-opacity": {
          "stops": [
            [
              5,
              0
            ],
            [
              6,
              1
            ]
          ]
        },
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0
            ],
            [
              6,
              0.6
            ],
            [
              7,
              1.5
            ],
            [
              20,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "highway-motorway-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "motorway",
      "minzoom": 4,
      
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": casing.motorway,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              4,
              0
            ],
            [
              5,
              0.4
            ],
            [
              6,
              0.6
            ],
            [
              7,
              1.5
            ],
            [
              20,
              22
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              4,
              0
            ],
            [
              5,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "openroads-highway-motorway-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "openmap_road",
      "minzoom": 13,
      "filter": [
        "any",
        [
          "==",
          "FEATCODE",
          15719
        ],
        [
          "==",
          "FEATCODE",
          15710
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": casing.motorway,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              4,
              0
            ],
            [
              5,
              0.4
            ],
            [
              6,
              0.6
            ],
            [
              7,
              1.5
            ],
            [
              20,
              22
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              4,
              0
            ],
            [
              5,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "highway-path",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "m": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!in",
            "brunnel",
            "bridge",
            "tunnel"
          ],
          [
            "==",
            "class",
            "path"
          ]
        ]
      ],
      "paint": {
        "line-color": "#cba",
        "line-dasharray": [
          1.5,
          0.75
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              1.2
            ],
            [
              20,
              4
            ]
          ]
        }
      }
    },
    {
      "id": "highway-motorway-link",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "openmap_motorwayjunction",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway_link"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fc8",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "highway-link",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "primary_link",
          "secondary_link",
          "tertiary_link",
          "trunk_link"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "highway-minor",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "minor_road",
      
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": fill.minor,
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              13.5,
              0
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "highway-secondary-tertiary",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "a_b_road",
      "minzoom" : 9,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": fill.secondary,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              8,
              0.5
            ],
            [
              20,
              13
            ]
          ]
        }
      }
    },
    {
      "id": "highway-trunk-primary",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "primary",
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": fill.primary,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "highway-motorway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "motorway",
      "minzoom": 5,
      
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": fill.motorway,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "openmap-highway-motorway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "openmap_road",
      "filter": [
        "any",
        [
          "==",
          "FEATCODE",
          15719
        ],
        [
          "==",
          "FEATCODE",
          15710
        ]
      ],
      "minzoom": 5,
      
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": fill.motorway,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "railway-service",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "class",
            "rail"
          ],
          [
            "has",
            "service"
          ]
        ]
      ],
      "paint": {
        "line-color": "hsla(0, 0%, 73%, 0.77)",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14,
              0.4
            ],
            [
              20,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "railway-service-hatching",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "class",
            "rail"
          ],
          [
            "has",
            "service"
          ]
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsla(0, 0%, 73%, 0.68)",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14.5,
              0
            ],
            [
              15,
              2
            ],
            [
              20,
              6
            ]
          ]
        }
      }
    },
    {
      "id": "railway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!has",
            "service"
          ],
          [
            "!in",
            "brunnel",
            "bridge",
            "tunnel"
          ],
          [
            "==",
            "class",
            "rail"
          ]
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14,
              0.4
            ],
            [
              15,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "railway-hatching",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!has",
            "service"
          ],
          [
            "!in",
            "brunnel",
            "bridge",
            "tunnel"
          ],
          [
            "==",
            "class",
            "rail"
          ]
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14.5,
              0
            ],
            [
              15,
              3
            ],
            [
              20,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-motorway-link-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "==",
          "class",
          "motorway_link"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-link-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "primary_link",
          "secondary_link",
          "tertiary_link",
          "trunk_link"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-secondary-tertiary-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              1.5
            ],
            [
              20,
              28
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-trunk-primary-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "primary",
          "trunk"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(28, 76%, 67%)",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0.4
            ],
            [
              6,
              0.6
            ],
            [
              7,
              1.5
            ],
            [
              20,
              26
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-motorway-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "==",
          "class",
          "motorway"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0.4
            ],
            [
              6,
              0.6
            ],
            [
              7,
              1.5
            ],
            [
              20,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-path-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "brunnel",
            "bridge"
          ],
          [
            "==",
            "class",
            "path"
          ]
        ]
      ],
      "paint": {
        "line-color": "#f8f4f0",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              1.2
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-path",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "brunnel",
            "bridge"
          ],
          [
            "==",
            "class",
            "path"
          ]
        ]
      ],
      "paint": {
        "line-color": "#cba",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              1.2
            ],
            [
              20,
              4
            ]
          ]
        },
        "line-dasharray": [
          1.5,
          0.75
        ]
      }
    },
    {
      "id": "bridge-motorway-link",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "==",
          "class",
          "motorway_link"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fc8",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-link",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "primary_link",
          "secondary_link",
          "tertiary_link",
          "trunk_link"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-secondary-tertiary",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              20
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-trunk-primary",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "primary",
          "trunk"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-motorway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "==",
          "class",
          "motorway"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fc8",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-railway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "==",
          "class",
          "rail"
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14,
              0.4
            ],
            [
              15,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-railway-hatching",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "vector_layer_",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "==",
          "class",
          "rail"
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14.5,
              0
            ],
            [
              15,
              3
            ],
            [
              20,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "boundary-land-level-4",
      "type": "line",
      "source": "vector_layer_",
      "source-layer": "boundary",
      "filter": [
        "all",
        [
          "in",
          "admin_level",
          4,
          6,
          8
        ],
        [
          "!=",
          "maritime",
          1
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#9e9cab",
        "line-dasharray": [
          3,
          1,
          1,
          1
        ],
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              4,
              0.4
            ],
            [
              5,
              1
            ],
            [
              12,
              3
            ]
          ]
        }
      }
    },
    {
      "id": "coast",
      "type": "line",
      "source": "vector_layer_",
      "source-layer": "coast",
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": fill.coast,
        "line-width": {
          "base": 0.5,
          "stops": [
            [
              0,
              0.6
            ]
          ]
        }
      }
    },
    {
      "id": "boundary-water",
      "type": "line",
      "source": "vector_layer_",
      "source-layer": "boundary",
      "filter": [
        "all",
        [
          "in",
          "admin_level",
          2,
          4
        ],
        [
          "==",
          "maritime",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "rgba(154, 189, 214, 1)",
        "line-width": {
          "base": 1,
          "stops": [
            [
              0,
              0.6
            ],
            [
              4,
              1.4
            ],
            [
              5,
              2
            ],
            [
              12,
              8
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              6,
              0.6
            ],
            [
              10,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "waterway-name",
      "type": "symbol",
      "source": "vector_layer_",
      "source-layer": "waterway",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "has",
          "name"
        ]
      ],
      "layout": {
        "text-font": [
          "Open Sans Italic",
          "Klokantech Noto Sans Italic",
          "Klokantech Noto Sans CJK Regular"
        ],
        "text-size": 14,
        "text-field": "{name}",
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "symbol-placement": "line",
        "text-letter-spacing": 0.2,
        "symbol-spacing": 350
      },
      "paint": {
        "text-color": "#74aee9",
        "text-halo-width": 1.5,
        "text-halo-color": "rgba(255,255,255,0.7)"
      }
    },
    {
      "id": "water-name-lakeline",
      "type": "symbol",
      "source": "vector_layer_",
      "source-layer": "water_name",
      "filter": [
        "==",
        "$type",
        "LineString"
      ],
      "layout": {
        "text-font": [
          "Open Sans Italic",
          "Klokantech Noto Sans Italic",
          "Klokantech Noto Sans CJK Regular"
        ],
        "text-size": 14,
        "text-field": "{name}",
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "symbol-placement": "line",
        "symbol-spacing": 350,
        "text-letter-spacing": 0.2
      },
      "paint": {
        "text-color": "#74aee9",
        "text-halo-width": 1.5,
        "text-halo-color": "rgba(255,255,255,0.7)"
      }
    },
    {
      "id": "water-name-ocean",
      "type": "symbol",
      "source": "vector_layer_",
      "source-layer": "water_name",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "ocean"
        ]
      ],
      "layout": {
        "text-font": [
          "Open Sans Italic",
          "Klokantech Noto Sans Italic",
          "Klokantech Noto Sans CJK Regular"
        ],
        "text-size": 14,
        "text-field": "{name}",
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "symbol-placement": "point",
        "symbol-spacing": 350,
        "text-letter-spacing": 0.2
      },
      "paint": {
        "text-color": "#74aee9",
        "text-halo-width": 1.5,
        "text-halo-color": "rgba(255,255,255,0.7)"
      }
    },
    {
      "id": "water-name-other",
      "type": "symbol",
      "source": "vector_layer_",
      "source-layer": "water_name",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "!in",
          "class",
          "ocean"
        ]
      ],
      "layout": {
        "text-font": [
          "Open Sans Italic",
          "Klokantech Noto Sans Italic",
          "Klokantech Noto Sans CJK Regular"
        ],
        "text-size": {
          "stops": [
            [
              0,
              10
            ],
            [
              6,
              14
            ]
          ]
        },
        "text-field": "{name}",
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "symbol-placement": "point",
        "symbol-spacing": 350,
        "text-letter-spacing": 0.2,
        "visibility": "visible"
      },
      "paint": {
        "text-color": "#74aee9",
        "text-halo-width": 1.5,
        "text-halo-color": "rgba(255,255,255,0.7)"
      }
    },
    {
      "id": "poi-level-3",
      "type": "symbol",
      "source": "vector_layer_",
      "source-layer": "poi",
      "minzoom": 16,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          ">=",
          "rank",
          25
        ]
      ],
      "layout": {
        "text-padding": 2,
        "text-font": [
          "Open Sans Semibold",
          "Klokantech Noto Sans Regular",
          "Klokantech Noto Sans CJK Regular"
        ],
        "text-anchor": "top",
        "icon-image": "{class}_11",
        "text-field": "{name}",
        "text-offset": [
          0,
          0.6
        ],
        "text-size": 12,
        "text-max-width": 9
      },
      "paint": {
        "text-halo-blur": 0.5,
        "text-color": "#666",
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      "id": "poi-level-2",
      "type": "symbol",
      "source": "vector_layer_",
      "source-layer": "poi",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "all",
          [
            "<=",
            "rank",
            24
          ],
          [
            ">=",
            "rank",
            15
          ]
        ]
      ],
      "layout": {
        "text-padding": 2,
        "text-font": [
          "Open Sans Semibold",
          "Klokantech Noto Sans Regular",
          "Klokantech Noto Sans CJK Regular"
        ],
        "text-anchor": "top",
        "icon-image": "{class}_11",
        "text-field": "{name}",
        "text-offset": [
          0,
          0.6
        ],
        "text-size": 12,
        "text-max-width": 9
      },
      "paint": {
        "text-halo-blur": 0.5,
        "text-color": "#666",
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      "id": "poi-level-1",
      "type": "symbol",
      "source": "vector_layer_",
      "source-layer": "poi",
      "minzoom": 14,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "all",
          [
            "<=",
            "rank",
            14
          ],
          [
            "has",
            "name"
          ]
        ]
      ],
      "layout": {
        "text-padding": 2,
        "text-font": [
          "Open Sans Semibold",
          "Klokantech Noto Sans Regular",
          "Klokantech Noto Sans CJK Regular"
        ],
        "text-anchor": "top",
        "icon-image": "{class}_11",
        "text-field": "{name}",
        "text-offset": [
          0,
          0.6
        ],
        "text-size": 12,
        "text-max-width": 9
      },
      "paint": {
        "text-halo-blur": 0.5,
        "text-color": "#666",
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      "id": "highway-name-path",
      "type": "symbol",
      "source": "vector_layer_",
      "source-layer": "transportation_name",
      "minzoom": 15.5,
      "filter": [
        "==",
        "class",
        "path"
      ],
      "layout": {
        "text-size": {
          "base": 1,
          "stops": [
            [
              13,
              12
            ],
            [
              14,
              13
            ]
          ]
        },
        "text-font": [
          "Open Sans Regular",
          "Klokantech Noto Sans Regular",
          "Klokantech Noto Sans CJK Regular"
        ],
        "text-field": "{name}",
        "symbol-placement": "line",
        "text-rotation-alignment": "map"
      },
      "paint": {
        "text-halo-color": "#f8f4f0",
        "text-color": "hsl(30, 23%, 62%)",
        "text-halo-width": 0.5
      }
    },
    {
      "id": "highway-name-minor",
      "type": "symbol",
      "source": "vector_layer_",
      "source-layer": "transportation_name",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "in",
          "class",
          "minor",
          "service",
          "track"
        ]
      ],
      "layout": {
        "text-size": {
          "base": 1,
          "stops": [
            [
              13,
              12
            ],
            [
              14,
              13
            ]
          ]
        },
        "text-font": [
          "Open Sans Regular",
          "Klokantech Noto Sans Regular",
          "Klokantech Noto Sans CJK Regular"
        ],
        "text-field": "{name}",
        "symbol-placement": "line",
        "text-rotation-alignment": "map"
      },
      "paint": {
        "text-halo-blur": 0.5,
        "text-color": "#765",
        "text-halo-width": 1
      }
    },
    {
      "id": "highway-name-major",
      "type": "symbol",
      "source": "vector_layer_",
      "source-layer": "transportation_name",
      "minzoom": 12.2,
      "filter": [
        "in",
        "class",
        "primary",
        "secondary",
        "tertiary",
        "trunk"
      ],
      "layout": {
        "text-size": {
          "base": 1,
          "stops": [
            [
              13,
              12
            ],
            [
              14,
              13
            ]
          ]
        },
        "text-font": [
          "Open Sans Regular",
          "Klokantech Noto Sans Regular",
          "Klokantech Noto Sans CJK Regular"
        ],
        "text-field": "{name}",
        "symbol-placement": "line",
        "text-rotation-alignment": "map"
      },
      "paint": {
        "text-halo-blur": 0.5,
        "text-color": "#765",
        "text-halo-width": 1
      }
    },
    {
      "id": "highway-shield",
      "type": "symbol",
      "source": "vector_layer_",
      "source-layer": "transportation_name",
      "minzoom": 8,
      "filter": [
        "all",
        [
          "<=",
          "ref_length",
          6
        ],
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "!in",
          "network",
          "us-interstate",
          "us-highway",
          "us-state"
        ]
      ],
      "layout": {
        "text-size": 10,
        "icon-image": "road_{ref_length}",
        "icon-rotation-alignment": "viewport",
        "symbol-spacing": 200,
        "text-font": [
          "Open Sans Semibold",
          "Klokantech Noto Sans Regular",
          "Klokantech Noto Sans CJK Regular"
        ],
        "symbol-placement": {
          "base": 1,
          "stops": [
            [
              10,
              "point"
            ],
            [
              11,
              "line"
            ]
          ]
        },
        "text-rotation-alignment": "viewport",
        "icon-size": 1,
        "text-field": "{ref}"
      },
      "paint": {}
    },
    {
      "id": "highway-shield-us-interstate",
      "type": "symbol",
      "source": "vector_layer_",
      "source-layer": "transportation_name",
      "minzoom": 7,
      "filter": [
        "all",
        [
          "<=",
          "ref_length",
          6
        ],
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "in",
          "network",
          "us-interstate"
        ]
      ],
      "layout": {
        "text-size": 10,
        "icon-image": "{network}_{ref_length}",
        "icon-rotation-alignment": "viewport",
        "symbol-spacing": 200,
        "text-font": [
          "Open Sans Semibold",
          "Klokantech Noto Sans Regular",
          "Klokantech Noto Sans CJK Regular"
        ],
        "symbol-placement": {
          "base": 1,
          "stops": [
            [
              7,
              "point"
            ],
            [
              7,
              "line"
            ],
            [
              8,
              "line"
            ]
          ]
        },
        "text-rotation-alignment": "viewport",
        "icon-size": 1,
        "text-field": "{ref}"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "highway-shield-us-other",
      "type": "symbol",
      "source": "vector_layer_",
      "source-layer": "transportation_name",
      "minzoom": 9,
      "filter": [
        "all",
        [
          "<=",
          "ref_length",
          6
        ],
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "in",
          "network",
          "us-highway",
          "us-state"
        ]
      ],
      "layout": {
        "text-size": 10,
        "icon-image": "{network}_{ref_length}",
        "icon-rotation-alignment": "viewport",
        "symbol-spacing": 200,
        "text-font": [
          "Open Sans Semibold",
          "Klokantech Noto Sans Regular",
          "Klokantech Noto Sans CJK Regular"
        ],
        "symbol-placement": {
          "base": 1,
          "stops": [
            [
              10,
              "point"
            ],
            [
              11,
              "line"
            ]
          ]
        },
        "text-rotation-alignment": "viewport",
        "icon-size": 1,
        "text-field": "{ref}"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "place-other",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "vector_layer_",
      "source-layer": "place",
      "filter": [
        "!in",
        "class",
        "city",
        "town",
        "village"
      ],
      "layout": {
        "text-letter-spacing": 0.1,
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              12,
              10
            ],
            [
              15,
              14
            ]
          ]
        },
        "text-font": [
          "Open Sans Bold",
          "Klokantech Noto Sans Bold",
          "Klokantech Noto Sans CJK Bold"
        ],
        "text-field": "{name_en}",
        "text-transform": "uppercase",
        "text-max-width": 9
      },
      "paint": {
        "text-color": "#633",
        "text-halo-width": 1.2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      "id": "place-village",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "vector_layer_",
      "source-layer": "place",
      "filter": [
        "==",
        "class",
        "village"
      ],
      "layout": {
        "text-font": [
          "Open Sans Regular",
          "Klokantech Noto Sans Regular",
          "Klokantech Noto Sans CJK Regular"
        ],
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              10,
              12
            ],
            [
              15,
              22
            ]
          ]
        },
        "text-field": "{name_en}",
        "text-max-width": 8
      },
      "paint": {
        "text-color": "#333",
        "text-halo-width": 1.2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      "id": "place-town",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "vector_layer_",
      "source-layer": "place",
      "filter": [
        "==",
        "class",
        "town"
      ],
      "layout": {
        "text-font": [
          "Open Sans Regular",
          "Klokantech Noto Sans Regular",
          "Klokantech Noto Sans CJK Regular"
        ],
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              10,
              14
            ],
            [
              15,
              24
            ]
          ]
        },
        "text-field": "{name_en}",
        "text-max-width": 8
      },
      "paint": {
        "text-color": "#333",
        "text-halo-width": 1.2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      "id": "place-city",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "vector_layer_",
      "source-layer": "place",
      "filter": [
        "all",
        [
          "!=",
          "capital",
          2
        ],
        [
          "==",
          "class",
          "city"
        ]
      ],
      "layout": {
        "text-font": [
          "Open Sans Semibold",
          "Klokantech Noto Sans Regular",
          "Klokantech Noto Sans CJK Regular"
        ],
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              7,
              14
            ],
            [
              11,
              24
            ]
          ]
        },
        "text-field": "{name_en}",
        "text-max-width": 8
      },
      "paint": {
        "text-color": "#333",
        "text-halo-width": 1.2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      "id": "place-city-capital",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "vector_layer_",
      "source-layer": "place",
      "filter": [
        "all",
        [
          "==",
          "capital",
          2
        ],
        [
          "==",
          "class",
          "city"
        ]
      ],
      "layout": {
        "text-font": [
          "Open Sans Semibold",
          "Klokantech Noto Sans Regular",
          "Klokantech Noto Sans CJK Regular"
        ],
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              7,
              14
            ],
            [
              11,
              24
            ]
          ]
        },
        "text-field": "{name_en}",
        "text-max-width": 8,
        "icon-image": "star_11",
        "text-offset": [
          0.4,
          0
        ],
        "icon-size": 0.8,
        "text-anchor": "left"
      },
      "paint": {
        "text-color": "#333",
        "text-halo-width": 1.2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      "id": "place-country-3",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "vector_layer_",
      "source-layer": "place",
      "filter": [
        "all",
        [
          "==",
          "class",
          "country"
        ],
        [
          ">=",
          "rank",
          3
        ]
      ],
      "layout": {
        "text-font": [
          "Open Sans Bold",
          "Klokantech Noto Sans Bold",
          "Klokantech Noto Sans CJK Bold"
        ],
        "text-field": "{name_en}",
        "text-size": {
          "stops": [
            [
              3,
              11
            ],
            [
              7,
              17
            ]
          ]
        },
        "text-transform": "uppercase",
        "text-max-width": 6.25
      },
      "paint": {
        "text-halo-blur": 1,
        "text-color": "#334",
        "text-halo-width": 2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      "id": "place-country-2",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "vector_layer_",
      "source-layer": "place",
      "filter": [
        "all",
        [
          "==",
          "class",
          "country"
        ],
        [
          "==",
          "rank",
          2
        ]
      ],
      "layout": {
        "text-font": [
          "Open Sans Bold",
          "Klokantech Noto Sans Bold",
          "Klokantech Noto Sans CJK Bold"
        ],
        "text-field": "{name_en}",
        "text-size": {
          "stops": [
            [
              2,
              11
            ],
            [
              5,
              17
            ]
          ]
        },
        "text-transform": "uppercase",
        "text-max-width": 6.25
      },
      "paint": {
        "text-halo-blur": 1,
        "text-color": "#334",
        "text-halo-width": 2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      "id": "place-country-1",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "vector_layer_",
      "source-layer": "place",
      "filter": [
        "all",
        [
          "==",
          "class",
          "country"
        ],
        [
          "==",
          "rank",
          1
        ]
      ],
      "layout": {
        "text-font": [
          "Open Sans Bold",
          "Klokantech Noto Sans Bold",
          "Klokantech Noto Sans CJK Bold"
        ],
        "text-field": "{name_en}",
        "text-size": {
          "stops": [
            [
              1,
              11
            ],
            [
              4,
              17
            ]
          ]
        },
        "text-transform": "uppercase",
        "text-max-width": 6.25
      },
      "paint": {
        "text-halo-blur": 1,
        "text-color": "#334",
        "text-halo-width": 2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      "id": "place-continent",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "vector_layer_",
      "source-layer": "place",
      "maxzoom": 1,
      "filter": [
        "==",
        "class",
        "continent"
      ],
      "layout": {
        "text-font": [
          "Open Sans Bold",
          "Klokantech Noto Sans Bold",
          "Klokantech Noto Sans CJK Bold"
        ],
        "text-field": "{name_en}",
        "text-size": 14,
        "text-max-width": 6.25,
        "text-transform": "uppercase"
      },
      "paint": {
        "text-halo-blur": 1,
        "text-color": "#334",
        "text-halo-width": 2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    }
  ];