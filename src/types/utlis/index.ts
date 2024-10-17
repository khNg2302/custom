export interface ExtractPropOfObjectI {
  fieldValue: string | number | ObjectValueType;
  handleIfNotFlatten: (fieldValue: ObjectValueType) => string | number;
}

export interface ExtractPropsOfObjectI {
  objectValue: ObjectValueType;
  handleIfNotFlatten: (objectValue: ObjectValueType) => string| number;
  notHandleKeys: { [field: string]: boolean };
}

export type ObjectValueType = {
  [field: string]: string | number | ObjectValueType;
};

export enum Components {
  OPTION = 'option',
}