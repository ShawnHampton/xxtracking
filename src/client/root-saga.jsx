import startup from './modules/startup/saga';
import game from "./modules/game/saga";
import player from "./modules/player/saga";
import company from "./modules/company/saga";
import main from "./modules/main/saga";

/*
 * saga-middleware requires a single entry point for sagas, so
 * bundle up each "child" saga into a single root that gets called
 * by the middleware.
 */
export default function* root() {
    yield* startup();
    yield* game();
    yield* player();
    yield* company();
    yield* main();
}
