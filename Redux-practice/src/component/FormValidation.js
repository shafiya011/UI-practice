// import "antd/dist/antd.css";
import "../App.css";
import { Form, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import React from "react";

function FormValidation() {
  return (
    <Form>
      <Form.Item name={"teacher"} label="Teacher Name">
        <input placeholder="Teacher Name"></input>
      </Form.Item>
      <Form.Item name={"Class"} label="Class Name">
        <input placeholder="Class Name"></input>
      </Form.Item>
     
      <Form.List>
        {(fields, {add, remove}) => {
          <>
            {fields.map((field, index) => {
              return (
                <Form.Item name={[field.name]} label={`${index+1}-student`}>
                  <input placeholder="Student Name"></input>
                </Form.Item>
              );
            })}
             
          </>;
          <Form.Item>
          <Button icon={<PlusOutlined />} type="primary" onClick={()=>{add()}}>
            Add a Student
          </Button>
        </Form.Item>
        }}
        
      </Form.List>
    </Form>
  );
}

export default FormValidation;
