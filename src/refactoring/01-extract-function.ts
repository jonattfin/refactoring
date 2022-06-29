// extract function

export function printOwing1() {
  printBanner();
  const outstanding = calculateOutstanding();

  // print details
  console.log(`amount ${outstanding}`);
}

export function printOwing2() {
  printBanner();
  const outstanding = calculateOutstanding();
  printDetails(outstanding);

  function printDetails(details: object) {
    console.log(`amount ${details}`);
  }
}

function printBanner(): void {
  console.log('print Banner');
}

function calculateOutstanding(): object {
  return {};
}
