
const initialState = {
    alerts: {}
};

export default function management(state = initialState, action) {
    switch(action.type) {
    case "getBrokers":
        return Object.assign({}, state, {
            brokers: []
        });

    default:
        return state;
    }
}
