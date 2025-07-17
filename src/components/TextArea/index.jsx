import styled from "styled-components"

const TextAreaStyled = styled.textarea`
    padding: 15px 25px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    width: 400px;
    background-color: var(--cor-secundaria);
    color: #fff;
    box-sizing: border-box;
`

const TextArea = ({ label, onCenarioChange, id, value }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <TextAreaStyled value={value} name={id} id={id} onChange={(e) => onCenarioChange(id, e.target.value)} placeholder={`Informe o ${label}`} />
        </>
    )
}

export default TextArea
