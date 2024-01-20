// declare global {
//   namespace NodeJs {
//     interface ProcessEnv {
//       PORT: number;
//     }
//   }
// }

interface ImportMeta {
  env: {
    GITHUB_AUTH_TOKEN: string;
    NODE_ENV: "development" | "production";
    PORT?: string;
    PWD: string;
  };
}
