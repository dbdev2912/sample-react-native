import { defaultBranch, LangsBranch } from './router';
import { styles } from './configs';

const initState = {
    css: styles
}

export default ( state = initState, action ) => {
    switch (action.branch) {
        case "langs":
            return LangsBranch(state, action);
            break;
        default:
            return defaultBranch(state, action);
            break;
    }
}
