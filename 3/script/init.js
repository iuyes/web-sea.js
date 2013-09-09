/**
 * Created with JetBrains WebStorm.
 * User: yangcheng
 * Date: 13-9-7
 * Time: 下午3:38
 * To change this template use File | Settings | File Templates.
 */
//seajs.config({
//    base: ''
//})
//seajs.config({
//    alias: {
//        slimscroll: ''
//
//    }
//})
define(function(require,exports,module){
    //require('http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min');
    var b = require('b');
    var ui = require('ui');
    //require('../lib/jquery-slimScroll-1.1.0/jquery.slimscroll');
    var scroll = require('../lib/jquery-slimScroll-1.1.0/slimscroll');//require引用时，由于用到..所有它的路径是相对了
    //init.js的路径
    var a = require('chemon');
    $(function() {
        a.Chemon.App.init();
        $("div.section").on("click.chemon", "[data-action='showCover']", function(e) {
            e = e || window.event; e.preventDefault();
            return $(this).siblings(".cover").fadeIn();
            // 此处应将搜索历史用ajax得到放到页面中
        }).on("click.chemon", ".cover .close", function(e) {
                e = e || window.event; e.preventDefault();
                return $(this).parents(".cover").fadeOut();
            }).on("click.chemon", ".tab-nav > a", function(e) {
                // 切换TAB页
                e = e || window.event; e.preventDefault();
                $(this).hasClass("active") ? 1 : $(this).addClass("active").siblings("a[data-toggle='tab']").removeClass("active");
                if ($(this).attr("href") == "#tab2") {
                    $("#tab2").load("url", {});
                }
            }).on("click.chemon", "[data-action='setHot']", function(e) {
                // 设置热门
                e = e || window.event; e.preventDefault();
                var $li = $(this).parents("li");
                if ($li.hasClass("hot")) {
                    // 如果已经是热门，则直接发送请求，然后在执行回调函数
                    $.get("url", function() {
                        $li.removeClass("hot");
                    });
                } else if($li.parents(".tab-pane").find("li.hot").length >= 6) {
                    alert("最多只能设置6个热门产品！");
                } else {
                    // 设置热门产品
                    $.get("url", function() {
                        $li.addClass("hot");
                    });
                }
                // $li.hasClass("hot") ? $li.removeClass("hot") : $li.parents(".tab-pane").find("li.hot").length >= 6 ? alert("最多只能设置6个热门产品！") : $li.addClass("hot");
                // 以上判断热门产品数量应从数据库中查找，并将设置后的数据保存至数据库
            }).on("click.chemon", "[data-action='removePro']", function(e) {
                // 删除产品
                e = e || window.event; e.preventDefault();
                window.confirm("确定删除产品？", function() {
                    $(this).parents("li").remove()
                });
            });

        $("#showMore").on("click", function(e) {
            e = e || window.event;e.preventDefault();
            var $this = $(this);
            $.get("loading-page/proList.html", function(data) {
                $this.before(data);
            });
        });

        $("#birds").on("keydown", function(e) {
            if ( e.keyCode === $.ui.keyCode.TAB && $( this ).data( "ui-autocomplete" ).menu.active ) {
                e.preventDefault();
            }
        }).autocomplete({
                source: function( request, response ) {
                    $.getJSON("../json/autocomplete.json", {
                        term: extractLast(request.term)
                    }, response);
                },
                focus: function() {
                    // prevent value inserted on focus
                    return false;
                },
                select: function( event, ui ) {
                    alert("选择了" + ui.item.value);
                }
            });
    });
})