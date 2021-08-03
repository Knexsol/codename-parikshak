export const API_ROOT: {[env: string]: string} = {
    PRODUCTION: '',
    DEV: 'http://localhost:9099',
}

export const API_URLS = {
    SIGNIN: '/api/user/signin',
    SIGNUP: '/api/user/signup',
}

export const getAPIRoot = (env: string): string => API_ROOT[env]