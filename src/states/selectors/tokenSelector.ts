import { DefaultValue, selector } from 'recoil';
import { tokenState } from 'states/atoms/tokenAtom';
import { SelectorsKeys } from 'states/recoilKeys';
import { login } from 'types';

/**
 * トークンを保持するセレクター
 */
export const tokenSelector = selector<login>({
  key: SelectorsKeys.TOKEN_SELECCTOR,
  get:( {get} ) => { return get(tokenState) },

  set: ({set}, newValue) => {
    if (newValue instanceof DefaultValue) return
    set(tokenState, newValue)
  }
})