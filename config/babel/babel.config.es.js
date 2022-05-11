module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    ['@babel/preset-react', {"runtime": "automatic"}],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
      },
    ],
  ],
};