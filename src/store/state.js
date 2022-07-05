let defaultCity = '北京'
try {
  if (localStorage.getItem('city')) {
    defaultCity = localStorage.getItem('city')
  }
} catch {}
export default {
  city: defaultCity // 当前城市
}
