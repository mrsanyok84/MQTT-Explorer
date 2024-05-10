module.exports = {
  branches: ['master', { name: 'beta', prerelease: true }, { name: 'alpha', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    'semantic-release-export-data',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'yarn.lock'],
      },
    ],
  ],
}
