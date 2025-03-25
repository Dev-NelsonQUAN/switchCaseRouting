import styled from 'styled-components'

const Title = styled.div`
    background: ${(props) => props.bg || '#D3E9FB'};
    color: ${(props) => props.col || '#2493EC'};
    border-radius: ${(props) => props.br || '5px'};
    padding: ${(props) => props.padding || '6px 10px'};
    display: ${(props) => props.display || "display"};
    justify-content: ${(props) => props.jc || "center"};
`

export default Title