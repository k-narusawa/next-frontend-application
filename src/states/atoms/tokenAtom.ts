import { atom } from 'recoil';
import { AtomKeys } from 'states/recoilKeys';
import { token } from 'types';

export const tokenState = atom<token>({
  key: AtomKeys.TOKEN_STATE,
  default: {
    accessToken: "",
    refreshToken: ""
  }
})