export default async (ctx, next) => {
    try {
        await next();
    } catch(err) {
        ctx.status = err.status,
        ctx.body = err.body;
    }
};