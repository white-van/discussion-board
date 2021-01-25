import { Form, FormikProps, withFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

//Validation Schema
const SignupSchema = Yup.object().shape({
  Name: Yup.string().optional(),
  School: Yup.string().optional(),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required!"), //Update this with correct validation
});

//Initial Values
const initialValues = {
  name: "",
  school: "",
  email: "",
  password: "",
};

//Key types
type FormFields = keyof typeof initialValues;

//Form interface
interface FormValues {
  name: string;
  school: string;
  email: string;
  password: string;
}

//Props for each subcomponent
interface SubFormProps {
  errors?: string;
  previousStep?: () => void;
  nextStep?: () => void;
  setValue: (value: string) => void;
  FormValue: FormFields;
  hasErrors: boolean;
  hasPreviousStep: boolean;
  hasNextStep: boolean;
}

//Mapping type
interface SubForm {
  Component: (props: SubFormProps) => JSX.Element;
  key: FormFields;
}

const sampleComponent = ({
  setValue,
  FormValue,
  hasPreviousStep,
  hasNextStep,
  nextStep,
  previousStep,
}: SubFormProps) => {
  return (
    <>
      <h1>{FormValue}</h1>
      {hasPreviousStep ? (
        <button type="button" onClick={() => previousStep()}>
          {" "}
          PREVIOUS STEP
        </button>
      ) : null}
      <button type="button" onClick={() => setValue("10@gmail.com")}>
        change Name
      </button>
      {hasNextStep ? (
        <button type="button" onClick={() => nextStep()}>
          {" "}
          NEXT STEP
        </button>
      ) : null}
      {FormValue === "password" ? <button type="submit">SUBMIT</button> : null}
    </>
  );
};

//Mapping
const SubForms: Array<SubForm> = [
  {
    Component: sampleComponent,
    key: "name",
  },
  {
    Component: sampleComponent,
    key: "school",
  },
  {
    Component: sampleComponent,
    key: "email",
  },
  {
    Component: sampleComponent,
    key: "password",
  },
];

// Form Helpers
const setValueHOC = (
  key: string,
  setterFunction: (key: string, value: string) => void
) => (value: string) => setterFunction(key, value);

//Form
const WizardFormComponent = ({
  handleSubmit,
  setFieldValue,
  errors,
  values,
}: FormikProps<FormValues>) => {
  const [currentStep, setStep] = useState(0);
  const nextStep = () => setStep((currentStep) => currentStep + 1);
  const previousStep = () => setStep((currentStep) => currentStep - 1);

  const { Component, key } = SubForms[currentStep];

  return (
    <Form onSubmit={handleSubmit}>
      <Component
        FormValue={key}
        setValue={setValueHOC(key, setFieldValue)}
        errors={errors[key]}
        nextStep={nextStep}
        previousStep={previousStep}
        hasNextStep={currentStep !== SubForms.length - 1}
        hasPreviousStep={currentStep !== 0}
        hasErrors={errors[key] !== ""}
      />
      <pre>{JSON.stringify(errors)}</pre>
      <pre>{JSON.stringify(values)}</pre>
    </Form>
  );
};

const ComponentWithFormik = withFormik<any, FormValues>({
  validationSchema: SignupSchema,
  mapPropsToValues: () => initialValues,
  validateOnMount: true,
  handleSubmit: (values) => {
    alert(JSON.stringify(values)); // TODO
  },
})(WizardFormComponent);

export function Signup(): JSX.Element {
  return <ComponentWithFormik />;
}

export default Signup;
