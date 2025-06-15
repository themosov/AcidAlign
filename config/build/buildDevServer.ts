import { BuildOptions } from "./types/config";
import { Configuration as DevConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
