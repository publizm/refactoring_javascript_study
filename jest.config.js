const testModulePath = [
  '**/minjman/after/challenge/**/*',
  // '**/heeyeon/after/**/*',
  // '**/publee/after/ch11/*',
  // '!**/publee/after/**/*.answer',
];

const addExtname = ext => testModulePath.map(path => `${path}${ext}`);

export default () => {
  return {
    rootDir: './',
    collectCoverage: true,
    coveragePathIgnorePatterns: ['node_modules'],
    testEnvironment: 'node',
    collectCoverageFrom: addExtname('.js'), // coverage는 js 파일 기준
    testMatch: addExtname('.test.js'), // testMatch는 test 파일 기준
  };
};
