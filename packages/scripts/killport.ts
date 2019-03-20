import exec from 'executive';
import { head, last } from 'fp-ts/lib/Array';

const words = (s: string) => s.split(' ').filter(Boolean);

const lines = (s: string) => s.split('\n');

const panic = (msg: unknown) => {
  console.error('Killport failed', msg);
  process.exit(1);
};

/**
 * @example
 * yarn workspace scripts killport 3333 // Kills `studio`
 */
async function main() {
  const [portNumber] = process.argv.slice(2);

  if (!Number(portNumber)) {
    panic(`
      Usage:
        ts-node killport.ts <portNumber>
    `);
  }

  if (process.platform === 'win32') {
    const res = await exec(`
      netstat -ano | findstr :${portNumber}
    `);

    if (res.status !== 0) {
      panic(res);
    }

    head(lines(res.stdout))
      .map(words)
      .chain(last)
      .map(processId => {
        const taskKillRes = exec(` 
            taskkill /PID ${processId} /F
        `);

        if (taskKillRes.status !== 0) {
          panic(taskKillRes);
        }
      });
  } else {
    console.error('Sorry! Not implemented :c');
  }
}

main();
