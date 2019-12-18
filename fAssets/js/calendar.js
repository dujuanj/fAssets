var weeks = "日一二三四五六".split(''),
  monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  pastMleft = {
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6
  };
var time = new Date(),
  thisY = time.getFullYear(),
  thisM = time.getMonth(),
  thisD = time.getDate();
function cal() {
  var pastM = thisM - 1, realM = thisM + 1;
  var firstDW = new Date(thisY, thisM, 1).getDay(),
    thisMD = monthDays[thisM],
    pastMD = pastMleft[firstDW] ;
  nextMD = 42 - thisMD - pastMD;
  pastM = pastM < 0 ? 11 : pastM
  var lists = [];
  var pastM_lastD = monthDays[pastM];
  lists.push(`<div class="cal-title">
              <span class="cal-left-btn"><</span>
              <span class="cal-title-content">${thisY}-${realM < 10 ? 0 + '' + realM : realM}</span>
              <span class="cal-right-btn">></span>
          </div>`)
  for (var i = 0, l = weeks.length; i < l; i++) {
    lists.push('<span class="week">' + weeks[i] + '</span>')
  }

  for (var i = 0; i < pastMD; i++) {
    lists.push('<span class="past">' + (pastM_lastD - pastMD + i + 1) + '</span>')
  }

  for (var i = 1; i <= thisMD; i++) {
    var str = i == thisD ? 'today' : i < thisD ? 'now' : 'fur'
    lists.push('<span class="' + str + '">' + i + '</span>')
  }

  for (var i = 0; i < nextMD; i++) {
    lists.push('<span class="next">' + (i + 1) + '</span>')
  }

  $('#calendar').html(lists.join(' '))
}

var data1 =[
  {
    num: 1,
    order: '19XXXSCP001',
    type: '付息',
    time: '2019-12-05',
    principal: 1800,
    interest: 54,
    whether: '是'
  },
  {
    num: 2,
    order: '19XXXSCP001',
    type: '付息',
    time: '2019-12-05',
    principal: 1200,
    interest: 86,
    whether: '否'
  },
  {
    num: 3,
    order: '19XXXSCP001',
    type: '兑付',
    time: '2019-12-05',
    principal: 200,
    interest: 12,
    whether: '否'
  }
]
var data2 = [
  {
    num: 1,
    order: '19XXSSCP002',
    type: '兑付',
    time: '2019-12-13',
    principal: 1800,
    interest: 55,
    whether: '是'
  },
  {
    num: 2,
    order: '19XXSSCP002',
    type: '付息',
    time: '2019-12-13',
    principal: 1200,
    interest: 94,
    whether: '否'
  },
  {
    num: 3,
    order: '19XXSSCP002',
    type: '兑付',
    time: '2019-12-13',
    principal: 200,
    interest: 22,
    whether: '是'
  }
]
var flag = 'data1'
$('body').on('click', '.cal-left-btn', function () {
  thisM = thisM - 1;
  if (thisM < 0) {
    thisM = 11; thisY = thisY - 1
  }
  cal()
})
.on('click', '.cal-right-btn', function () {
  thisM = thisM + 1;
  if (thisM > 11) {
    thisM = 0; thisY = thisY + 1
  }
  cal()
}).on('click', '.fur, .today, .next', function () {
  var str = '';
  layer.load(2, {
    shade: [0.2,'#fff'],
    time: 2*1000
  });
  setTimeout(function () {
    if (flag == 'data1') {
      flag = 'data2'
      console.log(data1)
      data1.forEach(item => {
        str += '<tr align="center"> \
                  <td>' + item.num + '</td>\
                  <td width=80 word-wrap:break-word>' + item.order + '</td> \
                  <td>'+item.type+'</td> \
                  <td>'+item.time+'</td> \
                  <td>'+item.principal+'</td> \
                  <td>'+item.interest+'</td> \
                  <td>'+item.whether+'</td> \
                </tr>'
      })
      $('.detailed tbody').html(str)
    } else {
      flag = 'data1'
      data2.forEach(item => {
        str += '<tr align="center"> \
                  <td>' + item.num + '</td>\
                  <td width=80 word-wrap:break-word>' + item.order + '</td> \
                  <td>'+item.type+'</td> \
                  <td>'+item.time+'</td> \
                  <td>'+item.principal+'</td> \
                  <td>'+item.interest+'</td> \
                  <td>'+item.whether+'</td> \
                </tr>'
      })
      $('.detailed tbody').html(str)
    }
    
  }, 2000)
})
window.onload = cal;