/**
 * @see https://nodejs.org/api/test.html
 */

import test from 'node:test';
import assert from 'node:assert';

test('synchronous passing test', (t) => {
    assert.strictEqual(1, 1);
});

test('synchronous passing test skipped', { skip: true }, (t) => {
    assert.strictEqual(1, 1);
});

test('synchronous passing test todo', { todo: true }, (t) => {
    assert.strictEqual(1, 1);
});

// 'only' and 'runOnly' require the --test-only command-line option.
test('synchronous passing test only', { only: true, skip: true }, (t) => {
    assert.strictEqual(1, 1);
});

test('failing test using Promises', async (t) => {
    const x = new Promise((resolve, reject) => {
        setImmediate(() => {
            resolve('Success');
        });
    });

    const y = await x;

    assert.strictEqual('Success', y);
});
