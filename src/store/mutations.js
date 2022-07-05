export default {
  SET_CITY (state, payload) {
    state.city = payload
    try {
      localStorage.setItem('city', payload)
    } catch {}
  }
}
