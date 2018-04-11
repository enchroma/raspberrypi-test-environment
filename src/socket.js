import io from "socket.io-client"

class Socket {
  constructor() {
    const rSliderEl = document.querySelector(".slider--red")
    const gSliderEl = document.querySelector(".slider--green")
    const bSliderEl = document.querySelector(".slider--blue")

    const noUiSliders = [
      rSliderEl.noUiSlider,
      gSliderEl.noUiSlider,
      bSliderEl.noUiSlider,
    ]

    this._socket = io(window.SOCKET_URL)

    this._socket.on("color", data => {
      const c = data.split(" ")
      for (var i = 0; i < data.length; i++) {
        if(noUiSliders[i]){
          const v1 = parseInt(c[i] / 1023 * 255);
          noUiSliders[i].set([v1])
        }
      }
    })
  }
}

export default new Socket()