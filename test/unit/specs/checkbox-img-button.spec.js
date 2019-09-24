import { createTest, destroyVM } from '../util';
import CheckboxImgButton from 'packages/checkbox-img-button';

describe('CheckboxImgButton', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(CheckboxImgButton, true);
    expect(vm.$el).to.exist;
  });
});

