import { DefaultValue, selector } from 'recoil';
import { loginState } from 'states/atoms/loginAtom';
import { SelectorsKeys } from 'states/recoilKeys';

/**
 * ログイン状態を保持するセレクター
 */
export const loginSelector = selector<boolean>({
  key: SelectorsKeys.LOGIN_SELECTOR,
  get:( {get} ) => { return get(loginState) },

  set: ({set}, newValue) => {
    if (newValue instanceof DefaultValue) return
    set(loginState, newValue)
  }
})