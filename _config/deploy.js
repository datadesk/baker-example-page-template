// packages
const { Delivery } = require('@datagraphics/delivery');

async function main() {
  const bucket = process.env.AWS_BUCKET;
  const basePath = process.env.DELIVERY_BASE_PATH;

  console.log('bucket:', bucket);
  console.log('basePath:', basePath);

  const delivery = new Delivery({ bucket, basePath });

  delivery.on('upload', ({ isIdentical, Key, size }) => {
    console.log(`${isIdentical ? 'Skipped' : 'Uploaded'}: ${Key} (${size})`);
  });

  await delivery.uploadFiles('_dist', {
    shouldCache: true,
    isPublic: bucket === 'bigbuilder', // we have to explicitly make it public for "bigbuilder"
  });
}

main().catch(console.error);
