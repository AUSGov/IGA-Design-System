import del from 'del'
import { stdout } from 'node:process'

await del(['docs/**', '!docs/.git'], {
  onProgress: progress => {
    stdout.clearLine(0)
    stdout.cursorTo(0)
    stdout.write('Deleting Files in /docs: ' + progress.percent * 100 + '%')
  }
})
