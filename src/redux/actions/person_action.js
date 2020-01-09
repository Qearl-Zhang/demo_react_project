import {ADDPERSON} from '../action_types'
// 专门用于制造action对象
export const addPerson =value=>{return {type:ADDPERSON,data:value}} //分发同步action

