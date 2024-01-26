import { of } from "rxjs";

const account = {
    name: 'Bancolombia',
    username: 'bancolombia.azure'
};

export const mockMsal = {
    initialize: () => jest.fn().mockReturnValue(of({ logged: true, account })),
    resolveAccount: () => jest.fn().mockReturnValue(of({ logged: true, account })),
    logIn: () => jest.fn().mockReturnValue(of(null)),
    logOut: () => jest.fn().mockReturnValue(of()),
    loggedIn: () => true,
    heartBeat: () => jest.fn().mockReturnValue(of(true)),
    revoke: () => jest.fn().mockReturnValue(of({})),
    removeLocal: () => { },
    destroy: () => { }
}
