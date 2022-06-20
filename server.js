function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers run the world for now, but electricity runs it!');
    await sleep(5000);
  }
}

main();
