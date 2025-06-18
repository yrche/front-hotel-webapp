export { registration } from './store/auth.store.js';
export { login } from './store/auth.store.js';
export { logout } from './store/auth.store.js'
export { refresh } from './store/auth.store.js';
export { clearError } from './reducer/auth.js';

import auth from "../model/reducer/auth.js";

export default {
    auth,
}