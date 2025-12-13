import {inject, observer} from 'mobx-react';
// import {dispose} from '@decorators';
import { compose } from '../compose';

export const magic = (comp, decorators) => {
  const composeArgs = [];
  const {
    store,
    // disposeStore,
    withObserver = true,
    custom
  } = decorators || {};

  // priority 5
  if (custom) {
    const customs = Array.isArray(custom) ? custom : [custom];

    composeArgs.push(...customs);
  }

  // priority 3
  if (store) {
    if (typeof store === 'string') {
      const storesNames = store.split(/\s*,\s*/);

      composeArgs.push(inject(...storesNames));
    } else {
      composeArgs.push(inject(store));
    }
  }

  // priority 2
  if (withObserver) {
    composeArgs.push(observer);
  }
  // priority 1
  if (disposeStore) {
    composeArgs.push(dispose(disposeStore));
  }

  return compose(...composeArgs)(comp);
};