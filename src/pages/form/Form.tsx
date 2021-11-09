import React, {
  BaseSyntheticEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import "./Form.css";
import { FormDataProps, ParentData } from "../../interfaces";
import Input from "../../components/input/Input";
import msg from "../../messages/ru/ru.json";
import Button from "../../components/button/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Form = (props: FormDataProps) => {
  const { maxChildren, data, onChange, onSave } = props;
  const [formData, setFormData]: [
    ParentData,
    Dispatch<SetStateAction<ParentData>>
  ] = useState(props.data);
  const isReachedLimit =
    (data.children?.length || 0) >= maxChildren ? true : false;
  const [addChildDisabled, setAddChildDisabled] = useState(isReachedLimit);

  const onFieldChange = (field: string, event: BaseSyntheticEvent) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const onChildCreate = () => {
    let _formData: ParentData = formData;
    _formData?.children?.push({
      name: null,
      age: null,
    });
    setFormData({ ..._formData });
  };

  const onChildDelete = (index: number) => {
    let _formData: ParentData = formData;
    _formData?.children?.splice(index, 1);
    setFormData({ ..._formData });
  };

  const onChildChange = (
    index: number,
    field: string,
    event: BaseSyntheticEvent
  ) => {
    let _children: any = formData.children;
    _children[index][field] = event.target.value;
    setFormData({ ...formData, children: _children });
  };

  useEffect(() => {
    setAddChildDisabled(isReachedLimit);
    onChange(formData);
  }, [isReachedLimit, onChange, formData]);
  return (
    <div className="form">
      <div className="parent-title h4">{msg.personal_data}</div>
      <div className="parent-inputs">
        <Input
          type="text"
          name="name"
          label={msg.name}
          value={formData.name || ""}
          onChange={(e) => onFieldChange("name", e)}
        />
        <Input
          type="number"
          name="age"
          label={msg.age}
          value={formData.age || ""}
          onChange={(e) => onFieldChange("age", e)}
        />
      </div>
      <div className="children-list">
        <div className="children-list-header">
          <div className="children-list-title h4">
            {msg.kids} ({msg.maximum_n} {maxChildren})
          </div>
          <div className="children-list-add-button">
            <Button
              disabled={addChildDisabled}
              onClick={onChildCreate}
              type="secondary"
              icon={faPlus}
            >
              {msg.add_child}
            </Button>
          </div>
        </div>
        {formData.children?.map((child, i) => (
          <div className="child-inputs" key={`child-${i}`}>
            <Input
              type="text"
              name="name"
              label={msg.name}
              value={child.name || ""}
              onChange={(e) => onChildChange(i, "name", e)}
            />
            <Input
              type="number"
              name="age"
              label={msg.age}
              value={child.age || ""}
              onChange={(e) => onChildChange(i, "age", e)}
            />
            <Button
              className="delete-chiild"
              type="link"
              onClick={() => onChildDelete(i)}
            >
              {msg.delete}
            </Button>
          </div>
        ))}
      </div>

      <Button className="save-button" type="primary" onClick={onSave}>
        {msg.save}
      </Button>
    </div>
  );
};

export default Form;
