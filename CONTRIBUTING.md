# Contributing

## Releasing

Changelog and releasing are automated with npm scripts and actions. To create a release:

- Navigate to the Actions tab.
- Select the `Version and Release` action.
- Trigger the action, specifying the semantic version bump that is needed.
- Changelog, GitHub release, and npm publish are handled by the action.
- An in-depth review of this system is documented here: [bret.io/projects/package-automation](https://bret.io/projects/package-automation/).

If for some reason this isn't working or a local release is preferred, follow these steps:

- Ensure a clean working git workspace.
- Run `npm version {patch, minor, major}`.
  - This will update the version number and generate the changelog.
- Run `npm publish`.
  - This will push your local git branch and tags to the default remote, create the GitHub release with releasearoni, and create an npm publication.

## Guidelines

- Patches, ideas and changes welcome.
- Fixes almost always welcome.
- Features sometimes welcome.
  - Please open an issue to discuss the issue prior to spending lots of time on the problem.  
  - It may be rejected.  
  - If you don't want to wait around for the discussion to commence, and you really want to jump into the implementation work, be prepared for fork if the idea is respectfully declined.
- Try to stay within the style of the existing code.
- All tests must pass.
- Additional features or code paths must be tested.
- Aim for 100% coverage.
- Questions are welcome, however unless there is a official support contract established between the maintainers and the requester, support is not guaranteed.
- Contributors reserve the right to walk away from this project at any moment with or without notice.
