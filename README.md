# Plain javaScript

* npm init -y
* npm install webpack webpack-cli --save-dev (or -D) 
* mkdir src -> index.js
* change Script to :
 "scripts": {
    "start": "webpack-dev-server --mode development --port 7172 --open --hot",
    "dev": "webpack --mode development --progress",
    "build": "webpack --mode production --progress"
  }

# Add React To Project
* npm install react react-dom
* npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader 
* create webpack.config.js and Config it
* create babel.config.json OR .babelrc and Config it
* initialize react in Index.js
* add public -> index.html
* npm install --save-dev html-webpack-plugin 


# Descriptions

## plain javascript
 * npm init -y :  is a shortcut to quickly create a package.json file with default values, saving you from manually answering the prompts during the initialization process.

--save-dev or -D: This flag is used to specify that the packages being installed are development dependencies

Without --progress:
The build process will still occur.
You won't see a progress bar indicating the build completion status.

With --progress:
its good for big projects.
You'll see a progress bar that provides visual feedback on the build process.
This can be useful for understanding how much time is remaining during a build.

## add React
* @babel/core: This is the core functionality of Babel. It provides the basic Babel transformation capabilities.

* @babel/preset-env: This preset enables Babel to transform JavaScript code based on the latest ECMAScript standard. It allows you to use the latest JavaScript features without worrying about compatibility issues in different environments.

* @babel/preset-react: This preset is specifically for React. It enables Babel to transform JSX syntax used in React components into plain JavaScript.

* babel-loader: This is a webpack loader that allows you to use Babel with webpack. It enables webpack to run Babel transformations on your JavaScript files as part of the build process.

* html-webpack-plugin:The html-webpack-plugin is a popular npm package in the JavaScript ecosystem, specifically designed for use with webpack, which is a module bundler for JavaScript applications. The main purpose of the html-webpack-plugin is to simplify the process of creating an HTML file that includes all the necessary assets (such as JavaScript and CSS files) generated by webpack during the build process. 

## the different between .babelrc and babel.config.json

* .babelrc:

This is the traditional and older configuration file for Babel.
It is usually a JSON file named .babelrc or a JavaScript file named .babelrc.js.
The configuration is specific to the directory where the file is located. It doesn't affect nested directories.
If you have multiple .babelrc files in different directories, Babel will merge the configurations in a way that the nearest configuration file takes precedence.
It's suitable for projects that don't have a monolithic structure and where different parts of the project might have different Babel configurations.

* babel.config.json:

Introduced in Babel 7, this configuration file is designed to replace .babelrc.
It is a JSON file named babel.config.json or a JavaScript file named babel.config.js.
The configuration specified in this file applies globally to the entire project, including nested directories.
It's suitable for monolithic projects where a consistent Babel configuration is needed across all parts of the project.

* mitonim tamami mavared babel ro daron webpack ham bezarim vali joda bashe code tamiz tare