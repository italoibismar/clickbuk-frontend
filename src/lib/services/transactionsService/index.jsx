import { create } from "./create";
import { getAll } from "./getAll";
import { update } from "./update";
import { remove } from "./remove";
import { updateAllTransactionByCategoryId } from "./updateAllTransactionByCategoryId";

export const transactionsService = {
  create,
  getAll,
  update,
  remove,
  updateAllTransactionByCategoryId
}