module.exports = {
  state: {
    title: '@magic/cli',
    description: 'declarative cli wrapper for @magic',
    logotext: '@magic/cli',
    menu: [
      { to: '/#install', text: 'install' },
      { to: '/#caveats', text: 'caveats' },
      { to: '/#usage', text: 'usage' },
      { to: '/#argv', text: 'argv' },
      { to: '/#commands', text: 'commands' },
      { to: '/#help', text: 'help' },
      {
        to: '/#config',
        text: 'configuration',
        items: [
          { to: '-pure', text: 'pure' },
          { to: '-prepend-append', text: 'append / prepend' },
          { to: '-default', text: 'default' },
        ],
      },
      { to: '/#dependencies', text: 'dependencies' },
      { to: '/#source', text: 'source' },
    ],
  },
}
