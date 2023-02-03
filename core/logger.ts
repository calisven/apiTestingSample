import { injectable } from "inversify";

@injectable()
export class Logger {
    constructor(){}

    debug(msg: string) {}

    info(msg: string) {}

    error(msg: string) {}
}