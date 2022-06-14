import { cursorEnter, cursorLeave } from "./CursorActions";

export const mouseEnter = (dispatch) => {
    dispatch(cursorEnter());
};

export const mouseLeave = (dispatch) => {
    dispatch(cursorLeave());
};
