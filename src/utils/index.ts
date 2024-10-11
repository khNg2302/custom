import {
  ExtractPropOfObjectI,
  ExtractPropsOfObjectI,
  ObjectValueType,
} from "@/types/utlis";
export const isObjectFlatten = (objectValue: unknown) => {
  if (typeof objectValue === "object") return false;
  return true;
};
export const definePropOfObjectWithFunc = ({
  fieldValue,
  handleIfNotFlatten,
}: ExtractPropOfObjectI) => {
  if (isObjectFlatten(fieldValue) === false) {
    return handleIfNotFlatten(fieldValue as ObjectValueType);
  }
  return fieldValue;
};
export const definePropsOfObjectWithFunc = ({
  objectValue,
  handleIfNotFlatten,
  notHandleKeys,
}: ExtractPropsOfObjectI): ObjectValueType | null => {
  return objectValue
    ? Object.keys(objectValue).reduce((result, prop: string) => {
        if (notHandleKeys[prop] == true)
          return {
            ...result,
            [prop]: definePropsOfObjectWithFunc({
              objectValue: objectValue[prop] as ObjectValueType,
              handleIfNotFlatten,
              notHandleKeys,
            }),
          };
        return {
          ...result,
          [prop]: definePropOfObjectWithFunc({
            fieldValue: objectValue[prop] as ObjectValueType,
            handleIfNotFlatten,
          }),
        };
      }, {})
    : null;
};
