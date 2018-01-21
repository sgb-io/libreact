import {h} from '../util';
import toStylesheet from 'freestyler-renderer/lib/ast/toStylesheet';
import toCss from 'freestyler-renderer/lib/ast/toCss';

const createCssResetComponent = (cssTemplate) => {
  const rawCss = toCss(toStylesheet(cssTemplate));

  return () => h('style', null, rawCss);
};

export default createCssResetComponent;
