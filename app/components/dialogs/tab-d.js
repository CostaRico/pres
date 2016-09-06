import Ember from 'ember';
import TabbedDialog from 'present/components/dialogs/tabbed-dialog';

export default Ember.Component.extend({
  tabsComp: null,
  classNames: ['tab-d'],
  classNameBindings: ['isSelected::hidden'],
  init () {
    this._super(...arguments);
    this.set('tabsComp', this.nearestOfType(TabbedDialog));
    this.get('tabsComp').register(this);
  },
  isSelected: Em.computed('tabsComp.selection', 'id', function(){
    return this.get('id') === this.get('tabsComp.selection');
  })
});
