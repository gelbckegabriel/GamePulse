const env = process.env.NODE_ENV;

let environment;

if (env === 'development') {
    environment = require('./development').environment;
} else if (env === 'production') {
    environment = require('./production').environment;
} else {
    throw new Error(`Unknown environment: ${env}`);
}

export { environment };