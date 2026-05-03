import { getCheckboxState } from "../services/checkbox.service.js";

export async function getCheckboxes(req, res) {
  try {
    const checkboxes = await getCheckboxState();
    return res.json({ checkboxes });
  } catch (err) {
    console.error("getCheckboxes error:", err);
    return res.status(500).json({ error: "Internal error" });
  }
}
