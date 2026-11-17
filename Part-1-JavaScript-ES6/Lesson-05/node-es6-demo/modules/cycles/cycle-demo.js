import { consumeIncrement, readProducerCount } from "./consumer.js";
import { produceIncrement, readConsumerCount } from "./producer.js";

produceIncrement();
consumeIncrement();

console.log(readProducerCount());
console.log(readConsumerCount());
