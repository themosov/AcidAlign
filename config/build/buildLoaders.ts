import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    const cssLoader = {
        test: /\.css$/i,
        use: [
            "style-loader",
            "css-loader",
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
    return [
        tsLoader,
        svgLoader,
        cssLoader,
    ];
}
