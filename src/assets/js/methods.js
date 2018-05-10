export function getstDate(datetime) {
  let year = datetime.getFullYear()
  let month = datetime.getMonth() + 1
  let date = datetime.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (date < 10) {
    date = '0' + date
  }
  let myTime = `${year}-${month}-${date}`
  return myTime
}

export function getDate() {
  let datetime = new Date()
  let year = datetime.getFullYear()
  let month = datetime.getMonth() + 1
  let date = datetime.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (date < 10) {
    date = '0' + date
  }
  let myTime = `${year}-${month}-${date}`
  return myTime
}

export function scoreFilter(mark) {
  if (mark < 0 || mark === undefined || mark === null || mark > 100) {
    return 'error'
  }
  if (mark < 60) {
    return 0
  }
  if (mark >= 60 && mark <= 70) {
    return 1
  }
  if (mark > 70 && mark < 85) {
    return 2
  }
  if (mark >= 85 && mark <= 100) {
    return 3
  }
}


/* HeartBeat for websocket
 * @author Acery
 * @version 1.0.0*/
class HeartBeatWs {
  constructor(url, beatTime, deadTime, fn) {
    this.beatTime = beatTime
    this.deadTime = deadTime
    this.timer = null // 计时器对象
    this.socket = new WebSocket(url) // websocket对象
    this.url = url
    this.fn = fn
  }


  /*开始心跳*/
  start() {
    console.log('start')
    this.socket.send('heartBeat')
    this.timer = setTimeout(() => {
      this.fn()
    }, this.deadTime)
  }

  /*如果响应，重置计时器*/
  reset() {
    console.log('reset')
    setTimeout(() => {
      this.start()
    }, this.beatTime)
    clearTimeout(this.timer)
  }


}

export function timeCount(url) {
  let _hb = new HeartBeatWs(url, 1000, 10000,()=>{console.log('boom')})
  let socket = _hb.socket
  socket.onopen = ()=>{
    _hb.start()
  }
  socket.onmessage = ()=>{
    _hb.reset()
  }
  socket.onerror = ()=>{}
}




