module.exports = {
  branches: [
    'main',
    {
      name: 'staging',
      prerelease: true
    }
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        "releaseRules": [
          { "release": "patch"}
          // { "type": "docs", "scope": "README", "release": "patch" },
          // { "type": "refactor", "release": "patch" },
          // { "type": "style", "release": "patch" }
        ],
      }
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    "@semantic-release/git"
  ]
}