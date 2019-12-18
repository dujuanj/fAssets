//日历
layui.use('laydate', function(){
    var laydate = layui.laydate;
    //日期范围
    laydate.render({
        elem: '#test6'
        ,range: true
    });
});
$(function () {
    $('.sl-value li a').click(function () {
        $(this).addClass('active');
        $(this).parent().siblings().find("a").removeClass('active')
    });
    $('.screening').on('click', function () {
        $('.dataType').toggle()
    });
});
//表格渲染
layui.use('table', function(){
    var table = layui.table;

    //第一个实例
    table.render({
        elem: '#table1'
        ,height: 480
        ,url: '../js/list.js' //数据接口
        ,page: true //开启分页
        ,cols: [[ //表头
            {type:'checkbox'}
            ,{field: 'id', title: 'ID', width:80, sort: true}
            ,{field: 'username', title: '用户名', width:80,edit: 'text'}
            ,{field: 'sex', title: '性别', width:80}
            ,{field: 'city', title: '城市', width:80}
            ,{field: 'sign', title: '签名', width: 177,edit: 'text'}
            ,{field: 'experience', title: '积分', width: 80,edit: 'text'}
            ,{field: 'score', title: '评分', width: 80}
            ,{field: 'classify', title: '职业', width: 80}
            ,{field: 'wealth', title: '财富', width: 135}
            ,{field: 'wealth', title: '财富', width: 135}
            ,{field: 'wealth', title: '财富', width: 135}
            ,{field: 'wealth', title: '财富', width: 135, sort: true}
            ,{field: 'wealth', title: '财富', width: 135, sort: true}
            ,{field: 'wealth', title: '财富', width: 135, sort: true}
        ]]
    });
    //监听单元格编辑
    table.on('edit(table1)', function(obj){
        alert('1');
        var value = obj.value //得到修改后的值
            ,data = obj.data //得到所在行所有键值
            ,field = obj.field; //得到字段
        layer.msg('[ID: '+ data.id +'] ' + field + ' 字段更改为：'+ value);
    });

});

