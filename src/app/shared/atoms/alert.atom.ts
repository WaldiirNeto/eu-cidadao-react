import { atom } from 'recoil'

// export const enum AlertEnum {
//     primary = `primary`,
//     secondary = `secondary`,
//     success = `success`,
//     danger = `danger`,
//     warning = `warning`,
//     info = `info`,
//     light = `light`,
//     dark = `dark`
// }
export const AlertAtomState = atom(
    {
        key: `AlertState`,
        default: {
            status: 0,
            show: false,
            message: ``,
            type: ``
        }
    }
)