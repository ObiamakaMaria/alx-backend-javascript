export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const returnedVal = mathFunction();
    queue.push(returnedVal, 'Guardrail was processed');
  } catch (error) {
    queue.push(`${error}`, 'Guardrail was processed');
  }

  return queue;
}
