import { atom } from 'recoil';
import { AtomKeys } from 'states/recoilKeys';
import { login } from 'types';

export const tokenState = atom<login>({
  key: AtomKeys.TOKEN_STATE,
  default: {
    accessToken: "",
    refreshToken: ""
  }
})