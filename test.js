import test from 'ava';
import es5 from './es5';
import 'babel-core/register';
import es6 from './es6';

test(t => {
	t.ok(/ES5/.test(es5()));
	t.ok(/ES6/.test(es6()));
	t.end();
});
