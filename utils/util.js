const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

// My
let index = require('../data/data_index.js')

function getData(url){
  return new Promise(function(resolve, reject){
    wx.request({
      url: '',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log("success")
        resolve(res)
      },
      fail: (res)=>{
        reject(res)
        console.log("failed")
      },
    });
  })
}

function getData(){
  return index.index;
}