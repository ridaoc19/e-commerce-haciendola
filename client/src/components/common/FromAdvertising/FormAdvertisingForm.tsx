import { Dispatch, SetStateAction, useEffect } from "react";
import useValidations from "../../../hooks/useValidations/useValidations";
import { HandleChangeText } from "../../../interfaces/global.interface";
import Input from "../Input/Input";
import RenderImages from "../../../hooks/useAdminImages/RenderImages";
import useAdminImages from "../../../hooks/useAdminImages/useAdminImages";
import { InitialStateFormAdvertising } from "./utils";

interface FormAdvertisingFormProps {
  initialStateFormAdvertising: InitialStateFormAdvertising;
  stateInput: InitialStateFormAdvertising;
  setStateInput: Dispatch<SetStateAction<InitialStateFormAdvertising>>
}

function FormAdvertisingForm({ initialStateFormAdvertising, stateInput, setStateInput }: FormAdvertisingFormProps) {
  const { getValidationErrors } = useValidations();
  const { ModalAdminImages, openModal, selectedFiles } = useAdminImages({ entity: 'advertising', location: stateInput.change.location })

  const handleChange: HandleChangeText = ({ target }) => {
    const { name, message, stop } = getValidationErrors({ name: target.name, value: target.value })
    if (stop) return setStateInput({ ...stateInput, error: { ...stateInput.error, [name]: message } })
    setStateInput((prevState) => ({ ...prevState, change: { ...prevState.change, [name]: target.value, }, error: { ...prevState.error, [name]: message } }));
  };

  useEffect(() => {
    setStateInput(prevState => ({ ...prevState, change: { ...prevState.change, [selectedFiles.nameComponent]: selectedFiles.img[0] } }))
    // eslint-disable-next-line
  }, [selectedFiles])

  return (
    <>
      {(Object.keys(initialStateFormAdvertising.change).filter((key) => ['title', 'redirect', 'text'].includes(key) && key !== 'page' && key !== 'location') as (keyof Pick<InitialStateFormAdvertising['change'], 'title' | 'redirect' | 'text'>)[]).map((item) => (
        <Input
          key={item}
          styleClass={`login--${item}`}
          errorMessage={stateInput.error[item] || stateInput.error[item]}
          input={{ type: item, placeholder: item, value: stateInput.change[item], handleOnChange: handleChange, name: item }}
        />
      ))}
      {Object.entries(stateInput.change)
        .filter(([key]) => ['image_desktop', 'image_phone', 'image_tablet'].includes(key))
        .map(([key, value]) => (

          <RenderImages
            modal={{
              openModal,
              ModalAdminImages,
              title: key,
              type: 'images'
            }}
            render={{
              loading: false,
              valueImages: [value]
            }}
            handleClickDeleteImage={() => {
              const inputElement = document.getElementById(`input__images`) as HTMLInputElement | null; //limpia input files
              if (inputElement) inputElement.value = '';
              setStateInput({ ...stateInput, change: { ...stateInput.change, [key]: "" } })
            }}
          />
        ))}
    </>
  );
}

export default FormAdvertisingForm;