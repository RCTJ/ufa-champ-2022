'use babel';

import UfaChamp2022View from './ufa-champ-2022-view';
import { CompositeDisposable } from 'atom';

export default {

  ufaChamp2022View: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.ufaChamp2022View = new UfaChamp2022View(state.ufaChamp2022ViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.ufaChamp2022View.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'ufa-champ-2022:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.ufaChamp2022View.destroy();
  },

  serialize() {
    return {
      ufaChamp2022ViewState: this.ufaChamp2022View.serialize()
    };
  },

  toggle() {
    console.log('UfaChamp2022 was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
