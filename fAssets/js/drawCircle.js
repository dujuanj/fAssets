var percentageList = [30, 10, 87, 46]
var myCircleList = [
	echarts.init(document.getElementById('circle1')),
	echarts.init(document.getElementById('circle2')),
	echarts.init(document.getElementById('circle3')),
	echarts.init(document.getElementById('circle4'))
]
function draw (index) {
	console.log(index)
	myCircleList[index].clear()
	myCircleList[index].setOption({
	  title:{
	    show: true,
	    text: percentageList[index] +'%',
	    x:'center',
	    y:'center',
	    textStyle: {
	      fontSize: '15',
	      color: 'white',
	      fontWeight: 'normal'
	  	}
	},
	color:['#c32eff', '#19215f'],
	tooltip: {
	  trigger: 'item',
	  formatter: "{d}%",
	  show:false
	},
	legend: {
	  orient: 'vertical',
	  x: 'left',
	  show:false
	},
	series: {
	  name:'',
	  type:'pie',
	  radius: ['65%', '85%'],
	  avoidLabelOverlap: true,
	  hoverAnimation:false,
	  label: {
	    normal: {
	      show: false,
	      position: 'center'
	    },
	    emphasis: {
	      show: false
	    }
	  },
	  labelLine: {
	    normal: {
	      show: false
	    }
	  },
	  data:[
	    {value: percentageList[index], name: ''},
	    {value: 100 - percentageList[index], name: ''}
	    ]
	  }
	});
}
function drawCircle() {
	myCircleList.forEach((item, index) => {
		draw(index)
	})
}
drawCircle()

/* treemap-disk */
var treemap = echarts.init(document.getElementById('treemap'));
var data = [
	{
	  name: "等分数",
	  value: 2
	},
	{
	  name: "有理数除法",
	  children: [{
	    name: "个位数除法", value: 1
	  }, {
	    name: "两位数除法", value: 1
	  }, {
	    name: "分数除法", value: 1
	  }]
	},
	{
	  name: "1-9的加法",
	  children: [{
	    name: "个位数加法", value: 1,
	  }, {
	    name: "小数数除法",
	    children: [{
	      name: "有理数加法", value: 1,
	    }, {
	      name: "优先级加法", value: 1,
	    }]
	  }]
	},
	{
	  name: "小数减法",
	  children: [{
	    name: "个位数小数减法", value: 1,
	  }]
	},
	{
	  name: "小数减法",
	  children: [{
	    name: "个位数小数减法", value: 1,
	  }, {
	    name: "两位数小数减法", value: 1,
	  }, {
	    name: "分数减法", value: 1
	  }]
	},
	{
	  name: "小数减法",
	  children: [{
	    name: "个位数小数减法", value: 1,
	  }, {
	    name: "两位数小数减法", value: 1,
	  }, {
	    name: "分数减法", value: 1
	  }]
	}
]
//定义echarts加载的参数
var option_treemap = {
  title: {
    text: '',
    subtext: '',
    left: 'leafDepth'
  },
  tooltip: {},
  series: [{
    name: '行业',
    type: 'treemap',
    visibleMin: 300,
    data: data,
    leafDepth: 2,//呈现层级，若为1加载时仅展开一层，接下来的每一层通过单击进入，如上面的效果图所示，
    //每一层级呈现的样式
    levels: [
      {
        itemStyle: {
          normal: {
            borderColor: '#555',
            borderWidth: 1,
            gapWidth: 1
          }
        }
      },
      {
        colorSaturation: [0.3, 0.6],
        itemStyle: {
          normal: {
            borderColorSaturation: 0.7,
            gapWidth: 1,
            borderWidth: 1
          }
        }
      },
      {
        colorSaturation: [0.3, 0.5],
        itemStyle: {
          normal: {
            borderColorSaturation: 0.6,
            gapWidth: 1
          }
        }
      },
      {
        colorSaturation: [0.3, 0.5]
      }
    ]
  }]
}
    //echarts.init(this.ID)获得render中的画布
    //myChart加载option
treemap.setOption(option_treemap)
 


