TemplateGen
==============

![Version](https://img.shields.io/badge/version-1.0.1-blue.svg) ![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg) ![License](https://img.shields.io/badge/License-MIT-yellow.svg) ![Twitter Follow](https://img.shields.io/twitter/follow/bolorundurovb.svg?style=social)

Table of Contents
--------------------

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Testing](#testing)
6. [Contributing](#contributing)
7. [Support](#support)
8. [License](#license)
9. [Author](#author)

Introduction
---------------

Welcome to TemplateGen – a world-class CLI tool that effortlessly scaffolds your next project with style and efficiency.
Designed with modern developers in mind, TemplateGen leverages the power of ES Modules and TypeScript to deliver a
seamless experience from setup to deployment.

Features
-----------

* Rapid Project Setup: Kickstart new projects in seconds
* Customizable Templates: Tailor templates to your workflow
* Modern Stack: Built with ES Modules + TypeScript
* Developer-Friendly: Intuitive CLI & clear documentation
* Colorful Terminal Output: Visual feedback for all actions

Installation
---------------

### Local Development

    git clone https://github.com/bolorundurovj/templategen.git
    cd templategen
    npm install

### Global CLI Tool

    npm install -g @bolorundurovb/mvcli

Usage
--------

### Basic Generation

    npm run start

### Global CLI Usage

    mvcli

### Full CLI Arguments

    mvcli \
      --projectName "api-service" \
      --projectType "backend" \
      --language "python" \
      --framework "FastAPI" \
      --architecturePattern "microservices" \
      --database "postgresql"

Frontend and fullstack projects can also choose a navigation layout:

    mvcli \
      --projectName "web-app" \
      --projectType "frontend" \
      --language "typescript" \
      --framework "React" \
      --layout "sidenav"

### Interactive TUI Mode (Default)

Running without full arguments launches the interactive Terminal User Interface (TUI) powered by Ink:

    mvcli

Inside the TUI:
- Use **↑ / ↓ arrows** to highlight choices.
- Press **Enter** to confirm a selection.
- Press **Esc** to step back to previous questions and edit choices.
- View real-time architecture summaries in the right-hand panel.

### Classic Prompt Fallback Mode

If you prefer classic sequential terminal prompts (or in non-TTY / CI environments):

    mvcli --classic

### Full CLI Arguments

<div class="command-reference">
  <h2>Command Options Reference</h2>

  <table class="options-table">
    <thead>
      <tr>
        <th>Option</th>
        <th>Required</th>
        <th>Allowed Values</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--projectName</code></td>
        <td>Yes</td>
        <td>Any valid string</td>
        <td>Name for your project directory</td>
      </tr>
      <tr>
        <td><code>--projectType</code></td>
        <td>Yes</td>
        <td>
          <code>frontend</code>, 
          <code>backend</code>, 
          <code>fullstack</code>
        </td>
        <td>Type of project to scaffold</td>
      </tr>
      <tr>
        <td><code>--language</code></td>
        <td>Yes</td>
        <td>
          <code>javascript</code>, 
          <code>typescript</code>, 
          <code>python</code>, 
          <code>csharp</code>
        </td>
        <td>Primary programming language</td>
      </tr>
      <tr>
        <td><code>--framework</code></td>
        <td>Yes</td>
        <td>Any specified framework name</td>
        <td>-</td>
      </tr>
      <tr>
        <td><code>--architecturePattern</code></td>
        <td>No</td>
        <td>
          <code>ddd</code>,
          <code>cqrs</code>,
          <code>monolithic</code>, 
          <code>microservices</code>, 
          <code>mvc</code>, 
          <code>event-driven</code>
        </td>
        <td>Architectural approach (DDD, CQRS, Monolith, Microservices, MVC, Event-Driven). Backends get starter files for the pattern plus an <code>ARCHITECTURE.md</code> guide; <code>microservices</code> adds a <code>Dockerfile</code>, <code>docker-compose.yml</code>, and an nginx gateway.</td>
      </tr>
      <tr>
        <td><code>--layout</code></td>
        <td>No</td>
        <td>
          <code>topnav</code>,
          <code>sidenav</code>
        </td>
        <td>Navigation layout for frontend and fullstack projects (top navigation bar vs sidebar). Supported by all frontend templates; ignored for backend projects. Defaults to <code>topnav</code>.</td>
      </tr>
      <tr>
        <td><code>--database</code></td>
        <td>No</td>
        <td>
          <code>mongodb</code>, 
          <code>postgresql</code>, 
          <code>mysql</code>, 
          <code>sqlite</code>
        </td>
        <td>Database system integration</td>
      </tr>
      <tr>
        <td><code>--classic</code></td>
        <td>No</td>
        <td><code>boolean</code></td>
        <td>Use classic line-by-line terminal prompts instead of the interactive TUI</td>
      </tr>
      <tr>
        <td><code>--tui</code></td>
        <td>No</td>
        <td><code>boolean</code> (default: <code>true</code>)</td>
        <td>Enable or disable the interactive Terminal User Interface</td>
      </tr>
    </tbody>
  </table>

  <div class="table-notes">
    <p><strong>Note:</strong> When using interactive mode, you'll be prompted for any missing required options.</p>
    <p><strong>Validation:</strong> Invalid values will trigger error messages with suggestions</p>
  </div>
</div>

#### To see all available commands

    mvcli --help

Testing
----------

    npm run test

The live matrix scaffolds every template, installs its dependencies, runs its own tests and Playwright e2e specs, and boots each server. It is slow and is skipped by `npm run test`; it needs Python and the .NET SDK for those templates (missing toolchains are skipped).

    npm run test:live
    make test-live
    LIVE_MATRIX_ONLY=backend-python,fullstack- npm run test:live
    LIVE_MATRIX_LAYOUTS=topnav,sidenav npm run test:live

Contributing
---------------

We welcome contributions through:

* [Issue tracking](/issues)
* [Contribution guidelines](/contributing)
* PR submissions

Support
----------

Show your love:

* Star the repository
* [Support on Patreon](https://www.patreon.com/bolorundurovb)

License
----------

MIT Licensed - See [full license details](/licence)

Author
-----------

**Bolorunduro Valiant-Joshua**

* [Portfolio](https://bolorundurovb.live)
* [Twitter](https://twitter.com/bolorundurovb)
* [LinkedIn](https://linkedin.com/in/bolorundurovb)
* [GitHub](https://github.com/bolorundurovj)

Made by BolorunduroVB. Happy coding!
