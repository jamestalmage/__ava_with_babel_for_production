# How to use AVA, and transpile your PRODUCTION code 

AVA only transpiles your test code for you. If you want to transpile sources, you must do it yourself.

The important steps.

1. Make sure you are using the latest AVA (0.4.2 at time of writing). `npm i -D ava@latest`
2. Install a matching version of AVA (you can't use Babel 6 - yet!). `npm i -D babel@5`
3. Import the babel require hook in your tests (see test.js).

Files imported before the hook (and all their transitive dependencies) must be written in `ES5`.
If you are going to do this `import 'babel-core/register';`, really should be the first line of your test.

## License

MIT © [James Talmage](http://github.com/jamestalmage)
