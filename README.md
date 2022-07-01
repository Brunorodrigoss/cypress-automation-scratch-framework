# Cypress Automation Scratch Framework
 Cypress -Modern Automation Testing from Scratch + Frameworks
## Instalation

1. Install Nodejs: `https://nodejs.org/en/download/` 

2. Go to project folder
3. Install dependecies: `npm install`
---
## Cypress Structure
|Cypress folders / files | Description|
| ----------- | ----------- |
| fixture | Store the test data| 
| integration | Store the tests cases and examples|
| plugins | Inject customize options to the browser|
| support | Customize commands (usable methods)|
| video | For each test it will have a video about it
| node_modules | Dependencies useb by the project|
| cypress.json | File used to put some configuration or override the defaults one|

 ---
## Commands
| Description | Command |
| ----------- | ----------- |
| Install cypress | `npm install cypress --save-dev`|
| Start cypress test runner: |`node_modules/.bin/cypress`|
| Run all tests by commandline (headless): | `./node_modules/.bin/cypress run` |
| Run all tests by commandline (Displays the browser): | `./node_modules/.bin/cypress run --headed` |
| Run all tests defining a browser (The "browser" argument can be set to chrome, chromium, edge, electron, firefox) |`node_modules/.bin/cypress run --browser chrome`|
| Run specific test: | `npx cypress run --record --spec "cypress/integration/my-spec.js"`|
---
## CSS Selector Hierarchy
| Selector | Example | Example description |
| ----------- | ----------- | ----------- |
| `#id` | `#firstname` or `tagname#firstname`| Selects the element with `id="firstname"`|
| `.class` | `.intro` or `tagname.intro` | Selects all elements with `class="intro"` |
| `element.class` | `p.intro` | Select only `<p>` elements with `class="intro"` |
| `tagname[attribute=value]` | `input[type="search"]` | Select only the `input` with the `type="search"`| 
| `tagnames` | `form input` | Select the `form` that contains a `input` |
---
## Plugins
[Chropath Plugin](https://chrome.google.com/webstore/detail/chropath/ljngjbnaijcbncmcnjfhigebomdlkcjo)

