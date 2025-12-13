import ws from 'isomorphic-style-loader/withStyles';
import {inject, observer} from 'mobx-react';
import {fp} from '@ecosystem/esoft-tools-shared';

export const asObserver = (comp, storeGetter, ...styles) => {
  const composeArgs = [];

  if (styles.length) {
    composeArgs.push(ws(...styles));
  }

  if (storeGetter) {
    composeArgs.push(inject(storeGetter));
  }

  return fp.compose(
    ...composeArgs,
    observer
  )(comp);
};