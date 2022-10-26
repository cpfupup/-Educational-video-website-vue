module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser', // Specifies the ESLint parser
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            // Allows for the parsing of JSX
            jsx: true
        }
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    rules: {}
}
//这个地方遇到了一个坑，如果eslint-config-prettier版本号在8.0.0以上，则在.eslintrc.js配置extends中不需要再新增 'prettier/@typescript-eslint' 这个配置，否则执行eslint会报错