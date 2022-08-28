import { atom } from 'recoil';
import { AtomKeys } from 'states/recoilKeys';

export const loginState = atom<boolean>({
  key: AtomKeys.LOGIN_STATE,
  default: false
})