import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

 module('Integration | Helper | gte', function(hooks) {
  setupRenderingTest(hooks);

   // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', [1, 2]);

     await render(hbs`{{gte inputValue}}`);

     assert.equal(this.element.textContent.trim(), 'false');
  });
});
