/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'inicio-bg',
                            display: 'block',
                            type: 'image',
                            rect: ['0', '0', '1280px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"inicio-bg.svg",'0px','0px']
                        },
                        {
                            id: 'logo-main',
                            display: 'block',
                            type: 'image',
                            rect: ['251px', '0px', '779px', '600px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"logo-main.svg",'0px','0px'],
                            transform: [[],[],[],['0']]
                        },
                        {
                            id: 'titulo-main',
                            display: 'block',
                            type: 'image',
                            rect: ['457px', '-88px', '366px', '56px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"titulo-main.svg",'0px','0px']
                        },
                        {
                            id: 'btn-intro',
                            display: 'block',
                            type: 'image',
                            rect: ['518px', '111px', '245px', '344px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"btn-intro.svg",'0px','0px'],
                            userClass: "btn-intro",
                            transform: [[],[],[],['2','2']]
                        },
                        {
                            id: 'SENA-logo',
                            display: 'block',
                            type: 'image',
                            rect: ['595px', '621px', '90px', '87px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"SENA-logo.svg",'0px','0px']
                        },
                        {
                            id: 'tm-breadcrumb',
                            symbolName: 'tm-breadcrumb',
                            display: 'none',
                            type: 'rect',
                            rect: ['233px', '-40px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'intro-mc',
                            symbolName: 'intro-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['224px', '63px', '464', '37', 'auto', 'auto']
                        },
                        {
                            id: 'html-mc',
                            symbolName: 'html-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['223px', '63px', '464', '37', 'auto', 'auto']
                        },
                        {
                            id: 'css-mc',
                            symbolName: 'css-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['223', '607px', '654', '37', 'auto', 'auto']
                        },
                        {
                            id: 'js-mc',
                            symbolName: 'js-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['223', '616px', '654', '37', 'auto', 'auto']
                        },
                        {
                            id: 'fw-mc',
                            symbolName: 'fw-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['223', '665px', '654', '37', 'auto', 'auto']
                        },
                        {
                            id: 'seguridad-mc',
                            symbolName: 'seguridad-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['223', '653px', '654', '37', 'auto', 'auto']
                        },
                        {
                            id: 'titulo-end-bar',
                            display: 'none',
                            type: 'image',
                            rect: ['824px', '-100px', '148px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titulo-end-bar.svg",'0px','0px']
                        },
                        {
                            id: 'mm-mc',
                            symbolName: 'mm-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['-250px', '0', '231', '600', 'auto', 'auto']
                        },
                        {
                            id: 'opciones-mc',
                            symbolName: 'opciones-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['1240px', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'popups-mc',
                            symbolName: 'popups-mc',
                            type: 'rect',
                            rect: ['0', '0', '25', '25', 'auto', 'auto']
                        },
                        {
                            id: 'popups-mc2',
                            symbolName: 'popups-mc2',
                            type: 'rect',
                            rect: ['0', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'titulo2',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['116', '623', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"titulo.mp3"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 17300,
                    autoPlay: true,
                    labels: {
                        "puntos": 1750,
                        "intro": 2000,
                        "html": 3000,
                        "css": 4000,
                        "js": 5000,
                        "fw": 6000,
                        "seguridad": 7000
                    },
                    data: [
                        [
                            "eid21",
                            "scaleY",
                            750,
                            250,
                            "linear",
                            "${btn-intro}",
                            '2',
                            '1'
                        ],
                        [
                            "eid95",
                            "left",
                            0,
                            0,
                            "linear",
                            "${tm-breadcrumb}",
                            '233px',
                            '233px'
                        ],
                        [
                            "eid105",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${opciones-mc}",
                            '1280px',
                            '1240px'
                        ],
                        [
                            "eid28",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${logo-main}",
                            '1',
                            '0'
                        ],
                        [
                            "eid22",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${btn-intro}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${btn-intro}",
                            '1',
                            '0'
                        ],
                        [
                            "eid113",
                            "top",
                            2500,
                            250,
                            "linear",
                            "${titulo-end-bar}",
                            '-100px',
                            '0px'
                        ],
                        [
                            "eid124",
                            "top",
                            3500,
                            250,
                            "linear",
                            "${titulo-end-bar}",
                            '-100px',
                            '0px'
                        ],
                        [
                            "eid348",
                            "top",
                            4500,
                            250,
                            "linear",
                            "${titulo-end-bar}",
                            '-100px',
                            '0px'
                        ],
                        [
                            "eid358",
                            "top",
                            5500,
                            250,
                            "linear",
                            "${titulo-end-bar}",
                            '-100px',
                            '0px'
                        ],
                        [
                            "eid366",
                            "top",
                            6500,
                            250,
                            "linear",
                            "${titulo-end-bar}",
                            '-100px',
                            '0px'
                        ],
                        [
                            "eid374",
                            "top",
                            7500,
                            250,
                            "linear",
                            "${titulo-end-bar}",
                            '-100px',
                            '0px'
                        ],
                        [
                            "eid361",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${js-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid362",
                            "display",
                            5800,
                            0,
                            "linear",
                            "${js-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid102",
                            "top",
                            1250,
                            250,
                            "linear",
                            "${tm-breadcrumb}",
                            '-40px',
                            '0px'
                        ],
                        [
                            "eid13",
                            "top",
                            750,
                            250,
                            "linear",
                            "${SENA-logo}",
                            '621px',
                            '484px'
                        ],
                        [
                            "eid33",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${btn-intro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid30",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${titulo-main}",
                            '1',
                            '0'
                        ],
                        [
                            "eid99",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${intro-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid116",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${intro-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid119",
                            "top",
                            3000,
                            750,
                            "linear",
                            "${html-mc}",
                            '609px',
                            '63px'
                        ],
                        [
                            "eid27",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${SENA-logo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid114",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${titulo-end-bar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid115",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${titulo-end-bar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid121",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${titulo-end-bar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid122",
                            "display",
                            3800,
                            0,
                            "linear",
                            "${titulo-end-bar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid345",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${titulo-end-bar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid346",
                            "display",
                            4800,
                            0,
                            "linear",
                            "${titulo-end-bar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid355",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${titulo-end-bar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid356",
                            "display",
                            5800,
                            0,
                            "linear",
                            "${titulo-end-bar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid363",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${titulo-end-bar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid364",
                            "display",
                            6800,
                            0,
                            "linear",
                            "${titulo-end-bar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid371",
                            "display",
                            7500,
                            0,
                            "linear",
                            "${titulo-end-bar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid376",
                            "top",
                            7000,
                            750,
                            "linear",
                            "${seguridad-mc}",
                            '653px',
                            '65px'
                        ],
                        [
                            "eid106",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${opciones-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid32",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${SENA-logo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid109",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${mm-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid368",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${fw-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid369",
                            "display",
                            6800,
                            0,
                            "linear",
                            "${fw-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid352",
                            "top",
                            4000,
                            750,
                            "linear",
                            "${css-mc}",
                            '607px',
                            '65px'
                        ],
                        [
                            "eid377",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${seguridad-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid112",
                            "left",
                            2500,
                            250,
                            "linear",
                            "${titulo-end-bar}",
                            '728px',
                            '640px'
                        ],
                        [
                            "eid123",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${titulo-end-bar}",
                            '728px',
                            '640px'
                        ],
                        [
                            "eid347",
                            "left",
                            4500,
                            250,
                            "linear",
                            "${titulo-end-bar}",
                            '920px',
                            '824px'
                        ],
                        [
                            "eid357",
                            "left",
                            5500,
                            250,
                            "linear",
                            "${titulo-end-bar}",
                            '920px',
                            '824px'
                        ],
                        [
                            "eid365",
                            "left",
                            6500,
                            250,
                            "linear",
                            "${titulo-end-bar}",
                            '920px',
                            '824px'
                        ],
                        [
                            "eid373",
                            "left",
                            7500,
                            250,
                            "linear",
                            "${titulo-end-bar}",
                            '920px',
                            '824px'
                        ],
                        [
                            "eid36",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${inicio-bg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14",
                            "top",
                            750,
                            250,
                            "linear",
                            "${titulo-main}",
                            '-88px',
                            '33px'
                        ],
                        [
                            "eid35",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${logo-main}",
                            'block',
                            'none'
                        ],
                        [
                            "eid98",
                            "top",
                            2000,
                            750,
                            "linear",
                            "${intro-mc}",
                            '665px',
                            '63px'
                        ],
                        [
                            "eid108",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${mm-mc}",
                            '-250px',
                            '0px'
                        ],
                        [
                            "eid10",
                            "scaleX",
                            500,
                            250,
                            "linear",
                            "${logo-main}",
                            '0',
                            '1'
                        ],
                        [
                            "eid370",
                            "top",
                            6000,
                            750,
                            "linear",
                            "${fw-mc}",
                            '665px',
                            '65px'
                        ],
                        [
                            "eid120",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${html-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid344",
                            "display",
                            3800,
                            0,
                            "linear",
                            "${html-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid34",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${titulo-main}",
                            'block',
                            'none'
                        ],
                        [
                            "eid103",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${tm-breadcrumb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20",
                            "scaleX",
                            750,
                            250,
                            "linear",
                            "${btn-intro}",
                            '2',
                            '1'
                        ],
                        [
                            "eid360",
                            "top",
                            5000,
                            750,
                            "linear",
                            "${js-mc}",
                            '616px',
                            '65px'
                        ],
                        [
                            "eid353",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${css-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid354",
                            "display",
                            4800,
                            0,
                            "linear",
                            "${css-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${inicio-bg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${inicio-bg}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "mm-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-1px', '245px', '602px', 'auto', 'auto'],
                            id: 'mm-bg',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mm-bg.svg', '0px', '0px']
                        },
                        {
                            rect: ['5px', '-62px', '236px', '46px', 'auto', 'auto'],
                            id: 'mm_seguridad',
                            userClass: 'mm-seguridad',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mm_seguridad.svg', '0px', '0px']
                        },
                        {
                            rect: ['5px', '-62px', '236px', '46px', 'auto', 'auto'],
                            id: 'mm_fw',
                            userClass: 'mm-fw',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mm_fw.svg', '0px', '0px']
                        },
                        {
                            rect: ['5px', '-62px', '236px', '46px', 'auto', 'auto'],
                            id: 'mm_js',
                            userClass: 'mm-js',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mm_js.svg', '0px', '0px']
                        },
                        {
                            rect: ['5px', '-62px', '236px', '46px', 'auto', 'auto'],
                            id: 'mm_css',
                            userClass: 'mm-css',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mm_css.svg', '0px', '0px']
                        },
                        {
                            rect: ['5px', '-62px', '236px', '46px', 'auto', 'auto'],
                            id: 'mm_html',
                            userClass: 'mm-html',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mm_html.svg', '0px', '0px']
                        },
                        {
                            rect: ['5px', '-62px', '236px', '46px', 'auto', 'auto'],
                            id: 'mm_intro',
                            userClass: 'mm-intro',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mm_intro.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['5px', '145px', '236px', '46px', 'auto', 'auto'],
                            id: 'mm_intro-a',
                            fill: ['rgba(0,0,0,0)', 'images/mm_intro-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['5px', '197px', '236px', '46px', 'auto', 'auto'],
                            id: 'mm_html-a',
                            fill: ['rgba(0,0,0,0)', 'images/mm_html-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['5px', '249px', '236px', '46px', 'auto', 'auto'],
                            id: 'mm_css-a',
                            fill: ['rgba(0,0,0,0)', 'images/mm_css-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['5px', '302px', '236px', '46px', 'auto', 'auto'],
                            id: 'mm_js-a',
                            fill: ['rgba(0,0,0,0)', 'images/mm_js-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['5px', '355px', '236px', '46px', 'auto', 'auto'],
                            id: 'mm_fw-a',
                            fill: ['rgba(0,0,0,0)', 'images/mm_fw-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['5px', '409px', '236px', '46px', 'auto', 'auto'],
                            id: 'mm_seguridad-a',
                            fill: ['rgba(0,0,0,0)', 'images/mm_seguridad-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['39px', '10px', '168px', '108px', 'auto', 'auto'],
                            id: 'mm-titulo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mm-titulo.svg', '0px', '0px']
                        },
                        {
                            rect: ['78px', '490px', '90px', '87px', 'auto', 'auto'],
                            id: 'SENA-logo2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/SENA-logo.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '231px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: true,
                    labels: {
                        "intro": 1000,
                        "html": 1250,
                        "css": 1500,
                        "js": 1750,
                        "fw": 2000,
                        "seguridad": 2250
                    },
                    data: [
                        [
                            "eid88",
                            "top",
                            0,
                            250,
                            "easeOutBounce",
                            "${mm_css}",
                            '-62px',
                            '145px'
                        ],
                        [
                            "eid82",
                            "top",
                            250,
                            150,
                            "linear",
                            "${mm_css}",
                            '145px',
                            '197px'
                        ],
                        [
                            "eid75",
                            "top",
                            400,
                            150,
                            "linear",
                            "${mm_css}",
                            '197px',
                            '249px'
                        ],
                        [
                            "eid50",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${mm_css}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid90",
                            "top",
                            0,
                            250,
                            "easeOutBounce",
                            "${mm_fw}",
                            '-62px',
                            '145px'
                        ],
                        [
                            "eid84",
                            "top",
                            250,
                            150,
                            "linear",
                            "${mm_fw}",
                            '145px',
                            '197px'
                        ],
                        [
                            "eid77",
                            "top",
                            400,
                            150,
                            "linear",
                            "${mm_fw}",
                            '197px',
                            '249px'
                        ],
                        [
                            "eid72",
                            "top",
                            550,
                            150,
                            "linear",
                            "${mm_fw}",
                            '249px',
                            '302px'
                        ],
                        [
                            "eid68",
                            "top",
                            700,
                            150,
                            "linear",
                            "${mm_fw}",
                            '302px',
                            '355px'
                        ],
                        [
                            "eid52",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${mm_fw}",
                            '355px',
                            '355px'
                        ],
                        [
                            "eid91",
                            "top",
                            0,
                            250,
                            "easeOutBounce",
                            "${mm_intro}",
                            '-62px',
                            '145px'
                        ],
                        [
                            "eid48",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${mm_intro}",
                            '145px',
                            '145px'
                        ],
                        [
                            "eid87",
                            "top",
                            0,
                            250,
                            "easeOutBounce",
                            "${mm_js}",
                            '-62px',
                            '145px'
                        ],
                        [
                            "eid81",
                            "top",
                            250,
                            150,
                            "linear",
                            "${mm_js}",
                            '145px',
                            '197px'
                        ],
                        [
                            "eid76",
                            "top",
                            400,
                            150,
                            "linear",
                            "${mm_js}",
                            '197px',
                            '249px'
                        ],
                        [
                            "eid71",
                            "top",
                            550,
                            150,
                            "linear",
                            "${mm_js}",
                            '249px',
                            '302px'
                        ],
                        [
                            "eid51",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${mm_js}",
                            '302px',
                            '302px'
                        ],
                        [
                            "eid43",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${mm_js-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid44",
                            "display",
                            1950,
                            0,
                            "linear",
                            "${mm_js-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid89",
                            "top",
                            0,
                            250,
                            "easeOutBounce",
                            "${mm_seguridad}",
                            '-62px',
                            '145px'
                        ],
                        [
                            "eid83",
                            "top",
                            250,
                            150,
                            "linear",
                            "${mm_seguridad}",
                            '145px',
                            '197px'
                        ],
                        [
                            "eid78",
                            "top",
                            400,
                            150,
                            "linear",
                            "${mm_seguridad}",
                            '197px',
                            '249px'
                        ],
                        [
                            "eid73",
                            "top",
                            550,
                            150,
                            "linear",
                            "${mm_seguridad}",
                            '249px',
                            '302px'
                        ],
                        [
                            "eid67",
                            "top",
                            700,
                            150,
                            "linear",
                            "${mm_seguridad}",
                            '302px',
                            '355px'
                        ],
                        [
                            "eid60",
                            "top",
                            850,
                            150,
                            "linear",
                            "${mm_seguridad}",
                            '355px',
                            '409px'
                        ],
                        [
                            "eid45",
                            "display",
                            1950,
                            0,
                            "linear",
                            "${mm_fw-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${mm_fw-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid86",
                            "top",
                            0,
                            250,
                            "easeOutBounce",
                            "${mm_html}",
                            '-62px',
                            '145px'
                        ],
                        [
                            "eid80",
                            "top",
                            250,
                            150,
                            "linear",
                            "${mm_html}",
                            '145px',
                            '197px'
                        ],
                        [
                            "eid49",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${mm_html}",
                            '197px',
                            '197px'
                        ],
                        [
                            "eid39",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${mm_html-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid40",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${mm_html-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${mm_css-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid42",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${mm_css-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid47",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${mm_seguridad-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            950,
                            0,
                            "linear",
                            "${mm_intro-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid38",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${mm_intro-a}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "opciones-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: ['-1240px', '0px', '1280px', '600px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            userClass: 'op-trigger',
                            rect: ['0px', '0px', '40px', '600px', 'auto', 'auto'],
                            display: 'block',
                            id: 'op_op-trigger',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/op_op-trigger.svg', '0px', '0px']
                        },
                        {
                            userClass: 'op-trigger',
                            rect: ['-502px', '0', '40px', '600px', 'auto', 'auto'],
                            display: 'none',
                            id: 'op_op-trigger-a',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/op_op-trigger-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['51px', '497px', '478px', '93px', 'auto', 'auto'],
                            id: 'opciones_cc',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_cc.svg', '0px', '0px']
                        },
                        {
                            rect: ['50px', '178px', '480px', '309px', 'auto', 'auto'],
                            id: 'opciones_creditos',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_creditos.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'opciones_oa',
                            rect: ['374px', '95px', '156px', '75px', 'auto', 'auto'],
                            userClass: 'op-oa',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_oa.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'opciones_pdf',
                            rect: ['212px', '95px', '156px', '75px', 'auto', 'auto'],
                            userClass: 'op-pdf',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_pdf.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'opciones_bibliografia',
                            rect: ['51px', '95px', '155px', '75px', 'auto', 'auto'],
                            userClass: 'op-bi',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_bibliografia.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'opciones_glosario',
                            rect: ['374px', '13px', '156px', '75px', 'auto', 'auto'],
                            userClass: 'op-glo',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_glosario.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'opciones_ad',
                            rect: ['212px', '13px', '156px', '75px', 'auto', 'auto'],
                            userClass: 'op-ad',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_ad.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'opciones_mapa',
                            rect: ['51px', '13px', '155px', '75px', 'auto', 'auto'],
                            userClass: 'op-map',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_mapa.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '40px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid3861",
                            "left",
                            600,
                            100,
                            "linear",
                            "${opciones_pdf}",
                            '212px',
                            '-290px'
                        ],
                        [
                            "eid3856",
                            "left",
                            900,
                            100,
                            "linear",
                            "${opciones_cc}",
                            '51px',
                            '-451px'
                        ],
                        [
                            "eid3833",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${op_op-trigger}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3855",
                            "left",
                            0,
                            200,
                            "linear",
                            "${op_op-trigger}",
                            '0px',
                            '-502px'
                        ],
                        [
                            "eid3862",
                            "display",
                            200,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3834",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${op_op-trigger-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3860",
                            "left",
                            200,
                            100,
                            "linear",
                            "${opciones_mapa}",
                            '51px',
                            '-451px'
                        ],
                        [
                            "eid3859",
                            "left",
                            300,
                            100,
                            "linear",
                            "${opciones_ad}",
                            '212px',
                            '-290px'
                        ],
                        [
                            "eid3853",
                            "left",
                            800,
                            100,
                            "linear",
                            "${opciones_creditos}",
                            '50px',
                            '-452px'
                        ],
                        [
                            "eid3857",
                            "left",
                            500,
                            100,
                            "linear",
                            "${opciones_bibliografia}",
                            '51px',
                            '-451px'
                        ],
                        [
                            "eid3854",
                            "left",
                            400,
                            100,
                            "linear",
                            "${opciones_glosario}",
                            '374px',
                            '-128px'
                        ],
                        [
                            "eid3831",
                            "opacity",
                            200,
                            800,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid3858",
                            "left",
                            700,
                            100,
                            "linear",
                            "${opciones_oa}",
                            '374px',
                            '-128px'
                        ]
                    ]
                }
            },
            "tm-breadcrumb": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['40px', '0px', '967px', '40px', 'auto', 'auto'],
                            id: 'breadcrumb-bar',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/breadcrumb-bar.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'btn-home',
                            rect: ['0px', '0px', '40px', '40px', 'auto', 'auto'],
                            userClass: 'op-trigger',
                            fill: ['rgba(0,0,0,0)', 'images/btn-home.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            align: 'justify',
                            textStyle: ['', '', '', '', 'none'],
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            rect: ['54px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'inicio',
                            text: '<p style=\"margin: 0px;\">Inicio &gt;</p>'
                        },
                        {
                            type: 'text',
                            id: 'intro',
                            text: '<p style=\"margin: 0px;\">Introducción</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            type: 'text',
                            id: 'html',
                            text: '<p style=\"margin: 0px;\">Lenguaje HTML</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            type: 'text',
                            id: 'css',
                            text: '<p style=\"margin: 0px;\">Cascade Style Sheet</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            type: 'text',
                            id: 'js',
                            text: '<p style=\"margin: 0px;\">JavaScript</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            type: 'text',
                            id: 'fw',
                            text: '<p style=\"margin: 0px;\">Framework</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            type: 'text',
                            id: 'seguridad',
                            text: '<p style=\"margin: 0px;\">Seguridad</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1007px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    labels: {
                        "puntos": 0,
                        "intro": 250,
                        "html": 500,
                        "css": 750,
                        "js": 1000,
                        "fw": 1250,
                        "seguridad": 1500
                    },
                    data: [
                        [
                            "eid3741",
                            "display",
                            411,
                            0,
                            "linear",
                            "${html}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3742",
                            "display",
                            631,
                            0,
                            "linear",
                            "${html}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3739",
                            "display",
                            631,
                            0,
                            "linear",
                            "${css}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3740",
                            "display",
                            851,
                            0,
                            "linear",
                            "${css}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3743",
                            "display",
                            851,
                            0,
                            "linear",
                            "${js}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3744",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${js}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3747",
                            "display",
                            1384,
                            0,
                            "linear",
                            "${seguridad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3737",
                            "display",
                            197,
                            0,
                            "linear",
                            "${intro}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3738",
                            "display",
                            411,
                            0,
                            "linear",
                            "${intro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3745",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${fw}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3746",
                            "display",
                            1384,
                            0,
                            "linear",
                            "${fw}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "intro-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'intro-titulo',
                            rect: ['0px', '0px', '464px', '37px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/intro-titulo.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​El desarrollo de aplicaciones para la web es una tendencia importante en la actualidad y es fundamental que los analistas y desarrolladores se apropien de las tecnologías que hacen posible este tipo de aplicaciones.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">En primer lugar se deben apropiar los tres conceptos fundamentales o la trilogía del diseño web: HTML, CSS y  Javascript.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El lenguaje de marcación de hipertextos (HyperText Markup Language) es la primera pieza de esta trilogía y permite definir la estructura de los contenidos que aparecen en una página web. Su concepción se deriva de una tecnología llamada SGML (Standard Generalized Markup Language) el cual es un lenguaje de marcación que aplicaba a cualquier tipo de documento.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Para describir la apariencia que tendrán las páginas web se propusieron las hojas de estilos en cascada o (CSS). Este mecanismo, la segunda pieza de la trilogía, permite dar una personalización o estilo a los elementos de las páginas web como son textos, imágenes, tablas, encabezados, pies de página entre otros.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El último elemento es el lenguaje Javascript que añade interactividad a las páginas web. Tanto HTML como CSS son lenguajes declarativos, es decir, solamente indican qué debe hacerse sin indicar los detalles. Por otra parte está Javascript que es un lenguaje imperativo que indica cómo debe hacerse una tarea paso a paso.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Es con la ayuda de Javascript que las páginas web se pueden realizar tareas más complejas como validar los datos de entrada, conectarse a bases de datos, emitir mensajes de error, consultar la versión del navegador, entre otras. Es importante anotar que Javascript no tiene ninguna relación con el lenguaje de programación Java, son dos cosas distintas que tienen un nombre similar por mera casualidad.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Por último han surgido componentes de software estructurados en los llamados “Frameworks” que facilitan el desarrollo de aplicaciones mediante la integración de las tecnologías descritas anteriormente. Ejemplos de frameworks Javascript son: AngularJS desarrollado por Google, ReactJS desarrollado por Facebook. Un ejemplo de un framework CSS es Bootstrap desarrollado por Twitter.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">También están disponibles componentes estructurados en librerías. Uno de los más famosos y utilizados es Jquery que es una librería javascript que permite modificar los elementos HTML de manera dinámica.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">En este recurso se hará una introducción a las tecnologías HTML, CSS y Javascript. También se hará una introducción a la librería Jquery y se mostrarán las novedades introducidas en la versión 5 de HTML. Es importante anotar que el conocimiento completo de las tres tecnologías requiere un espacio y dedicación más amplio. Por tanto una vez apropiado este recurso el aprendiz podrá profundizar estas temáticas mediante la consulta de la bibliografía anexa o mediante investigación en otros recursos o por Internet.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Las tecnologías que hacen posible las aplicaciones web están en constante evolución. Por lo anterior es importante que el desarrollador se esté constantemente actualizando en las distintas tendencias y conceptos.</p>',
                            userClass: 'scroll-v',
                            overflow: 'visible',
                            rect: ['64px', '73px', '467px', '402px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            align: 'justify'
                        },
                        {
                            type: 'rect',
                            id: 'p1-mc',
                            symbolName: 'p1-mc',
                            rect: ['563', '-63', '448', '601', 'auto', 'auto']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/introduccion.mp3'],
                            id: 'introduccion2',
                            rect: ['138px', '480px', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '464px', '37px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid840",
                            "display",
                            950,
                            0,
                            "linear",
                            "${introduccion2}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "html-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'html-titulo',
                            rect: ['0px', '0px', '464px', '37px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/html-titulo.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['-709px', '55px', '480px', '249px', 'auto', 'auto'],
                            display: 'block',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​El HTML es el lenguaje de marcación principal para la creación de documentos en la WWW o Red Mundial (w3c, 2016).</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El lenguaje de marcación para hipertextos o HTML utiliza un conjunto de etiquetas o “tags” para describir la estructura que tendrán las páginas web. Además del HTML existen otros lenguajes de marcación entre ellos el XML o eXtensible Markup Language.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Los archivos .html son planos, es decir, pueden ser leídos por un editor de texto.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Una vez creado un archivo html válido este puede ser interpretado por un analizador sintáctico o “parser” que está incluido en los browsers o navegadores.&nbsp;</p>'
                        },
                        {
                            rect: ['1061px', '55px', '419px', '351px', 'auto', 'auto'],
                            id: 'html-ill1',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/html-ill1.svg', '0px', '0px']
                        },
                        {
                            rect: ['1065px', '19', '527', '428', 'auto', 'auto'],
                            id: 'html-browser',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                id: 'html-browser-titulo',
                                rect: ['0px', '46px', '372px', '24px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/html-browser-titulo.svg', '0px', '0px']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'Text4',
                                text: '<p style=\"margin: 0px;\">​Los navegadores modernos interpretan el código escrito en HTML y CSS y lo transforman en órdenes que son transmitidas a los distintos recursos que maneja un computador como son su interfaz gráfica, su componente de redes o su capa de almacenamiento permanente (NIEDERST, 2012).</p>',
                                align: 'justify',
                                rect: ['0px', '85px', '480px', '67px', 'auto', 'auto']
                            },
                            {
                                type: 'image',
                                id: 'html-browser-ill1',
                                rect: ['98px', '174px', '284px', '254px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/html-browser-ill1.svg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'html-browser-sm',
                                symbolName: 'html-browser-sm',
                                rect: ['505px', '0px', '22', '22', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['25px', '-8px', '1975', '470', 'auto', 'auto'],
                            id: 'html-archivo',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                rect: ['-1217px', '73px', '299px', '19px', 'auto', 'auto'],
                                id: 'html-archivo-titulo',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/html-archivo-titulo.svg', '0px', '0px']
                            },
                            {
                                type: 'text',
                                align: 'justify',
                                text: '<p style=\"margin: 0px;\">​Un documento HTML está compuesto por un árbol de elementos y texto. Cada elemento se describe a través de una etiqueta o tag de inicio y otra de terminación. (w3c, 2016).</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Las partes que componen una etiqueta son (NIEDERST, 2012):&nbsp;</p><p style=\"margin: 0px;\">​</p><ul>​<li><span style=\"font-weight: 700;\">Etiqueta de apertura</span>: se componen por el carácter “&lt;” y un comando. Por ejemplo “&lt;html&gt;”, “&lt;body”.</li><p style=\"margin: 0px;\">​</p><li><span style=\"font-weight: 700;\">Atributos</span>: nombre y valor. Modifican el comando. Ejemplo: “&lt;html lang=es&gt;”.</li><p style=\"margin: 0px;\">​</p><li><span style=\"font-weight: 700;\">Contenido</span>: pueden ser párrafos, palabras, oraciones. Ejemplo: &lt;h1&gt; hola mundo &lt;/h1&gt;.</li><p style=\"margin: 0px;\">​</p><li><span style=\"font-weight: 700;\">Etiqueta de cierre</span>: se compone por el carácter “&lt;/” más el nombre de comando y los caracteres “&gt;”. Ejemplo: &lt;/html&gt;.</li></ul><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​La figura 1.3a muestra la anatomía de una etiqueta HTML estándar.</p>',
                                rect: ['-1217px', '112px', '480px', '325px', 'auto', 'auto'],
                                display: 'none',
                                userClass: 'flechita',
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text'
                            },
                            {
                                type: 'text',
                                align: 'justify',
                                text: '<p style=\"margin: 0px;\">​Algunos tags del lenguaje HTML no requieren tag final y se denominan etiqueta vacías.</p>',
                                rect: ['-692px', '220px', '432px', '37px', 'auto', 'auto'],
                                display: 'none',
                                userClass: 'flechita',
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'TextCopy'
                            },
                            {
                                rect: ['-692px', '26px', '432px', '437px', 'auto', 'auto'],
                                id: 'html-archivo-ill1',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/html-archivo-ill1.svg', '0px', '0px']
                            },
                            {
                                rect: ['1135px', '153px', '295px', '302px', 'auto', 'auto'],
                                id: 'html-archivo-ill2',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/html-archivo-ill2.svg', '0px', '0px']
                            },
                            {
                                type: 'text',
                                id: 'Text5',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['1043px', '76px', '480px', '67px', 'auto', 'auto'],
                                display: 'none',
                                align: 'justify',
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                text: '<p style=\"margin: 0px;\">​Los tag vacíos son: area, base, br, col, embed, hr, img, input, keygen, link, menuitem, meta, param, source, track y wbr.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">A continuación un ejemplo sencillo de una página HTML básica.</p>'
                            },
                            {
                                type: 'text',
                                id: 'Text5Copy',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['1043px', '270px', '480px', '37px', 'auto', 'auto'],
                                display: 'none',
                                align: 'justify',
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                text: '<p style=\"margin: 0px;\">​Al guardar este código como un archivo con extensión html se obtiene lo siguiente cuando se abre con un navegador:</p><p style=\"margin: 0px;\"></p>'
                            },
                            {
                                type: 'text',
                                id: 'Text5Copy2',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['1554px', '-7px', '446px', '22px', 'auto', 'auto'],
                                display: 'none',
                                align: 'justify',
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                text: '<p style=\"margin: 0px;\">​La estructura básica de un archivo HTML contiene lo siguiente:</p><p style=\"margin: 0px;\"></p>'
                            },
                            {
                                type: 'text',
                                id: 'Text5Copy3',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['1554px', '270px', '446px', '82px', 'auto', 'auto'],
                                display: 'none',
                                align: 'justify',
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                text: '<p style=\"margin: 0px;\">​La especificación oficial y completa de los elementos que componen el lenguaje HTML están disponibles en https://www.w3.org/TR/html5/</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">A continuación se enunciarán algunas de las más importantes (w3c, 2016):</p><p style=\"margin: 0px;\"></p>'
                            },
                            {
                                rect: ['1562px', '17px', '430px', '215px', 'auto', 'auto'],
                                userClass: 'size-opacity',
                                id: 'html-archivo-tabla1',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/html-archivo-tabla1.svg', '0px', '0px']
                            },
                            {
                                rect: ['1640px', '353px', '279px', '104px', 'auto', 'auto'],
                                id: 'btn-bg',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/btn-bg.svg', '0px', '0px']
                            },
                            {
                                rect: ['1679px', '359px', '201px', '60px', 'auto', 'auto'],
                                userClass: 'size-opacity',
                                id: 'html-archivo-etiquetas-but',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/html-archivo-etiquetas-but.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['48', '60', '485', '374', 'auto', 'auto'],
                            id: 'html-evd',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                rect: ['3px', '0px', '468px', '24px', 'auto', 'auto'],
                                id: 'evd-titulo',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/evd-titulo.svg', '0px', '0px']
                            },
                            {
                                type: 'text',
                                id: 'Text6',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['3px', '44px', '480px', '117px', 'auto', 'auto'],
                                display: 'none',
                                align: 'justify',
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                text: '<p style=\"margin: 0px;\">​En el diseño web existen dos tipos de contenido:&nbsp;</p><p style=\"margin: 0px;\">​</p><ul><li>​<span style=\"font-weight: 700;\">Contenido estático</span>: proviene de páginas desarrolladas y almacenadas en el sitio web.</li><p style=\"margin: 0px;\">​</p><li><span style=\"font-weight: 700;\">Contenido dinámico</span>: proviene de páginas o elementos que son creados al instante por el navegador a petición de un programa.</li></ul>'
                            },
                            {
                                rect: ['0px', '206px', '485px', '168px', 'auto', 'auto'],
                                id: 'evd-ill1',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/evd-ill1.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['-513px', '-6px', '2201', '441', 'auto', 'auto'],
                            id: 'html-fed',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                type: 'text',
                                id: 'Text7',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['1582px', '65px', '481px', '72px', 'auto', 'auto'],
                                display: 'none',
                                align: 'justify',
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                text: '<p style=\"margin: 0px;\">​Desarrollo: en esta fase se crean los distintos archivos html, css y javascript en un servidor de desarrollo o pruebas. También se realizan pruebas al código fuente javascript y se atiende la realimentación por parte del cliente.</p>'
                            },
                            {
                                type: 'text',
                                id: 'Text7Copy',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['2098px', '3px', '441px', '37px', 'auto', 'auto'],
                                display: 'none',
                                align: 'justify',
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                text: '<p style=\"margin: 0px;\">​Implantación: en esta etapa el sitio web se instala en el servidor de producción para que entre a operar.&nbsp;</p><p style=\"margin: 0px;\">​</p>'
                            },
                            {
                                rect: ['-691px', '67px', '384px', '24px', 'auto', 'auto'],
                                id: 'html-fed-titulo',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/html-fed-titulo.svg', '0px', '0px']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                align: 'justify',
                                id: 'Text2',
                                text: '<p style=\"margin: 0px;\">​Para el diseño web existen muchas metodologías. En este recurso se utilizarán los modelos de desarrollo de software vistos en la actividad  de proyecto 1 en especial el modelo en cascada. Bajo este modelo de procesos aplicado al diseño web se toman las siguientes etapas:</p><p style=\"margin: 0px;\">​</p><ul><li>​<span style=\"font-weight: 700;\">Planeación</span>: se determina el concepto de diseño que se quiere realizar. En esta etapa es importante que participe un diseñador gráfico que aporte su criterio en conceptos como: manejo de colores, elementos visuales, manejo de la marca.</li><p style=\"margin: 0px;\">​</p><li><span style=\"font-weight: 700;\">Diseño</span>: se realizan las maquetas con los distintos elementos que conforman el sitio como son: menús, formularios, encabezados, pies de página. Estas maquetas se pueden realizar en herramientas ya mencionadas como son Balsamiq Mockups, Gomockingbird, entre otras. Algunos de los productos de esta etapa son: maqueta del sitio (wireframe), diagrama del sitio, entre otros.</li></ul>',
                                display: 'none',
                                rect: ['-691px', '111px', '481px', '257px', 'auto', 'auto']
                            },
                            {
                                rect: ['-158px', '0px', '424px', '441px', 'auto', 'auto'],
                                userClass: 'size-opacity',
                                id: 'html-fed-ill1',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/html-fed-ill1.svg', '0px', '0px']
                            },
                            {
                                rect: ['1634px', '137px', '375px', '292px', 'auto', 'auto'],
                                userClass: 'size-opacity',
                                id: 'html-fed2-ill1',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/html-fed2-ill1.svg', '0px', '0px']
                            },
                            {
                                rect: ['2105px', '65px', '403px', '347px', 'auto', 'auto'],
                                id: 'html-fed2-ill2',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/html-fed2-ill2.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['1071px', '60', '969', '391', 'auto', 'auto'],
                            id: 'html-hpd',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '339px', '55px', 'auto', 'auto'],
                                id: 'html-hpd-titulo',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/html-hpd-titulo.svg', '0px', '0px']
                            },
                            {
                                type: 'text',
                                id: 'Text8',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['0px', '84px', '481px', '274px', 'auto', 'auto'],
                                display: 'none',
                                align: 'justify',
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                                text: '<p style=\"margin: 0px;\">​Además de HTML, CSS y Javascript es importante que el diseñador web conozca de las siguientes herramientas:</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Editor de texto:  como notepad, notepad++.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">FTP: como winSCP.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Editor de imágenes: Gimp, Adobe.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Frameworks CSS: como Bootstrap.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Git y github: para administrar el código fuente.</p>'
                            },
                            {
                                rect: ['491px', '51px', '478px', '340px', 'auto', 'auto'],
                                id: 'html-hpd-ill-1',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/html-hpd-ill-1.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['1071px', '65', '293', '26', 'auto', 'auto'],
                            id: 'html-maquetado',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                id: 'html-maquetado-titulo2',
                                rect: ['0px', '0px', '293px', '26px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/html-maquetado-titulo2.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'html-maquetado2',
                                rect: ['0px', '39px', '918px', '351px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/html-maquetado.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['50', '65', '334', '19', 'auto', 'auto'],
                            id: 'html-npvedades',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                id: 'html-novedades',
                                rect: ['-1244px', '0px', '334px', '19px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/html-novedades.svg', '0px', '0px']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'Text10',
                                text: '<p style=\"margin: 0px;\">​La versión 5 del lenguaje introduce nuevos elementos que se relacionan más adelante, sin embargo, es importante anotar que HTML5 se refiere a un conjunto de nuevas características que se pueden utilizar individualmente si están soportadas por el navegador (NIEDERST, 2012).</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Para determinar si un navegador soporta una característica de HTML5 se utiliza una librería en Javascript llamada “Modernizr”. De esta forma un desarrollador puede hacer su código compatible tanto para nuevos navegadores como para versiones anteriores de los mismos.</p><p style=\"margin: 0px;\">​</p><ul><li><span style=\"font-weight: 700\">El elemento &lt;canvas&gt;:</span> es un “lienzo” digital sobre el cual se pueden hacer dibujos en formato de mapa de bits usando el lenguaje Javascript.</li><p style=\"margin: 0px;\">​</p><li><span style=\"font-weight: 700\">Video:</span> HTML5 define un nuevo elemento llamado &lt;video&gt; para incorporar video en las páginas web de forma nativa.&nbsp;</li></ul>',
                                align: 'justify',
                                rect: ['-1244px', '39px', '481px', '340px', 'auto', 'auto']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'Text10Copy',
                                text: '<p style=\"margin: 0px;\">​Anteriormente los videos se introducían a las páginas web usando productos de terceros como Adobe Flash, Microsoft ActiveX o Apple Quicktime. Con el tiempo esos productos de terceros generaban problemas de incompatibilidades entre plataformas, versiones, etc.&nbsp;</p><p style=\"margin: 0px;\">​</p><ul><li><span style=\"font-weight: 700\">Almacenamiento local:</span> el almacenamiento local provisto por HTML5 permite al sitio web almacenar datos en el computador para consultarlos posteriormente. Este sistema es parecido a las “cookies” pero fue diseñado para manejar mayor cantidad de información. Por otra parte las “cookies” son enviadas al servidor cada vez que se consulta una página lo cual incrementa el tráfico de la red.</li><p style=\"margin: 0px;\">​</p><li><span style=\"font-weight: 700\">Web workers:</span> los “web workers” permiten a los navegadores ejecutar código Javascript en background. Lo anterior quiere decir que un “web worker” hace uso de las capacidades multiproceso de los procesadores modernos para ejecutar tareas de manera simultánea con las tareas normales de un navegador.</li><p style=\"margin: 0px;\">​</p><li><span style=\"font-weight: 700\">Aplicaciones web fuera de línea:</span> además de ejecutar páginas web en línea una nueva característica del HTML5 permite ejecutar sitios web aún estando fuera de línea.</li></ul>',
                                align: 'justify',
                                rect: ['-723px', '-57px', '427px', '440px', 'auto', 'auto']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'Text11',
                                text: '<p style=\"margin: 0px;\">​Para que esta característica funcione se requiere que el navegador visite el sitio y solicite todos los archivos requeridos para su ejecución fuera de línea. Posteriormente cuando el navegador se encuentre sin conexión puede seguir navegando en la copia almacenada.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Una vez se restablezca la conexión se actualizan los archivos almacenados y el navegador sigue funcionando en línea.</p><p style=\"margin: 0px;\">​</p><ul><li><span style=\"font-weight: 700\">Geolocalización:</span> es una característica que permite determinar la localización del computador que está ejecutando el browser. El objeto de geolocalización suministrará las coordenadas del sitio pero previamente solicitará autorización al usuario.</li><ul>',
                                align: 'justify',
                                rect: ['1019px', '0px', '481px', '209px', 'auto', 'auto']
                            },
                            {
                                type: 'image',
                                id: 'btn-bg2',
                                rect: ['1027px', '220px', '466px', '126px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/btn-bg2.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                id: 'html-novedades-formularios-but',
                                type: 'image',
                                rect: ['1050px', '242px', '201px', '60px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/html-novedades-formularios-but.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                id: 'html-novedades-etiquetas-but',
                                type: 'image',
                                rect: ['1266px', '242px', '201px', '60px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/html-novedades-etiquetas-but.svg', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'p1-mc',
                            rect: ['1603px', '-64px', null, null, 'auto', 'auto'],
                            id: 'p1-mc2'
                        },
                        {
                            rect: ['472', '550px', '118', '28', 'auto', 'auto'],
                            id: 'pagination',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                id: 'pagination_indicator',
                                rect: ['14px', '0px', '90px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pagination_indicator.svg', '0px', '0px']
                            },
                            {
                                userClass: 'fw',
                                id: 'pagination_fw',
                                type: 'image',
                                rect: ['95px', '0px', '23px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pagination_fw.svg', '0px', '0px']
                            },
                            {
                                userClass: 'bw',
                                id: 'pagination_bw',
                                type: 'image',
                                rect: ['0px', '0px', '23px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pagination_bw.svg', '0px', '0px']
                            },
                            {
                                type: 'text',
                                id: 'unode',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['38px', '5px', 'auto', 'auto', 'auto', 'auto'],
                                display: 'none',
                                align: 'justify',
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​1 de 2</p>'
                            },
                            {
                                type: 'text',
                                id: 'dosde',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['38px', '5px', 'auto', 'auto', 'auto', 'auto'],
                                display: 'none',
                                align: 'justify',
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​2 de 2</p>'
                            }]
                        },
                        {
                            rect: ['229px', '195px', '119px', '28px', 'auto', 'auto'],
                            id: 'clic-ampliar',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/clic-ampliar.svg', '0px', '0px']
                        },
                        {
                            rect: ['708px', '253px', '101px', '33px', 'auto', 'auto'],
                            id: 'clic-mas-info',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/clic-mas-info.svg', '0px', '0px']
                        },
                        {
                            rect: ['985px', '-55px', '22px', '22px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            id: 'btn-cerrar-2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-2.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'html-bsm-mc',
                            symbolName: 'html-bsm-mc',
                            rect: ['11px', '572px', '1008', '49', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '464px', '37px']
                        }
                    }
                },
                timeline: {
                    duration: 5300,
                    autoPlay: true,
                    labels: {
                        "browser": 1250,
                        "archivo": 1750,
                        "evd": 2500,
                        "fed": 3000,
                        "hpd": 3750,
                        "maquetado": 4250,
                        "novedades": 4750
                    },
                    data: [
                        [
                            "eid242",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Text5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid311",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${Text7Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid322",
                            "display",
                            3550,
                            0,
                            "linear",
                            "${Text7Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid235",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${Text5Copy}",
                            '270px',
                            '270px'
                        ],
                        [
                            "eid188",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${btn-cerrar-2}",
                            '-55px',
                            '-55px'
                        ],
                        [
                            "eid392",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${html-npvedades}",
                            'none',
                            'block'
                        ],
                        [
                            "eid393",
                            "display",
                            5300,
                            0,
                            "linear",
                            "${html-npvedades}",
                            'block',
                            'none'
                        ],
                        [
                            "eid391",
                            "left",
                            4750,
                            250,
                            "linear",
                            "${html-novedades}",
                            '1020px',
                            '0px'
                        ],
                        [
                            "eid396",
                            "left",
                            5000,
                            250,
                            "linear",
                            "${html-novedades}",
                            '0px',
                            '-1244px'
                        ],
                        [
                            "eid177",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${html-browser}",
                            'none',
                            'block'
                        ],
                        [
                            "eid182",
                            "display",
                            1550,
                            0,
                            "linear",
                            "${html-browser}",
                            'block',
                            'none'
                        ],
                        [
                            "eid227",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${html-archivo-ill2}",
                            '153px',
                            '153px'
                        ],
                        [
                            "eid187",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${btn-cerrar-2}",
                            '985px',
                            '985px'
                        ],
                        [
                            "eid252",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${html-archivo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid253",
                            "display",
                            2300,
                            0,
                            "linear",
                            "${html-archivo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid238",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Text5Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid306",
                            "top",
                            3250,
                            0,
                            "linear",
                            "${html-fed2-ill2}",
                            '65px',
                            '65px'
                        ],
                        [
                            "eid293",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${html-fed-titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid321",
                            "display",
                            3550,
                            0,
                            "linear",
                            "${html-fed-titulo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid411",
                            "left",
                            5000,
                            250,
                            "linear",
                            "${btn-bg2}",
                            '1027px',
                            '8px'
                        ],
                        [
                            "eid181",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${clic-mas-info}",
                            'none',
                            'block'
                        ],
                        [
                            "eid183",
                            "display",
                            1550,
                            0,
                            "linear",
                            "${clic-mas-info}",
                            'block',
                            'none'
                        ],
                        [
                            "eid197",
                            "left",
                            1750,
                            250,
                            "linear",
                            "${TextCopy}",
                            '1566px',
                            '550px'
                        ],
                        [
                            "eid207",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${TextCopy}",
                            '550px',
                            '-692px'
                        ],
                        [
                            "eid218",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${Text5}",
                            '1043px',
                            '25px'
                        ],
                        [
                            "eid199",
                            "left",
                            1750,
                            250,
                            "linear",
                            "${html-archivo-titulo}",
                            '1041px',
                            '25px'
                        ],
                        [
                            "eid208",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${html-archivo-titulo}",
                            '25px',
                            '-1217px'
                        ],
                        [
                            "eid336",
                            "left",
                            3750,
                            250,
                            "linear",
                            "${Text8}",
                            '0px',
                            '-423px'
                        ],
                        [
                            "eid390",
                            "left",
                            4750,
                            250,
                            "linear",
                            "${Text10}",
                            '1020px',
                            '0px'
                        ],
                        [
                            "eid395",
                            "left",
                            5000,
                            250,
                            "linear",
                            "${Text10}",
                            '0px',
                            '-1244px'
                        ],
                        [
                            "eid307",
                            "left",
                            3250,
                            250,
                            "linear",
                            "${html-fed2-ill1}",
                            '1634px',
                            '615px'
                        ],
                        [
                            "eid309",
                            "left",
                            3250,
                            250,
                            "linear",
                            "${Text7}",
                            '1582px',
                            '563px'
                        ],
                        [
                            "eid243",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Text5Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid249",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${dosde}",
                            'none',
                            'block'
                        ],
                        [
                            "eid325",
                            "display",
                            3200,
                            0,
                            "linear",
                            "${dosde}",
                            'block',
                            'none'
                        ],
                        [
                            "eid327",
                            "display",
                            3450,
                            0,
                            "linear",
                            "${dosde}",
                            'none',
                            'block'
                        ],
                        [
                            "eid413",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${dosde}",
                            'block',
                            'none'
                        ],
                        [
                            "eid414",
                            "display",
                            5200,
                            0,
                            "linear",
                            "${dosde}",
                            'none',
                            'block'
                        ],
                        [
                            "eid150",
                            "top",
                            750,
                            250,
                            "linear",
                            "${html-bsm-mc}",
                            '572px',
                            '488px'
                        ],
                        [
                            "eid246",
                            "top",
                            1750,
                            250,
                            "linear",
                            "${pagination}",
                            '550px',
                            '450px'
                        ],
                        [
                            "eid250",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${pagination}",
                            'none',
                            'block'
                        ],
                        [
                            "eid251",
                            "display",
                            2300,
                            0,
                            "linear",
                            "${pagination}",
                            'block',
                            'none'
                        ],
                        [
                            "eid315",
                            "display",
                            3200,
                            0,
                            "linear",
                            "${pagination}",
                            'none',
                            'block'
                        ],
                        [
                            "eid316",
                            "display",
                            3550,
                            0,
                            "linear",
                            "${pagination}",
                            'block',
                            'none'
                        ],
                        [
                            "eid397",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${pagination}",
                            'none',
                            'block'
                        ],
                        [
                            "eid398",
                            "display",
                            5300,
                            0,
                            "linear",
                            "${pagination}",
                            'block',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid288",
                            "left",
                            3000,
                            250,
                            "linear",
                            "${Text2}",
                            '1581px',
                            '563px'
                        ],
                        [
                            "eid294",
                            "left",
                            3250,
                            250,
                            "linear",
                            "${Text2}",
                            '563px',
                            '-691px'
                        ],
                        [
                            "eid337",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${html-hpd-ill-1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid338",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${html-hpd-titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid343",
                            "left",
                            3750,
                            250,
                            "linear",
                            "${html-hpd}",
                            '1071px',
                            '471px'
                        ],
                        [
                            "eid264",
                            "left",
                            2500,
                            250,
                            "linear",
                            "${evd-ill1}",
                            '1070px',
                            '0px'
                        ],
                        [
                            "eid152",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${html-ill1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid305",
                            "left",
                            3250,
                            250,
                            "linear",
                            "${html-fed2-ill2}",
                            '2105px',
                            '1086px'
                        ],
                        [
                            "eid233",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${Text5Copy3}",
                            '270px',
                            '270px'
                        ],
                        [
                            "eid258",
                            "top",
                            2750,
                            0,
                            "linear",
                            "${p1-mc2}",
                            '-64px',
                            '-64px'
                        ],
                        [
                            "eid236",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${btn-bg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid408",
                            "left",
                            5000,
                            250,
                            "linear",
                            "${Text11}",
                            '1019px',
                            '0px'
                        ],
                        [
                            "eid276",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${html-evd}",
                            'none',
                            'block'
                        ],
                        [
                            "eid277",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${html-evd}",
                            'block',
                            'none'
                        ],
                        [
                            "eid271",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${evd-titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid275",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${evd-titulo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid303",
                            "left",
                            3250,
                            250,
                            "linear",
                            "${Text7Copy}",
                            '2098px',
                            '1079px'
                        ],
                        [
                            "eid265",
                            "left",
                            2500,
                            250,
                            "linear",
                            "${Text6}",
                            '1073px',
                            '3px'
                        ],
                        [
                            "eid380",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${html-maquetado}",
                            'none',
                            'block'
                        ],
                        [
                            "eid381",
                            "display",
                            4550,
                            0,
                            "linear",
                            "${html-maquetado}",
                            'block',
                            'none'
                        ],
                        [
                            "eid228",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${btn-bg}",
                            '1640px',
                            '622px'
                        ],
                        [
                            "eid193",
                            "left",
                            1750,
                            250,
                            "linear",
                            "${Text}",
                            '1041px',
                            '25px'
                        ],
                        [
                            "eid205",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${Text}",
                            '25px',
                            '-1217px'
                        ],
                        [
                            "eid239",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${clic-ampliar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid281",
                            "display",
                            2300,
                            0,
                            "linear",
                            "${clic-ampliar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid282",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${clic-ampliar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid330",
                            "display",
                            3550,
                            0,
                            "linear",
                            "${clic-ampliar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid232",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${Text5Copy3}",
                            '1554px',
                            '536px'
                        ],
                        [
                            "eid247",
                            "display",
                            1950,
                            0,
                            "linear",
                            "${unode}",
                            'none',
                            'block'
                        ],
                        [
                            "eid248",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${unode}",
                            'block',
                            'none'
                        ],
                        [
                            "eid324",
                            "display",
                            3200,
                            0,
                            "linear",
                            "${unode}",
                            'none',
                            'block'
                        ],
                        [
                            "eid326",
                            "display",
                            3450,
                            0,
                            "linear",
                            "${unode}",
                            'block',
                            'none'
                        ],
                        [
                            "eid412",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${unode}",
                            'none',
                            'block'
                        ],
                        [
                            "eid415",
                            "display",
                            5200,
                            0,
                            "linear",
                            "${unode}",
                            'block',
                            'none'
                        ],
                        [
                            "eid379",
                            "left",
                            4250,
                            250,
                            "linear",
                            "${html-maquetado}",
                            '1071px',
                            '50px'
                        ],
                        [
                            "eid308",
                            "top",
                            3250,
                            0,
                            "linear",
                            "${html-fed2-ill1}",
                            '137px',
                            '137px'
                        ],
                        [
                            "eid179",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${html-browser}",
                            '1065px',
                            '50px'
                        ],
                        [
                            "eid224",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${html-archivo-tabla1}",
                            '1562px',
                            '544px'
                        ],
                        [
                            "eid237",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${html-archivo-etiquetas-but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid234",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${Text5Copy}",
                            '1043px',
                            '25px'
                        ],
                        [
                            "eid289",
                            "left",
                            3000,
                            250,
                            "linear",
                            "${html-fed-titulo}",
                            '1581px',
                            '563px'
                        ],
                        [
                            "eid295",
                            "left",
                            3250,
                            250,
                            "linear",
                            "${html-fed-titulo}",
                            '563px',
                            '-691px'
                        ],
                        [
                            "eid291",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${html-fed-ill1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid319",
                            "display",
                            3550,
                            0,
                            "linear",
                            "${html-fed-ill1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid241",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Text5Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid314",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${html-fed2-ill1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid318",
                            "display",
                            3550,
                            0,
                            "linear",
                            "${html-fed2-ill1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid149",
                            "left",
                            250,
                            250,
                            "linear",
                            "${Text3}",
                            '-709px',
                            '49px'
                        ],
                        [
                            "eid204",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${TextCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid340",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${html-hpd}",
                            'none',
                            'block'
                        ],
                        [
                            "eid341",
                            "display",
                            4050,
                            0,
                            "linear",
                            "${html-hpd}",
                            'block',
                            'none'
                        ],
                        [
                            "eid230",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${html-archivo-etiquetas-but}",
                            '1679px',
                            '661px'
                        ],
                        [
                            "eid267",
                            "left",
                            2500,
                            250,
                            "linear",
                            "${evd-titulo}",
                            '1073px',
                            '3px'
                        ],
                        [
                            "eid312",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${html-fed2-ill2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid317",
                            "display",
                            3550,
                            0,
                            "linear",
                            "${html-fed2-ill2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid231",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${html-archivo-etiquetas-but}",
                            '359px',
                            '359px'
                        ],
                        [
                            "eid304",
                            "top",
                            3250,
                            0,
                            "linear",
                            "${Text7Copy}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid148",
                            "left",
                            500,
                            250,
                            "linear",
                            "${html-ill1}",
                            '1061px',
                            '570px'
                        ],
                        [
                            "eid226",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${html-archivo-ill2}",
                            '1135px',
                            '117px'
                        ],
                        [
                            "eid328",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${html-fed}",
                            'none',
                            'block'
                        ],
                        [
                            "eid329",
                            "display",
                            3550,
                            0,
                            "linear",
                            "${html-fed}",
                            'block',
                            'none'
                        ],
                        [
                            "eid221",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${Text5Copy2}",
                            '-7px',
                            '-7px'
                        ],
                        [
                            "eid220",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${Text5Copy2}",
                            '1554px',
                            '536px'
                        ],
                        [
                            "eid225",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${html-archivo-tabla1}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid313",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${Text7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid323",
                            "display",
                            3550,
                            0,
                            "linear",
                            "${Text7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid269",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${evd-ill1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid273",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${evd-ill1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid222",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${clic-ampliar}",
                            '1677px',
                            '727px'
                        ],
                        [
                            "eid278",
                            "left",
                            2250,
                            750,
                            "linear",
                            "${clic-ampliar}",
                            '727px',
                            '735px'
                        ],
                        [
                            "eid297",
                            "left",
                            3250,
                            250,
                            "linear",
                            "${clic-ampliar}",
                            '735px',
                            '229px'
                        ],
                        [
                            "eid339",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${Text8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid219",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${Text5}",
                            '76px',
                            '76px'
                        ],
                        [
                            "eid389",
                            "left",
                            4750,
                            250,
                            "linear",
                            "${Text10Copy}",
                            '1541px',
                            '521px'
                        ],
                        [
                            "eid394",
                            "left",
                            5000,
                            250,
                            "linear",
                            "${Text10Copy}",
                            '521px',
                            '-723px'
                        ],
                        [
                            "eid310",
                            "top",
                            3250,
                            0,
                            "linear",
                            "${Text7}",
                            '65px',
                            '65px'
                        ],
                        [
                            "eid409",
                            "left",
                            5000,
                            250,
                            "linear",
                            "${html-novedades-formularios-but}",
                            '1050px',
                            '31px'
                        ],
                        [
                            "eid240",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${html-archivo-tabla1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid270",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${Text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid274",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${Text6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid335",
                            "left",
                            3750,
                            250,
                            "linear",
                            "${html-hpd-ill-1}",
                            '491px',
                            '68px'
                        ],
                        [
                            "eid244",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${html-archivo-ill2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid180",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${btn-cerrar-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid410",
                            "left",
                            5000,
                            250,
                            "linear",
                            "${html-novedades-etiquetas-but}",
                            '1266px',
                            '247px'
                        ],
                        [
                            "eid290",
                            "left",
                            3000,
                            250,
                            "linear",
                            "${html-fed-ill1}",
                            '2114px',
                            '1096px'
                        ],
                        [
                            "eid296",
                            "left",
                            3250,
                            250,
                            "linear",
                            "${html-fed-ill1}",
                            '1096px',
                            '-158px'
                        ],
                        [
                            "eid195",
                            "left",
                            1750,
                            250,
                            "linear",
                            "${html-archivo-ill1}",
                            '1566px',
                            '550px'
                        ],
                        [
                            "eid206",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${html-archivo-ill1}",
                            '550px',
                            '-692px'
                        ],
                        [
                            "eid202",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid194",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${Text}",
                            '112px',
                            '112px'
                        ],
                        [
                            "eid268",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${p1-mc2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid272",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${p1-mc2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid399",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${p1-mc2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid279",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${clic-ampliar}",
                            '195px',
                            '230px'
                        ],
                        [
                            "eid280",
                            "top",
                            2250,
                            750,
                            "linear",
                            "${clic-ampliar}",
                            '230px',
                            '444px'
                        ],
                        [
                            "eid284",
                            "top",
                            3000,
                            250,
                            "linear",
                            "${clic-ampliar}",
                            '444px',
                            '441px'
                        ],
                        [
                            "eid298",
                            "top",
                            3250,
                            250,
                            "linear",
                            "${clic-ampliar}",
                            '441px',
                            '439px'
                        ],
                        [
                            "eid203",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${html-archivo-titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid196",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${html-archivo-ill1}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid266",
                            "left",
                            2500,
                            250,
                            "linear",
                            "${p1-mc2}",
                            '1603px',
                            '557px'
                        ],
                        [
                            "eid402",
                            "left",
                            2750,
                            2250,
                            "linear",
                            "${p1-mc2}",
                            '557px',
                            '1069px'
                        ],
                        [
                            "eid403",
                            "left",
                            5000,
                            250,
                            "linear",
                            "${p1-mc2}",
                            '1069px',
                            '557px'
                        ],
                        [
                            "eid200",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${html-archivo-titulo}",
                            '73px',
                            '73px'
                        ],
                        [
                            "eid334",
                            "left",
                            3750,
                            250,
                            "linear",
                            "${html-hpd-titulo}",
                            '0px',
                            '-423px'
                        ],
                        [
                            "eid229",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${btn-bg}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid292",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid320",
                            "display",
                            3550,
                            0,
                            "linear",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid201",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${html-archivo-ill1}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "html-bsm-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'bg',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1008px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['14px', '-31px', '53px', '61px', 'auto', 'auto'],
                            id: 'bsm-clic-icon',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bsm-clic-icon.svg', '0px', '0px']
                        },
                        {
                            rect: ['81px', '0px', '928px', '49px', 'auto', 'auto'],
                            id: 'html-bsm_separadores',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/html-bsm_separadores.svg', '0px', '0px']
                        },
                        {
                            rect: ['118px', '9px', '57px', '30px', 'auto', 'auto'],
                            id: 'html-bsm_browser',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/html-bsm_browser.svg', '0px', '0px']
                        },
                        {
                            rect: ['246px', '9px', '41px', '27px', 'auto', 'auto'],
                            id: 'html-bsm_archivo',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/html-bsm_archivo.svg', '0px', '0px']
                        },
                        {
                            rect: ['359px', '9px', '64px', '27px', 'auto', 'auto'],
                            id: 'html-bsm_evd',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/html-bsm_evd.svg', '0px', '0px']
                        },
                        {
                            rect: ['495px', '9px', '50px', '27px', 'auto', 'auto'],
                            id: 'html-bsm_fed',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/html-bsm_fed.svg', '0px', '0px']
                        },
                        {
                            rect: ['618px', '9px', '78px', '30px', 'auto', 'auto'],
                            id: 'html-bsm_hpd',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/html-bsm_hpd.svg', '0px', '0px']
                        },
                        {
                            rect: ['769px', '9px', '68px', '30px', 'auto', 'auto'],
                            id: 'html-bsm_maquetado',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/html-bsm_maquetado.svg', '0px', '0px']
                        },
                        {
                            rect: ['908px', '16px', '60px', '11px', 'auto', 'auto'],
                            id: 'html-bsm_novedades',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/html-bsm_novedades.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['81', '0px', '130px', '49px', 'auto', 'auto'],
                            id: 'html-bsm_browser-a',
                            fill: ['rgba(0,0,0,0)', 'images/html-bsm_browser-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['211px', '0px', '112px', '49px', 'auto', 'auto'],
                            id: 'html-bsm_archivo-a',
                            fill: ['rgba(0,0,0,0)', 'images/html-bsm_archivo-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['323px', '0px', '136px', '49px', 'auto', 'auto'],
                            id: 'html-bsm_evd-a',
                            fill: ['rgba(0,0,0,0)', 'images/html-bsm_evd-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['458px', '0px', '123px', '49px', 'auto', 'auto'],
                            id: 'html-bsm_fed-a',
                            fill: ['rgba(0,0,0,0)', 'images/html-bsm_fed-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['581px', '0px', '152px', '49px', 'auto', 'auto'],
                            id: 'html-bsm_hpd-a',
                            fill: ['rgba(0,0,0,0)', 'images/html-bsm_hpd-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['732px', '0px', '141px', '49px', 'auto', 'auto'],
                            id: 'html-bsm_maquetado-a',
                            fill: ['rgba(0,0,0,0)', 'images/html-bsm_maquetado-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['872px', '0px', '136px', '49px', 'auto', 'auto'],
                            id: 'html-bsm_novedades-a',
                            fill: ['rgba(0,0,0,0)', 'images/html-bsm_novedades-a.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1008px', '49px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "browser": 250,
                        "archivo": 500,
                        "evd": 750,
                        "fed": 1000,
                        "hpd": 1250,
                        "maquetado": 1500,
                        "novedades": 1750
                    },
                    data: [
                        [
                            "eid132",
                            "display",
                            200,
                            0,
                            "linear",
                            "${html-bsm_browser-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid133",
                            "display",
                            450,
                            0,
                            "linear",
                            "${html-bsm_browser-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid142",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${html-bsm_maquetado-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid143",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${html-bsm_maquetado-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid140",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${html-bsm_hpd-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid141",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${html-bsm_hpd-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            450,
                            0,
                            "linear",
                            "${html-bsm_archivo-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid135",
                            "display",
                            700,
                            0,
                            "linear",
                            "${html-bsm_archivo-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            700,
                            0,
                            "linear",
                            "${html-bsm_evd-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid137",
                            "display",
                            950,
                            0,
                            "linear",
                            "${html-bsm_evd-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${html-bsm_novedades-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid138",
                            "display",
                            950,
                            0,
                            "linear",
                            "${html-bsm_fed-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid139",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${html-bsm_fed-a}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "html-browser-sm": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['-31px', '301px', '445px', '121px', 'auto', 'auto'],
                            id: 'html-browser-sm_iu',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm_iu.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['-31px', '301px', '445px', '121px', 'auto', 'auto'],
                            id: 'html-browser-sm_mb',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm_mb.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['-31px', '301px', '445px', '121px', 'auto', 'auto'],
                            id: 'html-browser-sm_md',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm_md.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['-31px', '301px', '445px', '121px', 'auto', 'auto'],
                            id: 'html-browser-sm_redes',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm_redes.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['-31px', '301px', '468px', '121px', 'auto', 'auto'],
                            id: 'html-browser-sm_siu',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm_siu.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['-31px', '301px', '446px', '121px', 'auto', 'auto'],
                            id: 'html-browser-sm_ijs',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm_ijs.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['-31px', '301px', '468px', '121px', 'auto', 'auto'],
                            id: 'html-browser-sm_ad',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm_ad.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '91px', '105px', 'auto', 'auto'],
                            id: 'html-browser-sm-btn_iu',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm-btn_iu.svg', '0px', '0px']
                        },
                        {
                            rect: ['104px', '0', '91px', '105px', 'auto', 'auto'],
                            id: 'html-browser-sm-btn_mb',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm-btn_mb.svg', '0px', '0px']
                        },
                        {
                            rect: ['209px', '0', '91px', '105px', 'auto', 'auto'],
                            id: 'html-browser-sm-btn_md',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm-btn_md.svg', '0px', '0px']
                        },
                        {
                            rect: ['316px', '0', '91px', '105px', 'auto', 'auto'],
                            id: 'html-browser-sm-btn_redes',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm-btn_redes.svg', '0px', '0px']
                        },
                        {
                            rect: ['53px', '88px', '91px', '105px', 'auto', 'auto'],
                            id: 'html-browser-sm-btn_siu',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm-btn_siu.svg', '0px', '0px']
                        },
                        {
                            rect: ['157px', '88px', '91px', '105px', 'auto', 'auto'],
                            id: 'html-browser-sm-btn_ijs',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm-btn_ijs.svg', '0px', '0px']
                        },
                        {
                            rect: ['264px', '88px', '91px', '105px', 'auto', 'auto'],
                            id: 'html-browser-sm-btn_ad',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm-btn_ad.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['0', '0', '91px', '105px', 'auto', 'auto'],
                            id: 'html-browser-sm-btn_iu-a',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm-btn_iu-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['104px', '0', '91px', '105px', 'auto', 'auto'],
                            id: 'html-browser-sm-btn_mb-a',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm-btn_mb-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['209px', '0', '91px', '105px', 'auto', 'auto'],
                            id: 'html-browser-sm-btn_md-a',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm-btn_md-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['316px', '0', '91px', '105px', 'auto', 'auto'],
                            id: 'html-browser-sm-btn_redes-a',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm-btn_redes-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['53px', '88px', '91px', '105px', 'auto', 'auto'],
                            id: 'html-browser-sm-btn_siu-a',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm-btn_siu-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['157px', '88px', '91px', '105px', 'auto', 'auto'],
                            id: 'html-browser-sm-btn_ijs-a',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm-btn_ijs-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['264px', '88px', '91px', '105px', 'auto', 'auto'],
                            id: 'html-browser-sm-btn_ad-a',
                            fill: ['rgba(0,0,0,0)', 'images/html-browser-sm-btn_ad-a.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '22px', '22px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    labels: {
                        "iu": 0,
                        "mb": 250,
                        "md": 500,
                        "redes": 750,
                        "siu": 1000,
                        "ijs": 1250,
                        "ad": 1500
                    },
                    data: [
                        [
                            "eid164",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${html-browser-sm_ad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid156",
                            "display",
                            450,
                            0,
                            "linear",
                            "${html-browser-sm_md}",
                            'none',
                            'block'
                        ],
                        [
                            "eid157",
                            "display",
                            700,
                            0,
                            "linear",
                            "${html-browser-sm_md}",
                            'block',
                            'none'
                        ],
                        [
                            "eid170",
                            "display",
                            700,
                            0,
                            "linear",
                            "${html-browser-sm-btn_redes-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid171",
                            "display",
                            950,
                            0,
                            "linear",
                            "${html-browser-sm-btn_redes-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid168",
                            "display",
                            450,
                            0,
                            "linear",
                            "${html-browser-sm-btn_md-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid169",
                            "display",
                            700,
                            0,
                            "linear",
                            "${html-browser-sm-btn_md-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid166",
                            "display",
                            200,
                            0,
                            "linear",
                            "${html-browser-sm-btn_mb-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid167",
                            "display",
                            450,
                            0,
                            "linear",
                            "${html-browser-sm-btn_mb-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid162",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${html-browser-sm_ijs}",
                            'none',
                            'block'
                        ],
                        [
                            "eid163",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${html-browser-sm_ijs}",
                            'block',
                            'none'
                        ],
                        [
                            "eid154",
                            "display",
                            200,
                            0,
                            "linear",
                            "${html-browser-sm_mb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid155",
                            "display",
                            450,
                            0,
                            "linear",
                            "${html-browser-sm_mb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid165",
                            "display",
                            200,
                            0,
                            "linear",
                            "${html-browser-sm-btn_iu-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid158",
                            "display",
                            700,
                            0,
                            "linear",
                            "${html-browser-sm_redes}",
                            'none',
                            'block'
                        ],
                        [
                            "eid159",
                            "display",
                            950,
                            0,
                            "linear",
                            "${html-browser-sm_redes}",
                            'block',
                            'none'
                        ],
                        [
                            "eid153",
                            "display",
                            200,
                            0,
                            "linear",
                            "${html-browser-sm_iu}",
                            'block',
                            'none'
                        ],
                        [
                            "eid174",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${html-browser-sm-btn_ijs-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid175",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${html-browser-sm-btn_ijs-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid172",
                            "display",
                            950,
                            0,
                            "linear",
                            "${html-browser-sm-btn_siu-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid173",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${html-browser-sm-btn_siu-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid160",
                            "display",
                            950,
                            0,
                            "linear",
                            "${html-browser-sm_siu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid161",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${html-browser-sm_siu}",
                            'block',
                            'none'
                        ],
                        [
                            "eid176",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${html-browser-sm-btn_ad-a}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "p1-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'p1-no-face',
                            rect: ['0px', '0px', '448px', '601px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/p1-no-face.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '448px', '601px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "css-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'css-titulo',
                            type: 'image',
                            rect: ['0px', '0px', '654px', '37px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/css-titulo.svg', '0px', '0px']
                        },
                        {
                            rect: ['-730px', '79px', '467px', '167px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            align: 'justify',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Las hojas de estilo en cascada o CSS es un lenguaje para describir la forma como los documentos estructurados como HTML o XML serán dibujados en un pantalla, escritos en papel o leídos en voz alta, etc.          (w3c, 2016).</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El lenguaje CSS es un componente fundamental en el diseño web cuyo principal objetivo es describir la presentación que tendrán los elementos estructurales que conforman una página HTML. Por medio de las reglas definidas en el lenguaje CSS se pueden  insertar bordes, asignar colores al texto, asignar colores al fondo, entre muchos otros.</p>',
                            display: 'block',
                            type: 'text'
                        },
                        {
                            rect: ['-664px', '246px', '427px', '205px', 'auto', 'auto'],
                            id: 'css-ill1',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/css-ill1.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            display: 'block',
                            symbolName: 'p1-mc',
                            rect: ['1083px', '-68px', null, null, 'auto', 'auto'],
                            id: 'p1-mc'
                        },
                        {
                            rect: ['1069px', '67', '235', '24', 'auto', 'auto'],
                            id: 'reglas',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                id: 'css-reglas-titulo',
                                type: 'image',
                                rect: ['0px', '0px', '235px', '24px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/css-reglas-titulo.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '42px', '462px', '83px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text12',
                                text: '<p style=\"margin: 0px;\">​CSS suministra un conjunto de reglas que son interpretadas por los navegadores al momento de dibujar las páginas en la pantalla.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Una regla básica CSS tiene la siguiente estructura:</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['514px', '0px', '434px', '146px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text12Copy2',
                                text: '<p style=\"margin: 0px;\">​Declaraciones: par o conjunto de pares con la estructura propiedad, valor.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Propiedad: característica del elemento HTML que se quiere intervenir o afectar.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Valor: valor a aplicar a la propiedad.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Ejemplo:</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['0px', '308px', '462px', '72px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text12Copy',
                                text: '<p style=\"margin: 0px;\">​Regla CSS: conjunto compuesto por un selector con una declaración.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Selector: indica el elemento HTML sobre el cual operará la regla.​</p><p style=\"margin: 0px;\"></p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                id: 'css-reglas-cuadro1',
                                type: 'image',
                                rect: ['47px', '125px', '367px', '163px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/css-reglas-cuadro1.svg', '0px', '0px']
                            },
                            {
                                id: 'css-reglas-cuadro2',
                                type: 'image',
                                rect: ['563px', '154px', '336px', '144px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/css-reglas-cuadro2.svg', '0px', '0px']
                            },
                            {
                                id: 'btn-bg3',
                                type: 'image',
                                rect: ['591px', '308px', '279px', '104px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/btn-bg.svg', '0px', '0px']
                            },
                            {
                                rect: ['630px', '315px', '201px', '60px', 'auto', 'auto'],
                                id: 'css-reglas-selectores-but',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/css-reglas-selectores-but.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['48px', '67', '262', '24', 'auto', 'auto'],
                            id: 'conceptos',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                id: 'btn-bg32',
                                type: 'image',
                                rect: ['63px', '115px', '389px', '271px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/btn-bg3.svg', '0px', '0px']
                            },
                            {
                                id: 'css-conceptos-ill1',
                                type: 'image',
                                rect: ['516px', '17px', '427px', '358px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/css-conceptos-ill1.svg', '0px', '0px']
                            },
                            {
                                id: 'css-concepto-titulo',
                                type: 'image',
                                rect: ['0px', '0px', '262px', '24px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/css-concepto-titulo.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '33px', '467px', '58px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text13',
                                text: '<p style=\"margin: 0px;\">​CSS incorpora los siguientes conceptos de diseño que se deben tener en cuenta al momento de elaborar las páginas web (NIEDERST, 2012).</p><p style=\"margin: 0px;\">​</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['104px', '124px', '308px', '63px', 'auto', 'auto'],
                                id: 'css-concepto-herencia-but',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/css-concepto-herencia-but.svg', '0px', '0px']
                            },
                            {
                                rect: ['104px', '199px', '308px', '63px', 'auto', 'auto'],
                                id: 'css-concepto-box-but',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/css-concepto-box-but.svg', '0px', '0px']
                            },
                            {
                                rect: ['104px', '275px', '308px', '63px', 'auto', 'auto'],
                                id: 'css-concepto-estilos-but',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/css-concepto-estilos-but.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['1074px', '67', '268', '24', 'auto', 'auto'],
                            id: 'librerias',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                id: 'css-librerias-titulo',
                                type: 'image',
                                rect: ['0px', '0px', '268px', '24px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/css-librerias-titulo.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '35px', '467px', '307px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text14',
                                text: '<p style=\"margin: 0px;\">​Existen bibliotecas de estilos que facilitan la labor del desarrollador al integrar un conjunto de estilos que se pueden usar en sus aplicaciones web en su mayoría de manera gratuita.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Un ejemplo es la librería es animate.css que permite realizar animaciones a los textos. La librería alertify permite generar mensajes dentro de la página web de manera sencilla.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">También existen frameworks que son un conjunto de librerías que abarcan no solo uno sino varios aspectos de la tecnología CSS.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Un framework ampliamente utilizado (según su popularidad en el sitio Github.com) es Bootstrap el cual provee gran variedad de estilos para cada elemento HTML y además habilita el diseño adaptativo                        (Responsive Design) del sitio web.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El diseño adaptativo es una estrategia para que el sitio web se adapte a los distintos tamaños de pantallas que existen como son: celulares, tabletas, portátiles y computadores de escritorio.</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                id: 'css-librerias-ill1',
                                type: 'image',
                                rect: ['533px', '-20px', '407px', '425px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/css-librerias-ill1.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['1064px', '67', '391', '24', 'auto', 'auto'],
                            id: 'ejemplos',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                id: 'css-ejemplos-titulo',
                                type: 'image',
                                rect: ['0px', '0px', '391px', '24px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/css-ejemplos-titulo.svg', '0px', '0px']
                            },
                            {
                                id: 'css-ejemplos-ill1',
                                type: 'image',
                                rect: ['0px', '32px', '658px', '381px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/css-ejemplos-ill1.svg', '0px', '0px']
                            },
                            {
                                id: 'btn-bg4',
                                type: 'image',
                                rect: ['425px', '374px', '233px', '32px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/btn-bg4.svg', '0px', '0px']
                            },
                            {
                                id: 'p1-mc2',
                                symbolName: 'p1-mc',
                                rect: ['509px', '-133px', null, null, 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                rect: ['442px', '308px', '201px', '60px', 'auto', 'auto'],
                                id: 'css-ejemplos-but',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/css-ejemplos-but.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['1068px', '67', '172', '19', 'auto', 'auto'],
                            id: 'otros',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                id: 'css-otros-titulo',
                                type: 'image',
                                rect: ['0px', '0px', '172px', '19px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/css-otros-titulo.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '34px', '467px', '214px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text2',
                                text: '<p style=\"margin: 0px;\">​Durante las últimas versiones de CSS y gracias a su integración con HTML5, han sido grandes los avances que en relación a estilo e interactividad ha tenido esta tecnología.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Para el uso de estos nuevos estilos, es recomendable incluir los prefijos –moz- y –webkit- para su correcta interpretación en los navegadores basados en motores Gecko y WebKit como Firefox, Safari y Google Chrome.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Ejemplo, para definir la propiedad border-radius a un valor de 20px, se haría así:&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"color: rgb(241, 101, 41); font-style: italic; font-weight: 700;\">-moz-border-radius: 20px y –webkit-border-radius: 20px.</span></p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['518px', '0px', '439px', '19px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text2Copy',
                                text: '<p style=\"margin: 0px;\">​Se puede mejorar el estilo de las esquinas así:</p><p style=\"margin: 0px;\"><span style=\"color: rgb(241, 101, 41); font-style: italic; font-weight: 700;\"></span></p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['518px', '205px', '439px', '19px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text2Copy2',
                                text: '<p style=\"margin: 0px;\">​Se puede mejorar el estilo de la barra del menú así:</p><p style=\"margin: 0px;\"><span style=\"color: rgb(241, 101, 41); font-style: italic; font-weight: 700;\"></span></p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                id: 'clic-ampliar',
                                type: 'image',
                                rect: ['183px', '166px', '119px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/clic-ampliar.svg', '0px', '0px']
                            },
                            {
                                id: 'clic-ampliarCopy',
                                type: 'image',
                                rect: ['678px', '326px', '119px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/clic-ampliar.svg', '0px', '0px']
                            },
                            {
                                id: 'btn-bg42',
                                type: 'image',
                                rect: ['116px', '330px', '233px', '32px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/btn-bg4.svg', '0px', '0px']
                            },
                            {
                                rect: ['519px', '26px', '438px', '126px', 'auto', 'auto'],
                                id: 'css-otros-tabla1',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/css-otros-tabla1.svg', '0px', '0px']
                            },
                            {
                                rect: ['519px', '232px', '438px', '79px', 'auto', 'auto'],
                                id: 'css-otros-tabla2',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/css-otros-tabla2.svg', '0px', '0px']
                            },
                            {
                                rect: ['113px', '272px', '241px', '49px', 'auto', 'auto'],
                                id: 'css-otros-border-but',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/css-otros-border-but.svg', '0px', '0px']
                            },
                            {
                                rect: ['1030px', '0px', '467px', '26px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text3',
                                text: '<p style=\"margin: 0px;\">​Se puede usar la rotación de un elemento así:</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['1030px', '200px', '467px', '26px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text3Copy',
                                text: '<p style=\"margin: 0px;\">​La página web con los cambios introducidos queda así:</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['1030px', '37px', '466px', '109px', 'auto', 'auto'],
                                id: 'css-otros-tabla3',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/css-otros-tabla3.svg', '0px', '0px']
                            },
                            {
                                id: 'btn-bg',
                                type: 'image',
                                rect: ['1123px', '239px', '279px', '104px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/btn-bg.svg', '0px', '0px']
                            },
                            {
                                rect: ['1142px', '252px', '241px', '49px', 'auto', 'auto'],
                                id: 'css-otros-pagweb-but',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/css-otros-pagweb-but.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['472', '550px', '118', '28', 'auto', 'auto'],
                            id: 'pagination',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                id: 'pagination_indicator',
                                type: 'image',
                                rect: ['14px', '0px', '90px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pagination_indicator.svg', '0px', '0px']
                            },
                            {
                                rect: ['95px', '0px', '23px', '28px', 'auto', 'auto'],
                                id: 'pagination_fw',
                                userClass: 'fw',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_fw.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '23px', '28px', 'auto', 'auto'],
                                id: 'pagination_bw',
                                userClass: 'bw',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_bw.svg', '0px', '0px']
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['38px', '5px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'justify',
                                id: 'unode',
                                text: '<p style=\"margin: 0px;\">​1 de 2</p>',
                                display: 'none',
                                type: 'text'
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['38px', '5px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'justify',
                                id: 'dosde',
                                text: '<p style=\"margin: 0px;\">​2 de 2</p>',
                                display: 'none',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['44', '67', '278', '24', 'auto', 'auto'],
                            id: 'formularios',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                id: 'css-formularios-titulo',
                                type: 'image',
                                rect: ['0px', '0px', '278px', '24px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/css-formularios-titulo.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '42px', '469px', '103px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text4',
                                text: '<p style=\"margin: 0px;\">​Una vez revisadas las tecnologías HTML junto con las mejoras introducidas en la versión 5 y CSS se pueden construir formularios web con diseños y estilos más atractivos.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Para el ejemplo del recurso se puede agregar un formulario web en la sección &lt;aside&gt; como se muestra en el código siguiente:</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['518px', '280px', '438px', '82px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text4Copy2',
                                text: '<p style=\"margin: 0px;\">​Para la alineación de los campos de un formulario no se aconseja el uso de una tabla ya que este elemento no fue concebido para esta labor. Por otra parte dificulta la adopción de una estrategia de diseño adaptativo. En su lugar se deben aplicar los conceptos de CSS vistos en el recurso.</p><p style=\"margin: 0px;\"></p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['0px', '353px', '469px', '18px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text4Copy',
                                text: '<p style=\"margin: 0px;\">​La descripción del código fuente es la siguiente:</p><p style=\"margin: 0px;\"></p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['-4px', '146px', '476px', '162px', 'auto', 'auto'],
                                id: 'css-formularios-cuadro1',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/css-formularios-cuadro1.svg', '0px', '0px']
                            },
                            {
                                rect: ['518px', '0px', '437px', '227px', 'auto', 'auto'],
                                id: 'css-formularios-tabla1',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/css-formularios-tabla1.svg', '0px', '0px']
                            },
                            {
                                id: 'clic-ampliar2',
                                type: 'image',
                                rect: ['174px', '318px', '119px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/clic-ampliar.svg', '0px', '0px']
                            },
                            {
                                id: 'clic-ampliar2Copy',
                                type: 'image',
                                rect: ['677px', '236px', '119px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/clic-ampliar.svg', '0px', '0px']
                            },
                            {
                                id: 'css-formularios2',
                                type: 'image',
                                rect: ['0px', '0px', '949px', '188px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/css-formularios2.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '201px', '467px', '99px', 'auto', 'auto'],
                                id: 'css-formularios-cuadro2',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/css-formularios-cuadro2.svg', '0px', '0px']
                            },
                            {
                                id: 'clic-ampliar3',
                                type: 'image',
                                rect: ['173px', '307px', '119px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/clic-ampliar.svg', '0px', '0px']
                            },
                            {
                                id: 'clic-ampliar3Copy',
                                type: 'image',
                                rect: ['671px', '325px', '119px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/clic-ampliar.svg', '0px', '0px']
                            },
                            {
                                rect: ['512px', '51px', '438px', '267px', 'auto', 'auto'],
                                id: 'css-formularios-ill2',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/css-formularios-ill2.svg', '0px', '0px']
                            }]
                        },
                        {
                            id: 'css-bsm-mc',
                            symbolName: 'css-bsm-mc',
                            rect: ['9px', '573px', '1008', '49', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['983px', '-57px', '22px', '22px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            id: 'btn-cerrar-2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '654px', '37px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    labels: {
                        "reglas": 1250,
                        "conceptos": 1750,
                        "librerias": 2250,
                        "ejemplo": 2750,
                        "otros": 3250,
                        "formularios": 4000
                    },
                    data: [
                        [
                            "eid583",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${css-otros-tabla3}",
                            '1030px',
                            '0px'
                        ],
                        [
                            "eid480",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${Text2Copy2}",
                            '518px',
                            '-717px'
                        ],
                        [
                            "eid614",
                            "left",
                            4250,
                            250,
                            "linear",
                            "${css-formularios-titulo}",
                            '0px',
                            '-580px'
                        ],
                        [
                            "eid606",
                            "left",
                            4250,
                            250,
                            "linear",
                            "${clic-ampliar2}",
                            '174px',
                            '-1066px'
                        ],
                        [
                            "eid580",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${btn-bg}",
                            '1123px',
                            '93px'
                        ],
                        [
                            "eid605",
                            "left",
                            4250,
                            250,
                            "linear",
                            "${Text4Copy2}",
                            '518px',
                            '-722px'
                        ],
                        [
                            "eid623",
                            "left",
                            4250,
                            250,
                            "linear",
                            "${clic-ampliar3}",
                            '1229px',
                            '173px'
                        ],
                        [
                            "eid586",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${unode}",
                            'none',
                            'block'
                        ],
                        [
                            "eid587",
                            "display",
                            3700,
                            0,
                            "linear",
                            "${unode}",
                            'block',
                            'none'
                        ],
                        [
                            "eid590",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${unode}",
                            'none',
                            'block'
                        ],
                        [
                            "eid591",
                            "display",
                            4450,
                            0,
                            "linear",
                            "${unode}",
                            'block',
                            'none'
                        ],
                        [
                            "eid621",
                            "left",
                            4250,
                            250,
                            "linear",
                            "${css-formularios2}",
                            '1056px',
                            '0px'
                        ],
                        [
                            "eid483",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${Text2Copy}",
                            '518px',
                            '-717px'
                        ],
                        [
                            "eid439",
                            "left",
                            250,
                            250,
                            "linear",
                            "${css-ill1}",
                            '-664px',
                            '64px'
                        ],
                        [
                            "eid450",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${conceptos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid451",
                            "display",
                            2050,
                            0,
                            "linear",
                            "${conceptos}",
                            'block',
                            'none'
                        ],
                        [
                            "eid418",
                            "left",
                            4750,
                            0,
                            "linear",
                            "${css-bsm-mc}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid453",
                            "left",
                            2250,
                            250,
                            "linear",
                            "${librerias}",
                            '1074px',
                            '44px'
                        ],
                        [
                            "eid460",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${ejemplos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid461",
                            "display",
                            3050,
                            0,
                            "linear",
                            "${ejemplos}",
                            'block',
                            'none'
                        ],
                        [
                            "eid443",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid485",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${css-otros-tabla1}",
                            '519px',
                            '-716px'
                        ],
                        [
                            "eid454",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${librerias}",
                            'none',
                            'block'
                        ],
                        [
                            "eid455",
                            "display",
                            2550,
                            0,
                            "linear",
                            "${librerias}",
                            'block',
                            'none'
                        ],
                        [
                            "eid464",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${otros}",
                            'none',
                            'block'
                        ],
                        [
                            "eid465",
                            "display",
                            3800,
                            0,
                            "linear",
                            "${otros}",
                            'block',
                            'none'
                        ],
                        [
                            "eid479",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${css-otros-titulo}",
                            '0px',
                            '-1235px'
                        ],
                        [
                            "eid622",
                            "left",
                            4250,
                            250,
                            "linear",
                            "${css-formularios-cuadro2}",
                            '1056px',
                            '0px'
                        ],
                        [
                            "eid449",
                            "left",
                            1750,
                            250,
                            "linear",
                            "${conceptos}",
                            '1077px',
                            '48px'
                        ],
                        [
                            "eid441",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${p1-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid565",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${p1-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid596",
                            "display",
                            3800,
                            0,
                            "linear",
                            "${p1-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid484",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${css-otros-tabla2}",
                            '519px',
                            '-716px'
                        ],
                        [
                            "eid609",
                            "left",
                            4250,
                            250,
                            "linear",
                            "${css-formularios-tabla1}",
                            '518px',
                            '-722px'
                        ],
                        [
                            "eid440",
                            "left",
                            0,
                            250,
                            "linear",
                            "${Text}",
                            '-730px',
                            '44px'
                        ],
                        [
                            "eid625",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${formularios}",
                            'none',
                            'block'
                        ],
                        [
                            "eid445",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${reglas}",
                            '1069px',
                            '44px'
                        ],
                        [
                            "eid581",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${css-otros-pagweb-but}",
                            '1142px',
                            '112px'
                        ],
                        [
                            "eid437",
                            "top",
                            750,
                            250,
                            "linear",
                            "${css-bsm-mc}",
                            '573px',
                            '486px'
                        ],
                        [
                            "eid419",
                            "top",
                            4750,
                            0,
                            "linear",
                            "${css-bsm-mc}",
                            '486px',
                            '486px'
                        ],
                        [
                            "eid610",
                            "left",
                            4250,
                            250,
                            "linear",
                            "${clic-ampliar2Copy}",
                            '677px',
                            '-563px'
                        ],
                        [
                            "eid607",
                            "left",
                            4250,
                            250,
                            "linear",
                            "${css-formularios-cuadro1}",
                            '-4px',
                            '-1244px'
                        ],
                        [
                            "eid477",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${css-otros-border-but}",
                            '113px',
                            '-1122px'
                        ],
                        [
                            "eid612",
                            "left",
                            4250,
                            250,
                            "linear",
                            "${Text4}",
                            '0px',
                            '-1240px'
                        ],
                        [
                            "eid446",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${reglas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid447",
                            "display",
                            1550,
                            0,
                            "linear",
                            "${reglas}",
                            'block',
                            'none'
                        ],
                        [
                            "eid588",
                            "display",
                            3700,
                            0,
                            "linear",
                            "${dosde}",
                            'none',
                            'block'
                        ],
                        [
                            "eid589",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${dosde}",
                            'block',
                            'none'
                        ],
                        [
                            "eid592",
                            "display",
                            4450,
                            0,
                            "linear",
                            "${dosde}",
                            'none',
                            'block'
                        ],
                        [
                            "eid442",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${css-ill1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid553",
                            "top",
                            3250,
                            250,
                            "linear",
                            "${pagination}",
                            '550px',
                            '450px'
                        ],
                        [
                            "eid584",
                            "top",
                            3800,
                            0,
                            "linear",
                            "${pagination}",
                            '450px',
                            '450px'
                        ],
                        [
                            "eid585",
                            "top",
                            4000,
                            250,
                            "linear",
                            "${pagination}",
                            '550px',
                            '450px'
                        ],
                        [
                            "eid582",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${Text3}",
                            '1030px',
                            '0px'
                        ],
                        [
                            "eid593",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${pagination}",
                            'none',
                            'block'
                        ],
                        [
                            "eid594",
                            "display",
                            3800,
                            0,
                            "linear",
                            "${pagination}",
                            'block',
                            'none'
                        ],
                        [
                            "eid595",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${pagination}",
                            'none',
                            'block'
                        ],
                        [
                            "eid438",
                            "left",
                            500,
                            250,
                            "linear",
                            "${p1-mc}",
                            '1083px',
                            '560px'
                        ],
                        [
                            "eid567",
                            "left",
                            750,
                            2750,
                            "linear",
                            "${p1-mc}",
                            '560px',
                            '1070px'
                        ],
                        [
                            "eid568",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${p1-mc}",
                            '1070px',
                            '560px'
                        ],
                        [
                            "eid463",
                            "left",
                            3250,
                            250,
                            "linear",
                            "${otros}",
                            '1068px',
                            '44px'
                        ],
                        [
                            "eid481",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${Text2}",
                            '0px',
                            '-1235px'
                        ],
                        [
                            "eid459",
                            "left",
                            2750,
                            250,
                            "linear",
                            "${ejemplos}",
                            '1064px',
                            '44px'
                        ],
                        [
                            "eid608",
                            "left",
                            4250,
                            250,
                            "linear",
                            "${Text4Copy}",
                            '0px',
                            '-1240px'
                        ],
                        [
                            "eid579",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${Text3Copy}",
                            '1030px',
                            '0px'
                        ],
                        [
                            "eid476",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${clic-ampliarCopy}",
                            '678px',
                            '-557px'
                        ],
                        [
                            "eid611",
                            "top",
                            4500,
                            0,
                            "linear",
                            "${clic-ampliar2Copy}",
                            '236px',
                            '236px'
                        ],
                        [
                            "eid597",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${btn-cerrar-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid478",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${clic-ampliar}",
                            '678px',
                            '183px'
                        ],
                        [
                            "eid624",
                            "left",
                            4250,
                            250,
                            "linear",
                            "${css-formularios-ill2}",
                            '1568px',
                            '512px'
                        ],
                        [
                            "eid620",
                            "left",
                            4250,
                            250,
                            "linear",
                            "${clic-ampliar3Copy}",
                            '1727px',
                            '671px'
                        ],
                        [
                            "eid482",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${btn-bg42}",
                            '116px',
                            '-1119px'
                        ]
                    ]
                }
            },
            "js-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '654px', '37px', 'auto', 'auto'],
                            id: 'js-titulo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/js-titulo.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['37px', '55px', '467px', '403px', 'auto', 'auto'],
                            align: 'justify',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Javascript provee a las páginas web de interactividad, es decir,  permite que se pueda comunicar con el mundo exterior. Es un lenguaje interpretado lo cual quiere decir que no requiere que sea compilado o convertido en código de máquina para ejecutarse.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Una de las principales tareas de Javascript es la validación de los datos del usuario. Por ejemplo validar que una fecha sea válida, que un correo sea válido, etc. Además puede mostrar estos errores al usuario generando una ventana con un mensaje.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Javascript es el lenguaje del navegador y como tal está incorporado dentro del mismo y no requiere otra pieza de software para funcionar. Es importante anotar que Javascript es la principal herramienta de programación del lado del cliente (Client-Side Programming) en contraposición a los lenguajes de programación del lado del servidor (Server-Side Programming) como PHP.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">De la misma forma como HTML hace uso de la tecnología CSS también los archivos Javascript pueden ser incorporados a una página HTML de distintas maneras.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Una primera forma es definiendo el programa Javascript dentro de la página HTML. La segunda es definiendo un archivo separado con extensión .js e invocándolo en la página.</p>',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['544px', '55px', '458px', '434px', 'auto', 'auto'],
                            id: 'js-ill1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/js-ill1.svg', '0px', '0px']
                        },
                        {
                            rect: ['746', '409px', '279px', '104px', 'auto', 'auto'],
                            id: 'btn-bg',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn-bg.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'js-pdf-but1',
                            rect: ['785px', '416px', '201px', '60px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            fill: ['rgba(0,0,0,0)', 'images/js-pdf-but1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '654px', '37px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "fw-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'fw-titulo',
                            rect: ['0px', '0px', '654px', '37px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fw-titulo.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '58px', '467px', '323px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​El auge de Internet y la demanda por aplicaciones web cada vez más interactivas ha llevado a que los sitios web contengan cada vez más líneas de código Javascript.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Para facilitar la labor de los programadores se han creado dos tipos de herramientas: las librerías y los frameworks.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Las librerías como su nombre lo indica son bibliotecas de código fuente para una gran variedad de tareas comunes que van desde la validación de direcciones de correo, validación de rangos, etc. Hasta la manipulación del DOM y la consulta a otros sitios web a través de AJAX.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Los frameworks por otra parte también están conformados por librerías pero a diferencia de estas últimas que cobijan un tópico particular cada framework puede abarcar un amplio espectro de tópicos que incluyen: validación de formularios, conexión a bases de datos, enrutamiento, entre otros.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">En resumen un framework en más amplio y  abarca más funciones que una librería.</p>',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            id: 'p2-no-face',
                            rect: ['525px', '-51px', '475px', '586px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/p2-no-face.svg', '0px', '0px']
                        },
                        {
                            rect: ['647', '330px', '259px', '53px', 'auto', 'auto'],
                            id: 'fw-jquery-lib-but',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fw-jquery-lib-but.svg', '0px', '0px']
                        },
                        {
                            rect: ['647px', '390px', '259px', '53px', 'auto', 'auto'],
                            id: 'fw-angular-lib-but',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fw-angular-lib-but.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '654px', '37px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "seguridad-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'seguridad-titulo',
                            rect: ['0px', '0px', '654px', '37px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/seguridad-titulo.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['39px', '60px', '475px', '200px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text4',
                            text: '<p style=\"margin: 0px;\">​Debido al auge de los servicios ofrecidos a través de Internet como son los servicios bancarios, sanitarios, educativos, etc, en los cuales se realizan transacciones monetarias han aparecido softwares maliciosos que buscan entre otras cosas robar contraseñas, robar datos personales, acceder a sitios sin autorización, entre otros.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Es por esta razón que la seguridad de un sitio web es importante y debe dar confianza al usuario del mismo.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El ataque más común se llama “SQL Injection” que  consiste en introducir comandos sql a través de los cajones de texto o “inputs”. Un ejemplo típico es el siguiente:</p>',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['588px', '60px', '398px', '200px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text5',
                            text: '<p style=\"margin: 0px;\">​En la figura anterior se está intentando vulnerar la seguridad para ingresar al sistema usando la sentencia “or ‘1’ = ‘1’ “. Cuando este código llegue a la base de datos el sistema dejará entrar cualquier usuario ya que la condición ‘1’ = ‘1’ siempre será verdadera.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Para evitar la inyección de código malicioso como este se recomienda no enviar las sentencias SQL tal como las introduce el usuario sino que usar una opción llamada “comandos preparados” (PreparedStatement) presente en los lenguajes de programación o querys parametrizados.</p>',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'image',
                            id: 'seguridad-ill',
                            rect: ['97px', '260px', '903px', '243px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/seguridad-ill.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '654px', '37px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "css-bsm-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1008px', '49px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'bsm-clic-icon',
                            rect: ['16px', '-31px', '53px', '61px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bsm-clic-icon.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'css-bsm_separadores',
                            rect: ['81px', '0px', '927px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/css-bsm_separadores.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'css-bsm_reglas',
                            rect: ['114px', '9px', '84px', '27px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            fill: ['rgba(0,0,0,0)', 'images/css-bsm_reglas.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'css-bsm_conceptos',
                            rect: ['264px', '9px', '87px', '27px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            fill: ['rgba(0,0,0,0)', 'images/css-bsm_conceptos.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'css-bsm_librerias',
                            rect: ['416px', '9px', '94px', '27px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            fill: ['rgba(0,0,0,0)', 'images/css-bsm_librerias.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'css-bsm_ejemplo',
                            rect: ['577px', '9px', '72px', '30px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            fill: ['rgba(0,0,0,0)', 'images/css-bsm_ejemplo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'css-bsm_otros',
                            rect: ['715px', '18px', '99px', '11px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            fill: ['rgba(0,0,0,0)', 'images/css-bsm_otros.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'css-bsm_formularios',
                            rect: ['881px', '9px', '90px', '30px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            fill: ['rgba(0,0,0,0)', 'images/css-bsm_formularios.svg', '0px', '0px']
                        },
                        {
                            rect: ['81', '0px', '150px', '49px', 'auto', 'auto'],
                            id: 'css-bsm_reglas-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/css-bsm_reglas-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['231px', '0px', '154px', '49px', 'auto', 'auto'],
                            id: 'css-bsm_conceptos-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/css-bsm_conceptos-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['384px', '0px', '160px', '49px', 'auto', 'auto'],
                            id: 'css-bsm_librerias-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/css-bsm_librerias-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['544px', '0px', '139px', '49px', 'auto', 'auto'],
                            id: 'css-bsm_ejemplo-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/css-bsm_ejemplo-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['682px', '0px', '166px', '49px', 'auto', 'auto'],
                            id: 'css-bsm_otros-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/css-bsm_otros-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['848px', '0px', '160px', '49px', 'auto', 'auto'],
                            id: 'css-bsm_formularios-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/css-bsm_formularios-a.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1008px', '49px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    labels: {
                        "reglas": 250,
                        "conceptos": 500,
                        "librerias": 750,
                        "ejemplo": 1000,
                        "otros": 1250,
                        "formularios": 1500
                    },
                    data: [
                        [
                            "eid422",
                            "display",
                            450,
                            0,
                            "linear",
                            "${css-bsm_conceptos-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid423",
                            "display",
                            700,
                            0,
                            "linear",
                            "${css-bsm_conceptos-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid428",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${css-bsm_otros-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid429",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${css-bsm_otros-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid420",
                            "display",
                            200,
                            0,
                            "linear",
                            "${css-bsm_reglas-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid421",
                            "display",
                            450,
                            0,
                            "linear",
                            "${css-bsm_reglas-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid430",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${css-bsm_formularios-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid426",
                            "display",
                            950,
                            0,
                            "linear",
                            "${css-bsm_ejemplo-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid427",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${css-bsm_ejemplo-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid424",
                            "display",
                            700,
                            0,
                            "linear",
                            "${css-bsm_librerias-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid425",
                            "display",
                            950,
                            0,
                            "linear",
                            "${css-bsm_librerias-a}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "popups-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            opacity: '1',
                            rect: ['0px', '0px', '0px', '0px', 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'none',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,0,0,0.85)'],
                            c: [
                            {
                                rect: ['140px', '50px', '1000px', '500px', 'auto', 'auto'],
                                id: 'html-archivo-tabla1',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/html-archivo-tabla1.svg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                rect: ['90px', '25px', '1100px', '540px', 'auto', 'auto'],
                                overflow: 'auto',
                                id: 'scroll',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                display: 'none',
                                fill: ['rgba(0,0,0,0.00)'],
                                c: [
                                {
                                    rect: ['51px', '5px', '1000px', '1040px', 'auto', 'auto'],
                                    id: 'html-fed-ill1',
                                    type: 'image',
                                    display: 'none',
                                    fill: ['rgba(0,0,0,0)', 'images/html-fed-ill1.svg', '0px', '0px']
                                }]
                            },
                            {
                                rect: ['319px', '44px', '642px', '500px', 'auto', 'auto'],
                                id: 'html-fed2-ill1',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/html-fed2-ill1.svg', '0px', '0px']
                            },
                            {
                                rect: ['30px', '30px', '1221px', '472px', 'auto', 'auto'],
                                id: 'html-novedades-formularios',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/html-novedades-formularios.svg', '0px', '0px']
                            },
                            {
                                rect: ['29px', '27px', '1222px', '546px', 'auto', 'auto'],
                                id: 'html-novedades-etiquetas',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/html-novedades-etiquetas.svg', '0px', '0px']
                            },
                            {
                                rect: ['30px', '27px', '1223px', '468px', 'auto', 'auto'],
                                id: 'css-conceptos-herencia',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/css-conceptos-herencia.svg', '0px', '0px']
                            },
                            {
                                rect: ['29px', '27px', '1223px', '544px', 'auto', 'auto'],
                                id: 'css-conceptos-box',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/css-conceptos-box.svg', '0px', '0px']
                            },
                            {
                                rect: ['832px', '482px', '241px', '49px', 'auto', 'auto'],
                                userClass: 'size-opacity',
                                id: 'css-conceptos-box-modelo-but',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/css-conceptos-box-modelo-but.svg', '0px', '0px']
                            },
                            {
                                rect: ['185px', '27px', '889px', '505px', 'auto', 'auto'],
                                id: 'css-conceptos-box-modelo',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/css-conceptos-box-modelo.svg', '0px', '0px']
                            },
                            {
                                rect: ['28px', '29px', '1222px', '526px', 'auto', 'auto'],
                                id: 'css-conceptos-estilos',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/css-conceptos-estilos.svg', '0px', '0px']
                            },
                            {
                                rect: ['162px', '93px', '955px', '413px', 'auto', 'auto'],
                                id: 'css-otros-border',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/css-otros-border.svg', '0px', '0px']
                            },
                            {
                                rect: ['41px', '127px', '1200px', '345px', 'auto', 'auto'],
                                id: 'css-otros-tabla1',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/css-otros-tabla1.svg', '0px', '0px']
                            },
                            {
                                rect: ['40px', '192px', '1200px', '216px', 'auto', 'auto'],
                                id: 'css-otros-tabla2',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/css-otros-tabla2.svg', '0px', '0px']
                            },
                            {
                                rect: ['40px', '160px', '1200px', '281px', 'auto', 'auto'],
                                id: 'css-otros-tabla3',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/css-otros-tabla3.svg', '0px', '0px']
                            },
                            {
                                rect: ['211px', '38px', '858px', '523px', 'auto', 'auto'],
                                id: 'css-otros-pagweb',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/css-otros-pagweb.svg', '0px', '0px']
                            },
                            {
                                rect: ['40px', '96px', '1200px', '408px', 'auto', 'auto'],
                                id: 'css-formularios-cuadro1',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/css-formularios-cuadro1.svg', '0px', '0px']
                            },
                            {
                                rect: ['158px', '44px', '963px', '500px', 'auto', 'auto'],
                                id: 'css-formularios-tabla1',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/css-formularios-tabla1.svg', '0px', '0px']
                            },
                            {
                                rect: ['41px', '170px', '1200px', '254px', 'auto', 'auto'],
                                id: 'css-formularios-cuadro2',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/css-formularios-cuadro2.svg', '0px', '0px']
                            },
                            {
                                rect: ['231px', '47px', '820px', '500px', 'auto', 'auto'],
                                id: 'css-formularios-ill2',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/css-formularios-ill2.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['1280px', '-28px', '28px', '28px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            id: 'btn-cerrar-popup',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-popup.svg', '0px', '0px']
                        },
                        {
                            rect: ['1080px', '30px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(249,85,0,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Regresar =&gt;</p>',
                            display: 'none',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '25px', '25px']
                        }
                    }
                },
                timeline: {
                    duration: 17300,
                    autoPlay: true,
                    labels: {
                        "html-archivo-tabla1": 250,
                        "html-fed-ill1": 1250,
                        "html-fed2-ill1": 2250,
                        "html-novedades-formularios": 3250,
                        "html-novedades-etiquetas": 4250,
                        "css-conceptos-herencia": 5250,
                        "css-conceptos-box": 6250,
                        "css-conceptos-estilo": 7500,
                        "css-otros-border": 8500,
                        "css-otros-tabla1": 9500,
                        "css-otros-tabla2": 10500,
                        "css-otros-tabla3": 11500,
                        "css-otros-pagweb": 12500,
                        "css-formularios-1": 13500,
                        "css-formularios-2": 14500,
                        "css-formularios-3": 15500,
                        "css-formularios-4": 16500
                    },
                    data: [
                        [
                            "eid493",
                            "display",
                            250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid499",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid503",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid504",
                            "display",
                            2050,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid513",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid514",
                            "display",
                            3050,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid527",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid528",
                            "display",
                            4050,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid535",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid536",
                            "display",
                            5050,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid626",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid627",
                            "display",
                            6050,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid634",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid635",
                            "display",
                            7300,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid642",
                            "display",
                            7500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid643",
                            "display",
                            8300,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid660",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid661",
                            "display",
                            9300,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid670",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid671",
                            "display",
                            10300,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid678",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid679",
                            "display",
                            11300,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid686",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid687",
                            "display",
                            12300,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid700",
                            "display",
                            12500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid701",
                            "display",
                            13300,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid710",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid711",
                            "display",
                            14300,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid718",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid719",
                            "display",
                            15300,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid726",
                            "display",
                            15500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid727",
                            "display",
                            16300,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid734",
                            "display",
                            16500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid735",
                            "display",
                            17300,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid492",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid498",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid507",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid508",
                            "display",
                            2050,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid517",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid518",
                            "display",
                            3050,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid531",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid532",
                            "display",
                            4050,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid539",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid540",
                            "display",
                            5050,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid630",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid631",
                            "display",
                            6050,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid638",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid639",
                            "display",
                            7300,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid646",
                            "display",
                            7500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid647",
                            "display",
                            8300,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid664",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid665",
                            "display",
                            9300,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid674",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid675",
                            "display",
                            10300,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid682",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid683",
                            "display",
                            11300,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid690",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid691",
                            "display",
                            12300,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid704",
                            "display",
                            12500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid705",
                            "display",
                            13300,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid714",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid715",
                            "display",
                            14300,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid722",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid723",
                            "display",
                            15300,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid730",
                            "display",
                            15500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid731",
                            "display",
                            16300,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid738",
                            "display",
                            16500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid739",
                            "display",
                            17300,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid748",
                            "display",
                            16500,
                            0,
                            "linear",
                            "${css-formularios-ill2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid749",
                            "display",
                            17300,
                            0,
                            "linear",
                            "${css-formularios-ill2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid488",
                            "left",
                            250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid505",
                            "left",
                            1250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid515",
                            "left",
                            2250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid529",
                            "left",
                            3250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid537",
                            "left",
                            4250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid628",
                            "left",
                            5250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid636",
                            "left",
                            6250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid644",
                            "left",
                            7500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid662",
                            "left",
                            8500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid672",
                            "left",
                            9500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid680",
                            "left",
                            10500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid688",
                            "left",
                            11500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid702",
                            "left",
                            12500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid712",
                            "left",
                            13500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid720",
                            "left",
                            14500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid728",
                            "left",
                            15500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid736",
                            "left",
                            16500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid497",
                            "height",
                            250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid509",
                            "height",
                            1250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid519",
                            "height",
                            2250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid533",
                            "height",
                            3250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid541",
                            "height",
                            4250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid632",
                            "height",
                            5250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid640",
                            "height",
                            6250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid648",
                            "height",
                            7500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid666",
                            "height",
                            8500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid676",
                            "height",
                            9500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid684",
                            "height",
                            10500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid692",
                            "height",
                            11500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid706",
                            "height",
                            12500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid716",
                            "height",
                            13500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid724",
                            "height",
                            14500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid732",
                            "height",
                            15500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid740",
                            "height",
                            16500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid545",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${html-novedades-etiquetas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid546",
                            "display",
                            5050,
                            0,
                            "linear",
                            "${html-novedades-etiquetas}",
                            'block',
                            'none'
                        ],
                        [
                            "eid496",
                            "width",
                            250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid510",
                            "width",
                            1250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid520",
                            "width",
                            2250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid534",
                            "width",
                            3250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid542",
                            "width",
                            4250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid633",
                            "width",
                            5250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid641",
                            "width",
                            6250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid649",
                            "width",
                            7500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid667",
                            "width",
                            8500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid677",
                            "width",
                            9500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid685",
                            "width",
                            10500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid693",
                            "width",
                            11500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid707",
                            "width",
                            12500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid717",
                            "width",
                            13500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid725",
                            "width",
                            14500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid733",
                            "width",
                            15500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid741",
                            "width",
                            16500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid650",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${css-conceptos-herencia}",
                            'none',
                            'block'
                        ],
                        [
                            "eid651",
                            "display",
                            6050,
                            0,
                            "linear",
                            "${css-conceptos-herencia}",
                            'block',
                            'none'
                        ],
                        [
                            "eid521",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${scroll}",
                            'none',
                            'block'
                        ],
                        [
                            "eid524",
                            "display",
                            2050,
                            0,
                            "linear",
                            "${scroll}",
                            'block',
                            'none'
                        ],
                        [
                            "eid668",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${css-otros-border}",
                            'none',
                            'block'
                        ],
                        [
                            "eid669",
                            "display",
                            9300,
                            0,
                            "linear",
                            "${css-otros-border}",
                            'block',
                            'none'
                        ],
                        [
                            "eid654",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${css-conceptos-box-modelo-but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid655",
                            "display",
                            7200,
                            0,
                            "linear",
                            "${css-conceptos-box-modelo-but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid489",
                            "top",
                            250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid506",
                            "top",
                            1250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid516",
                            "top",
                            2250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid530",
                            "top",
                            3250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid538",
                            "top",
                            4250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid629",
                            "top",
                            5250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid637",
                            "top",
                            6250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid645",
                            "top",
                            7500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid663",
                            "top",
                            8500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid673",
                            "top",
                            9500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid681",
                            "top",
                            10500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid689",
                            "top",
                            11500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid703",
                            "top",
                            12500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid713",
                            "top",
                            13500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid721",
                            "top",
                            14500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid729",
                            "top",
                            15500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid737",
                            "top",
                            16500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid696",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${css-otros-tabla2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid697",
                            "display",
                            11300,
                            0,
                            "linear",
                            "${css-otros-tabla2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid744",
                            "display",
                            15500,
                            0,
                            "linear",
                            "${css-formularios-cuadro2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid745",
                            "display",
                            16300,
                            0,
                            "linear",
                            "${css-formularios-cuadro2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid522",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${html-fed-ill1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid523",
                            "display",
                            2050,
                            0,
                            "linear",
                            "${html-fed-ill1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid543",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${html-novedades-formularios}",
                            'none',
                            'block'
                        ],
                        [
                            "eid544",
                            "display",
                            4050,
                            0,
                            "linear",
                            "${html-novedades-formularios}",
                            'block',
                            'none'
                        ],
                        [
                            "eid708",
                            "display",
                            12500,
                            0,
                            "linear",
                            "${css-otros-pagweb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid709",
                            "display",
                            13300,
                            0,
                            "linear",
                            "${css-otros-pagweb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid742",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${css-formularios-cuadro1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid743",
                            "display",
                            14300,
                            0,
                            "linear",
                            "${css-formularios-cuadro1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid656",
                            "display",
                            7200,
                            0,
                            "linear",
                            "${css-conceptos-box-modelo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid657",
                            "display",
                            7300,
                            0,
                            "linear",
                            "${css-conceptos-box-modelo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid500",
                            "display",
                            250,
                            0,
                            "linear",
                            "${html-archivo-tabla1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid501",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${html-archivo-tabla1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid698",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${css-otros-tabla3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid699",
                            "display",
                            12300,
                            0,
                            "linear",
                            "${css-otros-tabla3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid843",
                            "display",
                            7200,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid844",
                            "display",
                            7381,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid658",
                            "display",
                            7500,
                            0,
                            "linear",
                            "${css-conceptos-estilos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid659",
                            "display",
                            8300,
                            0,
                            "linear",
                            "${css-conceptos-estilos}",
                            'block',
                            'none'
                        ],
                        [
                            "eid525",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${html-fed2-ill1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid526",
                            "display",
                            3050,
                            0,
                            "linear",
                            "${html-fed2-ill1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid746",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${css-formularios-tabla1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid747",
                            "display",
                            15300,
                            0,
                            "linear",
                            "${css-formularios-tabla1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid694",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${css-otros-tabla1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid695",
                            "display",
                            10300,
                            0,
                            "linear",
                            "${css-otros-tabla1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid652",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${css-conceptos-box}",
                            'none',
                            'block'
                        ],
                        [
                            "eid653",
                            "display",
                            7200,
                            0,
                            "linear",
                            "${css-conceptos-box}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "popups-mc2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            opacity: '1',
                            rect: ['0px', '0px', '0px', '0px', 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'none',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,0,0,0.85)'],
                            c: [
                            {
                                rect: ['90px', '25px', '1100px', '540px', 'auto', 'auto'],
                                type: 'rect',
                                overflow: 'auto',
                                id: 'scroll',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                display: 'none',
                                fill: ['rgba(0,0,0,0.00)']
                            },
                            {
                                rect: ['29px', '24px', '1222px', '508px', 'auto', 'auto'],
                                id: 'fw-jquery1',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/fw-jquery1.svg', '0px', '0px']
                            },
                            {
                                rect: ['221px', '532px', '154px', '46px', 'auto', 'auto'],
                                id: 'clic-ampliar-white',
                                type: 'image',
                                display: 'block',
                                fill: ['rgba(0,0,0,0)', 'images/clic-ampliar-white.svg', '0px', '0px']
                            },
                            {
                                rect: ['29px', '408px', '586px', '96px', 'auto', 'auto'],
                                userClass: 'size-opacity',
                                id: 'fw-jquery1-tabla1',
                                type: 'image',
                                display: 'block',
                                fill: ['rgba(0,0,0,0)', 'images/fw-jquery1-tabla1.svg', '0px', '0px']
                            },
                            {
                                rect: ['31px', '24px', '1220px', '549px', 'auto', 'auto'],
                                id: 'fw-jquery1-2',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/fw-jquery1-2.svg', '0px', '0px']
                            },
                            {
                                rect: ['61px', '49px', '1158px', '500px', 'auto', 'auto'],
                                userClass: 'size-opacity',
                                id: 'fw-jquery1-2-tabla1',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/fw-jquery1-2-tabla1.svg', '0px', '0px']
                            },
                            {
                                rect: ['39px', '24px', '1201px', '325px', 'auto', 'auto'],
                                id: 'fw-angular',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/fw-angular.svg', '0px', '0px']
                            },
                            {
                                rect: ['406px', '371px', '470px', '121px', 'auto', 'auto'],
                                id: 'fw-angular_vf',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/fw-angular_vf.svg', '0px', '0px']
                            },
                            {
                                rect: ['406px', '371px', '470px', '121px', 'auto', 'auto'],
                                id: 'fw-angular_ibd',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/fw-angular_ibd.svg', '0px', '0px']
                            },
                            {
                                rect: ['406px', '371px', '469px', '121px', 'auto', 'auto'],
                                id: 'fw-angular_enrutamiento',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/fw-angular_enrutamiento.svg', '0px', '0px']
                            },
                            {
                                rect: ['406px', '371px', '470px', '121px', 'auto', 'auto'],
                                id: 'fw-angular_data',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/fw-angular_data.svg', '0px', '0px']
                            },
                            {
                                rect: ['396px', '163px', '113px', '130px', 'auto', 'auto'],
                                userClass: 'size-opacity',
                                id: 'fw-angular_btn-data',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/fw-angular_btn-data.svg', '0px', '0px']
                            },
                            {
                                rect: ['396px', '163px', '113px', '130px', 'auto', 'auto'],
                                id: 'fw-angular_btn-data-a',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/fw-angular_btn-data-a.svg', '0px', '0px']
                            },
                            {
                                rect: ['520px', '163px', '113px', '130px', 'auto', 'auto'],
                                userClass: 'size-opacity',
                                id: 'fw-angular_btn-enrutamiento',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/fw-angular_btn-enrutamiento.svg', '0px', '0px']
                            },
                            {
                                rect: ['520px', '163px', '113px', '130px', 'auto', 'auto'],
                                id: 'fw-angular_btn-enrutamiento-a',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/fw-angular_btn-enrutamiento-a.svg', '0px', '0px']
                            },
                            {
                                rect: ['646px', '163px', '113px', '130px', 'auto', 'auto'],
                                userClass: 'size-opacity',
                                id: 'fw-angular_btn-vf',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/fw-angular_btn-vf.svg', '0px', '0px']
                            },
                            {
                                rect: ['646px', '163px', '113px', '130px', 'auto', 'auto'],
                                id: 'fw-angular_btn-vf-a',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/fw-angular_btn-vf-a.svg', '0px', '0px']
                            },
                            {
                                rect: ['770px', '163px', '113px', '130px', 'auto', 'auto'],
                                userClass: 'size-opacity',
                                id: 'fw-angular_btn-ibd',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/fw-angular_btn-ibd.svg', '0px', '0px']
                            },
                            {
                                rect: ['770px', '163px', '113px', '130px', 'auto', 'auto'],
                                id: 'fw-angular_btn-ibd-a',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/fw-angular_btn-ibd-a.svg', '0px', '0px']
                            },
                            {
                                rect: ['582', '564', '116', '28', 'auto', 'auto'],
                                id: 'pagination',
                                display: 'block',
                                type: 'group',
                                c: [
                                {
                                    id: 'pagination_indicator',
                                    type: 'image',
                                    rect: ['13px', '0px', '90px', '28px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/pagination_indicator.svg', '0px', '0px']
                                },
                                {
                                    rect: ['93px', '0px', '23px', '28px', 'auto', 'auto'],
                                    id: 'pagination_fww',
                                    userClass: 'fw',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/pagination_fww.svg', '0px', '0px']
                                },
                                {
                                    rect: ['0px', '0px', '23px', '28px', 'auto', 'auto'],
                                    id: 'pagination_bww',
                                    userClass: 'bw',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/pagination_bww.svg', '0px', '0px']
                                },
                                {
                                    rect: ['38px', '5px', 'auto', 'auto', 'auto', 'auto'],
                                    font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                                    id: 'unode',
                                    text: '<p style=\"margin: 0px;\">​1 de 2</p>',
                                    display: 'none',
                                    type: 'text'
                                },
                                {
                                    rect: ['38px', '5px', 'auto', 'auto', 'auto', 'auto'],
                                    font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                                    id: 'dosde',
                                    text: '<p style=\"margin: 0px;\">2 de 2</p>',
                                    display: 'none',
                                    type: 'text'
                                }]
                            }]
                        },
                        {
                            rect: ['1280px', '-28px', '28px', '28px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            id: 'btn-cerrar-popup',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-popup.svg', '0px', '0px']
                        },
                        {
                            rect: ['1080px', '30px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(249,85,0,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Regresar =&gt;</p>',
                            display: 'none',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '25px', '25px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    labels: {
                        "fw-jquery": 250,
                        "fw-angular": 2000,
                        "data": 2750,
                        "enrutamiento": 3000,
                        "vf": 3250,
                        "ibd": 3500
                    },
                    data: [
                        [
                            "eid493",
                            "display",
                            250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid499",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid753",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid492",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid498",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid818",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid750",
                            "display",
                            250,
                            0,
                            "linear",
                            "${fw-jquery1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid751",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${fw-jquery1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid789",
                            "left",
                            1000,
                            300,
                            "linear",
                            "${clic-ampliar-white}",
                            '221px',
                            '250px'
                        ],
                        [
                            "eid772",
                            "display",
                            1300,
                            0,
                            "linear",
                            "${fw-jquery1-tabla1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid496",
                            "width",
                            250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid775",
                            "width",
                            1250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid779",
                            "width",
                            1500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid783",
                            "width",
                            1750,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid760",
                            "width",
                            2000,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid821",
                            "width",
                            3000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid825",
                            "width",
                            3250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid829",
                            "width",
                            3500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid817",
                            "display",
                            3450,
                            0,
                            "linear",
                            "${fw-angular_ibd}",
                            'none',
                            'block'
                        ],
                        [
                            "eid799",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${fw-jquery1-2-tabla1}",
                            '92px',
                            '49px'
                        ],
                        [
                            "eid834",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${fw-angular_btn-vf}",
                            'none',
                            'block'
                        ],
                        [
                            "eid845",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid847",
                            "display",
                            1401,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid848",
                            "display",
                            1633,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid846",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid808",
                            "display",
                            2950,
                            0,
                            "linear",
                            "${fw-angular_enrutamiento}",
                            'none',
                            'block'
                        ],
                        [
                            "eid810",
                            "display",
                            3200,
                            0,
                            "linear",
                            "${fw-angular_enrutamiento}",
                            'block',
                            'none'
                        ],
                        [
                            "eid769",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${clic-ampliar-white}",
                            'block',
                            'none'
                        ],
                        [
                            "eid788",
                            "display",
                            1300,
                            0,
                            "linear",
                            "${clic-ampliar-white}",
                            'none',
                            'block'
                        ],
                        [
                            "eid802",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${clic-ampliar-white}",
                            'block',
                            'none'
                        ],
                        [
                            "eid816",
                            "display",
                            3450,
                            0,
                            "linear",
                            "${fw-angular_btn-ibd-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid488",
                            "left",
                            250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid773",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1222px',
                            '1222px'
                        ],
                        [
                            "eid777",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1222px',
                            '1222px'
                        ],
                        [
                            "eid781",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1222px',
                            '1222px'
                        ],
                        [
                            "eid755",
                            "left",
                            2000,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1222px'
                        ],
                        [
                            "eid819",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1222px',
                            '1222px'
                        ],
                        [
                            "eid823",
                            "left",
                            3250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1222px',
                            '1222px'
                        ],
                        [
                            "eid827",
                            "left",
                            3500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1222px',
                            '1222px'
                        ],
                        [
                            "eid785",
                            "display",
                            1300,
                            0,
                            "linear",
                            "${fw-jquery1-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid800",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${fw-jquery1-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid497",
                            "height",
                            250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid776",
                            "height",
                            1250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid780",
                            "height",
                            1500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid784",
                            "height",
                            1750,
                            0,
                            "linear",
                            "${Rectangle}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid759",
                            "height",
                            2000,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid822",
                            "height",
                            3000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid826",
                            "height",
                            3250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid830",
                            "height",
                            3500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid805",
                            "display",
                            2700,
                            0,
                            "linear",
                            "${fw-angular_data}",
                            'none',
                            'block'
                        ],
                        [
                            "eid807",
                            "display",
                            2950,
                            0,
                            "linear",
                            "${fw-angular_data}",
                            'block',
                            'none'
                        ],
                        [
                            "eid796",
                            "height",
                            1500,
                            250,
                            "linear",
                            "${fw-jquery1-2-tabla1}",
                            '253px',
                            '500px'
                        ],
                        [
                            "eid797",
                            "width",
                            1500,
                            250,
                            "linear",
                            "${fw-jquery1-2-tabla1}",
                            '586px',
                            '1158px'
                        ],
                        [
                            "eid838",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${dosde}",
                            'none',
                            'block'
                        ],
                        [
                            "eid752",
                            "display",
                            0,
                            0,
                            "linear",
                            "${scroll}",
                            'none',
                            'none'
                        ],
                        [
                            "eid765",
                            "height",
                            1000,
                            250,
                            "linear",
                            "${fw-jquery1-tabla1}",
                            '96px',
                            '197px'
                        ],
                        [
                            "eid812",
                            "display",
                            3200,
                            0,
                            "linear",
                            "${fw-angular_vf}",
                            'none',
                            'block'
                        ],
                        [
                            "eid814",
                            "display",
                            3450,
                            0,
                            "linear",
                            "${fw-angular_vf}",
                            'block',
                            'none'
                        ],
                        [
                            "eid489",
                            "top",
                            250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid774",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid778",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid782",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid756",
                            "top",
                            2000,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '30px'
                        ],
                        [
                            "eid820",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid824",
                            "top",
                            3250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid828",
                            "top",
                            3500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid835",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${fw-angular_btn-ibd}",
                            'none',
                            'block'
                        ],
                        [
                            "eid770",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${pagination}",
                            'block',
                            'none'
                        ],
                        [
                            "eid771",
                            "display",
                            1300,
                            0,
                            "linear",
                            "${pagination}",
                            'none',
                            'block'
                        ],
                        [
                            "eid801",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${pagination}",
                            'block',
                            'none'
                        ],
                        [
                            "eid798",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${fw-jquery1-2-tabla1}",
                            '34px',
                            '61px'
                        ],
                        [
                            "eid791",
                            "display",
                            1300,
                            0,
                            "linear",
                            "${fw-jquery1-2-tabla1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid803",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${fw-jquery1-2-tabla1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid804",
                            "display",
                            2700,
                            0,
                            "linear",
                            "${fw-angular_btn-data-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid806",
                            "display",
                            2950,
                            0,
                            "linear",
                            "${fw-angular_btn-data-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid766",
                            "width",
                            1000,
                            250,
                            "linear",
                            "${fw-jquery1-tabla1}",
                            '586px',
                            '1200px'
                        ],
                        [
                            "eid813",
                            "display",
                            3200,
                            0,
                            "linear",
                            "${fw-angular_btn-vf-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid815",
                            "display",
                            3450,
                            0,
                            "linear",
                            "${fw-angular_btn-vf-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid836",
                            "display",
                            250,
                            0,
                            "linear",
                            "${unode}",
                            'none',
                            'block'
                        ],
                        [
                            "eid837",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${unode}",
                            'block',
                            'none'
                        ],
                        [
                            "eid790",
                            "top",
                            1000,
                            300,
                            "linear",
                            "${clic-ampliar-white}",
                            '532px',
                            '358px'
                        ],
                        [
                            "eid767",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${fw-jquery1-tabla1}",
                            '29px',
                            '41px'
                        ],
                        [
                            "eid809",
                            "display",
                            2950,
                            0,
                            "linear",
                            "${fw-angular_btn-enrutamiento-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid811",
                            "display",
                            3200,
                            0,
                            "linear",
                            "${fw-angular_btn-enrutamiento-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid832",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${fw-angular_btn-data}",
                            'none',
                            'block'
                        ],
                        [
                            "eid833",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${fw-angular_btn-enrutamiento}",
                            'none',
                            'block'
                        ],
                        [
                            "eid768",
                            "top",
                            1000,
                            250,
                            "linear",
                            "${fw-jquery1-tabla1}",
                            '408px',
                            '202px'
                        ],
                        [
                            "eid831",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${fw-angular}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-345223770");
