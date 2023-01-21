import { setCurrent } from "../../reducers/router/router"

export const navigate = (route) => async dispatch => {
    dispatch(setCurrent(route))
}
