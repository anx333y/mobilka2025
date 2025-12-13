import {loadingStatus} from '@ecosystem/enums/shared';

const oneLoad = (target, name, descriptor) => {
  if (!descriptor) {
    return target;
  }

  const origin = descriptor.value || descriptor.initializer && descriptor.initializer.call(target);

  if (typeof origin !== 'function') {
    // eslint-disable-next-line no-console
    console.error('latest decorator can only be used with functions!');

    return descriptor;
  }

  if (!target.functionStatuses) {
    target.functionStatuses = {};
  }

  const newFunc = async(...args) => {
    const status = target.functionStatuses[name];

    if (status === loadingStatus.LOADING) {
      return null;
    }

    if (typeof args[0] === 'object' && args[0].constructor.name === 'Reaction') {
      // eslint-disable-next-line no-console
      console.error('I\'m sorry, I don\'t work with Reactions. Maybe later.');

      return null;
    }

    target.functionStatuses[name] = loadingStatus.LOADING;

    let result;

    try {
      result = await origin.apply(target, args);
      // eslint-disable-next-line require-atomic-updates
      target.functionStatuses[name] = loadingStatus.SUCCESS;
    } catch(err) {
      // eslint-disable-next-line require-atomic-updates
      target.functionStatuses[name] = loadingStatus.ERROR;
      throw err;
    }

    return result;
  };

  if (descriptor.value) {
    // eslint-disable-next-line id-denylist
    descriptor.value = newFunc;
  } else {
    descriptor.initializer = () => newFunc;
  }

  return descriptor;
};

export default oneLoad;
