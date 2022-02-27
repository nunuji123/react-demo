const { override, addDecoratorsLegacy, useBabelRc } = require('customize-cra')
// eslint-disable-next-line react-hooks/rules-of-hooks
const config = override([useBabelRc(), addDecoratorsLegacy()])
module.exports = config
