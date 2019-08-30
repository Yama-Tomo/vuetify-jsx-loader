const path = require('path')

module.exports = content => {
  // prettier-ignore
  return (
    `${content}\n` +
    '\n' +
    '/* vuetify-loader */\n' +
    `import installComponents from "!${path.resolve('node_modules/vuetify-loader/lib/runtime/installComponents.js')}"\n` +
    "import { VCard } from 'vuetify/lib/components/VCard';\n" +
    "import { VListItem } from 'vuetify/lib/components/VList';\n" +
    "import { VListItemContent } from 'vuetify/lib/components/VList';\n" +
    "import { VListItemSubtitle } from 'vuetify/lib/components/VList';\n" +
    "import { VListItemTitle } from 'vuetify/lib/components/VList';\n" +
    'installComponents(component, {VCard,VListItem,VListItemContent,VListItemSubtitle,VListItemTitle})\n' +
    '\n' +
    '\n' +
    '/* vuetify-loader */\n' +
    `import installDirectives from "!${path.resolve('node_modules/vuetify-loader/lib/runtime/installDirectives.js')}"\n` +
    "import Ripple from 'vuetify/lib/directives/ripple'\n" +
    'installDirectives(component, {Ripple})\n'
  )
}
