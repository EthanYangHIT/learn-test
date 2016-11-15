$(function () {
    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Browser market shares. January, 2015 to May, 2015'
        },
        subtitle: {
            text: 'Click the slices to view versions. Source: netmarketshare.com.'
        },
        lang: {
            drillUpText:'返回'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },
        series: [{
            name: 'A50',
            colorByPoint: true,
            data: [{
                name: 'A50 - 阿里巴巴集团',
                y: 56.33,
                drilldown: 'A50'
            }, {
                name: 'A20',
                y: 24.03,
                drilldown: 'A20'
            }, {
                name: 'A30',
                y: 10.38,
                drilldown: 'A30'
            }, {
                name: 'B50',
                y: 4.77,
                drilldown: 'B50'
            }, {
                name: 'B51',
                y: 0.91,
                drilldown: 'B51'
            }]
        }],
        drilldown: {
            series: [{
                name: 'A50',
                id: 'A50',
                data: [
                    ['招商银行', 24.13],
                    ['交通银行', 17.2],
                    ['民生银行', 8.11],
                    ['工商银行', 5.33],
                    ['农业银行', 1.06],
                    ['花旗银行', 0.5]
                ]
            }, {
                name: 'A20',
                id: 'A20',
                data: [
                    ['v40.0', 5],
                    ['v41.0', 4.32],
                    ['v42.0', 3.68],
                    ['v39.0', 2.96],
                    ['v36.0', 2.53],
                    ['v43.0', 1.45],
                    ['v31.0', 1.24],
                    ['v35.0', 0.85],
                    ['v38.0', 0.6],
                    ['v32.0', 0.55],
                    ['v37.0', 0.38],
                    ['v33.0', 0.19],
                    ['v34.0', 0.14],
                    ['v30.0', 0.14]
                ]
            }, {
                name: 'A30',
                id: 'A30',
                data: [
                    ['v35', 2.76],
                    ['v36', 2.32],
                    ['v37', 2.31],
                    ['v34', 1.27],
                    ['v38', 1.02],
                    ['v31', 0.33],
                    ['v33', 0.22],
                    ['v32', 0.15]
                ]
            }, {
                name: 'B50',
                id: 'B50',
                data: [
                    ['v8.0', 2.56],
                    ['v7.1', 0.77],
                    ['v5.1', 0.42],
                    ['v5.0', 0.3],
                    ['v6.1', 0.29],
                    ['v7.0', 0.26],
                    ['v6.2', 0.17]
                ]
            }, {
                name: 'B51',
                id: 'B51',
                data: [
                    ['v12.x', 0.34],
                    ['v28', 0.24],
                    ['v27', 0.17],
                    ['v29', 0.16]
                ]
            }]
        }
    });
});