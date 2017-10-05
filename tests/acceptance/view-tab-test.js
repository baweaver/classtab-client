import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

moduleForAcceptance('Acceptance - Viewing a tab', {
  beforeEach() {
    server.get('/composer', () => [200, {}, {
      id: 1,
      name: "Zequinha de Abreu",
      birthYear: 1880,
      deathYear: 1935,
      tabs: [{
        name: "Tico Tico (Tico -Tico no Farelo / Tico-Tico no Fubá)",
        difficulty: "intermediate",
        tabFile: "fake.txt",
        misc: "",
        tuning: "E A D G B E",
        timeSignature: "2/4",
        tempo: 100,
        id: 1
      }]
    }]);

    server.get('/tabs/fake.txt', () => [200, {}, 'Tico Tico']);
  }
});

test('It views a tab', async function (assert) {
  assert.expect(6);

  await visit('/');

  assert.present('h3', 'The page is loaded');
  assert.hasText('h3:first-child', 'Zequinha de Abreu');

  await click('.fa-window-maximize:first-child');

  assert.present('.modal-title', 'The modal loaded');
  assert.hasText('.modal-title', 'Tico Tico');

  assert.present('.tab-text', 'The modal loaded a tab');
  assert.hasText('.tab-text', 'Tico Tico');
});
