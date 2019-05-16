export const parseCommands = ({ commands = [], pure = false }) => {
  const cmds = {}
  commands.map((tasks = []) => {
    let key
    let idx = -1
    if (typeof tasks === 'string' && process.argv.includes(tasks)) {
      idx = process.argv.indexOf(tasks)
      key = tasks
    } else {
      if (!Array.isArray(tasks)) {
        tasks = [tasks]
      }
      const idxArray = tasks
        .filter(task => process.argv.includes(task))
        .map(task => process.argv.indexOf(task))

      idx = idxArray[0]
      key = tasks[0]
    }

    if (!pure && idx > -1) {
      cmds[key] = true
      process.argv[idx] = key
    }
  })

  return cmds
}