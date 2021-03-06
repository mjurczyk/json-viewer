import R from 'ramda';
import { deepJsonRegex } from '@utils/json';

export const getDeepJsonChildren = (json = {}, branch = '') => {
  const branchAsArray = R.filter(Boolean)(branch.split(deepJsonRegex));

  return R.compose(
    R.keys,
    R.path(branchAsArray)
  )(json);
};
