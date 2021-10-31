$(function () {
    var data = [{
            label: "升學",
            data: 18
        },
        {
            label: "工作後再進修",
            data: 3
        },
        {
            label: "找工作",
            data: 79
        },

    ];

    var options = {
        series: {
            pie: {
                show: true,
                label: {
                    radius: 3 / 4,
                    formatter: function (label, series) {
                        return '<div id="label" style="border:1px solid gray;font-size:14pt;text-align:center;padding:5px;color:white;">' + label + '<br/>' +
                            Math.round(series.percent) + '%</div>';
                    },
                    background: {
                        opacity: 0.5,
                        color: '#000'
                    },
                }

            }
        },
        legend: {
            show: false,
        },
        grid: {
            hoverable: true,
            clickable: true
        }
    };

    $.plot($("#flotcontainer"), data, options);

    $("#flotcontainer").bind("plothover", function (event, pos, obj) {
        if (!obj) {
            return;
        }
        percent = parseFloat(obj.series.percent).toFixed(2);


        var html = [];
        if (percent == 18) {
            html.push("<h3>選擇科系</h3><ul><li>資訊管理學系</li><li>會計與資訊科技學系</li><li>企業管理學系</li><li>資訊與財金管理學系</li><li>交通管理科學系</li></ul>");
        } else if (percent == 3) {
            html.push("<h3>選擇科系</h3><ul><li>資訊管理學系</li><li>資訊工程學系</li><li>企業管理學系</li><li>數位學習與教育研究所</li></ul>")
        } else {
            html.push("<h3>工作類別</h3><ul><li>軟體程式開發</li><li>系統規劃及建置</li><li>企業經營管理</li><li>多媒體傳播</li><li>網路安全管理</li><li>電子商務行銷</li></ul>")
        }
        $("#showInteractive").html(html.join(''));
    });

});