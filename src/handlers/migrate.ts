import { Handler, Context } from 'aws-lambda';
import { spawn } from 'child_process';
import { resolve } from 'path';

export const handler: Handler = async (event: any, context: Context) => {
  return await new Promise<void>((res, reject) => {
    const proc = spawn(
      resolve(
        '/var/task/_optimize/core-api-staging-migrate/src/node_modules/@prisma/cli/build/index.js',
      ),
      ['migrate', 'deploy', '--preview-feature'],
      {
        env: {
          ...process.env,
        },
      },
    );

    proc.stdout.on('data', (data) => {
      console.log(`data: ${data}`);
    });
    proc.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
    proc.on('close', (code) => {
      console.log(`exited with code ${code}`);

      resolve();
    });
  });
};
