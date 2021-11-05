export interface PageObject {
  pageName: string;
  path: string;
  label: string;
  node: React.FunctionComponent<any>;
}

export interface PersonData {
  name: string | null;
  age: number | null;
}

export interface ParentData extends PersonData {
  children?: PersonData[];
}

export interface PreviewDataProps {
  data?: ParentData;
}

export interface FormDataProps extends PreviewDataProps {
  onChange?: (object: ParentData) => void;
}

export interface PagesProps extends Object {
  [propName: string]: Object;
}
