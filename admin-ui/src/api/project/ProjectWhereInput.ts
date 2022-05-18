import { StringFilter } from "../../util/StringFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  owner?: StringFilter;
};
