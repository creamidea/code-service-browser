import { verifyAndFix } from './lint';

const { self } = window;

self.onmessage = (event) => {
  const { workType, workParams, workId } = event.data;
  switch (workType) {
    case 'lint': {
      // TODO: 增加对工作负载的校验
      const output = verifyAndFix(
        workParams?.code,
        workParams.config,
        workParams?.options,
      );
      self.postMessage({
        workId,
        workType,
        workPayload: output,
      });
      break;
    }
    default:
      break;
  }
};

export async function lint(code, config, options) {
  return new Promise((resolve) => {
    console.time('create lint work');
    const worker = new Worker('./lint.worker.js');
    console.timeEnd('create lint work');
    worker.onmessage = (event) => {
      resolve(event.data);
      // console.log(event.data)
    };
    worker.postMessage({
      workType: 'lint',
      workParams: {
        code,
      },
    });
  });
}
