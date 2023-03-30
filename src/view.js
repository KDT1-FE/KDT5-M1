/**
 * ms만큼 await합니다.
 * @param {number} ms
 * @returns {boolean}
 */
// eslint-disable-next-line no-return-await, no-promise-executor-return
const delay = async (ms) => await new Promise((res) => setTimeout(res, ms))

function progress(ms) {
  const start = Date.now()
  const intervalId = setInterval(() => {
    const progressValue = parseInt((Date.now() - start) / (ms / 100), 10)
    document.querySelector('#progress').value = progressValue
  }, 100)
  setTimeout(() => clearInterval(intervalId), ms)
}

async function convertViewBg() {
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
window.addEventListener('DOMContentLoaded', convertViewBg())
