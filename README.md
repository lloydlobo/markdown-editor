# Markdown Editor

<!--toc:start-->

- [Markdown Editor](#markdown-editor)
  - [Description](#description)
  - [Overview](#overview)
    - [Features](#features)
    - [File Structure](#file-structure)
    - [Future](#future)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  <!--toc:end-->

<a href="https://opensource.org/licenses/MIT" target="_new">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg"
  alt="License: MIT">
</a>

## Description

This project uses the React framework, specifically with
the Next.js library for server-side rendering and routing. It also uses
the Chakra UI component library for its styling and user interface.

The goal of this project is to provide a simple and intuitive note-taking
app that allows users to easily create and edit notes in Markdown
format. The app is designed to be customizable with its light and dark
themes and provides user-friendly features such as local storage, copy
markdown button, and human-readable note creation dates.

In addition to the future tasks mentioned, another potential improvement
could be implementing a syncing feature with cloud storage or other
devices for seamless note-taking across platforms.

This is a note-taking app that allows users to create and edit notes in
Markdown format. The app has a sidebar with a list of notes, a navbar,
and an editor/preview section.

## Overview

The app uses a custom Chakra UI theme and allows users to switch between
light and dark modes. The notes are stored locally using the browser's
localStorage API.

### Features

- Sidebar with a list of notes
- Editor and preview sections for note-taking
- Custom Chakra UI theme with light and dark mode
- LocalStorage API for storing notes
- Ability to create and delete notes
- Markdown formatting in the editor section
- Copy markdown button
- User action messages
- Tooltip with delay on title and copy markdown button
- Human-readable note creation dates
- Keyboard shortcuts for improved
  user experience (future task)

### File Structure

The file structure is as follows:

- `components`: Contains all the components used in the app, such as the
  navbar, sidebar, editor and preview components.
- `hooks`: Contains the useLocalStorage hook for accessing and storing notes locally.
- `lib`: Contains constants, and the custom Chakra UI theme.
- `pages`: Contains the main pages of the app, such as the home page and the API endpoint.
- `store`: Contains the AppContext and note-reducer used for state management.
- `styles`: Contains global CSS styles.
- `tests`: Contains utility tests.
- `types`: Contains type definitions for the app.
- `utils`: Contains utility functions for accessing and manipulating data.

### Future

Future tasks include implementing a search function and adhering to the
design's color scheme.

## Installation

To install this project, [insert steps on how to install or link to
installation documentation].

## Usage

To use this project, [insert instructions on how to use or link to
usage documentation].

To run the app, clone the repository and run the following commands:

```shell
npm install npm run dev
```

To use this project, follow the steps below:

Clone the repository to your local machine using the command:

```shell
git clone <repository-url>
```

Navigate to the project directory:

```shell
cd markdown-editor
```

Install the project dependencies using npm:

```shell
npm install
```

Start the development server:

```shell
npm run dev
```

Access the app in your browser at `http://localhost:3000`

You can create a new note by clicking on the "+" icon in the sidebar.
To edit a note, simply click on its title in the sidebar. The editor
section will appear with the note's content. You can format the note
using Markdown syntax.

The app also provides a copy markdown button for each note, allowing
you to easily copy its content to your clipboard.

To delete a note, click on the trash icon next to its title in the
sidebar.

## Contributing

Contributions to this project are welcome. To contribute, please follow
these steps:

Fork the repository Create a new branch for your feature or bug fix:

```shell
git checkout -b my-feature-branch
```

Make your changes and commit them:

```shell
git commit -m "Added new feature"
```

Push your changes to your forked repository:

```shell
git push origin my-feature-branch
```

Create a pull request against the main repository.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file
for details.
