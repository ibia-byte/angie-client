import { ICreateTaskDto } from "../../modules/tasks/types";

export const servicesConstants = {
    servicesAddTask: "servicesAddTask",

    coreLogout: "CORE_LOGOUT"
}

export interface IServicesState {
    data: ICreateTaskDto[]
    selected?: ICreateTaskDto
    loading: boolean
}

const initialState: IServicesState = {
    data: [],
    loading: true,
    selected: undefined
}

export default function reducer(state = initialState, action: any) {
    switch (action.type) {

        case servicesConstants.servicesAddTask: {
            const newTask: ICreateTaskDto[] = action.payload
            return { ...state, data: [...state.data, newTask] }
        }

        default: {
            return state
        }
    }
}