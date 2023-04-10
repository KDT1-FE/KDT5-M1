/**
 * @description ms만큼 await합니다.
 * @param {number} ms
 * @returns {Promise<undefined>}
 */
const delay = async (ms) => {
  await new Promise((res) => {
    setTimeout(res, ms)
  })
}

/**
 * @description progress bar(#progress)의 value를 100ms마다 변경합니다.
 * @param {number} ms max value
 * @return {undefined}
 */
function progress(ms) {
  const start = Date.now()
  const intervalId = setInterval(() => {
    // progressValue = (현제시간 - 시작시간) / (ms/100)
    const progressValue = parseInt((Date.now() - start) / (ms / 100), 10)
    document.querySelector('#progress').value = progressValue
  }, 100)
  setTimeout(() => clearInterval(intervalId), ms)
}

/**
 * @description '.view > figure > div' 안에 있는 백그라운드 이미지를 6초마다 변경합니다.
 */
async function convertBackground() {
  const viewEls = Array.from(document.querySelectorAll('.view > figure > div'))
  const bgIdxQueue = []
  viewEls.map((_, i) => bgIdxQueue.push(i))

  while (bgIdxQueue.length) {
    const idx = bgIdxQueue.shift()
    viewEls.map((el, i) => {
      if (i === idx) {
        document.querySelector(`.progress p:nth-child(${i + 1})`).classList.add('active')
        el.style.opacity = 1
      } else {
        document.querySelector(`.progress p:nth-child(${i + 1})`).classList.remove('active')
        el.style.opacity = 0
      }
      return null
    })
    // 비동기적으로 progress바가 1% ~ 100%까지 차오릅니다.
    progress(6000)
    // 6초간 await합니다.
    await delay(6000)
    // 현제 index를 bgIdxQueue의 맨 뒤에 넣습니다.
    bgIdxQueue.push(idx)
  }
}

window.addEventListener('DOMContentLoaded', convertBackground())
