# Contributing

This project is based on [react-native-boilerplate](https://github.com/psychobolt/react-native-boilerplate). Please refer its README for development setup. Also be sure to check out its [resources page](https://github.com/psychobolt/react-native-boilerplate/wiki/Resources)

If you would like to contribute, you could state your interest in our Gitter lobby or send a private message to any project owners. We will then assign you a to team as soon as possible.

## Components

There are two main components of the project.

### Demo App

An mobile application for showcasing demo forms and components. Located under **src/App**

### Framework

Core framework for rendering form components and demos. Core form components are located under **src/Framework/Core**

## Responsibilities

### Announcements

Main announcements will be posted by team leads on Gitter. This incluides any team scheduled meetings, milestones, and deadlines.

### Issues

Problems or questions should be filed under the [issues](https://github.com/psychobolt/react-native-boilerplate/issues). Any issue will be looked at by a team member and then appropriately assigned to the a project (as cards) to be worked on. Issues should have appropriate tags.

### Cards

You can assign yourself a available task that is Ready in [projects](https://github.com/NativeForms/framework-src/projects). Cards that are In Progress should have assignee(s). Done cards should have their issues closed.

### Merging Commits

Commits directly to `master` branch are prohibited. Instead, when working on a assigned issue you should create a branch that you will later assign as a [pull request](https://github.com/NativeForms/framework-src/pulls). Only issues associated with pull requests will be reviewed and closed appropriatly. This ensures every branch is tested and have sufficient reviewers. The only exception are `*-experimental` branches, which is used to test a feature in a progress state. Experimental branches when ready to be reviewed, should be renamed (without the `-experimental` postfix) before being associated with a pull request.

### Testing

It is advised to run both Jest and Linter on source changes before a push:

```bash
$ npm test
$ npm run lint
```