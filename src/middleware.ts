export function onRequest(context: any, next: any) {
  context.locals.title = "John Wick";
  context.locals.welcomeTitle = () => {
    return "Welcome back " + context.locals.title;
  };
  context.locals.orders = [1, 2, 3];

  return next();
}
