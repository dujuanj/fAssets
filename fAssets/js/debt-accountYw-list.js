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

// 树形
layui.use('tree', function(){
  var tree = layui.tree;

  //渲染
  var inst1 = tree.render({
    elem: '#test1'  //绑定元素
    ,
    oncheck: function(obj){
      console.log(obj.data); //得到当前点击的节点数据
      console.log(obj.checked); //得到当前节点的展开状态：open、close、normal
      console.log(obj.elem); //得到当前节点元素
    },
    showCheckbox:true,
    edit:true,
    data: [{
      title: '参与主体情况' //一级菜单
      ,
      spread:true,
      children: [{
        name: 'a1',
        title: '融资人'
      },{
        name: 'a2',
        title: '组织机构代码'
      },
      {
        name: 'a3',
        title: '主承销商'
      },{
        name: 'a4',
        title: '联席副主承销商'
      },{
        name: 'a5',
        title: '副主承销商'
      }]
    },{
      title: '项目基本情况' //一级菜单
      ,
      spread:true,
      children: [
        {
          name: 'b1',
          title: '备案通知书文号 '
        },{
          name: 'b2',
          title: '备案金额'
        },
        {
          name: 'b3',
          title: '备案有效期'
        },{
          name: 'b4',
          title: '存续期剩余敞口金额'
        },{
          name: 'b5',
          title: '产品名称'
        },{
          name: 'b6',
          title: '挂牌金额'
        },{
          name: 'b7',
          title: '期限'
        },{
          name: 'b8',
          title: '期限分布'
        },{
          name: 'b9',
          title: '利率'
        }
      ]
    }],
 
    
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
        ,
        cols: [[//表头
          { colspan: "5", title: "参与主体情况", align: "center" },
          { colspan: "9", title: "项目基本情况", align: "center" }
        
      ], [
        { type: "checkbox", rowspan: "2", fixed: "left" },//多选框,fixed:"left"固定在左边
        { type: "numbers", rowspan: "2", title: "序号" },
        { field: "Cellphone",title: "融资人", align: "center",width:140 },
        { field: "Address", title: "主承销商", align: "center" ,width:140 },
        { field: "DeoartmentName", title: "联席副主承销商", align: "center" ,width:140 },
        { field: "PositionName", title: "副主承销商", align: "center" ,width:140 },
        { field: "PositionName", title: "备案通知书文号", align: "center",width:140  },
        { field: "PositionName", title: "备案金额", align: "center" ,width:140 },
        { field: "PositionName", title: "备案有效期", align: "center" ,width:140 },
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

