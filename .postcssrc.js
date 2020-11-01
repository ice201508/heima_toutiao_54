module.exports = {
  plugins: {
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 8'],
    // },
    'postcss-pxtorem': {
      rootValue(res) {
        console.log(res.file.indexOf('vant'));
        return res.file.indexOf('vant') === -1 ? 75 : 37.5;
      },
      propList: ['*'],
    },
  },
};
