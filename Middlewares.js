import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "KakaoTalk";
    res.locals.routes = routes;
    next();
}