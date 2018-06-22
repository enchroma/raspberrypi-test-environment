import io from "socket.io-client"

class Socket {
  constructor() {
    /*************
     *  https://github.com/enchroma/after-image-v1
     ************ */
    const rSliderEl = document.querySelector(".slider--red")
    const gSliderEl = document.querySelector(".slider--green")
    const bSliderEl = document.querySelector(".slider--blue")

    const noUiSliders = [
      rSliderEl.noUiSlider,
      gSliderEl.noUiSlider,
      bSliderEl.noUiSlider,
    ]

    const values = [[], [], []]

    this._socket = io(window.SOCKET_URL)

    this._socket.on("color", data => {
      const c = data.split(" ")
      for (var i = 0; i < data.length; i++) {
        if (noUiSliders[i]) {
          const v1 = parseInt((c[i] / 1023) * 255)
          values[i].push(v1)
          const l = values[i].length
          if (l > 2) {
            //ignore
            if (values[i][l - 3] !== v1) {
              noUiSliders[i].set([v1])
            }
            values[i].shift()
          } else {
            noUiSliders[i].set([v1])
          }
        }
      }
    })
  }
}

export default new Socket()
