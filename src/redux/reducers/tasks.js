import { GET_TASKS, SET_TASKS, ADD_TASK, SORTED_TASKS, CHANGE_STATUS_DEVELOPMENT } from "../contants";

const task = (state = [], { type, payload }) => {
    switch(type) {
        case GET_TASKS:
            return state;
        case SET_TASKS:
            return [...payload];
        case ADD_TASK:
            return [...state, payload];
        case SORTED_TASKS:
            return [...payload];
        case CHANGE_STATUS_DEVELOPMENT:
            const { updateTasks } = payload;
            return [...updateTasks];
        default:
            return state;
    }
};

export default task;