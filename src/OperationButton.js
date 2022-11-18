import { ACTIONS } from './App.js'

export default function OperaionButton({ dispatch, operation }) {
    return <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>{operation}</button>
}