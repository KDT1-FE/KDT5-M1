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
    const progressValue = parseInt((Date.now() - start) / (ms / 100), 10)
    document.querySelector('#progress').value = progressValue
  }, 100)
  setTimeout(() => clearInterval(intervalId), ms)
}

/**
 * @description '.view > figure > div' 안에 있는 백그라운드 이미지를 6초마다 변경합니다.
 */
async function convertBackground() {
  const TRUE = true
  const viewEls = Array.from(document.querySelectorAll('.view > figure > div'))
  const nextBg = []
  viewEls.map((_, i) => nextBg.push(i))

  while (TRUE) {
    const idx = nextBg.shift()
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
    progress(6000)
    // eslint-disable-next-line no-await-in-loop
    await delay(6000)
    nextBg.push(idx)
  }
}

window.addEventListener('DOMContentLoaded', convertBackground())
