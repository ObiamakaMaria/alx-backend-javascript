export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const valueReturned = mathFunction();
    queue.push(valueReturned, 'Guardrail was processed');
  } catch (error) {
    queue.push(`${error}`, 'Guardrail was processed');
  }

  return queue;
}
