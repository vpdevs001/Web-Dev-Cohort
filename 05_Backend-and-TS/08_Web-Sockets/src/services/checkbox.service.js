import { publisher, redis } from "../config/redis.js";

const CHECKBOX_SIZE = 1_000_000;
export const CHECKBOX_STATE_KEY = "checkbox-state";

export async function getCheckboxState() {
  const existing = await redis.get(CHECKBOX_STATE_KEY);
  if (existing) return JSON.parse(existing);
  return new Array(CHECKBOX_SIZE).fill(false);
}

export async function updateCheckboxState(index, checked) {
  const existing = await redis.get(CHECKBOX_STATE_KEY);

  const state = existing
    ? JSON.parse(existing)
    : new Array(CHECKBOX_SIZE).fill(false);

  state[index] = checked;
  await redis.set(CHECKBOX_STATE_KEY, JSON.stringify(state));

  await publisher.publish(
    "internal-server:checkbox:change",
    JSON.stringify({ index, checked }),
  );
}
