import { getConsumerCount } from "./consumer.js";

let producerCount = 0;

export function produceIncrement() {
  producerCount += 1;
}

export function getProducerCount() {
  return producerCount;
}

// This function reads the other module only after both modules are initialized.
export function readConsumerCount() {
  return getConsumerCount();
}
