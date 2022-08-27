import { atom, atomFamily } from 'recoil';
import { AtomKeys } from 'states/recoilKeys';
import { login } from 'types/data';

export const loginState = atom<boolean>({
  key: AtomKeys.LOGIN_STATE,
  default: false
})