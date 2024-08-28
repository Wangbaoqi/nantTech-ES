
import { visit } from 'unist-util-visit';
import emu from 'ecmarkup';

module.exports = function rehypeEcmarkup() {
  return async function transformer(tree) {
    const promises = [];

    visit(tree, 'code', (node) => {
      console.log(node, 'node');
      if (node.lang === 'ecmarkup') {
        promises.push(
          emu.build(node.value).then((html) => {
            node.type = 'html';
            node.value = html;
          })
        );
      }
    });

    await Promise.all(promises);
  };
};
