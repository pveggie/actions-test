module.exports = {
  branches: [
    'main',
    {
      name: 'staging',
      prerelease: true,
    },
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          {release: 'patch'},
          // { "type": "docs", "scope": "README", "release": "patch" },
          // { "type": "refactor", "release": "patch" },
          // { "type": "style", "release": "patch" }
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/exec',
      {
        prepareCmd: 'yarn "build-${branch.name}"',
        execCwd: 'android',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: [{path: 'app/build/outputs/apk/${branch.name}/release/*'}],
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'yarn.lock'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
