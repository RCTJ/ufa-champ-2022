'use babel';

import UfaChamp2022 from '../lib/ufa-champ-2022';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('UfaChamp2022', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('ufa-champ-2022');
  });

  describe('when the ufa-champ-2022:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.ufa-champ-2022')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'ufa-champ-2022:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.ufa-champ-2022')).toExist();

        let ufaChamp2022Element = workspaceElement.querySelector('.ufa-champ-2022');
        expect(ufaChamp2022Element).toExist();

        let ufaChamp2022Panel = atom.workspace.panelForItem(ufaChamp2022Element);
        expect(ufaChamp2022Panel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'ufa-champ-2022:toggle');
        expect(ufaChamp2022Panel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.ufa-champ-2022')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'ufa-champ-2022:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let ufaChamp2022Element = workspaceElement.querySelector('.ufa-champ-2022');
        expect(ufaChamp2022Element).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'ufa-champ-2022:toggle');
        expect(ufaChamp2022Element).not.toBeVisible();
      });
    });
  });
});
